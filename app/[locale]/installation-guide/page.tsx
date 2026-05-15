import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { localizedPath, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Installation Overview | Chart4Traders",
  description:
    "Installation overview for Chart4Traders Sierra Chart templates, chartbooks, and digital setup files delivered through Payhip."
};

const points = [
  {
    title: "Digital delivery",
    body: "C4T products are delivered through Payhip after checkout. Files may include chartbooks, templates, study references, PDF notes, screenshots, or other product-specific resources."
  },
  {
    title: "Sierra Chart required",
    body: "Template and chartbook products require a working Sierra Chart installation and the data services needed for the markets and studies you intend to use."
  },
  {
    title: "Product notes included",
    body: "Purchased products include basic setup notes where needed. Full product-specific instructions are provided with the download rather than published as a free public manual."
  },
  {
    title: "User adjustments",
    body: "Symbols, sessions, tick settings, time zones, data-feed configuration, and personal visual preferences may need adjustment for your market and trading environment."
  },
  {
    title: "Custom setup",
    body: "Custom installation, personalisation, and one-to-one Sierra Chart setup are not included unless clearly stated on the product page. These services may be offered separately as paid products."
  }
];

export default async function InstallationGuidePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <section className="py-8 sm:py-9">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">
            Installation
          </p>
          <h1 className="max-w-2xl text-xl font-medium tracking-normal text-white sm:text-2xl">
            Installation overview, not a free setup manual.
          </h1>
          <p className="mt-4 max-w-2xl text-xs leading-5 text-steel sm:text-[13px]">
            This page explains the general delivery and setup expectations for C4T digital products. Detailed instructions remain product-specific and are included with purchased files where required.
          </p>

          <div className="mt-7 border-y border-line">
            {points.map((point) => (
              <div className="grid gap-1 border-b border-line py-3 last:border-b-0 sm:grid-cols-[0.34fr_0.66fr]" key={point.title}>
                <h2 className="text-xs font-medium text-white/95">{point.title}</h2>
                <p className="text-[11px] leading-5 text-steel">{point.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <ButtonLink href={localizedPath(locale, "/products")} className="min-h-8 px-4 py-1.5 text-[11px]">
              View products
            </ButtonLink>
            <ButtonLink
              href={localizedPath(locale, "/contact")}
              variant="secondary"
              className="min-h-8 px-4 py-1.5 text-[11px]"
            >
              Contact
            </ButtonLink>
          </div>
        </div>
      </div>
    </section>
  );
}
