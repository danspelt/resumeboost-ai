import { PRICE_CAD, PRICE_CENTS, PRODUCT_NAME } from "./constants";
import { getStripe } from "./stripe";
import { fulfillOrderById } from "./fulfillment";
import { updateOrder } from "./orders";

export async function createCheckoutSession(order) {
  const stripe = getStripe();
  const appUrl = process.env.NEXT_PUBLIC_APP_URL;

  if (!appUrl) {
    throw new Error("Missing NEXT_PUBLIC_APP_URL environment variable");
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: order.email,
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "cad",
          unit_amount: PRICE_CENTS,
          product_data: {
            name: PRODUCT_NAME,
            description:
              "Improved resume summary, bullets, cover letter, interview answers, and LinkedIn headline.",
          },
        },
      },
    ],
    metadata: {
      orderId: order._id.toString(),
    },
    success_url: `${appUrl}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${appUrl}/start?canceled=1`,
  });

  await updateOrder(order._id.toString(), {
    stripeSessionId: session.id,
  });

  return session;
}

export async function fulfillPaidOrder(sessionId) {
  const stripe = getStripe();
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (session.payment_status !== "paid") {
    throw new Error("Payment not completed");
  }

  const orderId = session.metadata?.orderId;
  if (!orderId) {
    throw new Error("Missing order metadata on Stripe session");
  }

  return fulfillOrderById(orderId, session.id);
}

export { PRICE_CAD };
