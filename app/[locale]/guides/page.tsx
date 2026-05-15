import { redirect } from "next/navigation";
import { localizedPath, type Locale } from "@/lib/i18n";

export default async function GuidesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  redirect(localizedPath(locale, "/blog"));
}
