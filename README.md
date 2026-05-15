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

Products are currently managed directly in `data/products.ts`.

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

Replace each placeholder `payhipUrl` in `data/products.ts`.

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

## Site Settings

Site-wide settings such as support email, chat text, setup-support price, and booking links are managed in:

```text
data/siteSettings.ts
```

The `/studio` route now acts as a simple note page explaining the local-data workflow.

## Assumptions

- English is the only complete live content language for now.
- Product screenshots are represented by polished placeholders until real Sierra Chart screenshots are available.
- Payhip remains the payment, VAT, and delivery layer.
- Products are intentionally managed in local files for now so important product pages can stay custom.
- The website is informational and educational, not financial advice.
