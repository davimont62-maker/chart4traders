import { sanityClient, hasSanityConfig } from "@/lib/sanity/client";
import { defaultSiteSettings, type SiteSettings } from "@/data/siteSettings";

const siteSettingsProjection = `{
  supportEmail,
  chatMode,
  chatTitle,
  onlineMessage,
  onlineUrl,
  offlineMessage,
  setupSupportPrice,
  setupSupportPayhipUrl,
  setupSupportBookingUrl,
  setupSupportTeaserTitle,
  setupSupportTeaserBody
}`;

function normalizeSettings(settings: Partial<SiteSettings> | null | undefined): SiteSettings {
  return {
    supportEmail: settings?.supportEmail || defaultSiteSettings.supportEmail,
    chatMode: settings?.chatMode || defaultSiteSettings.chatMode,
    chatTitle: settings?.chatTitle || defaultSiteSettings.chatTitle,
    onlineMessage: settings?.onlineMessage || defaultSiteSettings.onlineMessage,
    onlineUrl: settings?.onlineUrl || defaultSiteSettings.onlineUrl,
    offlineMessage: settings?.offlineMessage || defaultSiteSettings.offlineMessage,
    setupSupportPrice: settings?.setupSupportPrice || defaultSiteSettings.setupSupportPrice,
    setupSupportPayhipUrl: settings?.setupSupportPayhipUrl || defaultSiteSettings.setupSupportPayhipUrl,
    setupSupportBookingUrl: settings?.setupSupportBookingUrl || defaultSiteSettings.setupSupportBookingUrl,
    setupSupportTeaserTitle: settings?.setupSupportTeaserTitle || defaultSiteSettings.setupSupportTeaserTitle,
    setupSupportTeaserBody: settings?.setupSupportTeaserBody || defaultSiteSettings.setupSupportTeaserBody
  };
}

export async function getSiteSettings() {
  if (!hasSanityConfig) {
    return defaultSiteSettings;
  }

  try {
    const settings = await sanityClient.fetch<Partial<SiteSettings> | null>(
      `*[_type == "siteSettings"][0] ${siteSettingsProjection}`,
      {},
      { next: { revalidate: 60 } }
    );

    return normalizeSettings(settings);
  } catch {
    return defaultSiteSettings;
  }
}
