import { NextResponse } from "next/server";
import { createOrder } from "@/lib/orders";
import { createCheckoutSession } from "@/lib/checkout";
import { TONE_OPTIONS } from "@/lib/constants";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      resumeText,
      jobPostingText,
      targetJobTitle,
      tone,
    } = body;

    if (
      !fullName?.trim() ||
      !email?.trim() ||
      !resumeText?.trim() ||
      !jobPostingText?.trim() ||
      !targetJobTitle?.trim()
    ) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    if (!TONE_OPTIONS.includes(tone)) {
      return NextResponse.json({ error: "Invalid tone." }, { status: 400 });
    }

    const order = await createOrder({
      fullName,
      email,
      resumeText,
      jobPostingText,
      targetJobTitle,
      tone,
    });

    const session = await createCheckoutSession(order);

    return NextResponse.json({
      orderId: order._id.toString(),
      checkoutUrl: session.url,
    });
  } catch (error) {
    console.error("Checkout create error:", error);
    return NextResponse.json(
      { error: error.message || "Unable to create checkout session." },
      { status: 500 },
    );
  }
}
