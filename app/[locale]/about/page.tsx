import type { Metadata } from "next";
import { ButtonLink } from "@/components/ButtonLink";
import { localizedPath, type Locale } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "About Me | Chart4Traders",
  description:
    "About Chart4Traders, David's futures trading background, Auction Market Theory approach, and Sierra Chart workflow tools."
};

const approach = [
  {
    title: "Behavioural foundation",
    body: "Market participation is driven by human behaviour. Tools are designed with awareness of cognitive biases such as loss aversion, anchoring, and overconfidence."
  },
  {
    title: "Auction-based framework",
    body: "Markets are treated as continuous auctions. The focus is on structure, imbalance, and participation through price action rather than prediction."
  },
  {
    title: "Structured execution",
    body: "Priority is given to rule-based frameworks, clean chart design, and consistency over discretionary noise."
  },
  {
    title: "Function over aesthetics",
    body: "Every element serves a purpose. Visual simplicity is used to enhance decision-making, not distract from it."
  }
];

const offering = [
  {
    title: "Trading tools",
    body: "Professionally structured templates, indicators, and chart systems built for immediate application."
  },
  {
    title: "Process-driven education",
    body: "Focused material on execution, trade review, and behavioural discipline."
  },
  {
    title: "Technical support",
    body: "Direct, efficient assistance for setup and usage via support@chart4traders.com."
  }
];

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;

  return (
    <section className="py-8 sm:py-9">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">
            About
          </p>
          <h1 className="max-w-2xl text-xl font-medium tracking-normal text-white sm:text-2xl">
            Independent Sierra Chart tools built from real futures workflow.
          </h1>

          <div className="mt-5 grid gap-3 text-xs leading-5 text-steel sm:text-[13px]">
            <p>
              Chart4Traders is an independent trading resource built on over 11 years of active futures market experience.
            </p>
            <p>
              The project is led by David, with a background in financial consulting and a focused study of psychology, behavioural dynamics, and cognitive biases affecting decision-making under risk.
            </p>
            <p>
              He has specialised in Auction Market Theory (AMT), with particular emphasis on price action dynamics and how market participants interact across different phases of the auction.
            </p>
            <p>
              All tools and workflows are developed and refined through direct market application on Sierra Chart and comparable professional platforms.
            </p>
            <p className="text-white/90">
              The objective is simple: reduce execution friction, improve clarity, and support disciplined, repeatable trading processes.
            </p>
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
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

          <div className="mt-8 border-y border-line">
            <p className="py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">
              Approach
            </p>
            {approach.map((item) => (
              <div className="grid gap-1 border-t border-line py-3 sm:grid-cols-[0.34fr_0.66fr]" key={item.title}>
                <h2 className="text-xs font-medium text-white/95">{item.title}</h2>
                <p className="text-[11px] leading-5 text-steel">{item.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-7 border-y border-line">
            <p className="py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">
              Offering
            </p>
            {offering.map((item) => (
              <div className="grid gap-1 border-t border-line py-3 sm:grid-cols-[0.34fr_0.66fr]" key={item.title}>
                <h2 className="text-xs font-medium text-white/95">{item.title}</h2>
                <p className="text-[11px] leading-5 text-steel">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
