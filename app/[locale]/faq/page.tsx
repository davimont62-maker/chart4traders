import type { Metadata } from "next";
import { FAQList } from "@/components/FAQList";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about C4T products, Sierra Chart compatibility, Payhip delivery, refunds, and setup."
};

const faqs = [
  {
    question: "How do I install the templates or indicators?",
    answer:
      "After purchase, you will receive a download link and instructions. Copy the supplied files into your Sierra Chart Data folder, restart Sierra Chart, and open the chartbook or study collection provided. I also include setup notes where needed."
  },
  {
    question: "Do I need the latest version of Sierra Chart?",
    answer:
      "I recommend using a recent Sierra Chart release before installing. This helps avoid compatibility issues with chartbooks, studies, symbols, and data-feed settings."
  },
  {
    question: "Can I use the templates on any futures market?",
    answer:
      "Yes, the layouts are designed for futures workflows. Some templates may be pre-optimized for popular markets such as ES, NQ, CL, or GC, so you may need to adjust symbols, sessions, tick size, time zones, or study settings for your preferred market."
  },
  {
    question: "Can I customise the colours or layout?",
    answer:
      "Yes. You can change colours, fonts, chart settings, symbols, sessions, and study inputs inside Sierra Chart. The default layouts are designed for clarity, but you are free to adapt them to your workflow."
  },
  {
    question: "What Sierra Chart subscription do I need?",
    answer:
      "The exact requirement depends on the product. For advanced orderflow tools, I generally recommend a Sierra Chart service package that supports the studies and market data features used by the template, together with the correct real-time data feed for your exchange."
  },
  {
    question: "Are these automated trading systems?",
    answer:
      "No. C4T products are templates, chartbooks, studies, PDF guides, and workflow tools. They do not place trades for you and they are not financial advice or trade signals."
  },
  {
    question: "Where do I checkout and receive the files?",
    answer:
      "Checkout and delivery are handled externally by Payhip. Product buttons on this website send you to the relevant Payhip product page, where payment, VAT handling, download delivery, and order emails are managed."
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Digital products are generally not refundable once download or access has started, except where mandatory consumer rights apply or the product is faulty or not as described. See the Terms of Sale for the full policy."
  }
];

export default function FAQPage() {
  return (
    <Section
      eyebrow="FAQ"
      title="Questions before buying"
      intro="Clear answers about products, compatibility, delivery, refunds, and setup."
    >
      <div className="mx-auto max-w-3xl">
        <FAQList faqs={faqs} />
      </div>
    </Section>
  );
}
