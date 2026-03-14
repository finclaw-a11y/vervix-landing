# vervix Landing Page

Modern landing page for vervix — automated market research platform.

## Setup

### 1. Install Dependencies
```bash
cd projects/finclaw
npm install
```

### 2. Configure Stripe Keys
Copy `.env.local.example` to `.env.local` and add your Stripe keys:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_key
STRIPE_SECRET_KEY=sk_live_your_key
NEXT_PUBLIC_URL=https://vervix.ai
```

### 3. Create Stripe Products

In your Stripe Dashboard, create three subscription products:

**Starter Plan:**
- Name: vervix Starter
- Price: $39/month
- Copy the Price ID: `price_starter`

**Pro Plan:**
- Name: vervix Pro  
- Price: $99/month
- Copy the Price ID: `price_pro`

**Enterprise Plan:**
- Name: vervix Enterprise
- Price: Custom (leave blank for now)
- Create a link for contact sales

Update the `handleCheckout` function in `pages/index.jsx` with actual Stripe price IDs.

### 4. Deploy to Vercel

```bash
npm i -g vercel
vercel
```

Set environment variables in Vercel dashboard:
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_URL`

### 5. Connect Domain

In Vercel: Settings → Domains → Add `vervix.ai`

Update your domain registrar's DNS to point to Vercel.

## Local Development

```bash
npm run dev
```

Visit `http://localhost:3000`

## Features

- ✅ Pricing page with three tiers
- ✅ Stripe Checkout integration
- ✅ Success page after purchase
- ✅ Fully responsive design
- ✅ Dark mode (slate + blue accent)
- ✅ API endpoint for creating checkout sessions

## Next Steps

1. Register `finclaw.ai` domain
2. Create Stripe products and get Price IDs
3. Update `.env.local` with real credentials
4. Deploy to Vercel
5. Point domain to Vercel

---

Built with Next.js + Tailwind CSS + Stripe
