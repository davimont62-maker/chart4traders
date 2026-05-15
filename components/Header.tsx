import Link from "next/link";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { localizedPath } from "@/lib/i18n";
import { ButtonLink } from "@/components/ButtonLink";

const navItems = [
  ["Home", ""],
  ["Products", "/products"],
  ["Setup Support", "/services/setup-support"],
  ["About Me", "/about"],
  ["FAQ", "/faq"],
  ["Blog", "/blog"]
] as const;

export function Header({ locale }: { locale: Locale }) {
  return (
    <header className="sticky top-0 z-40 bg-ink/92 text-white backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:px-8">
        <Link className="focus-ring rounded-sm" href={localizedPath(locale)}>
          <Image
            src="/brand/C4T%20Logo/chart4traders_nav_white_transparent_monitor_center_h64.png"
            alt="Chart4Traders"
            width={196}
            height={64}
            className="h-8 w-auto"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map(([label, href]) => (
            <Link
              className="focus-ring rounded-sm px-3 py-2 text-xs font-bold text-white hover:text-teal"
              href={localizedPath(locale, href)}
              key={href || "home"}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <ButtonLink href={localizedPath(locale, "/products")} className="px-4">
            products
          </ButtonLink>
        </div>
      </div>
      <nav className="flex gap-1 overflow-x-auto border-t border-line px-5 py-2 lg:hidden" aria-label="Mobile navigation">
        {navItems.map(([label, href]) => (
          <Link
            className="focus-ring whitespace-nowrap rounded-sm px-3 py-2 text-xs font-bold text-white hover:text-teal"
            href={localizedPath(locale, href)}
            key={href || "home-mobile"}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
