import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ButtonLink } from "@/components/ButtonLink";
import { Section } from "@/components/Section";
import { getSiteSettings } from "@/data/siteCatalog";
import { localizedPath, type Locale } from "@/lib/i18n";

const includedItems = [
  {
    title: "Chartbook installation",
    body: "Import and organise the chartbook correctly so the workspace opens with a clean starting structure."
  },
  {
    title: "Template and study setup",
    body: "Configure duplicated chart templates and apply study collections consistently across the workspace."
  },
  {
    title: "Data feed configuration",
    body: "Check the platform connection and core market data setup so charts populate as expected."
  },
  {
    title: "Symbol setup",
    body: "Align key futures symbols such as ES, NQ, CL, and GC with the intended workflow."
  },
  {
    title: "Timeframe alignment",
    body: "Make sure chart intervals and session logic match the intended use instead of creating mixed reference views."
  },
  {
    title: "Layout optimisation",
    body: "Build a cleaner desk layout so the workspace supports execution instead of adding unnecessary friction."
  },
  {
    title: "Indicator and tool explanation",
    body: "Walk through the installed tools so you understand what each chart element is doing and why it is there."
  }
];

const outcomes = [
  "Fully working Sierra Chart setup",
  "Clean and structured workspace",
  "Replicable chart configuration",
  "Clearer understanding of your workflow"
];

const steps = [
  "Purchase service",
  "Receive confirmation",
  "Session time arranged",
  "Live screen-sharing setup"
];

const targetUsers = [
  "New Sierra Chart users",
  "Traders switching platform",
  "Traders wanting a more structured workflow"
];

export const metadata: Metadata = {
  title: "C4T Configuration and Setup Support",
  description:
    "Professional Sierra Chart configuration and setup support for traders who want a clean, structured platform from day one."
};

