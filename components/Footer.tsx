import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink text-white">
      <div className="mx-auto grid max-w-5xl gap-5 px-5 py-5 sm:px-6 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Image
            src="/brand/C4T%20Logo/chart4traders_nav_white_transparent_monitor_center_h64.png"
            alt="Chart4Traders"
            width={196}
            height={64}
            className="h-5 w-auto opacity-80"
          />
          <p className="mt-2 max-w-sm text-[11px] leading-4 text-steel/80">
            A solo trader project selling Sierra Chart templates, chartbooks, and practical workflow resources.
          </p>
        </div>
        <div>
          <p className="text-[11px] font-medium text-white/80">Explore</p>
          <div className="mt-2 grid gap-1.5 text-[11px] text-steel/80">
            <Link href={localizedPath(locale, "/products")}>Products</Link>
            <Link href={localizedPath(locale, "/services/setup-support")}>Setup Support</Link>
            <Link href={localizedPath(locale, "/blog")}>Blog</Link>
            <Link href={localizedPath(locale, "/installation-guide")}>Installation overview</Link>
          </div>
        </div>
        <div>
          <p className="text-[11px] font-medium text-white/80">Project</p>
          <div className="mt-2 grid gap-1.5 text-[11px] text-steel/80">
            <Link href={localizedPath(locale, "/about")}>About</Link>
            <Link href={localizedPath(locale, "/faq")}>FAQ</Link>
            <Link href={localizedPath(locale, "/contact")}>Contact</Link>
            <Link href={localizedPath(locale, "/privacy")}>Privacy</Link>
            <Link href={localizedPath(locale, "/legal-terms")}>Legal Terms</Link>
            <Link href={localizedPath(locale, "/terms")}>Terms of Sale</Link>
            <Link href={localizedPath(locale, "/terms-of-service")}>Terms of Service</Link>
            <Link href={localizedPath(locale, "/shipping-policy")}>Shipping Policy</Link>
            <Link href={localizedPath(locale, "/disclaimer")}>Disclaimer</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-line px-5 py-2 text-center text-[10px] text-steel/70">
        (c) {year} Chart4Traders. Educational products only. Trading futures involves significant risk.
      </div>
    </footer>
  );
}
