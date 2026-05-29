# ResumeBoost AI

Paid AI resume improvement MVP — Next.js, MongoDB, Stripe Checkout, OpenAI.

**Live repo:** https://github.com/danspelt/resumeboost-ai

## Flow

1. Landing page → `/start` form
2. Order saved to MongoDB (`resume_orders`)
3. Stripe Checkout ($29 CAD one-time)
4. Success page confirms payment + generates AI package
5. Results at `/result/[orderId]` with copy + download

## Environment variables

```env
NEXT_PUBLIC_APP_URL=https://your-domain.com
MONGODB_URI=
MONGODB_DB=resume_ai
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4o-mini
```

## Coolify deploy

1. Connect GitHub repo `danspelt/resumeboost-ai`
2. Build: **Dockerfile** · Port **3000**
3. Set all env vars above in Coolify
4. Add Stripe webhook endpoint: `https://your-domain.com/api/webhooks/stripe`
   - Event: `checkout.session.completed`
   - Copy signing secret → `STRIPE_WEBHOOK_SECRET`

## Local dev

```bash
npm install
cp .env.example .env.local
npm run dev
```

Stripe test card: `4242 4242 4242 4242`

## Stack

Next.js App Router · JavaScript · Tailwind CSS · MongoDB · Stripe Checkout · OpenAI
