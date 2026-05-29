import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { fulfillOrderById } from "@/lib/fulfillment";
import { getStripe } from "@/lib/stripe";

export async function POST(request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Webhook secret not configured." },
      { status: 500 },
    );
  }

  const body = await request.text();
  const signature = (await headers()).get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature." }, { status: 400 });
  }

  const stripe = getStripe();
  let event;

  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (error) {
    console.error("Stripe webhook signature error:", error.message);
    return NextResponse.json({ error: "Invalid signature." }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    if (session.payment_status === "paid" && session.metadata?.orderId) {
      try {
        await fulfillOrderById(session.metadata.orderId, session.id);
      } catch (error) {
        console.error("Webhook fulfillment error:", error);
        return NextResponse.json({ error: "Fulfillment failed." }, { status: 500 });
      }
    }
  }

  return NextResponse.json({ received: true });
}
