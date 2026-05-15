import type { ProductFaq } from "@/data/products";

export function FAQList({ faqs }: { faqs: ProductFaq[] }) {
  return (
    <div className="border-y border-line">
      {faqs.map((faq) => (
        <details className="group border-b border-line py-3 last:border-b-0" key={faq.question}>
          <summary className="flex cursor-pointer list-none items-start gap-3 text-sm font-medium text-white/95 marker:hidden">
            <span className="mt-[7px] h-px w-3 shrink-0 bg-white/80 transition group-open:rotate-90 group-open:bg-teal" />
            <span>{faq.question}</span>
          </summary>
          <p className="ml-6 mt-2 max-w-3xl text-xs leading-5 text-steel/90">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}
