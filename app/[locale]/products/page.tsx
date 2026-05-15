import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/Section";
import { getCatalogProducts } from "@/data/catalog";
import type { Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Chart4Traders Sierra Chart templates, chartbooks, bundles, and freemium trading tools."
};

export default async function ProductsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const products = await getCatalogProducts(locale);
  const categories = ["All", ...Array.from(new Set(products.map((product) => product.templateCategory)))];

  return (
    <Section
      eyebrow="Products"
      title="Products Templates"
      intro="Custom Sierra Chart templates, bundles, and freemium trading tools. Checkout and delivery stay external through Payhip."
    >
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <span className="border border-line bg-graphite px-4 py-2 text-[11px] font-semibold text-steel" key={category}>
            {category}
          </span>
        ))}
      </div>
      <div className="grid gap-x-7 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.slug} locale={locale} product={product} />
        ))}
      </div>
    </Section>
  );
}
