import type { Metadata } from "next";
import { LegalArticle } from "@/components/LegalArticle";

export const metadata: Metadata = {
  title: "Privacy Policy | Chart4Traders",
  description:
    "Privacy policy for Chart4Traders visitors, customers, digital products, Payhip checkout, PayPal payments, and support communications."
};

export default function PrivacyPage() {
  return (
    <LegalArticle
      title="Privacy Policy"
      intro="How Chart4Traders collects, uses, shares, and protects personal data for visitors and customers of digital products."
      lastUpdated="20 September 2025"
      sections={[
        {
          title: "What This Policy Covers",
          body: [
            "This policy explains what personal data we collect, how we use it, who we share it with, your choices and rights, and how to contact us.",
            "It applies to visitors, account holders, and customers of our digital products, including templates, indicators, chart files, course materials, downloads, licence keys, and members-area access."
          ]
        },
        {
          title: "Personal Data We Collect",
          body: [
            "Identity and contact data: name, email, billing address, country, and optional phone.",
            "Account and purchase data: username, hashed password, product licences or keys, and order history.",
            "Transaction data: items purchased, price, currency, payment status, order IDs, and timestamps.",
            "Payment data: payments are processed by third-party providers such as PayPal through Payhip checkout. We receive payment confirmations or tokens and do not receive full card or bank details.",
            "Technical and usage data: IP address, device and browser information, pages viewed, links clicked, downloads, and referral URLs.",
            "Communications: support requests, messages, reviews, and your marketing preferences.",
            "User content: anything you upload or submit to us, where applicable."
          ]
        },
        {
          title: "How We Collect It",
          body: [
            "Directly from you at checkout, when creating an account, contacting support, or signing up for updates.",
            "Automatically via cookies and similar technologies on our site and store pages hosted by Payhip.",
            "From third parties, for example PayPal payment confirmations and Payhip order or fulfilment data."
          ]
        },
        {
          title: "How We Use Your Data",
          body: [
            "To provide the store and fulfil orders, including delivering downloads, keys, access, receipts, service messages, and licence management. Legal basis: contract and legitimate interests.",
            "For account management and support, including authentication, troubleshooting, and responding to messages. Legal basis: contract and legitimate interests.",
            "For security and fraud prevention, including monitoring abuse and protecting our services. Legal basis: legitimate interests and legal obligation.",
            "For marketing, such as optional emails about new products or offers. Legal basis: consent or legitimate interests/soft opt-in. You can unsubscribe anytime.",
            "For analytics and improvement, to understand performance and improve products. Legal basis: legitimate interests.",
            "For compliance and record-keeping, including tax and accounting records and lawful requests from authorities. Legal basis: legal obligation."
          ]
        },
        {
          title: "Payments and Platform",
          body: [
            "We use Payhip to operate the store and deliver digital products. Payhip processes order and fulfilment data on our behalf.",
            "We may use PayPal to process payments. PayPal acts as an independent controller of your payment data. We receive payment confirmations and do not see your full card or bank details.",
            "You should also review Payhip's and PayPal's own privacy notices, as their processing is governed by their terms."
          ]
        },
        {
          title: "Sharing Your Data",
          body: [
            "We share personal data only as needed with trusted providers who process it for us, including Payhip for store operation, order processing, delivery of downloads or keys, and customer accounts.",
            "We share payment-related data with PayPal or other payment providers where needed for payment processing and confirmations.",
            "We may use email, security, CDN, hosting, or analytics providers where needed for receipts, support, security, performance, and improvement.",
            "These providers must keep data secure and act on our instructions where they process data for us. We may also share data if required by law, to protect rights or safety, or in connection with a business change such as a sale or transfer of assets."
          ]
        },
        {
          title: "International Transfers",
          body: [
            "Your data may be processed or stored outside the UK or EEA, for example by Payhip, PayPal, email, hosting, or analytics providers.",
            "Where transfers occur, we rely on recognised safeguards such as adequacy regulations or Standard Contractual Clauses/UK IDTA, and we take reasonable steps to protect your data."
          ]
        },
        {
          title: "Cookies and Tracking",
          body: [
            "We use essential cookies to run the store, for example to keep you signed in and process orders. We may also use analytics or marketing cookies.",
            "You can manage non-essential cookies through the banner where shown or through your browser settings. See our Cookie Policy for details when available."
          ]
        },
        {
          title: "Marketing Choices",
          body: [
            "You can opt out of marketing at any time by using the unsubscribe link in our emails or contacting support@chart4traders.com.",
            "Service and transactional emails, such as receipts, licence keys, and access updates, will still be sent."
          ]
        },
        {
          title: "Data Retention",
          body: [
            "Orders and invoices are kept for up to 6 years for tax and accounting purposes.",
            "Account and support data is kept while your account is active and for a reasonable period after closure.",
            "Marketing data is kept until you unsubscribe or withdraw consent.",
            "We may retain information longer where required by law or to establish, exercise, or defend legal claims."
          ]
        },
        {
          title: "Security",
          body: [
            "We use appropriate technical and organisational measures, including encryption in transit, access controls, and least-privilege access.",
            "No method is 100% secure. Please keep your account credentials safe and tell us promptly if you suspect unauthorised access."
          ]
        },
        {
          title: "Your Rights",
          body: [
            "You may have the right to access, rectify, erase, restrict or object to processing, and to data portability. Where we rely on consent, you can withdraw it at any time.",
            "We will respond within one month, or as required by law, and may ask for proof of identity.",
            "If you have concerns, contact us first at support@chart4traders.com. You can also complain to your local authority. In the UK, that is the Information Commissioner's Office (ICO): ico.org.uk."
          ]
        },
        {
          title: "Children",
          body: [
            "Our site and products are intended for adults and are not for under-18s. We do not knowingly collect children's personal data."
          ]
        },
        {
          title: "Automated Decisions",
          body: [
            "We do not make decisions producing legal or similarly significant effects solely by automated means. Basic fraud or abuse screening may occur; you can request human review."
          ]
        },
        {
          title: "Links to Other Sites",
          body: [
            "Our site may link to third-party websites or services, including Payhip and PayPal checkout pages. Their privacy practices are their own, so please review their policies."
          ]
        },
        {
          title: "Changes to This Policy",
          body: [
            "We may update this Privacy Policy from time to time. The new version will be posted here with an updated Last updated date. For material changes, we may also notify you by email or site notice."
          ]
        },
        {
          title: "Contact",
          body: ["For privacy questions, email support@chart4traders.com."]
        }
      ]}
    />
  );
}
