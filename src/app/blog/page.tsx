import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Arcon Solutions Inc.",
  description:
    "Marketing tips, brand insights, and industry news from the Arcon Solutions team.",
};

// Blog posts are stored as MDX files in content/blog/.
// For now this shows placeholder posts. Add .mdx files and update this to read them dynamically.
const posts = [
  {
    slug: "build-your-brand-with-promotional-products",
    title: "Build Your Brand with Promotional Products",
    date: "2025-01-15",
    excerpt:
      "Promotional products remain one of the most cost-effective ways to keep your brand in front of customers. Here's how to make the most of your promo budget.",
  },
  {
    slug: "the-power-of-branded-apparel",
    title: "The Power of Branded Apparel",
    date: "2025-02-10",
    excerpt:
      "From company uniforms to retail merchandise, branded apparel is a walking billboard for your business. Learn how to choose the right garments for your team.",
  },
  {
    slug: "designing-a-brand-identity-that-lasts",
    title: "Designing a Brand Identity That Lasts",
    date: "2025-03-05",
    excerpt:
      "A strong brand identity is more than just a logo — it's the visual language that tells your company's story. Our design team shares their process.",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-[#2d2a26] text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h1
            className="text-4xl sm:text-5xl font-black uppercase tracking-wider mb-4"
            style={{ fontFamily: "'Roboto Condensed', sans-serif" }}
          >
            Blog
          </h1>
          <p className="text-gray-300">Marketing tips, brand insights, and industry news.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="space-y-10">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-gray-100 pb-10 last:border-0">
                <time className="text-sm text-gray-400 block mb-2">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="text-2xl font-bold text-gray-800 mb-3 hover:text-[#6b1e98] transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-[#6b1e98] font-semibold text-sm hover:underline"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
