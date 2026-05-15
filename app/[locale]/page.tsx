import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ButtonLink";
import { CTA } from "@/components/CTA";
import { FAQList } from "@/components/FAQList";
import { ProductCard } from "@/components/ProductCard";
import { Section } from "@/components/Section";
import { getFeaturedCatalogProducts } from "@/data/catalog";
import { getGuides } from "@/data/guides";
import { getSiteSettings } from "@/data/siteCatalog";
import { localizedPath, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Sierra Chart Templates and Indicators",
  description:
    "Chart4Traders is a solo trader project selling custom Sierra Chart templates, indicators, chartbooks, and trading tools.",
  openGraph: {
    title: "Chart4Traders | Sierra Chart Templates and Indicators",
    description: "Professional Sierra Chart templates, chartbooks, and orderflow trading resources."
  }
};

const marketingRows = [
  {
    eyebrow: "How it works",
    points: [
      {
        title: "Choose template",
        body: "Clean Sierra Chart workspaces for scalping, intraday, and swing workflows."
      },
      {
        title: "Install in minutes",
        body: "Download, import, and start from a structured chartbook instead of a blank screen."
      },
      {
        title: "Trade playbook",
        body: "Footprints, profiles, VWAP, and levels organised for faster decision-making."
      }
    ]
  },
  {
    eyebrow: "Why work with me",
    points: [
      {
        title: "Lift off fast",
        body: "Skip the heavy setup phase and get straight to a cleaner trading workspace."
      },
      {
        title: "Power unlocked",
        body: "Tools refined through direct futures market use, not generic decoration."
      },
      {
        title: "Sharpen your edge",
        body: "Reduce visual noise and support a more disciplined execution process."
      }
    ]
  }
];

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const featuredProducts = (await getFeaturedCatalogProducts(locale)).slice(0, 4);
  const guides = getGuides(locale).slice(0, 2);
  const siteSettings = await getSiteSettings();

  return (
    <>
      <section className="px-5 pb-14 pt-10 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-5xl overflow-hidden bg-graphite/60">
          <div className="absolute inset-0">
            {["/product-images/volume-chart.png", "/product-images/footprint-chart.png", "/product-images/profile-chart.png"].map((src) => (
              <Image
                src={src}
                alt="Sierra Chart template preview"
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="hero-slide object-cover object-center"
                priority={src === "/product-images/volume-chart.png"}
                key={src}
              />
            ))}
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/88 to-ink/34" />
          <div className="relative max-w-2xl px-6 py-12 sm:px-8 sm:py-14">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">Featured</p>
            <h1 className="max-w-xl text-3xl font-medium leading-tight tracking-normal text-white/95 sm:text-4xl">
              Supercharge your trading with the right Sierra Chart template
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/78">
              Welcome to your one-stop shop for Sierra Chart templates and studies. If you've ever felt you're missing opportunities, we've got you covered - fast installs, clean layouts, and tools that surface what matters. Pick a template that fits your style and level up today. The right tools make all the difference.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={localizedPath(locale, "/products")}>explore templates</ButtonLink>
              <ButtonLink href={localizedPath(locale, "/blog")} variant="secondary">
                latest blog
              </ButtonLink>
            </div>
            <p className="mt-4 text-xs text-steel">Secure checkout and delivery via Payhip. No cart or account on this site.</p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8">
            {marketingRows.map((row) => (
              <div key={row.eyebrow}>
                <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">
                  {row.eyebrow}
                </p>
                <div className="grid gap-3 md:grid-cols-3">
                  {row.points.map((point) => (
                    <div className="border-t border-line pt-3 text-center md:text-left" key={point.title}>
                      <h2 className="text-[13px] font-semibold uppercase tracking-normal text-white/95">{point.title}</h2>
                      <p className="mt-2 text-[11px] leading-4 text-steel">{point.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl border border-line bg-graphite/50 px-6 py-7 sm:px-8">
          <div className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">Setup support</p>
              <h2 className="mt-3 text-2xl font-medium tracking-normal text-white sm:text-3xl">
                {siteSettings.setupSupportTeaserTitle}
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-6 text-steel">
                {siteSettings.setupSupportTeaserBody}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
              <div className="border-t border-line py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">C4T Configuration &amp; Setup Support</p>
                <p className="mt-2 text-base font-medium text-amber">{siteSettings.setupSupportPrice}</p>
                <p className="mt-2 text-[11px] leading-5 text-steel">
                  Live screen-sharing setup focused on Sierra Chart logic, consistency, and workflow clarity.
                </p>
              </div>
              <ButtonLink href={localizedPath(locale, "/services/setup-support")} className="sm:self-center">
                view service
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="featured templates"
        title="Featured Templates"
        intro="A small collection of templates and bundles built from real Sierra Chart workflow needs."
      >
        <div className="grid gap-x-6 gap-y-8 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.slug} locale={locale} product={product} />
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink href={localizedPath(locale, "/products")} variant="dark">
            explore more
          </ButtonLink>
        </div>
      </Section>

      <Section eyebrow="template collections" title="Template collections" intro="Focused Sierra Chart layouts for different orderflow workflows.">
        <div className="mx-auto grid max-w-3xl gap-3 md:grid-cols-4">
          {[
            ["TPO + Volume Profiles", "Understand market auctions and identify key levels.", "/products"],
            ["Footprints", "Spot larger activity and position yourself accordingly.", "/products"],
            ["Price Action", "Read and react without overloading the screen.", "/products"],
            ["Heatmap", "See depth-of-market style visibility.", "/products"]
          ].map(([title, body, href]) => (
            <Link className="group border-t border-line py-4 text-center transition hover:border-teal" href={localizedPath(locale, href)} key={title}>
              <h3 className="text-sm font-medium tracking-normal text-white/95 group-hover:text-teal">{title}</h3>
              <p className="mx-auto mt-2 max-w-xs text-[11px] leading-4 text-steel">{body}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="about c4t" title="A solo trader project, not a software company">
        <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-[1.2fr_0.8fr]">
          <div className="border-t border-line py-4">
            <p className="text-xs leading-5 text-steel">
              Chart4Traders is my personal project for sharing Sierra Chart templates, chartbooks, and guides that come from my own trading workflow and platform experience.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="border-t border-line py-4 text-center">
              <p className="text-sm font-medium text-teal">Solo</p>
              <p className="mt-2 text-[11px] leading-4 text-steel">Built and maintained by one trader.</p>
            </div>
            <div className="border-t border-line py-4 text-center">
              <p className="text-sm font-medium text-amber">Payhip</p>
              <p className="mt-2 text-[11px] leading-4 text-steel">Checkout, VAT handling, and file delivery.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="latest blog"
        title="Latest Blog"
        intro="Public articles for broader trading context, behavioural awareness, and practical workflow thinking."
      >
        <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2">
          {guides.map((guide) => (
            <article className="border border-line bg-graphite/50 p-6" key={guide.slug}>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-teal">{guide.category}</p>
              <h3 className="mt-3 text-base font-semibold text-white">
                <Link href={localizedPath(locale, `/blog/${guide.slug}`)}>{guide.title}</Link>
              </h3>
              <p className="mt-3 text-xs leading-5 text-steel">{guide.excerpt}</p>
              <Link className="mt-5 inline-flex text-xs font-semibold text-teal" href={localizedPath(locale, `/blog/${guide.slug}`)}>
                Read article
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Before purchasing">
        <FAQList
          faqs={[
            {
              question: "Where do I complete checkout?",
              answer: "Checkout is completed on Payhip. Product buttons on this website send you to the relevant Payhip product page for payment, VAT handling where applicable, and file delivery."
            },
            {
              question: "When do I receive the files?",
              answer: "Delivery is digital and usually instant after successful payment. Payhip provides the download page and/or order email."
            },
            {
              question: "Are custom setup services included?",
              answer: "No, unless a product page clearly says otherwise. Custom setup, personalisation, and one-to-one Sierra Chart support will be offered separately as paid services."
            },
            {
              question: "Can I get a refund after downloading?",
              answer: "Digital products are generally not refundable once download or access has started, except where mandatory consumer rights apply or the product is faulty or not as described."
            }
          ]}
        />
        <div className="mt-5 text-center">
          <ButtonLink href={localizedPath(locale, "/faq")} variant="secondary" className="min-h-8 px-4 py-1.5 text-[11px]">
            Full FAQ
          </ButtonLink>
        </div>
      </Section>

      <CTA
        title="Ready to clean up your Sierra Chart setup?"
        description="Explore templates, freemium charts, and trading resources. Checkout and delivery stay secure through Payhip."
        href={localizedPath(locale, "/products")}
      />
    </>
  );
}
