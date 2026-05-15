import { redirect } from "next/navigation";
import { localizedPath, type Locale } from "@/lib/i18n";

type PageProps = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export default async function GuidePage({ params }: PageProps) {
  const { locale, slug } = await params;
  redirect(localizedPath(locale, `/blog/${slug}`));
}
