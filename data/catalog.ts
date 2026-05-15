import { type Locale } from "@/lib/i18n";
import { getProductBySlug as getLocalProductBySlug, getProducts as getLocalProducts, type Product } from "@/data/products";

export async function getCatalogProducts(locale: Locale = "en") {
  return getLocalProducts(locale);
}

export async function getCatalogProductBySlug(slug: string, locale: Locale = "en") {
  return getLocalProductBySlug(slug, locale);
}

export async function getFeaturedCatalogProducts(locale: Locale = "en") {
  const products = await getCatalogProducts(locale);
  return products.filter((product) => product.featured);
}
