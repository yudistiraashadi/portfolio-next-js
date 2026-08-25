import { readFile } from "node:fs/promises";

const minimumAgeDays = 14;
const millisecondsPerDay = 24 * 60 * 60 * 1000;
const cutoff = new Date(Date.now() - minimumAgeDays * millisecondsPerDay);
const packageJson = JSON.parse(
  await readFile(new URL("../package.json", import.meta.url), "utf8"),
);

function packageNameFromOverride(selector) {
  const searchFrom = selector.startsWith("@") ? selector.indexOf("/") : 0;
  const versionSeparator = selector.indexOf("@", searchFrom);
  return versionSeparator === -1
    ? selector
    : selector.slice(0, versionSeparator);
}

const packageVersions = [
  ...Object.entries(packageJson.dependencies),
  ...Object.entries(packageJson.devDependencies),
  ...Object.entries(packageJson.pnpm?.overrides ?? {}).map(
    ([selector, version]) => [packageNameFromOverride(selector), version],
  ),
];

const exactVersionPattern =
  /^\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?$/;

const checks = await Promise.all(
  packageVersions.map(async ([packageName, version]) => {
    if (!exactVersionPattern.test(version)) {
      return {
        packageName,
        version,
        error: "version must be an exact SemVer pin",
      };
    }

    const response = await fetch(
      `https://registry.npmjs.org/${encodeURIComponent(packageName)}`,
    );
    if (!response.ok) {
      return {
        packageName,
        version,
        error: `registry returned HTTP ${response.status}`,
      };
    }

    const metadata = await response.json();
    const publishedAtValue = metadata.time?.[version];
    if (typeof publishedAtValue !== "string") {
      return { packageName, version, error: "publish timestamp not found" };
    }

    const publishedAt = new Date(publishedAtValue);
    if (publishedAt > cutoff) {
      return {
        packageName,
        version,
        error: `published ${publishedAt.toISOString()}, after cutoff ${cutoff.toISOString()}`,
      };
    }

    return { packageName, version, publishedAt };
  }),
);

const failures = checks.filter((check) => "error" in check);

if (failures.length > 0) {
  console.error(
    `Dependency age policy failed (${minimumAgeDays}-day minimum):`,
  );
  for (const failure of failures) {
    console.error(
      `- ${failure.packageName}@${failure.version}: ${failure.error}`,
    );
  }
  process.exitCode = 1;
} else {
  console.log(
    `Dependency age policy passed for ${checks.length} exact pins (published on or before ${cutoff.toISOString()}).`,
  );
}
