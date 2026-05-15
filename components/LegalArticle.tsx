import { Section } from "@/components/Section";

type LegalSection = {
  title: string;
  body: string[];
};

export function LegalArticle({
  title,
  intro,
  lastUpdated,
  sections
}: {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
}) {
  return (
    <Section eyebrow="Legal" title={title} intro={intro} className="py-8 sm:py-9">
      <article className="mx-auto max-w-3xl">
        <p className="mb-5 border-b border-line pb-3 text-[11px] text-steel/75">
          Last updated: {lastUpdated}
        </p>

        <div className="grid gap-5">
          {sections.map((section) => (
            <section className="border-t border-line/80 pt-4" key={section.title}>
              <h2 className="text-sm font-medium text-white/90">{section.title}</h2>
              <div className="mt-2 grid gap-2">
                {section.body.map((paragraph) => (
                  <p className="text-xs leading-5 text-steel/85" key={paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
    </Section>
  );
}
