import { cn } from "@/lib/utils";

type SectionProps = {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ eyebrow, title, intro, children, className }: SectionProps) {
  const isDark = true;

  return (
    <section className={cn("py-10 sm:py-12", className)}>
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {(eyebrow || title || intro) && (
          <div className="mx-auto mb-7 max-w-xl text-center">
            {eyebrow && (
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-xl font-medium tracking-normal text-white sm:text-2xl">
                {title}
              </h2>
            )}
            {intro && <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-steel">{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
