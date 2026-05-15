# Sanity CMS Setup for C4T

Sanity is the product admin area for Chart4Traders.

Payhip still handles checkout, VAT, file delivery, and downloads.

## What You Will Manage in Sanity

- Products
- Product images
- Product prices
- Payhip product links
- Included files
- Compatibility notes
- Product FAQ
- Guides / articles

## One-Time Setup

1. Create a free Sanity account.
2. Create a new Sanity project.
3. Use the dataset name:

```text
production
```

4. Copy `.env.example` to `.env.local`.
5. Add your project ID:

```text
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
```

6. Run the site:

```bash
npm run dev
```

7. Open the admin area:

```text
http://localhost:3000/studio
```

## Adding a Product

In Sanity Studio:

1. Click `Product`.
2. Click `Create new`.
3. Fill in:
   - Title
   - Slug
   - Price, for example `USD 49.00`
   - Payhip product URL
   - Short description
   - Full description
   - Main product image
   - Gallery images
   - Included files
   - Compatibility
   - FAQ
4. Set `Show on homepage` if you want it in Featured Templates.
5. Click `Publish`.

The website will read Sanity products once the Sanity project ID is configured.

## Important

If Sanity is not configured, the website uses the local fallback products in:

```text
data/products.ts
```
