import type { Metadata } from "next";
import { LegalArticle } from "@/components/LegalArticle";

export const metadata: Metadata = {
  title: "Legal Terms | Chart4Traders",
  description:
    "Legal terms for using the Chart4Traders website and purchasing digital products."
};

export default function LegalTermsPage() {
  return (
    <LegalArticle
      title="Legal Terms"
      intro="Terms governing use of the Chart4Traders website/store and purchases of digital products."
      lastUpdated="20 September 2025"
      sections={[
        {
          title: "What These Terms Cover",
          body: [
            "These Legal Terms govern your use of this website/store and any purchases of our digital products, for example templates, indicators, chart files, course materials, downloads, licence keys, and members-area access."
          ]
        },
        {
          title: "Using the Site Means You Agree",
          body: [
            "By accessing or using the site, you agree to these Legal Terms and to any policies we link on this site, for example Terms of Sale, Privacy, and Cookies. If you do not agree, please do not use the site."
          ]
        },
        {
          title: "Changes",
          body: [
            "We may update the site, products, or these Legal Terms from time to time. The version shown here applies from the Last updated date above."
          ]
        },
        {
          title: "Accounts",
          body: [
            "If you create an account, keep it secure. You are responsible for all activity under it. We may suspend or close accounts that breach these terms or the law."
          ]
        },
        {
          title: "Orders, Access and Delivery",
          body: [
            "Products are delivered electronically by download link, licence key, streaming, or account access shown on-screen and/or sent by email after payment. Please enter a correct email and check spam or junk if the message does not arrive."
          ]
        },
        {
          title: "Licence to Digital Products",
          body: [
            "On purchase you receive a limited, personal, non-exclusive, non-transferable, revocable licence to use the digital product for your own purposes unless a product page says otherwise.",
            "You must not resell, share, re-post, sub-license, publicly distribute, remove proprietary notices, bypass licence or access controls, or reverse-engineer except where required by law. All intellectual property remains ours or our licensors'."
          ]
        },
        {
          title: "System Requirements",
          body: [
            "Product pages list any required software, versions, platforms, data feeds, or other dependencies. You are responsible for meeting these requirements and maintaining your own backups. We are not responsible for third-party outages or your device configuration."
          ]
        },
        {
          title: "Pricing, Taxes and Billing",
          body: [
            "Prices can change. Taxes or currency conversions may apply and will be shown at checkout. Payments are processed by third-party providers under their own terms. Obvious pricing errors do not bind us."
          ]
        },
        {
          title: "Cancellations and Refunds",
          body: [
            "We do not offer change-of-mind refunds for digital products once download, streaming, or access has started. This does not affect any mandatory consumer rights that may apply in your country.",
            "If a product is faulty or not as described, contact support@chart4traders.com. We will repair or replace it within a reasonable time or, if that is not possible, offer a price reduction or refund."
          ]
        },
        {
          title: "Subscriptions",
          body: [
            "Chart4Traders does not currently provide subscriptions, accounts, or recurring billing on this website. If a future product is sold on a recurring basis, the product page and checkout will state the billing terms, renewal terms, and cancellation method before purchase."
          ]
        },
        {
          title: "No Financial or Professional Advice",
          body: [
            "Any market, trading, or financial content is for education and information only and is not investment, legal, tax, financial, or other professional advice. Trading and investing involve risk, including loss of principal. Past performance is not a reliable indicator of future results."
          ]
        },
        {
          title: "Prohibited Uses",
          body: [
            "Do not use the site or products to break the law, infringe intellectual property or privacy rights, upload malware or interfere with security, scrape, harvest, or spam, misrepresent your identity, or bypass usage limits or licence checks."
          ]
        },
        {
          title: "Availability and Support",
          body: [
            "We aim to provide access promptly, but we do not guarantee the site or downloads will be uninterrupted, timely, secure, or error-free. Features may change or be discontinued. For support, contact support@chart4traders.com."
          ]
        },
        {
          title: "Disclaimers",
          body: [
            "The site and all content/products are provided as is and as available. To the fullest extent permitted by law, we disclaim all warranties, express, implied, or statutory, including merchantability, fitness for a particular purpose, and non-infringement."
          ]
        },
        {
          title: "Limitation of Liability",
          body: [
            "Nothing here excludes liability that cannot be excluded by law.",
            "Subject to that, we are not liable for indirect, incidental, special, consequential, exemplary, or punitive damages, loss of profits, revenue, data, or goodwill, or similar losses arising from or related to your use of, or inability to use, the site or products.",
            "For paid digital products, our total aggregate liability for foreseeable loss is limited to the price you paid for the affected product."
          ]
        },
        {
          title: "Indemnity",
          body: [
            "You agree to indemnify us and our service providers against claims, losses, costs, and liabilities arising from your breach of these Legal Terms or misuse of the site/products."
          ]
        },
        {
          title: "Third-Party Names and Links",
          body: [
            "Any third-party product or platform names are the property of their respective owners. We are not affiliated with or endorsed by them unless stated. Links to third-party services are used at your own risk and subject to those services' own terms."
          ]
        },
        {
          title: "Governing Law and Disputes",
          body: [
            "These Legal Terms are governed by the laws of England and Wales. If you are a consumer living elsewhere in the UK, you may bring proceedings in your local courts. Mandatory local consumer protections where you live still apply."
          ]
        }
      ]}
    />
  );
}
