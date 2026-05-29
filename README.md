# ResumeBoost AI

Paid AI resume improvement MVP built with Next.js, MongoDB, Stripe Checkout, and OpenAI.

## What it does

1. User pastes resume + job posting on `/start`
2. Order is saved to MongoDB with `paymentStatus: "pending"`
3. Stripe Checkout Session is created ($29 CAD one-time)
4. After payment, `/success` confirms the session and generates AI output
5. Results appear on `/result/[orderId]` with copy + download buttons

## Setup

1. Copy environment variables:

```bash
cp .env.example .env.local
```

2. Fill in:

- `MONGODB_URI` — MongoDB Atlas connection string
- `STRIPE_SECRET_KEY` — Stripe secret key (test mode for development)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` — optional for future client-side Stripe use
- `OPENAI_API_KEY` — OpenAI API key
- `NEXT_PUBLIC_APP_URL` — e.g. `http://localhost:3000`

3. Install and run:

```bash
npm install
npm run dev
```

4. For local Stripe testing, use the Stripe CLI to forward webhooks later if you add them. The MVP confirms payment on the success page via Checkout Session retrieval.

## Stripe product

- **Resume Application Package** — $29 CAD one-time
- Uses **Checkout Sessions** (recommended for one-time payments)
- Order ID is attached to session metadata

## MongoDB collection

`resume_orders` documents include:

- user input fields
- `paymentStatus`, `stripeSessionId`, `aiStatus`, `result`
- timestamps

## Routes

| Route | Purpose |
|-------|---------|
| `/` | Landing page |
| `/start` | Resume form |
| `/api/checkout/create` | Save order + create Stripe session |
| `/success` | Confirm payment + generate AI |
| `/result/[orderId]` | View results |

## Deploy on Coolify

This repo includes a `Dockerfile` for container deployment.

1. Push this repository to GitHub, GitLab, or Gitea.
2. In Coolify, create a **New Resource → Application**.
3. Connect the `resumeboost-ai` repository.
4. Set build pack to **Dockerfile** (or let Coolify detect it).
5. Add environment variables from `.env.example` in Coolify's env settings.
6. Set `NEXT_PUBLIC_APP_URL` to your Coolify public URL.
7. Deploy.

Required env vars in Coolify:

- `MONGODB_URI`
- `MONGODB_DB`
- `STRIPE_SECRET_KEY`
- `OPENAI_API_KEY`
- `NEXT_PUBLIC_APP_URL`


- User accounts
- Subscriptions
- PDF export
- Email delivery (Resend)
- Admin dashboard
