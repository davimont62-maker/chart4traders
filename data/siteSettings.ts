export type ChatMode = "online" | "offline" | "hidden";

export type SiteSettings = {
  supportEmail: string;
  chatMode: ChatMode;
  chatTitle: string;
  onlineMessage: string;
  onlineUrl?: string;
  offlineMessage: string;
  setupSupportPrice: string;
  setupSupportPayhipUrl?: string;
  setupSupportBookingUrl?: string;
  setupSupportTeaserTitle: string;
  setupSupportTeaserBody: string;
};

export const defaultSiteSettings: SiteSettings = {
  supportEmail: "support@chart4traders.com",
  chatMode: "offline",
  chatTitle: "Live Chat",
  onlineMessage: "I am at the desk now. Open the live chat room to talk in real time.",
  onlineUrl: "",
  offlineMessage: "I am away from the desk right now. Leave a message and I will reply by email."
  ,
  setupSupportPrice: "USD 99.00",
  setupSupportPayhipUrl: "",
  setupSupportBookingUrl: "",
  setupSupportTeaserTitle: "Need Sierra Chart configured properly from the start?",
  setupSupportTeaserBody:
    "One-to-one configuration support for traders who want clean installation, structured chartbooks, aligned symbols, and a more reliable workflow from day one."
};
