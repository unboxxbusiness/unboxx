import fs from "fs";
import path from "path";

export interface BlogPostMeta {
  title: string;
  date: string;
  category: string;
  description: string;
  image?: string;
  slug: string;
}

export interface BlogPost {
  meta: BlogPostMeta;
  body: string;
}

const blogDirectory = path.join(process.cwd(), "src/content/blog");

export function parseMarkdown(content: string) {
  const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---/;
  const match = content.match(frontmatterRegex);
  const meta: Record<string, string> = {};
  let body = content;

  if (match) {
    body = content.replace(match[0], "").trim();
    const lines = match[1].split("\n");
    for (const line of lines) {
      const idx = line.indexOf(":");
      if (idx !== -1) {
        const key = line.substring(0, idx).trim();
        const value = line.substring(idx + 1).trim().replace(/^['"]|['"]$/g, "");
        meta[key] = value;
      }
    }
  }

  return { meta, body };
}

export function getBlogPosts(): BlogPostMeta[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const files = fs.readdirSync(blogDirectory);
  const posts = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slug = file.replace(/\.md$/, "");
      const filePath = path.join(blogDirectory, file);
      const content = fs.readFileSync(filePath, "utf-8");
      const { meta } = parseMarkdown(content);

      return {
        title: meta.title || "Untitled Post",
        date: meta.date || new Date().toISOString(),
        category: meta.category || "SEO",
        description: meta.description || "",
        image: meta.image || "",
        slug,
      } as BlogPostMeta;
    });

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  const filePath = path.join(blogDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const { meta, body } = parseMarkdown(content);

  const postMeta: BlogPostMeta = {
    title: meta.title || "Untitled Post",
    date: meta.date || new Date().toISOString(),
    category: meta.category || "SEO",
    description: meta.description || "",
    image: meta.image || "",
    slug,
  };

  return {
    meta: postMeta,
    body,
  };
}
