# Yudistira Ashadi — Portfolio

A recruiter-focused personal portfolio built with Next.js, React, TypeScript,
and Tailwind CSS. The site is exported as static HTML, CSS, and JavaScript and
can be deployed directly to Vercel.

## Local development

```bash
pnpm install --frozen-lockfile
pnpm dev
```

## Quality checks

```bash
pnpm lint
pnpm deps:check-age
pnpm build
```

`pnpm build` writes the deployable static site to `out/`. Every portfolio
detail route is generated at build time, and the downloadable CV is copied from
`public/` into the export.

## Dependency safety policy

All direct dependencies and security overrides use exact versions. A version is
eligible only after it has been published on npm for at least 14 days, reducing
exposure to newly published supply-chain compromises. Run
`pnpm deps:check-age` whenever updating the lockfile; it rejects version ranges,
missing registry timestamps, and packages newer than the rolling 14-day cutoff.

When the newest eligible release is incompatible with the current application
or toolchain, use the newest compatible eligible version and document the
reason in the change description.

## Vercel deployment

Import the repository as a Next.js project. The default build command
(`pnpm build`) is sufficient; `output: "export"` in `next.config.mjs` produces a
fully static deployment with no server actions, route handlers, cookies, or
runtime database dependencies.
