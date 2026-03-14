# Quick Start — finclaw Landing Page

## For Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Visit http://localhost:3000
```

## To Customize

**Edit landing page copy:**
- `pages/index.jsx` — All text, features, pricing

**Change colors:**
- `tailwind.config.js` — Adjust colors
- `styles/globals.css` — Global styles

**Update pricing tiers:**
- `pages/index.jsx` lines 40-120 — Pricing section

## For Deployment

### Option A: Use Git + Vercel (Recommended)

```bash
# 1. Initialize git
git init
git add .
git commit -m "initial commit"

# 2. Push to GitHub
# (Create repo on GitHub first)
git push origin main

# 3. Go to Vercel.com → Import project from GitHub
# 4. Set env variables
# 5. Deploy
```

### Option B: Deploy from CLI

```bash
npm i -g vercel
vercel
```

## Environment Variables Needed

Create `.env.local`:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_URL=http://localhost:3000
```

Get these from your Stripe Dashboard → Developers → API Keys

## Testing Checkout

Use Stripe test card:
- Number: `4242 4242 4242 4242`
- Exp: Any future date (e.g., 12/26)
- CVC: Any 3 digits (e.g., 123)

This will NOT charge real money.

## Next: Connect Domain

Once deployed to Vercel:
1. Copy your domain `finclaw.ai`
2. Go to Vercel → Settings → Domains
3. Add domain
4. Update your domain registrar's DNS
5. Wait 24-48 hours

---

That's it! You're live.
