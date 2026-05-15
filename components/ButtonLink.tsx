import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "dark" | "ghost";
  external?: boolean;
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external = false,
  className
}: ButtonLinkProps) {
  const classes = cn(
    "focus-ring inline-flex min-h-9 items-center justify-center rounded-full px-5 py-2 text-xs font-semibold lowercase tracking-normal transition",
    variant === "primary" && "bg-teal text-ink hover:bg-volt",
    variant === "secondary" && "border border-line bg-transparent text-white hover:border-teal hover:text-teal",
    variant === "dark" && "bg-amber text-ink hover:bg-teal",
    variant === "ghost" && "text-white hover:text-teal",
    className
  );

  if (external) {
    return (
      <a className={classes} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
