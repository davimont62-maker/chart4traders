import Link from "next/link";
import type { Product } from "@/data/products";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { PlaceholderImage } from "@/components/PlaceholderImage";

export function ProductCard({ product, locale }: { product: Product; locale: Locale }) {
  return (
    <article className="group flex h-full min-h-[330px] flex-col overflow-hidden bg-transparent text-center transition hover:-translate-y-1">
      <Link href={localizedPath(locale, `/products/${product.slug}`)} aria-label={`View ${product.title}`}>
        <PlaceholderImage label={product.image} className="min-h-0 border-0 shadow-none" />
      </Link>
      <div className="flex flex-1 flex-col px-3 py-4">
        <div className="mb-2 flex flex-wrap justify-center gap-2">
          <span className="rounded-full bg-mist px-3 py-1 text-[10px] font-semibold text-teal">{product.productType}</span>
          {product.badge && (
            <span className="rounded-full bg-amber/15 px-3 py-1 text-[10px] font-semibold text-amber">{product.badge}</span>
          )}
        </div>
        <h3 className="text-sm font-semibold text-white">
          <Link href={localizedPath(locale, `/products/${product.slug}`)}>{product.title}</Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-xs leading-5 text-steel">{product.shortDescription}</p>
        <div className="mt-3">
          <p className="text-sm font-medium text-amber">{product.price}</p>
        </div>
      </div>
    </article>
  );
}
