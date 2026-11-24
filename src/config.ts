// Single place for site-wide links.
export const SHOP_URL = 'https://nellie-and-the-littles.myshopify.com'
export const PRODUCT_URL = `${SHOP_URL}/products/nellie-the-elephant`

// Judge.me reviews (platform-independent widgets, Awesome plan).
// Values come from build-time env vars: .env.local for local dev, and
// Cloudflare's build variables for deploys. Only the PUBLIC token goes
// here; it ships to the browser by design. Never use the private token.
export const JUDGEME = {
  shopDomain: import.meta.env.VITE_JUDGEME_SHOP_DOMAIN ?? '',
  publicToken: import.meta.env.VITE_JUDGEME_PUBLIC_TOKEN ?? '',
  productId: import.meta.env.VITE_JUDGEME_PRODUCT_ID ?? '',
}

export const JUDGEME_ENABLED = Boolean(JUDGEME.shopDomain && JUDGEME.publicToken && JUDGEME.productId)
