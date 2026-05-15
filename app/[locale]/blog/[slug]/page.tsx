import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { CTA } from "@/components/CTA";
import { getGuideBySlug, getGuides } from "@/data/guides";
import { getProductBySlug } from "@/data/products";
import { localizedPath, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export async function generateStaticParams() {
  return getGuides("en").map((post) => ({ locale: "en", slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getGuideBySlug(slug, locale);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} | Chart4Traders Blog`,
    description: post.description,
    openGraph: {
      title: `${post.title} | Chart4Traders Blog`,
      description: post.description
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const post = getGuideBySlug(slug, locale);

  if (!post) {
    notFound();
  }

  const relatedProducts = post.relatedProductSlugs
    .map((productSlug) => getProductBySlug(productSlug, locale))
    .filter(Boolean);

  return (
    <>
      <article className="border-b border-line py-8 sm:py-9">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Home", href: localizedPath(locale) },
              { label: "Blog", href: localizedPath(locale, "/blog") },
              { label: post.title }
            ]}
          />
          <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">{post.category}</p>
          <h1 className="mt-3 text-xl font-medium tracking-normal text-white sm:text-2xl">{post.title}</h1>
          <p className="mt-4 text-xs leading-5 text-steel sm:text-[13px]">{post.description}</p>
          <p className="mt-3 text-[11px] text-steel/80">{post.readTime}</p>
        </div>
      </article>

      <section className="py-8 sm:py-9">
        <div className="mx-auto max-w-3xl px-5 sm:px-6 lg:px-8">
          {post.sections.map((section) => (
            <section className="mb-7 border-t border-line pt-4" key={section.heading}>
              <h2 className="text-sm font-medium text-white/95">{section.heading}</h2>
              <p className="mt-2 text-xs leading-5 text-steel sm:text-[13px]">{section.body}</p>
            </section>
          ))}

          {relatedProducts.length > 0 && (
            <div className="mt-8 border-y border-line py-4">
              <h2 className="text-sm font-medium text-white">Related products</h2>
              <div className="mt-3 grid gap-2">
                {relatedProducts.map((product) => (
                  <Link
                    className="text-xs font-medium text-teal hover:text-volt"
                    href={localizedPath(locale, `/products/${product!.slug}`)}
                    key={product!.slug}
                  >
                    {product!.title}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTA
        title="Explore Sierra Chart products"
        description="Templates and PDF products connect broader trading concepts to practical chart structure."
        href={localizedPath(locale, "/products")}
        label="View Products"
      />
    </>
  );
}
