import { NextResponse } from "next/server";
import { getOrderById, serializeOrder } from "@/lib/orders";

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get("orderId");

    if (!orderId) {
      return NextResponse.json({ error: "Missing orderId." }, { status: 400 });
    }

    const order = await getOrderById(orderId);
    if (!order) {
      return NextResponse.json({ error: "Order not found." }, { status: 404 });
    }

    return NextResponse.json({ order: serializeOrder(order) });
  } catch (error) {
    console.error("Orders fetch error:", error);
    return NextResponse.json(
      { error: error.message || "Unable to fetch order." },
      { status: 500 },
    );
  }
}
