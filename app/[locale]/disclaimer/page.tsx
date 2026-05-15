import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Disclaimer | Chart4Traders",
  description:
    "Chart4Traders risk disclaimer for trading templates, indicators, and educational materials."
};

export default function DisclaimerPage() {
  return (
    <LegalPage
      title="Disclaimer"
      intro="Risk notice for Chart4Traders templates, indicators, and educational materials."
      items={[
        "Trading carries significant risk; your capital is at risk. Our templates, indicators, and educational materials are provided for information only and do not constitute financial, investment, legal, or tax advice. No product guarantees profits or prevents losses; past performance is not a reliable indicator of future results. By using our products you accept these risks. To the maximum extent permitted by law, we are not responsible for losses arising from their use."
      ]}
    />
  );
}
