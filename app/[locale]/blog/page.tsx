import type { Metadata } from "next";
import Link from "next/link";
import { getGuides } from "@/data/guides";
import { localizedPath, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Blog | Chart4Traders",
  description:
    "Chart4Traders blog articles on futures trading, orderflow concepts, strategy, psychology, and decision-making under risk."
};

export default async function BlogPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const posts = getGuides(locale);

  return (
    <section className="py-10 sm:py-12">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">Latest blog</p>
          <h1 className="text-2xl font-medium tracking-normal text-white sm:text-3xl">
            Trading, orderflow, and psychology notes
          </h1>
          <p className="mt-4 text-sm leading-6 text-steel">
            Public articles for broader trading context, behavioural awareness, and practical workflow thinking.
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <article className="border border-line bg-graphite/50 p-6" key={post.slug}>
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-steel">
              <span className="font-semibold uppercase tracking-wide text-teal">{post.category}</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="mt-3 text-base font-semibold text-white">
              <Link href={localizedPath(locale, `/blog/${post.slug}`)}>{post.title}</Link>
            </h2>
            <p className="mt-2 text-xs leading-5 text-steel">{post.excerpt}</p>
            <Link className="mt-5 inline-flex text-xs font-semibold text-teal hover:text-volt" href={localizedPath(locale, `/blog/${post.slug}`)}>
              Read article
            </Link>
          </article>
        ))}
        </div>
      </div>
    </section>
  );
}
