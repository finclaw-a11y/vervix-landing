# Stripe Setup Guide for vervix

Follow these steps to get your payment processing live.

## Step 1: Get Your Stripe Keys

1. Go to https://dashboard.stripe.com/
2. Navigate to **Developers** → **API Keys**
3. Copy both:
   - **Publishable Key** (starts with `pk_`)
   - **Secret Key** (starts with `sk_`)
4. Use **test keys** for development, **live keys** for production

## Step 2: Create Stripe Products

### Starter Plan ($39/month)
1. Go to **Products** → **Create Product**
2. Fill in:
   - Name: `vervix Starter`
   - Description: `1-2 markets, basic AI insights, 1 user, CSV exports`
3. Set pricing:
   - Price: `$39.00`
   - Billing period: `Monthly`
4. Click **Create Product**
5. **Copy the Price ID** (looks like `price_1N...`) from the Pricing section
6. Update `pages/index.jsx` line 23: Replace `'price_starter'` with your actual Price ID

### Pro Plan ($99/month)
1. Repeat above with:
   - Name: `vervix Pro`
   - Description: `5-10 markets, advanced AI, 3 users, API access, auto-reports`
   - Price: `$99.00`
2. Copy the Price ID
3. Update `pages/index.jsx` line 45: Replace `'price_pro'` with your actual Price ID

### Enterprise Plan (Custom)
1. Create product:
   - Name: `vervix Enterprise`
   - Description: `Unlimited markets, white-label, full API, dedicated support`
2. Don't set a price (will be custom quoted)
3. For now, the "Contact Sales" button links to your email

## Step 3: Configure Environment Variables

Create `.env.local` in the `projects/finclaw/` folder:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxx
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxx
NEXT_PUBLIC_URL=http://localhost:3000
```

Replace with your actual keys.

## Step 4: Test Checkout Locally

```bash
cd projects/finclaw
npm install
npm run dev
```

Visit http://localhost:3000 and test the "Get Started" buttons.

Use Stripe test card: `4242 4242 4242 4242` (exp: any future date, CVC: any 3 digits)

## Step 5: Deploy to Vercel

1. Push your code to a Git repo (GitHub recommended)
2. Go to https://vercel.com/
3. Click **Add New** → **Project**
4. Import your repo
5. In **Environment Variables**, add:
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_URL=https://finclaw.ai`
6. Click **Deploy**

## Step 6: Connect Domain

In Vercel dashboard:
1. Go to your project → **Settings** → **Domains**
2. Add `vervix.ai`
3. Copy the DNS records Vercel provides
4. Go to your domain registrar (Namecheap, IONOS, etc.)
5. Update DNS records to point to Vercel
6. Wait 24-48 hours for DNS propagation

## Step 7: Switch to Live Keys (When Ready)

1. In Stripe Dashboard, toggle to **Live Mode**
2. Copy your **live keys** (start with `pk_live_` and `sk_live_`)
3. Update Vercel environment variables with live keys
4. Test a real transaction

## Webhook Setup (Optional, For Later)

If you want to send welcome emails after purchase:

1. In Stripe Dashboard → **Developers** → **Webhooks**
2. Add endpoint: `https://vervix.ai/api/webhooks/stripe`
3. Select events: `checkout.session.completed`
4. Copy Signing Secret
5. Add to Vercel env: `STRIPE_WEBHOOK_SECRET`

## Troubleshooting

**Checkout button does nothing:**
- Check browser console for errors
- Verify Price IDs are correct and match test/live mode

**Redirect fails after payment:**
- Ensure `NEXT_PUBLIC_URL` is set correctly in Vercel
- Check Stripe test mode is working first

**Domain not working:**
- DNS changes can take 24-48 hours
- Verify DNS records in your registrar's control panel

---

Need help? Stripe docs: https://stripe.com/docs
