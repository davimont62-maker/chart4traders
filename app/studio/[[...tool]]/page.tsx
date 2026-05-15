export const dynamic = "force-static";

export default function StudioPage() {
  return (
    <main className="min-h-screen bg-ink px-6 py-16 text-white">
      <div className="mx-auto max-w-2xl border border-line bg-graphite/60 p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Content workflow</p>
        <h1 className="mt-3 text-2xl font-semibold">This site now runs without Sanity</h1>
        <p className="mt-4 text-sm leading-6 text-steel">
          Products, settings, and page content are currently managed directly in the project files so each product page can stay custom and easier to shape.
        </p>
        <p className="mt-4 text-sm leading-6 text-steel">
          Update products in <code>data/products.ts</code> and site-wide settings in <code>data/siteSettings.ts</code>. Sanity can be added back later if the catalog grows.
        </p>
      </div>
    </main>
  );
}
