import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { CTA } from "@/components/CTA";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import { ProductVideoPlayer } from "@/components/ProductVideoPlayer";
import { Section } from "@/components/Section";
import { getCatalogProductBySlug, getCatalogProducts } from "@/data/catalog";
import type { Product } from "@/data/products";
import { localizedPath, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export async function generateStaticParams() {
  const products = await getCatalogProducts("en");
  return products.map((product) => ({ locale: "en", slug: product.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const product = await getCatalogProductBySlug(slug, locale);

  if (!product) {
    return {};
  }

  return {
    title: product.title,
    description: product.shortDescription,
    openGraph: {
      title: `${product.title} | Chart4Traders`,
      description: product.shortDescription,
      type: "website"
    }
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const product = await getCatalogProductBySlug(slug, locale);

  if (!product) {
    notFound();
  }

  if (product.pageType === "compact") {
    return <CompactProductPage product={product} locale={locale} />;
  }

  if (product.pageType === "long-form") {
    return <LongFormProductPage product={product} locale={locale} />;
  }

  return (
    <>
      <section className="px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl border border-line bg-graphite/50 px-6 py-8 sm:px-8 lg:px-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: localizedPath(locale) },
              { label: "Products", href: localizedPath(locale, "/products") },
              { label: product.title }
            ]}
          />
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-teal px-3 py-1 text-[11px] font-semibold text-ink">{product.productType}</span>
                <span className="rounded-full bg-mist px-3 py-1 text-[11px] font-semibold text-steel">{product.templateCategory}</span>
                {product.badge && (
                  <span className="rounded-full bg-amber/15 px-3 py-1 text-[11px] font-semibold text-amber">{product.badge}</span>
                )}
              </div>
              <h1 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">{product.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-steel">{product.fullDescription}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <QuickSpec title="Optimized for" items={product.optimizedFor} />
                <QuickSpec title="Bar / workflow types" items={product.barTypes} />
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href={product.payhipUrl} external>
                  Buy Now on Payhip
                </ButtonLink>
                <p className="text-sm text-steel">Secure checkout via Payhip. Instant digital delivery.</p>
              </div>
              <p className="mt-5 text-xl font-semibold text-amber">{product.price}</p>
            </div>
            <PlaceholderImage label={product.image} className="min-h-[360px]" />
          </div>
        </div>
      </section>

      <Section eyebrow="Gallery" title="Workspace and product preview">
        <div className="grid gap-5 md:grid-cols-3">
          {product.gallery.map((item) => (
            <PlaceholderImage key={item} label={item} />
          ))}
        </div>
      </Section>

      {product.videoUrl ? <ProductVideo videoUrl={product.videoUrl} posterUrl={product.videoPosterUrl || product.image} /> : null}

      <section className="py-8 sm:py-10">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">Product details</p>
            <h2 className="text-xl font-semibold text-white">Details at a glance</h2>
          </div>
        <div className="grid gap-4 lg:grid-cols-2">
          <InfoPanel title="Included files" items={product.includedFiles} />
          <InfoPanel title="What is included" items={product.includedItems} />
          <InfoPanel title="Who it is for" items={product.targetUser} />
          <InfoPanel title="Compatibility" items={product.compatibility} />
          <div className="border-t border-line py-4">
            <h2 className="text-sm font-semibold text-white">How delivery works</h2>
            <p className="mt-2 text-xs leading-5 text-steel">
              Select the Payhip button, complete checkout on the external Payhip page, and download the files from Payhip after purchase. C4T does not run its own checkout, cart, login, or payment forms.
            </p>
          </div>
          <div className="border-t border-line py-4">
            <h2 className="text-sm font-semibold text-white">Installation and setup</h2>
            <p className="mt-2 text-xs leading-5 text-steel">
              Basic setup notes are included with purchased files where needed. Market-specific adjustments such as symbols, sessions, tick settings, time zones, and data-feed configuration remain the user&apos;s responsibility unless a paid setup service is purchased separately.
            </p>
            <ButtonLink href={localizedPath(locale, "/installation-guide")} variant="secondary" className="mt-4">
              Installation Overview
            </ButtonLink>
          </div>
        </div>
        </div>
      </section>

      {product.modules && (
        <Section eyebrow="Course preview" title="Curriculum modules">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {product.modules.map((module, index) => (
              <div className="rounded-md border border-line bg-white p-5 shadow-soft" key={module}>
                <p className="text-sm font-semibold text-teal">Module {index + 1}</p>
                <h3 className="mt-2 text-base font-semibold text-white">{module}</h3>
              </div>
            ))}
          </div>
        </Section>
      )}

      <CTA
        title={`Get ${product.title}`}
        description="Complete checkout on Payhip. Payhip handles payment, VAT where applicable, delivery, and download access."
        price={product.price}
        href={product.payhipUrl}
        label="Get It Now"
        buttonVariant="primary"
        external
      />
    </>
  );
}

function CompactProductPage({ product, locale }: { product: Product; locale: Locale }) {
  return (
    <>
      <section className="px-5 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: localizedPath(locale) },
              { label: "Products", href: localizedPath(locale, "/products") },
              { label: product.title }
            ]}
          />
          <div className="grid gap-7 md:grid-cols-[0.95fr_1.05fr] md:items-center">
            <PlaceholderImage label={product.image} className="min-h-56" />
            <div>
              <div className="mb-3 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-mist px-3 py-1 text-[10px] font-semibold text-teal">{product.productType}</span>
                {product.badge && (
                  <span className="rounded-full bg-amber/15 px-3 py-1 text-[10px] font-semibold text-amber">{product.badge}</span>
                )}
              </div>
              <h1 className="text-xl font-medium text-white sm:text-2xl">{product.title}</h1>
              <p className="mt-3 text-xs leading-5 text-steel">{product.fullDescription}</p>
              <p className="mt-4 text-base font-medium text-amber">{product.price}</p>
              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                <ButtonLink href={product.payhipUrl} external className="min-h-8 px-4 py-1.5 text-[11px]">
                  Get via Payhip
                </ButtonLink>
                <p className="text-[11px] text-steel">Secure checkout and delivery via Payhip.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-7">
        <div className="mx-auto grid max-w-4xl gap-4 px-5 sm:px-6 md:grid-cols-2 lg:px-8">
          <InfoPanel title="Included" items={product.includedItems} />
          <InfoPanel title="Compatibility" items={product.compatibility} />
          <div className="border-t border-line py-4 md:col-span-2">
            <h2 className="text-sm font-semibold text-white">Delivery and setup</h2>
            <p className="mt-2 text-xs leading-5 text-steel">
              Files are delivered through Payhip. Basic setup notes are included where needed; market-specific settings remain the user&apos;s responsibility unless stated otherwise.
            </p>
          </div>
        </div>
      </section>

      <CTA
        title={`Get ${product.title}`}
        description="Complete checkout on Payhip. Payhip handles payment, delivery, and download access."
        price={product.price}
        href={product.payhipUrl}
        label="Get It Now"
        buttonVariant="primary"
        external
      />
    </>
  );
}

function LongFormProductPage({
  product,
  locale
}: {
  product: Product;
  locale: Locale;
}) {
  return (
    <>
      <section className="px-5 py-9 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: localizedPath(locale) },
              { label: "Products", href: localizedPath(locale, "/products") },
              { label: product.title }
            ]}
          />
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-teal px-3 py-1 text-[10px] font-semibold text-ink">{product.productType}</span>
                <span className="rounded-full bg-mist px-3 py-1 text-[10px] font-semibold text-steel">{product.templateCategory}</span>
                {product.badge && (
                  <span className="rounded-full bg-amber/15 px-3 py-1 text-[10px] font-semibold text-amber">{product.badge}</span>
                )}
              </div>
              <h1 className="text-2xl font-medium tracking-normal text-white sm:text-3xl">{product.title}</h1>
              <p className="mt-4 text-sm leading-6 text-steel">{product.outcomeSummary || product.fullDescription}</p>
              <p className="mt-5 text-lg font-medium text-amber">{product.price}</p>
              <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center">
                <ButtonLink href={product.payhipUrl} external>
                  Buy Now on Payhip
                </ButtonLink>
                <p className="text-xs text-steel">Secure checkout via Payhip.</p>
              </div>
              <div className="mt-6 grid gap-4 border-t border-line pt-4 sm:grid-cols-2">
                <InfoPanel title="What is included" items={product.includedItems} compact />
                <InfoPanel title="Compatibility" items={product.compatibility} compact />
              </div>
            </div>
            <PlaceholderImage label={product.image} className="min-h-[320px]" />
          </div>
        </div>
      </section>

      {product.detailedDescription ? (
        <section className="py-5 sm:py-7">
          <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
            <RichTextBlock
              eyebrow="Detailed overview"
              title="More about the product"
              content={product.detailedDescription}
            />
          </div>
        </section>
      ) : null}

      {(product.problem || product.solution) && (
        <section className="py-8">
          <div className="mx-auto grid max-w-4xl gap-5 px-5 sm:px-6 md:grid-cols-2 lg:px-8">
            {product.problem && <TextPanel eyebrow="Problem" title="Why this product exists" body={product.problem} />}
            {product.solution && <TextPanel eyebrow="Solution" title="What it gives you" body={product.solution} />}
          </div>
        </section>
      )}

      {product.walkthroughSections?.length ? (
        <ProductGallery product={product} title="Additional screenshots" />
      ) : (
        <ProductGallery product={product} title="Screenshots and product structure" />
      )}

      {product.videoUrl ? <ProductVideo videoUrl={product.videoUrl} posterUrl={product.videoPosterUrl || product.image} /> : null}

      {product.featureSections?.length ? (
        <Section eyebrow="workflow" title="What the long-form product explains">
          <div className="mx-auto grid max-w-4xl gap-0 border-y border-line md:grid-cols-3 md:border-x">
            {product.featureSections.map((section) => (
              <div className="border-b border-line p-4 md:border-b-0 md:border-r md:last:border-r-0" key={section.title}>
                <h2 className="text-sm font-medium text-white">{section.title}</h2>
                <p className="mt-2 text-xs leading-5 text-steel">{section.body}</p>
              </div>
            ))}
          </div>
        </Section>
      ) : null}

      {product.walkthroughSections?.length ? <WalkthroughSection product={product} /> : null}

      {product.modules && (
        <Section eyebrow="modules" title="Product modules">
          <div className="mx-auto grid max-w-4xl gap-3 md:grid-cols-2">
            {product.modules.map((module, index) => (
              <div className="border-t border-line py-3" key={module}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-teal">Module {index + 1}</p>
                <h3 className="mt-2 text-sm font-medium text-white">{module}</h3>
              </div>
            ))}
          </div>
        </Section>
      )}

      <CTA
        title={`Get ${product.title}`}
        description="Complete checkout on Payhip. Payhip handles payment, VAT where applicable, delivery, and download access."
        price={product.price}
        href={product.payhipUrl}
        label="Get It Now"
        buttonVariant="primary"
        external
      />
    </>
  );
}

