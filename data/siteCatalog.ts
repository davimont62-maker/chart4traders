import { defaultSiteSettings, type SiteSettings } from "@/data/siteSettings";

export async function getSiteSettings() {
  return defaultSiteSettings;
}
