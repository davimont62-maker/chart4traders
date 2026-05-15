import type { Locale } from "@/lib/i18n";

export type ProductType = "Template" | "Chartbook" | "Bundle" | "PDF Guide" | "Free Resource";
export type ProductPageType = "compact" | "standard" | "long-form";

export type ProductFaq = {
  question: string;
  answer: string;
};

export type ProductWalkthroughSection = {
  title: string;
  description: string;
  image: string;
  bullets?: string[];
};

export type Product = {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  detailedDescription?: string;
  videoUrl?: string;
  videoPosterUrl?: string;
  price: string;
  productType: ProductType;
  pageType: ProductPageType;
  templateCategory: string;
  image: string;
  gallery: string[];
  optimizedFor: string[];
  barTypes: string[];
  includedFiles: string[];
  includedItems: string[];
  targetUser: string[];
  compatibility: string[];
  faq: ProductFaq[];
  payhipUrl: string;
  featured: boolean;
  language: Locale;
  badge?: string;
  modules?: string[];
  outcomeSummary?: string;
  problem?: string;
  solution?: string;
  featureSections?: { title: string; body: string }[];
  walkthroughSections?: ProductWalkthroughSection[];
  notFor?: string[];
  limitations?: string[];
};

const commonCompatibility = [
  "Built for Sierra Chart workflows",
  "Designed for futures traders using orderflow and footprint charts",
  "Includes setup notes for importing and adapting the workspace",
  "Requires a working Sierra Chart installation and relevant data feed access"
];