export default async function SetupSupportPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const pagePath = localizedPath(locale, "/services/setup-support");
  const siteSettings = await getSiteSettings();
  const bookingHref = siteSettings.setupSupportPayhipUrl || localizedPath(locale, "/contact");
  const calendarHref = siteSettings.setupSupportBookingUrl || "";
  const servicePrice = siteSettings.setupSupportPrice;
  const calendlyEmbedUrl = getCalendlyEmbedUrl(calendarHref);

  return (
    <>
      <section className="px-5 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <Breadcrumbs
            items={[
              { label: "Home", href: localizedPath(locale) },
              { label: "Services", href: pagePath },
              { label: "Setup Support" }
            ]}
          />

          <div className="grid gap-8 border border-line bg-graphite/55 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">Service</p>
              <h1 className="max-w-lg text-3xl font-medium leading-tight tracking-normal text-white sm:text-4xl">
                C4T Configuration &amp; Setup Support
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-steel">
                Professional Sierra Chart setup, done correctly from day one.
              </p>
              <p className="mt-5 text-xl font-medium text-amber">{servicePrice}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href={bookingHref} external={bookingHref.startsWith("http")}>
                  Purchase Service
                </ButtonLink>
                <ButtonLink href={`${pagePath}#scheduling`} variant="secondary">
                  How Booking Works
                </ButtonLink>
              </div>
              <p className="mt-4 text-[11px] leading-5 text-steel">
                Purchase is completed first. Session time is then selected through the booking calendar.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <ServiceStat
                title="1-to-1 guided session"
                body="A direct working session focused on your platform, your desk, and your actual chart workflow."
              />
              <ServiceStat
                title="Configuration consistency"
                body="Templates are duplicated, study collections are applied correctly, and charts stay aligned across the workspace."
              />
              <ServiceStat
                title="Workflow alignment"
                body="The goal is not decoration. The goal is a structure that supports preparation, execution, and review."
              />
              <ServiceStat
                title="Trader-to-trader support"
                body="Practical Sierra Chart help without hype, fluff, or generic software support language."
              />
            </div>
          </div>
        </div>
      </section>

      <Section
        eyebrow="Problem"
        title="Why setup quality matters"
        intro="Sierra Chart is powerful, but poor configuration creates avoidable problems."
      >
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
          {[
            "Inconsistent charts",
            "Misaligned data and sessions",
            "Poor execution caused by avoidable platform friction"
          ].map((item) => (
            <div className="border-t border-line py-4" key={item}>
              <p className="text-sm font-medium text-white">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Service"
        title="A guided setup session, not generic tech support"
        intro="This service is built around clean installation, structured configuration, and practical workflow alignment."
      >
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-[1.05fr_0.95fr]">
          <div className="border-t border-line py-4">
            <p className="text-sm leading-6 text-steel">
              The session is designed to help you configure Sierra Chart correctly from the beginning instead of patching problems later.
            </p>
            <p className="mt-4 text-sm leading-6 text-steel">
              That includes installation review, chartbook and template structure, study collection logic, symbol alignment, and the small platform settings that affect consistency.
            </p>
          </div>
          <div className="border-t border-line py-4">
            <p className="text-sm leading-6 text-steel">
              Sierra Chart templates are normally created by duplication, and study collections need to be applied with care. If the configuration is inconsistent, the workspace quickly becomes harder to trust and harder to scale.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Included"
        title="What is included"
        intro="Practical Sierra Chart configuration support focused on clean logic and repeatability."
        className="scroll-mt-24"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3" id="included">
          {includedItems.map((item) => (
            <FeatureCard key={item.title} title={item.title} body={item.body} />
          ))}
        </div>
      </Section>

      <Section eyebrow="Outcome" title="What you get">
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
          {outcomes.map((item) => (
            <div className="border-t border-line py-4" key={item}>
              <p className="text-sm font-medium text-white">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Process" title="How it works">
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-4">
          {steps.map((step, index) => (
            <div className="border-t border-line py-4" key={step}>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-teal">Step {index + 1}</p>
              <h2 className="mt-2 text-sm font-medium text-white">{step}</h2>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Scheduling"
        title="Choose a time without email back and forth"
        intro="When online booking is live, clients will be able to choose an available session time directly."
      >
        <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-[1.05fr_0.95fr]" id="scheduling">
          <div className="border-t border-line py-4">
            <p className="text-sm leading-6 text-steel">
              The cleanest setup is to take payment through Payhip and use a booking calendar such as Calendly or Cal.com for the actual session time. You simply activate the slots you want to offer, and the client chooses one directly.
            </p>
            <p className="mt-4 text-sm leading-6 text-steel">
              That removes back-and-forth email and gives you a clear availability system you can update whenever you are at the desk.
            </p>
          </div>
          <div className="border-t border-line py-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">Recommended flow</p>
            <ul className="mt-3 grid gap-2 text-xs leading-5 text-steel">
              <li className="before:mr-2 before:text-teal before:content-['/']">Client purchases the service on Payhip</li>
              <li className="before:mr-2 before:text-teal before:content-['/']">Client opens the booking calendar</li>
              <li className="before:mr-2 before:text-teal before:content-['/']">Client selects an active slot</li>
              <li className="before:mr-2 before:text-teal before:content-['/']">Session is confirmed without manual scheduling email</li>
            </ul>
            <p className="mt-4 text-[11px] leading-5 text-steel">
              This keeps payment and scheduling separate but connected: Payhip handles checkout, and Calendly handles time selection.
            </p>
            {calendarHref ? (
              <ButtonLink href={calendarHref} external className="mt-5">
                Open Booking Calendar
              </ButtonLink>
            ) : (
              <p className="mt-5 text-[11px] leading-5 text-steel">
                Session availability will be published here once online booking is open.
              </p>
            )}
          </div>
        </div>
      </Section>

      {calendlyEmbedUrl ? (
        <Section
          eyebrow="Calendar"
          title="Book your slot online"
          intro="Once your payment is completed, the session can be scheduled directly here through Calendly."
        >
          <div className="mx-auto max-w-4xl overflow-hidden border border-line bg-graphite/45">
            <iframe
              className="h-[760px] w-full bg-white"
              src={calendlyEmbedUrl}
              title="Calendly booking calendar"
            />
          </div>
        </Section>
      ) : null}

      <Section eyebrow="For who" title="Who this service is for">
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
          {targetUsers.map((item) => (
            <div className="border-t border-line py-4" key={item}>
              <p className="text-sm font-medium text-white">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Why it matters" title="Proper configuration improves the trading workflow">
        <div className="mx-auto max-w-3xl border-t border-line py-4 text-center">
          <p className="text-sm leading-6 text-steel">
            A correctly configured platform improves speed, clarity, and execution consistency. The aim is to reduce platform friction so your attention stays on the market instead of on technical inconsistencies.
          </p>
        </div>
      </Section>

      <section className="border-y border-line bg-graphite/70 py-12 text-white">
        <div className="mx-auto flex max-w-5xl flex-col gap-6 px-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">Book now</p>
            <h2 className="mt-3 text-2xl font-medium tracking-normal text-white">Get your setup done professionally</h2>
            <p className="mt-3 text-base font-medium text-amber">{servicePrice}</p>
            <p className="mt-3 text-sm leading-6 text-white/72">
              Book a one-to-one Sierra Chart configuration session and start from a cleaner, more reliable workspace.
            </p>
            <p className="mt-3 text-[11px] leading-5 text-white/58">
              Purchase first on Payhip. Booking is then completed through the calendar.
            </p>
          </div>
          <ButtonLink href={bookingHref} external={bookingHref.startsWith("http")} className="shrink-0">
            Purchase Service
          </ButtonLink>
        </div>
      </section>

      <Section
        eyebrow="Advanced setup"
        title="Advanced Setup (Pro)"
        intro="Future upgrade placeholder for traders who want a deeper configuration package."
      >
        <div className="mx-auto max-w-3xl border-t border-line py-4">
          <p className="text-sm leading-6 text-steel">
            This space can later be used for higher-level services such as multi-workspace configuration, deeper orderflow desk layout planning, and more advanced Sierra Chart environment structuring.
          </p>
        </div>
      </Section>
    </>
  );
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <article className="group border border-line bg-graphite/45 p-5 transition hover:border-teal/60 hover:bg-graphite/70">
      <div className="mb-4 inline-flex h-8 w-8 items-center justify-center rounded-full border border-line text-[10px] font-semibold uppercase tracking-[0.12em] text-teal">
        C4T
      </div>
      <h3 className="text-sm font-medium text-white">{title}</h3>
      <p className="mt-3 text-xs leading-5 text-steel">{body}</p>
    </article>
  );
}

function ServiceStat({ title, body }: { title: string; body: string }) {
  return (
    <div className="border-t border-line py-4">
      <h2 className="text-sm font-medium text-white">{title}</h2>
      <p className="mt-2 text-xs leading-5 text-steel">{body}</p>
    </div>
  );
}

function getCalendlyEmbedUrl(url: string) {
  if (!url || !url.includes("calendly.com")) {
    return "";
  }

  const divider = url.includes("?") ? "&" : "?";
  return `${url}${divider}embed_domain=chart4traders.com&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1`;
}
