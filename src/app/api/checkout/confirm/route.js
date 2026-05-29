import { NextResponse } from "next/server";
import { fulfillPaidOrder } from "@/lib/checkout";

export async function POST(request) {
  try {
    const { sessionId } = await request.json();

    if (!sessionId) {
      return NextResponse.json(
        { error: "Missing sessionId." },
        { status: 400 },
      );
    }

    const { orderId, result } = await fulfillPaidOrder(sessionId);

    return NextResponse.json({ orderId, result });
  } catch (error) {
    console.error("Checkout confirm error:", error);
    return NextResponse.json(
      { error: error.message || "Unable to confirm payment." },
      { status: 500 },
    );
  }
}
