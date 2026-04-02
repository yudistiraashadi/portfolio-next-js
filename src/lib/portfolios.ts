import fs from "fs";
import matter from "gray-matter";
import path from "path";

const CONTENT_DIR = path.join(process.cwd(), "content", "portfolios");

export function getPortfolioArticle(slug: string): string {
  if (!/^[\w-]+$/.test(slug)) return "";
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return "";
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content } = matter(fileContents);
  return content.trim();
}