export const products: Product[] = [
  {
    title: "C4T Execution Footprint",
    slug: "c4t-execution-footprint",
    category: "Orderflow Templates",
    shortDescription: "A focused footprint layout for cleaner execution decisions around liquidity, delta, and traded volume.",
    fullDescription:
      "C4T Execution Footprint is built for traders who want a structured Sierra Chart workspace for reading auction behavior without visual clutter. It is designed to support preparation, execution, and post-session review using practical orderflow context.",
    price: "USD 49.00",
    productType: "Template",
    pageType: "standard",
    templateCategory: "Footprint",
    image: "/product-images/footprint-chart.png",
    gallery: ["/product-images/footprint-chart.png", "/product-images/volume-chart.png", "/product-images/profile-chart.png"],
    optimizedFor: ["ES", "NQ", "MNQ", "MES"],
    barTypes: ["Range", "Tick", "Intraday"],
    includedFiles: ["1x Sierra Chart chartbook (.cht)", "1x quick-start PDF", "Screenshot reference layout", "Setup checklist"],
    includedItems: [
      "Sierra Chart footprint template structure",
      "Workspace layout notes",
      "Suggested chart organization",
      "Quick setup checklist"
    ],
    targetUser: [
      "Futures traders using Sierra Chart",
      "Orderflow traders who want a cleaner footprint process",
      "Traders refining execution around key areas"
    ],
    compatibility: commonCompatibility,
    faq: [
      {
        question: "Does this include trading signals?",
        answer: "No. It is a template and workflow aid, not an automated signal service."
      },
      {
        question: "Can I adapt the colors and studies?",
        answer: "Yes. The layout is intended as a starting structure that you can adapt to your own workflow."
      }
    ],
    payhipUrl: "https://payhip.com/b/placeholder1",
    featured: true,
    language: "en",
    badge: "Best Seller"
  },
  {
    title: "C4T Delta Footprint",
    slug: "c4t-delta-footprint",
    category: "Delta Analysis",
    shortDescription: "A Sierra Chart layout for reading delta shifts, absorption behavior, and imbalance context.",
    fullDescription:
      "C4T Delta Footprint gives delta-focused traders a practical layout for comparing price movement with aggressive buying and selling. It is aimed at making delta context easier to read across the session.",
    price: "USD 39.00",
    productType: "Template",
    pageType: "standard",
    templateCategory: "Delta Footprint",
    image: "/product-images/footprint-chart.png",
    gallery: ["/product-images/footprint-chart.png", "/product-images/profile-chart.png", "/product-images/volume-chart.png"],
    optimizedFor: ["ES", "NQ", "MNQ"],
    barTypes: ["Range", "Tick", "RTH session"],
    includedFiles: ["1x delta chartbook (.cht)", "1x setup note PDF", "Delta reading checklist"],
    includedItems: [
      "Delta-focused chart template",
      "Reference layout notes",
      "Setup checklist",
      "Workflow suggestions for review"
    ],
    targetUser: [
      "Traders studying delta behavior",
      "Scalpers and intraday futures traders",
      "Sierra Chart users who want a focused visual structure"
    ],
    compatibility: commonCompatibility,
    faq: [
      {
        question: "Is this suitable for beginners?",
        answer: "It can be used by beginners, but basic Sierra Chart familiarity is recommended."
      },
      {
        question: "Does it work for all futures markets?",
        answer: "The structure is market-agnostic, but you should adapt settings to the instrument and session you trade."
      }
    ],
    payhipUrl: "https://payhip.com/b/placeholder2",
    featured: true,
    language: "en"
  },
  {
    title: "C4T Starter Pack",
    slug: "c4t-starter-pack",
    category: "Starter Bundle",
    shortDescription: "A practical entry bundle for setting up a cleaner Sierra Chart orderflow workspace.",
    fullDescription:
      "C4T Starter Pack brings together essential templates, setup notes, and workflow guidance for traders who want a more organized Sierra Chart foundation without building every view from scratch.",
    price: "USD 79.00",
    productType: "Bundle",
    pageType: "standard",
    templateCategory: "Bundle",
    image: "/product-images/volume-chart.png",
    gallery: ["/product-images/volume-chart.png", "/product-images/footprint-chart.png", "/product-images/profile-chart.png"],
    optimizedFor: ["ES", "NQ", "MNQ", "MES"],
    barTypes: ["Footprint", "Delta", "Session review"],
    includedFiles: ["2x Sierra Chart chartbooks (.cht)", "1x quick-start PDF", "Workspace checklist", "Reference screenshots"],
    includedItems: [
      "Execution footprint template",
      "Delta reference template",
      "Quick-start PDF",
      "Workspace setup checklist"
    ],
    targetUser: [
      "Newer Sierra Chart users",
      "Traders rebuilding their workspace",
      "Orderflow learners who want a practical starting point"
    ],
    compatibility: commonCompatibility,
    faq: [
      {
        question: "Is this different from the individual templates?",
        answer: "The starter pack combines selected tools and guidance into one entry bundle."
      },
      {
        question: "Will this replace learning Sierra Chart?",
        answer: "No. It gives you structure, but you should still understand the platform and your own risk process."
      }
    ],
    payhipUrl: "https://payhip.com/b/placeholder3",
    featured: true,
    language: "en",
    badge: "Starter"
  },
  {
    title: "C4T Pro Suite",
    slug: "c4t-pro-suite",
    category: "Complete Suite",
    shortDescription: "A fuller C4T workspace suite for traders who want templates, guides, and structured review tools together.",
    fullDescription:
      "C4T Pro Suite is the complete product path for traders who want a more comprehensive Sierra Chart workspace and supporting education. It is designed around clarity, preparation, execution, and review.",
    detailedDescription:
      "C4T Pro Suite is built for traders who want a more complete Sierra Chart environment without stitching together disconnected layouts and notes.\n\nThe product is designed to reduce setup friction and give you a more coherent structure across preparation, execution, and review. Rather than adding more visual noise, it aims to organise the views and references that matter most.\n\nThis is not a signal service and it is not intended to replace your own judgment. The value is in providing a cleaner base framework so your attention can stay on market context, execution quality, and process consistency.",
    price: "USD 149.00",
    productType: "Bundle",
    pageType: "long-form",
    templateCategory: "Pro Suite",
    image: "/product-images/volume-chart.png",
    gallery: ["/product-images/volume-chart.png", "/product-images/footprint-chart.png", "/product-images/profile-chart.png"],
    optimizedFor: ["ES", "NQ", "MNQ", "CL", "GC"],
    barTypes: ["Footprint", "DOM", "Volume Profile", "Session review"],
    includedFiles: ["Core C4T chartbooks (.cht)", "Advanced workflow PDF", "Setup references", "Review checklist"],
    includedItems: [
      "Core C4T footprint templates",
      "Advanced layout notes",
      "PDF workflow guide",
      "Review checklist and setup references"
    ],
    targetUser: [
      "Committed Sierra Chart users",
      "Traders who want a complete workspace structure",
      "Orderflow traders refining their process"
    ],
    compatibility: commonCompatibility,
    faq: [
      {
        question: "Is this a subscription?",
        answer: "No. The website links to Payhip product pages for purchase and delivery."
      },
      {
        question: "Does it include personal coaching?",
        answer: "No. It includes digital products and written guidance only unless a future product states otherwise."
      }
    ],
    payhipUrl: "https://payhip.com/b/placeholder4",
    featured: true,
    language: "en",
    badge: "Complete"
    ,
    outcomeSummary:
      "A complete C4T workspace path for traders who want a more structured Sierra Chart environment for preparation, execution, and review.",
    problem:
      "Many Sierra Chart users spend too much time adjusting layouts, rebuilding studies, and switching between disconnected views instead of developing a repeatable market process.",
    solution:
      "C4T Pro Suite brings core templates, workflow notes, and review references together so the workspace has a clearer structure from the start.",
    featureSections: [
      {
        title: "Preparation workspace",
        body: "Layouts and references designed to help organise market context before the session."
      },
      {
        title: "Execution views",
        body: "Footprint, profile, and orderflow-focused screens intended to reduce visual noise during decision-making."
      },
      {
        title: "Review process",
        body: "Supporting notes and checklists for reviewing trades, context, and recurring execution behaviours."
      }
    ],
    walkthroughSections: [
      {
        title: "Execution footprint view",
        description:
          "A focused footprint screen for reading traded volume, delta behaviour, and participation around important price areas during active execution.",
        image: "/product-images/footprint-chart.png",
        bullets: ["Footprint structure", "Delta context", "Liquidity and imbalance areas"]
      },
      {
        title: "Profile and VWAP context",
        description:
          "A contextual view for framing the session auction with volume profile, VWAP, and market-generated reference areas before execution decisions.",
        image: "/product-images/volume-chart.png",
        bullets: ["Session structure", "Value and profile context", "Prepared decision areas"]
      },
      {
        title: "Review and process layout",
        description:
          "A cleaner workspace for reviewing how price, participation, and execution decisions developed during the session.",
        image: "/product-images/profile-chart.png",
        bullets: ["Post-session review", "Process consistency", "Decision quality"]
      }
    ],
    notFor: [
      "Traders looking for automated entries or guaranteed signals",
      "Users who do not want to learn or maintain their Sierra Chart setup",
      "Anyone expecting personal coaching to be included"
    ],
    limitations: [
      "Requires a working Sierra Chart installation and suitable market data access",
      "Symbols, sessions, tick settings, and data-feed configuration may need user adjustment",
      "Does not include one-to-one setup unless purchased separately"
    ]
  },
  {
    title: "C4T Free Footprint Template",
    slug: "c4t-free-footprint-template",
    category: "Free Resources",
    shortDescription: "A free entry template for testing the C4T approach to cleaner Sierra Chart footprint layouts.",
    fullDescription:
      "This free footprint template is a lightweight way to try the C4T structure before buying a full product. Delivery still happens through Payhip so files and future updates stay organized.",
    price: "USD 0.00",
    productType: "Free Resource",
    pageType: "compact",
    templateCategory: "Freemium",
    image: "/product-images/profile-chart.png",
    gallery: ["/product-images/profile-chart.png", "/product-images/volume-chart.png", "/product-images/footprint-chart.png"],
    optimizedFor: ["ES", "NQ", "MNQ"],
    barTypes: ["Footprint", "Intraday"],
    includedFiles: ["1x free chartbook (.cht)", "Basic import notes"],
    includedItems: [
      "Free footprint layout",
      "Basic import notes",
      "Quick-start guidance"
    ],
    targetUser: [
      "Traders evaluating C4T products",
      "Sierra Chart users wanting a simple starting point",
      "Orderflow learners"
    ],
    compatibility: commonCompatibility,
    faq: [
      {
        question: "Why does a free product use Payhip?",
        answer: "Payhip handles the file delivery process and keeps downloads simple."
      }
    ],
    payhipUrl: "https://payhip.com/b/placeholder5",
    featured: false,
    language: "en",
    badge: "Free"
  },
  {
    title: "C4T Footprint Trading Course (PDF)",
    slug: "c4t-footprint-trading-course-pdf",
    category: "PDF Courses",
    shortDescription: "A practical PDF course covering footprint basics, delta context, and structured review.",
    fullDescription:
      "C4T Footprint Trading Course is a PDF education product for traders who want a clear framework for reading footprint charts and connecting orderflow observations to a repeatable process.",
    detailedDescription:
      "This PDF course is intended for traders who want a structured explanation of footprint concepts without turning orderflow into a black-box shortcut.\n\nThe material focuses on interpretation, context, and review. It is designed to help you connect what you see on the chart with a more disciplined process, rather than collecting isolated concepts.\n\nIt works well as a standalone study product and also as supporting material alongside templates, but it does not replace platform practice, market experience, or personal risk management.",
    price: "USD 59.00",
    productType: "PDF Guide",
    pageType: "long-form",
    templateCategory: "PDF Course",
    image: "/product-images/footprint-chart.png",
    gallery: ["/product-images/footprint-chart.png", "/product-images/volume-chart.png", "/product-images/profile-chart.png"],
    optimizedFor: ["ES", "NQ", "MNQ", "MES"],
    barTypes: ["Footprint", "Delta", "Volume Profile examples"],
    includedFiles: ["PDF course guide", "Study checklist", "Reference glossary"],
    includedItems: [
      "PDF course guide",
      "Practical examples and review prompts",
      "Setup and study checklist",
      "Reference glossary"
    ],
    targetUser: [
      "Traders learning footprint charts",
      "Sierra Chart users wanting education alongside templates",
      "Intraday futures traders building a review process"
    ],
    compatibility: [
      "PDF guide viewable on desktop, tablet, and mobile",
      "Examples are aligned with Sierra Chart orderflow workflows",
      "Useful alongside C4T templates but sold separately"
    ],
    faq: [
      {
        question: "Is this a video course?",
        answer: "No. This product is planned as a structured PDF course."
      },
      {
        question: "Does it include financial advice?",
        answer: "No. It is educational material and does not provide investment advice."
      }
    ],
    payhipUrl: "https://payhip.com/b/placeholder6",
    featured: false,
    language: "en",
    badge: "PDF",
    modules: [
      "Footprint chart foundations",
      "Delta and imbalance context",
      "Absorption and initiative activity",
      "Session preparation",
      "Post-trade review framework"
    ],
    outcomeSummary:
      "A structured PDF path for understanding footprint charts, delta context, and review routines without turning orderflow into a black-box signal.",
    problem:
      "Footprint traders often collect concepts without a clear framework for reading context, reviewing decisions, and separating useful information from chart noise.",
    solution:
      "The course organises key footprint concepts into a practical study path focused on interpretation, context, and repeatable review.",
    featureSections: [
      {
        title: "Concept foundation",
        body: "A clearer way to understand what footprint data can and cannot tell you."
      },
      {
        title: "Context over signals",
        body: "Material is framed around auction context and decision quality, not magic entries."
      },
      {
        title: "Review framework",
        body: "Prompts and checklists support structured review after the session."
      }
    ],
    walkthroughSections: [
      {
        title: "Footprint reading examples",
        description:
          "Course examples focus on how footprint information can be interpreted in context rather than treated as a standalone signal.",
        image: "/product-images/footprint-chart.png",
        bullets: ["Volume at price", "Delta shifts", "Imbalance context"]
      },
      {
        title: "Auction context",
        description:
          "Profile and session structure examples help connect footprint observations with broader market location and participation.",
        image: "/product-images/volume-chart.png",
        bullets: ["Market location", "Session references", "Context before execution"]
      }
    ],
    notFor: [
      "Traders looking for a signal service",
      "Users expecting personalised coaching inside the PDF",
      "Anyone looking for guaranteed performance"
    ],
    limitations: [
      "Educational material only",
      "Examples may require adaptation to your market and data feed",
      "Does not replace platform practice or personal risk management"
    ]
  }
];

export function getProducts(locale: Locale = "en") {
  return products.filter((product) => product.language === locale);
}

export function getProductBySlug(slug: string, locale: Locale = "en") {
  return products.find((product) => product.slug === slug && product.language === locale);
}

export function getFeaturedProducts(locale: Locale = "en") {
  return getProducts(locale).filter((product) => product.featured);
}
