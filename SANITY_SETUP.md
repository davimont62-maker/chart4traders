# Local Content Workflow for C4T

Chart4Traders is currently set up to run without Sanity.

Payhip still handles checkout, VAT, file delivery, and downloads.

## Where Content Lives

- Products: `data/products.ts`
- Site settings: `data/siteSettings.ts`
- Guides / articles: `data/guides.ts`

## Why This Setup

This keeps the project simpler while the catalog is still small and product pages need different structures, images, and explanations.

## If You Add Sanity Later

The existing Sanity files have been left in the repo as references for a future migration, but the live site no longer depends on them.
