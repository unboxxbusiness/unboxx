import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";
import { getBlogPostBySlug, getBlogPosts } from "@/utils/markdown";
import StructuredData from "@/components/StructuredData";
import React from "react";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return {};
  }
  return {
    title: `${post.meta.title} | Blog`,
    description: post.meta.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: `${post.meta.title} | Unboxx Business Blog`,
      description: post.meta.description,
      url: `https://unboxxbusiness.live/blog/${slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const posts = getBlogPosts();
  const recentPosts = posts.filter((p) => p.slug !== slug).slice(0, 3);

  const encodedTitle = encodeURIComponent(post.meta.title);
  const encodedUrl = encodeURIComponent(`https://unboxxbusiness.live/blog/${slug}`);
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`;
  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.meta.title,
    "description": post.meta.description,
    "datePublished": post.meta.date,
    "image": post.meta.image || "https://unboxxbusiness.live/logo.png",
    "publisher": {
      "@type": "Organization",
      "name": "Unboxx Business",
      "logo": "https://unboxxbusiness.live/logo.png"
    },
    "author": {
      "@type": "Organization",
      "name": "Unboxx Business"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://unboxxbusiness.live/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://unboxxbusiness.live/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.meta.title,
        "item": `https://unboxxbusiness.live/blog/${slug}`
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col space-y-12 text-text-muted bg-bg-cream">
      <StructuredData schema={[blogPostingSchema, breadcrumbSchema]} />

      {/* Back Link */}
      <div>
        <Link
          href="/blog"
          className="group inline-flex items-center space-x-2 text-sm font-semibold text-brand-orange hover:text-brand-orange-hover transition-colors"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Blog</span>
        </Link>
      </div>

      {/* Main layout wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Main Content Article */}
        <article className="lg:col-span-8 bg-white p-8 md:p-12 rounded-3xl border border-stone-200/80 shadow-sm space-y-6">
          <div className="flex items-center space-x-3 text-xs font-semibold text-brand-orange uppercase tracking-wider">
            <span className="bg-brand-orange-light border border-brand-orange/20 px-3 py-1 rounded-full">
              {post.meta.category}
            </span>
            <span className="flex items-center text-text-muted/50 font-normal font-mono normal-case">
              <Calendar className="h-3.5 w-3.5 mr-1" />
              {new Date(post.meta.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>

          <h1 className="font-heading font-extrabold text-3xl md:text-5xl text-text-charcoal leading-tight">
            {post.meta.title}
          </h1>

          <div className="border-t border-stone-100 pt-8 mt-6">
            {renderMarkdown(post.body)}
          </div>
        </article>

        {/* Sidebar Info/CTA */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-stone-50 border border-stone-200/80 p-8 rounded-3xl space-y-6 shadow-sm">
            <h4 className="font-heading font-bold text-lg text-text-charcoal">Author Profile</h4>
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-full bg-brand-orange-light text-brand-orange flex items-center justify-center font-bold">
                UB
              </div>
              <div>
                <span className="font-bold text-text-charcoal block text-sm">Unboxx Growth Team</span>
                <span className="text-[10px] text-text-muted/60">Delhi NCR Office</span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-text-muted/80">
              We analyze coordinate accuracy, local listings consistency, and review algorithms to share actionable guidelines for Indian business owners.
            </p>
          </div>

          {/* Share Article Card */}
          <div className="bg-white border border-stone-200/80 p-8 rounded-3xl space-y-4 shadow-sm">
            <h4 className="font-heading font-bold text-lg text-text-charcoal">Share this Article</h4>
            <div className="grid grid-cols-3 gap-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3 rounded-2xl border border-stone-100 hover:border-green-200 hover:bg-green-50/30 text-stone-600 hover:text-green-600 transition-all group"
              >
                <svg className="h-5 w-5 mb-1 fill-current" viewBox="0 0 24 24">
                  <path d="M12.012 2c-5.506 0-9.988 4.482-9.988 9.988 0 1.76.459 3.477 1.332 4.989L2 22l5.132-1.347c1.464.798 3.11 1.218 4.869 1.218 5.506 0 9.988-4.482 9.988-9.988a9.92 9.92 0 0 0-2.926-7.062A9.92 9.92 0 0 0 12.012 2zm6.279 14.154c-.275.768-1.343 1.398-1.849 1.451-.497.053-.984.221-3.155-.672-2.775-1.141-4.566-3.957-4.704-4.143-.139-.186-1.117-1.488-1.117-2.839 0-1.352.704-2.015.952-2.28.249-.265.54-.331.72-.331.18 0 .36.002.518.01.163.008.384-.062.602.464.225.545.768 1.874.835 2.009.068.135.113.293.023.474-.09.18-.135.293-.27.451-.135.158-.283.351-.403.47-.135.135-.276.282-.119.551.157.269.7 1.15 1.5 1.862.8 1.096 1.48 1.436 1.75 1.571.27.135.428.113.586-.068.158-.18.677-.79 1.002-1.07.248-.214.507-.158.768-.062.261.096 1.658.78 1.944.922.286.142.477.214.547.334.07.12.07.697-.205 1.465z" />
                </svg>
                <span className="text-[10px] font-bold">WhatsApp</span>
              </a>
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3 rounded-2xl border border-stone-100 hover:border-blue-200 hover:bg-blue-50/30 text-stone-600 hover:text-blue-600 transition-all"
              >
                <svg className="h-5 w-5 mb-1 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="text-[10px] font-bold">LinkedIn</span>
              </a>
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-3 rounded-2xl border border-stone-100 hover:border-sky-200 hover:bg-sky-50/30 text-stone-600 hover:text-sky-600 transition-all"
              >
                <svg className="h-5 w-5 mb-1 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span className="text-[10px] font-bold">Twitter / X</span>
              </a>
            </div>
          </div>

          {/* Recent Articles Card */}
          {recentPosts.length > 0 && (
            <div className="bg-white border border-stone-200/80 p-8 rounded-3xl space-y-6 shadow-sm">
              <h4 className="font-heading font-bold text-lg text-text-charcoal">Recent Articles</h4>
              <div className="space-y-4">
                {recentPosts.map((rPost) => (
                  <div key={rPost.slug} className="border-b border-stone-100 pb-3 last:border-0 last:pb-0">
                    <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider block mb-1">
                      {rPost.category}
                    </span>
                    <Link
                      href={`/blog/${rPost.slug}`}
                      className="font-heading font-bold text-sm text-text-charcoal hover:text-brand-orange transition-colors line-clamp-2"
                    >
                      {rPost.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="bg-[#f1efe9] border border-black/5 p-8 rounded-3xl space-y-4 shadow-sm hover:shadow-md transition-shadow">
            <h4 className="font-heading font-bold text-xl text-text-charcoal">Check your Local Ranking</h4>
            <p className="text-xs leading-relaxed text-text-muted/80">
              Find out where your business displays in search pack directions and voice-activated queries.
            </p>
            <Link
              href="/contact"
              className="btn-pill-primary w-full py-3 text-xs justify-center"
            >
              <span>Request Free Map Audit</span>
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Basic Markdown blocks parser
function renderMarkdown(body: string) {
  const lines = body.split("\n");
  const parsedNodes: React.ReactNode[] = [];
  let listItems: React.ReactNode[] = [];
  let listType: "bullet" | "ordered" | null = null;

  const flushList = (key: string | number) => {
    if (!listType) return;
    if (listType === "bullet") {
      parsedNodes.push(
        <ul
          key={`list-${key}`}
          className="list-disc pl-6 space-y-2 mb-6 text-sm md:text-base leading-relaxed text-text-muted"
        >
          {listItems}
        </ul>
      );
    } else if (listType === "ordered") {
      parsedNodes.push(
        <ol
          key={`list-${key}`}
          className="list-decimal pl-6 space-y-2 mb-6 text-sm md:text-base leading-relaxed text-text-muted"
        >
          {listItems}
        </ol>
      );
    }
    listType = null;
    listItems = [];
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Handle empty lines
    if (!line) {
      flushList(i);
      continue;
    }

    // Handle Horizontal Rules
    if (line === "---") {
      flushList(i);
      parsedNodes.push(
        <hr key={i} className="my-8 border-t border-stone-200" />
      );
      continue;
    }

    // Handle Images: ![alt](url)
    if (line.startsWith("![") && line.endsWith(")")) {
      const match = line.match(/^!\[(.*?)\]\((.*?)\)$/);
      if (match) {
        flushList(i);
        const [, alt, url] = match;
        parsedNodes.push(
          <img
            key={`img-${i}`}
            src={url}
            alt={alt}
            className="rounded-2xl w-full h-auto object-cover my-8 border border-stone-200/60 shadow-sm"
          />
        );
        continue;
      }
    }

    // Handle Headers
    if (line.startsWith("# ")) {
      flushList(i);
      parsedNodes.push(
        <h1
          key={i}
          className="font-heading font-extrabold text-2xl md:text-3xl text-text-charcoal mt-8 mb-4"
        >
          {line.replace("# ", "")}
        </h1>
      );
    } else if (line.startsWith("## ")) {
      flushList(i);
      parsedNodes.push(
        <h2
          key={i}
          className="font-heading font-bold text-xl md:text-2xl text-text-charcoal mt-6 mb-4"
        >
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      flushList(i);
      parsedNodes.push(
        <h3
          key={i}
          className="font-heading font-bold text-lg text-text-charcoal mt-4 mb-3"
        >
          {line.replace("### ", "")}
        </h3>
      );
    }
    // Handle Bullet Lists
    else if (line.startsWith("- ") || line.startsWith("* ")) {
      if (listType !== "bullet") {
        flushList(i);
        listType = "bullet";
      }
      const cleanItem = line.replace(/^[-*]\s+/, "");
      listItems.push(
        <li key={i} className="leading-relaxed">
          {parseInlineFormatting(cleanItem)}
        </li>
      );
    }
    // Handle Numbered Lists
    else if (/^\d+\.\s+/.test(line)) {
      if (listType !== "ordered") {
        flushList(i);
        listType = "ordered";
      }
      const cleanItem = line.replace(/^\d+\.\s+/, "");
      listItems.push(
        <li key={i} className="leading-relaxed">
          {parseInlineFormatting(cleanItem)}
        </li>
      );
    }
    // Handle standard paragraph text
    else {
      flushList(i);
      parsedNodes.push(
        <p
          key={i}
          className="text-sm md:text-base text-text-muted leading-relaxed mb-6"
        >
          {parseInlineFormatting(line)}
        </p>
      );
    }
  }

  // Flush trailing lists
  flushList("end");

  return parsedNodes;
}

// Basic inline formatter
function parseInlineFormatting(text: string) {
  const parts = text.split(/\*\*([\s\S]*?)\*\*/g);
  return parts.map((part, idx) => {
    if (idx % 2 === 1) {
      return (
        <strong key={idx} className="font-bold text-text-charcoal">
          {part}
        </strong>
      );
    }
    return part;
  });
}