function TextPanel({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="border-t border-line py-4">
      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-teal">{eyebrow}</p>
      <h2 className="mt-2 text-base font-medium text-white">{title}</h2>
      <p className="mt-3 text-xs leading-5 text-steel">{body}</p>
    </div>
  );
}

function RichTextBlock({
  eyebrow,
  title,
  content
}: {
  eyebrow: string;
  title: string;
  content: string;
}) {
  const paragraphs = content
    .split(/\n\s*\n/)
    .map((item) => item.trim())
    .filter(Boolean);

  if (!paragraphs.length) {
    return null;
  }

  return (
    <div className="border-t border-line py-5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">{eyebrow}</p>
      <h2 className="mt-2 text-lg font-medium text-white">{title}</h2>
      <div className="mt-4 grid gap-3">
        {paragraphs.map((paragraph) => (
          <p className="text-sm leading-5 text-steel" key={paragraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

function WalkthroughSection({ product }: { product: Product }) {
  if (!product.walkthroughSections?.length) {
    return null;
  }

  return (
    <section className="py-9 sm:py-11">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-teal">Product walkthrough</p>
          <h2 className="mt-3 text-xl font-medium text-white sm:text-2xl">See how the workspace is structured</h2>
          <p className="mt-3 text-sm leading-6 text-steel">
            Key views with short notes, so the page can explain the product without becoming a setup manual.
          </p>
        </div>

        <div className="grid gap-9">
          {product.walkthroughSections.map((item, index) => (
            <article className="grid gap-5 border-t border-line pt-6 md:grid-cols-[1.15fr_0.85fr] md:items-center" key={item.title}>
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <PlaceholderImage label={item.image} className="min-h-[250px] sm:min-h-[310px]" />
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">View {index + 1}</p>
                <h3 className="mt-2 text-lg font-medium text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-steel">{item.description}</p>
                {item.bullets?.length ? (
                  <ul className="mt-4 grid gap-2">
                    {item.bullets.map((bullet) => (
                      <li className="text-xs leading-5 text-steel before:mr-2 before:text-teal before:content-['/']" key={bullet}>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductGallery({ product, title }: { product: Product; title: string }) {
  if (!product.gallery.length) {
    return null;
  }

  return (
    <section className="py-7 sm:py-9">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="mb-5 flex items-end justify-between gap-4 border-t border-line pt-5">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal">Gallery</p>
            <h2 className="mt-2 text-lg font-medium text-white">{title}</h2>
          </div>
          <p className="hidden max-w-xs text-right text-xs leading-5 text-steel sm:block">
            Extra views for checking layout, chart structure, and visual style.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {product.gallery.map((item) => (
            <PlaceholderImage key={item} label={item} className="min-h-[190px]" />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductVideo({ videoUrl, posterUrl }: { videoUrl: string; posterUrl?: string }) {
  return (
    <section className="py-7 sm:py-9">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="mb-5 border-t border-line pt-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal">Video preview</p>
          <h2 className="mt-2 text-lg font-medium text-white">See the chart in motion</h2>
        </div>
        <ProductVideoPlayer videoUrl={videoUrl} posterUrl={posterUrl} />
      </div>
    </section>
  );
}

function InfoPanel({ title, items, compact = false }: { title: string; items: string[]; compact?: boolean }) {
  if (!items.length) {
    return null;
  }

  return (
    <div className={compact ? "py-0" : "border-t border-line py-4"}>
      <h2 className="text-sm font-semibold text-white">{title}</h2>
      <ul className="mt-2 grid gap-2">
        {items.map((item) => (
          <li className="text-xs leading-5 text-steel before:mr-2 before:text-teal before:content-['/']" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function QuickSpec({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-line bg-mist p-4">
      <p className="text-xs font-semibold uppercase tracking-wide text-steel">{title}</p>
      <div className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <span className="rounded-full bg-graphite px-3 py-1 text-xs font-bold text-white" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
