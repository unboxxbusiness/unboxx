import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { getBlogPosts } from "@/utils/markdown";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Growth Chronicles & Insight Blog | Unboxx Business",
  description: "Stay ahead with the latest insight articles and strategy playbooks on local SEO, reviews automation, Google maps rankings, and AI search visibility.",
  alternates: {
    canonical: "/blog",
  },
};

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category } = await searchParams;
  const posts = getBlogPosts();
  
  const categories = ["All", "SEO", "AEO", "Growth", "Case Chronicles", "Reputation"];
  const activeCategory = category || "All";

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Unboxx Business Knowledge Base",
    "description": "Insight articles and strategies on Local SEO, AEO, and Automation.",
    "url": "https://unboxxbusiness.live/blog",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": filteredPosts.map((post, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "url": `https://unboxxbusiness.live/blog/${post.slug}`,
        "name": post.title
      }))
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-20 flex flex-col space-y-16 text-text-muted bg-bg-cream">
      <StructuredData schema={collectionSchema} />

      {/* Header section */}
      <section className="bg-white border border-stone-200/80 p-8 md:p-12 rounded-3xl flex flex-col space-y-4 max-w-4xl shadow-sm">
        <div className="inline-flex items-center space-x-2 bg-brand-orange-light border border-brand-orange/20 text-brand-orange px-3 py-1 rounded-full self-start text-xs font-semibold uppercase tracking-wider">
          <BookOpen className="h-3.5 w-3.5" />
          <span>Knowledge & Insights</span>
        </div>
        <h1 className="font-heading font-extrabold text-4xl md:text-6xl text-text-charcoal tracking-tight leading-tight">
          Strategy playbooks for organic local dominance.
        </h1>
        <p className="text-base md:text-xl text-text-muted leading-relaxed">
          Practical strategies to make your business easier to find, easier to trust, and easier to choose. Written for owners and growth managers.
        </p>
      </section>

      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-stone-200/60">
        {categories.map((cat) => {
          const isActive = cat.toLowerCase() === activeCategory.toLowerCase();
          const targetUrl = cat === "All" ? "/blog" : `/blog?category=${cat}`;
          return (
            <Link
              key={cat}
              href={targetUrl}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                isActive
                  ? "bg-brand-orange text-white border-brand-orange"
                  : "bg-white text-text-charcoal border-stone-200/80 hover:bg-stone-50"
              }`}
            >
              {cat.toUpperCase()}
            </Link>
          );
        })}
      </div>

      {/* Blog list grid */}
      {filteredPosts.length > 0 ? (
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => {
            return (
              <div
                key={post.slug}
                className="bg-white border border-stone-200/80 p-6 rounded-3xl flex flex-col justify-between space-y-8 shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-stone-100 pb-4 mb-4">
                    <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider bg-brand-orange-light border border-brand-orange/20 px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-[10px] font-mono text-text-muted/40">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-text-charcoal mb-2 leading-snug group-hover:text-brand-orange transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-text-muted leading-relaxed">
                    {post.description}
                  </p>
                </div>

                <div>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="btn-pill-secondary px-5 py-2 text-xs font-bold text-brand-orange"
                  >
                    <span>READ ARTICLE</span>
                    <ArrowRight className="h-3.5 w-3.5 ml-1.5 inline transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </section>
      ) : (
        <div className="bg-white border border-stone-200/80 p-12 rounded-3xl text-center space-y-2 max-w-lg mx-auto shadow-sm">
          <p className="text-sm font-bold text-text-charcoal">No articles found in this category.</p>
          <p className="text-xs text-text-muted">We will publish new playbooks shortly. Check back soon!</p>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="text-center py-16 bg-[#f1efe9] border border-black/5 rounded-3xl max-w-4xl mx-auto w-full relative shadow-sm">
        <div className="flex flex-col items-center space-y-6 max-w-2xl mx-auto px-6">
          <span className="text-mono-label font-bold text-xs">Growth Audit</span>
          <h2 className="font-heading font-extrabold text-3xl text-text-charcoal leading-tight">
            How does your business rank right now?
          </h2>
          <p className="text-sm text-text-muted leading-relaxed">
            Get a free visibility analysis check. We'll run maps pack diagnostics and check your directory presence across search engines.
          </p>
          <Link
            href="/contact"
            className="btn-pill-primary px-8 py-4 text-base"
          >
            <span>START A BLUEPRINT ASSESSMENT</span>
            <ArrowRight className="h-5 w-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
