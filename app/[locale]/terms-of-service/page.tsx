import type { Metadata } from "next";
import { LegalArticle } from "@/components/LegalArticle";

export const metadata: Metadata = {
  title: "Terms of Service | Chart4Traders",
  description:
    "Terms of service for using Chart4Traders digital products, templates, indicators, chart files, guides, and website content."
};

export default function TermsOfServicePage() {
  return (
    <LegalArticle
      title="Terms of Service"
      intro="Terms for using Chart4Traders and purchasing digital products, including templates, indicators, chart files, course materials, downloads, licence keys, and access-controlled content."
      lastUpdated="20 September 2025"
      sections={[
        {
          title: "Scope",
          body: [
            "These Terms of Service govern purchases of digital content from this website/store, including templates, indicators, chart files, course materials, downloads, licence keys, and access to members-only areas, together referred to as Digital Products."
          ]
        },
        {
          title: "Acceptance of These Terms",
          body: [
            "By placing an order, you agree to these Terms of Service. If you do not agree, do not purchase Digital Products."
          ]
        },
        {
          title: "Changes to Products or Terms",
          body: [
            "Products, prices, and these Terms may change from time to time. Updates apply prospectively. The version shown at checkout applies to your order."
          ]
        },
        {
          title: "Eligibility",
          body: [
            "You must be the age of majority where you live, or have parental or guardian consent where permitted. You are responsible for ensuring your purchase and use are lawful in your jurisdiction."
          ]
        },
        {
          title: "Ordering and Contract Formation",
          body: [
            "You submit an order at checkout. We will confirm receipt by email. A binding contract is formed when we issue the order confirmation. We may refuse or cancel an order, for example for suspected fraud, pricing errors, or unavailability."
          ]
        },
        {
          title: "Products, Licence and Permitted Use",
          body: [
            "On purchase you receive a limited, personal, non-exclusive, non-transferable, revocable licence to use the Digital Product for your own purposes unless a product page says otherwise.",
            "You must not resell, share, re-post, sub-license, publicly distribute, remove proprietary notices, bypass access or licence controls, or reverse-engineer except where required by law. All intellectual property rights are reserved."
          ]
        },
        {
          title: "Delivery and Access",
          body: [
            "Delivery is digital only, by download link, licence key, streaming, or account access shown on-screen and/or sent by email. Keep your login and keys secure. We may rate-limit or suspend access to protect security or prevent abuse."
          ]
        },
        {
          title: "Technical Requirements",
          body: [
            "Product pages list any required software versions, platforms, data feeds, or other dependencies. You are responsible for meeting these requirements and for maintaining backups. We are not responsible for third-party outages or your device configuration."
          ]
        },
        {
          title: "Pricing, Taxes and Billing",
          body: [
            "Prices may change. Taxes and currency conversions may apply based on your location and are shown at checkout. Payments are processed externally by Payhip and/or other third-party payment providers under their own terms. Obvious pricing errors do not bind us."
          ]
        },
        {
          title: "Cancellations and Refunds",
          body: [
            "UK and EEA consumers: for distance purchases, you have a statutory right of withdrawal unless you request immediate access to the Digital Product and acknowledge that this statutory right will no longer apply once download, streaming, or access starts. At checkout you will be asked for this consent, and our order email will confirm it.",
            "If you do not give that consent, for example for a pre-order, you may cancel within your statutory period from our order confirmation. We will revoke access and refund you.",
            "Consumers outside the UK and EEA: we do not offer change-of-mind refunds once download, streaming, or access has started. This does not affect any mandatory local rights.",
            "Faulty or not as described: if a Digital Product is faulty, not as described, or fails to meet the stated requirements, contact support@chart4traders.com. We will repair or replace it within a reasonable time. If that is impossible or fails, we will provide a price reduction or refund as required by law."
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
            "Any market, trading, or financial content is for education and information only and is not investment, legal, tax, financial, or other professional advice. Trading and investing involve risk, including loss of principal. Past performance is not indicative of future results."
          ]
        },
        {
          title: "Prohibited Uses",
          body: [
            "You must not use Digital Products or access to violate laws or third-party rights, upload malware or interfere with security, scrape, harvest, or spam, misrepresent your identity, circumvent usage limits or licence checks, or otherwise harm or overload our services."
          ]
        },
        {
          title: "Availability and Support",
          body: [
            "We provide Digital Products on a commercially reasonable basis but do not guarantee they will be uninterrupted, timely, secure, or error-free. Features may change or be discontinued. For support, contact support@chart4traders.com."
          ]
        },
        {
          title: "Disclaimers",
          body: [
            "Digital Products and related content are provided as is and as available. To the fullest extent permitted by law, all warranties, express, implied, or statutory, are disclaimed, including merchantability, fitness for a particular purpose, and non-infringement."
          ]
        },
        {
          title: "Limitation of Liability",
          body: [
            "Nothing in these Terms limits liability that cannot legally be limited, including for fraud or for death or personal injury caused by negligence where such limitation would be unlawful.",
            "Subject to that, we are not liable for any indirect, incidental, special, consequential, exemplary, or punitive damages, loss of profits, revenues, data, or goodwill, or similar losses arising from or related to your purchase or use of Digital Products.",
            "For paid Digital Products, our total aggregate liability for foreseeable loss or damage is limited to the price you paid for the affected Digital Product."
          ]
        },
        {
          title: "Business Customers",
          body: [
            "If you purchase for business use, any implied terms are excluded to the fullest extent permitted by law, and we are not liable for loss of profit, loss of business, business interruption, or loss of business opportunity."
          ]
        },
        {
          title: "Governing Law and Jurisdiction",
          body: [
            "These Terms of Service are governed by the laws of England and Wales. If you are a UK consumer living elsewhere in the UK, you may bring proceedings in your local courts. Otherwise, the courts of England and Wales have exclusive jurisdiction, subject to any mandatory consumer protections in your country."
          ]
        }
      ]}
    />
  );
}
