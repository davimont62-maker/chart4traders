import { ButtonLink } from "@/components/ButtonLink";

export function CTA({
  title,
  description,
  price,
  href,
  label = "View Products",
  buttonVariant = "secondary",
  external = false
}: {
  title: string;
  description: string;
  price?: string;
  href: string;
  label?: string;
  buttonVariant?: "primary" | "secondary" | "dark" | "ghost";
  external?: boolean;
}) {
  return (
    <section className="border-y border-line bg-graphite/70 py-12 text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-xl font-medium tracking-normal text-white sm:text-2xl">{title}</h2>
          {price ? <p className="mt-3 text-base font-medium text-amber">{price}</p> : null}
          <p className="mt-3 text-sm leading-6 text-white/72">{description}</p>
        </div>
        <ButtonLink href={href} external={external} variant={buttonVariant} className="shrink-0">
          {label}
        </ButtonLink>
      </div>
    </section>
  );
}
