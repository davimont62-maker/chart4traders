import { Section } from "@/components/Section";

export function LegalPage({
  title,
  intro,
  items
}: {
  title: string;
  intro: string;
  items: string[];
}) {
  return (
    <Section eyebrow="Legal" title={title} intro={intro} className="py-8 sm:py-9">
      <div className="mx-auto max-w-3xl">
        <ul className="grid gap-3">
          {items.map((item) => (
            <li className="border-t border-line py-3 text-xs leading-5 text-steel/85" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
