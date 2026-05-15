import type { Locale } from "@/lib/i18n";

export type Guide = {
  title: string;
  slug: string;
  excerpt: string;
  description: string;
  category: string;
  readTime: string;
  language: Locale;
  relatedProductSlugs: string[];
  sections: Array<{
    heading: string;
    body: string;
  }>;
};

export const guides: Guide[] = [
  {
    title: "Footprint Trading Explained",
    slug: "footprint-trading-explained",
    excerpt: "A practical overview of what footprint charts show and how traders use them in context.",
    description: "Learn how footprint charts organize traded volume, bid and ask activity, and execution context.",
    category: "Orderflow Basics",
    readTime: "6 min read",
    language: "en",
    relatedProductSlugs: ["c4t-execution-footprint", "c4t-starter-pack"],
    sections: [
      {
        heading: "What a footprint chart shows",
        body: "A footprint chart breaks each price level into traded activity so traders can compare movement with actual participation. The value is not in one isolated number, but in how the chart supports context."
      },
      {
        heading: "Where structure matters",
        body: "Clean layouts help you focus on location, traded volume, delta shifts, and response around key prices. C4T templates are designed around that practical reading process."
      }
    ]
  },
  {
    title: "How to Read Delta",
    slug: "how-to-read-delta",
    excerpt: "A simple framework for reading aggressive buying and selling without treating delta as a signal by itself.",
    description: "Understand delta as context for auction behavior, not as a standalone trading trigger.",
    category: "Delta",
    readTime: "5 min read",
    language: "en",
    relatedProductSlugs: ["c4t-delta-footprint", "c4t-pro-suite"],
    sections: [
      {
        heading: "Delta is context",
        body: "Delta compares aggressive buying and selling. It becomes useful when read with price location, market structure, and the response after activity appears."
      },
      {
        heading: "Avoid single-metric decisions",
        body: "Strong delta can continue a move or get trapped. A structured chart helps you compare delta with acceptance, rejection, and follow-through."
      }
    ]
  },
  {
    title: "Sierra Chart Template Setup Guide",
    slug: "sierra-chart-template-setup-guide",
    excerpt: "A setup-oriented guide for importing templates and keeping your Sierra Chart workspace organized.",
    description: "Prepare Sierra Chart for a cleaner chartbook and template workflow.",
    category: "Setup",
    readTime: "7 min read",
    language: "en",
    relatedProductSlugs: ["c4t-free-footprint-template", "c4t-starter-pack"],
    sections: [
      {
        heading: "Before you import",
        body: "Confirm your Sierra Chart installation, data feed, symbols, and session settings. Template quality depends on matching the structure to your market and trading hours."
      },
      {
        heading: "Keep a clean backup",
        body: "Before changing an active workspace, save a copy of your chartbook. This makes testing new layouts much easier."
      }
    ]
  },
  {
    title: "Footprint vs DOM Trading",
    slug: "footprint-vs-dom-trading",
    excerpt: "How footprint charts and the DOM differ, and why many traders use them together.",
    description: "Compare two common orderflow views and understand where each can support execution.",
    category: "Workflow",
    readTime: "6 min read",
    language: "en",
    relatedProductSlugs: ["c4t-execution-footprint", "c4t-pro-suite"],
    sections: [
      {
        heading: "Different views of participation",
        body: "The DOM emphasizes current liquidity and order placement. Footprint charts emphasize traded activity after it occurs. Each view answers a different question."
      },
      {
        heading: "Using both responsibly",
        body: "A serious workflow defines what each tool is for. The goal is not more screens, but clearer decisions."
      }
    ]
  }
];

export function getGuides(locale: Locale = "en") {
  return guides.filter((guide) => guide.language === locale);
}

export function getGuideBySlug(slug: string, locale: Locale = "en") {
  return guides.find((guide) => guide.slug === slug && guide.language === locale);
}
