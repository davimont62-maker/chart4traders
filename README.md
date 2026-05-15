# Chart4Traders Website

Production-ready starter website for Chart4Traders (C4T), a branded marketing and SEO site for Sierra Chart templates, chartbooks, PDF guides, and trading education products.

## Folder Structure

- `app/[locale]` contains language-ready routes such as `/en`, `/en/products`, `/en/products/[slug]`, `/en/free`, `/en/courses`, and `/en/guides`.
- `app/[locale]/installation-guide` contains the customer setup guide for Sierra Chart chartbook installation.
- `components` contains reusable UI blocks such as header, footer, product cards, CTA sections, breadcrumbs, FAQ lists, and placeholder image panels.
- `data/products.ts` contains local mock product data and Payhip URLs.
- `data/guides.ts` contains local guide/article data for the SEO section.
- `lib/i18n.ts` contains locale configuration for English now and future Italian, Spanish, and Portuguese routes.

## Editing Products

Products can now be managed in Sanity CMS once `NEXT_PUBLIC_SANITY_PROJECT_ID` is configured.

Until Sanity is connected, the website safely falls back to `data/products.ts`.

Each product supports:

- `title`
- `slug`
- `category`
- `shortDescription`
- `fullDescription`
- `price`
- `productType`
- `image`
- `gallery`
- `includedItems`
- `targetUser`
- `compatibility`
- `faq`
- `payhipUrl`
- `featured`
- `language`
- optional `badge`
- optional `modules`

## Replacing Payhip Links

In Sanity, paste the real Payhip product page URL into the product's `Payhip product URL` field.

If using the local fallback data, replace each placeholder `payhipUrl` in `data/products.ts`.

This site does not include checkout, cart, payment forms, Stripe, accounts, or subscriptions. All purchase buttons link externally to Payhip for checkout, VAT handling where applicable, file delivery, and download access.

## Adding a New Language Later

The routing is already prepared for:

- `/en`
- `/it`
- `/es`
- `/pt`

To add a live language later:

1. Add translated product entries in `data/products.ts` with `language: "it"`, `language: "es"`, or `language: "pt"`.
2. Add translated guide entries in `data/guides.ts`.
3. Update visible page copy or introduce locale dictionaries if you want full UI translation.
4. Keep the same product slugs or use localized slugs depending on your SEO strategy.

## Deploying to Vercel

1. Push the project to a Git repository.
2. Import the repository in Vercel.
3. Use the default Next.js build settings.
4. Set the production domain when ready.

Local commands:

```bash
npm install
npm run dev
npm run build
```

## Sanity CMS

The admin panel is embedded at:

```text
/studio
```

To connect it:

1. Create a free Sanity project.
2. Copy `.env.example` to `.env.local`.
3. Add your Sanity project ID:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

4. Start the site:

```bash
npm run dev
```

5. Open:

```text
http://localhost:3000/studio
```

The Studio has document types for:

- Products
- Guides / Articles

Payhip remains the checkout, VAT, and delivery layer.

## Assumptions

- English is the only complete live content language for now.
- Product screenshots are represented by polished placeholders until real Sierra Chart screenshots are available.
- Payhip remains the payment, VAT, and delivery layer.
- The website is informational and educational, not financial advice.
