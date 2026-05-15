import type { Metadata } from "next";
import { LegalArticle } from "@/components/LegalArticle";

export const metadata: Metadata = {
  title: "Terms of Sale | Chart4Traders",
  description:
    "Terms of sale for Chart4Traders digital products, templates, chart files, course materials, and downloads."
};

export default function TermsPage() {
  return (
    <LegalArticle
      title="Terms of Sale"
      intro="Terms for Chart4Traders digital content, including templates, indicators, chart files, course materials, downloads, licence keys, and members-only access."
      lastUpdated="20 September 2025"
      sections={[
        {
          title: "Scope",
          body: [
            "These terms apply to our digital content, for example templates, indicators, chart files, course materials, downloads, licence keys, and access to members-only areas."
          ]
        },
        {
          title: "Order and Access",
          body: [
            "Pay at checkout. We will email an order confirmation. Delivery is digital only, through a download link, licence key, or account access shown on-screen and/or sent by email.",
            "UK and EEA orders: at checkout you will be asked to request immediate access to the digital content. Our order email will confirm your consent to begin supply and your acknowledgement that your statutory right of withdrawal will no longer apply once download, streaming, or access starts."
          ]
        },
        {
          title: "Licence",
          body: [
            "You receive a personal, non-transferable licence for one individual unless the product page says otherwise. Do not resell, share, redistribute, sub-license, or bypass any licence or access controls. If a product page sets specific licence terms, those terms prevail."
          ]
        },
        {
          title: "Compatibility and Requirements",
          body: [
            "You are responsible for meeting any technical requirements stated on the product page, including software versions, dependencies, data feeds, and third-party accounts, and for keeping backups. We are not responsible for third-party outages or your device configuration."
          ]
        },
        {
          title: "Prices and Taxes",
          body: [
            "Prices shown at checkout include any applicable taxes. Obvious pricing errors do not bind us."
          ]
        },
        {
          title: "Cancellations and Refunds",
          body: [
            "UK and EEA consumers: you have a statutory right of withdrawal for distance purchases unless you request immediate access and acknowledge that this right will no longer apply once download, streaming, or access starts. If you give that consent at checkout, no change-of-mind refunds are available after access starts.",
            "If you do not give that consent, for example with a pre-order, you may cancel within your statutory withdrawal period from our order confirmation. Access will not be provided during that time.",
            "Consumers outside the UK and EEA: we do not offer change-of-mind refunds for digital content once download, streaming, or access has started. This does not affect any mandatory local rights.",
            "Faulty or not as described: if the content is faulty or not as described, we will repair or replace it within a reasonable time. If that is impossible or fails, we will provide a price reduction or refund as required by law."
          ]
        },
        {
          title: "Support and Updates",
          body: [
            "If something is faulty or not as described, or not compatible with the stated requirements, contact support@chart4traders.com. We may provide updates for performance, security, or compatibility."
          ]
        },
        {
          title: "Fair Use and Security",
          body: [
            "Do not misuse our services. This includes sharing files or keys, scraping, bypassing protections, reverse-engineering beyond what the law permits, or distributing malware. We may suspend access for serious or repeated breaches."
          ]
        },
        {
          title: "No Advice",
          body: [
            "Educational content is for information only and is not financial, trading, investment, or other professional advice. You are responsible for your own decisions and risk."
          ]
        },
        {
          title: "Liability",
          body: [
            "We do not limit liability where it would be unlawful to do so, for example death or personal injury caused by negligence, fraud, or your statutory consumer rights.",
            "Otherwise, our total liability for foreseeable loss is limited to the price paid for the affected content. We are not liable for trading losses, lost profits, or losses caused by third-party platforms, services, or data feeds."
          ]
        },
        {
          title: "Intellectual Property and Third-Party Names",
          body: [
            "All intellectual property in our content remains ours or our licensors'. Any third-party product or platform names are the property of their respective owners. We are not affiliated with or endorsed by them unless stated."
          ]
        },
        {
          title: "Age",
          body: ["You must be 18 or over to purchase."]
        },
        {
          title: "Governing Law",
          body: [
            "These terms are governed by the laws of England and Wales. If you live elsewhere in the UK, you can bring proceedings in your local courts. Local mandatory consumer protections in your country still apply."
          ]
        },
        {
          title: "Contact",
          body: ["For support, email support@chart4traders.com."]
        }
      ]}
    />
  );
}
