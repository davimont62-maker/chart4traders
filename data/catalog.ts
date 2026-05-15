import { sanityClient, hasSanityConfig } from "@/lib/sanity/client";
import { type Locale } from "@/lib/i18n";
import { getProductBySlug as getLocalProductBySlug, getProducts as getLocalProducts, type Product } from "@/data/products";

const productProjection = `{
  title,
  "slug": slug.current,
  category,
  shortDescription,
  fullDescription,
  detailedDescription,
  "videoUrl": productVideo.asset->url,
  "videoPosterUrl": coalesce(productVideoPoster.asset->url, mainImage.asset->url, "/product-images/volume-chart.png"),
  price,
  productType,
  pageType,
  templateCategory,
  "image": coalesce(mainImage.asset->url, "/product-images/volume-chart.png"),
  "gallery": gallery[].asset->url,
  optimizedFor,
  barTypes,
  includedFiles,
  includedItems,
  targetUser,
  compatibility,
  faq[]{question, answer},
  payhipUrl,
  featured,
  language,
  badge,
  modules,
  outcomeSummary,
  problem,
  solution,
  featureSections[]{title, body},
  walkthroughSections[]{
    title,
    description,
    "image": coalesce(image.asset->url, "/product-images/volume-chart.png"),
    bullets
  },
  notFor,
  limitations
}`;

function normalizeProduct(product: Product): Product {
  return {
    ...product,
    gallery: product.gallery?.length ? product.gallery : [product.image],
    videoUrl: product.videoUrl || "",
    videoPosterUrl: product.videoPosterUrl || product.image,
    optimizedFor: product.optimizedFor || [],
    barTypes: product.barTypes || [],
    includedFiles: product.includedFiles || [],
    includedItems: product.includedItems || [],
    targetUser: product.targetUser || [],
    compatibility: product.compatibility || [],
    faq: product.faq || [],
    pageType: product.pageType || "standard",
    detailedDescription: product.detailedDescription || "",
    featureSections: product.featureSections || [],
    walkthroughSections: product.walkthroughSections || [],
    notFor: product.notFor || [],
    limitations: product.limitations || []
  };
}

export async function getCatalogProducts(locale: Locale = "en") {
  if (!hasSanityConfig) {
    return getLocalProducts(locale);
  }

  try {
    const products = await sanityClient.fetch<Product[]>(
      `*[_type == "product" && language == $locale] | order(featured desc, title asc) ${productProjection}`,
      { locale },
      { next: { revalidate: 60 } }
    );

    return products.length ? products.map(normalizeProduct) : getLocalProducts(locale);
  } catch {
    return getLocalProducts(locale);
  }
}

export async function getCatalogProductBySlug(slug: string, locale: Locale = "en") {
  if (!hasSanityConfig) {
    return getLocalProductBySlug(slug, locale);
  }

  try {
    const product = await sanityClient.fetch<Product | null>(
      `*[_type == "product" && language == $locale && slug.current == $slug][0] ${productProjection}`,
      { locale, slug },
      { next: { revalidate: 60 } }
    );

    return product ? normalizeProduct(product) : getLocalProductBySlug(slug, locale);
  } catch {
    return getLocalProductBySlug(slug, locale);
  }
}

export async function getFeaturedCatalogProducts(locale: Locale = "en") {
  const products = await getCatalogProducts(locale);
  return products.filter((product) => product.featured);
}
