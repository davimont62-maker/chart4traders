import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Chart4Traders",
  description:
    "Contact Chart4Traders for Sierra Chart product questions, setup support, Payhip delivery issues, and digital product assistance."
};

export default function ContactPage() {
  return (
    <section className="py-8 sm:py-9">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">
            Contact
          </p>
          <h1 className="max-w-2xl text-xl font-medium tracking-normal text-white sm:text-2xl">
            Product and order questions.
          </h1>
          <p className="mt-4 max-w-2xl text-xs leading-5 text-steel sm:text-[13px]">
            For product questions or order issues, contact Chart4Traders directly. Custom setup, personalisation, and one-to-one services will be offered separately as paid products.
          </p>

          <div className="mt-6 border-y border-line">
            <div className="grid gap-1 py-3 sm:grid-cols-[0.34fr_0.66fr]">
              <h2 className="text-xs font-medium text-white/95">Email</h2>
              <a className="text-xs leading-5 text-teal hover:text-volt" href="mailto:support@chart4traders.com">
                support@chart4traders.com
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
