import { Studio } from "./Studio";
import { hasSanityConfig } from "@/sanity/env";

export const dynamic = "force-static";

export default function StudioPage() {
  if (!hasSanityConfig) {
    return (
      <main className="min-h-screen bg-ink px-6 py-16 text-white">
        <div className="mx-auto max-w-2xl border border-line bg-graphite/60 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">Sanity CMS</p>
          <h1 className="mt-3 text-2xl font-semibold">Connect your Sanity project</h1>
          <p className="mt-4 text-sm leading-6 text-steel">
            Create a free Sanity project, then add your project ID to <code>.env.local</code>. Until then, the website keeps using the local fallback products.
          </p>
          <pre className="mt-5 overflow-x-auto bg-ink p-4 text-xs leading-5 text-steel">
{`NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01`}
          </pre>
        </div>
      </main>
    );
  }

  return <Studio />;
}
