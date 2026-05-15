import type { Metadata } from "next";
import { LegalArticle } from "@/components/LegalArticle";

export const metadata: Metadata = {
  title: "Shipping and Delivery Policy | Chart4Traders",
  description:
    "Shipping and delivery policy for Chart4Traders digital products, downloads, licence keys, and access-controlled content."
};

export default function ShippingPolicyPage() {
  return (
    <LegalArticle
      title="Shipping and Delivery Policy"
      intro="How Chart4Traders delivers digital products, including downloads, licence keys, streaming access, and members-area access."
      lastUpdated="20 September 2025"
      sections={[
        {
          title: "What This Covers",
          body: [
            "This policy explains how we deliver digital products purchased from this website/store, including downloads, licence keys, streaming access, and members-area access."
          ]
        },
        {
          title: "How Delivery Works",
          body: [
            "After successful payment, access is provided by a download link, licence key, streaming, and/or account access shown on-screen and/or sent to the email address entered at checkout.",
            "Please make sure your email address is correct and check spam or junk folders if the message does not arrive."
          ]
        },
        {
          title: "Typical Delivery Time",
          body: [
            "Delivery is usually instant after payment. In some cases, such as payment provider delays, fraud checks, high server load, or maintenance, fulfilment may take longer.",
            "If there is a material delay, we will make reasonable efforts to notify you."
          ]
        },
        {
          title: "File Formats and Requirements",
          body: [
            "Digital products are supplied in the formats stated on the product page, for example .zip, .pdf, .csv, .mp4, or other listed formats.",
            "You are responsible for having the required software, accounts, data feeds, or hardware to open and use these files."
          ]
        },
        {
          title: "No Shipping Fees",
          body: [
            "There are no shipping or handling fees for digital products delivered electronically."
          ]
        },
        {
          title: "If You Do Not Receive Access",
          body: [
            "If you do not receive your download or access email within a short time of purchase, check spam, junk, and promotions folders first.",
            "Verify the email address on your order.",
            "Contact support@chart4traders.com with your order number, and we will resend access."
          ]
        },
        {
          title: "Re-Delivery, Link Expiry, and Limits",
          body: [
            "For security and server performance, downloads or links may expire after a period or number of attempts.",
            "We can refresh or replace links on request to support@chart4traders.com once we verify the order.",
            "We may throttle, rate-limit, or suspend downloads to protect our systems and other users."
          ]
        },
        {
          title: "Physical Items",
          body: [
            "If we offer a physical product in the future, for example printed materials, shipping options, fees, carriers, and estimated delivery times will be shown at checkout, and any applicable taxes or duties will be your responsibility."
          ]
        },
        {
          title: "Updates to This Policy",
          body: [
            "We may update this Shipping and Delivery Policy from time to time. Changes take effect when posted on this page."
          ]
        },
        {
          title: "Contact",
          body: ["For delivery questions or access issues, email support@chart4traders.com."]
        }
      ]}
    />
  );
}
