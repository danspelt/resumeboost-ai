import { NextResponse } from "next/server";
import { generateOrderResult } from "@/lib/ai";

export async function POST(request) {
  try {
    const { orderId } = await request.json();

    if (!orderId) {
      return NextResponse.json({ error: "Missing orderId." }, { status: 400 });
    }

    const result = await generateOrderResult(orderId);
    return NextResponse.json({ result });
  } catch (error) {
    console.error("AI generate error:", error);
    return NextResponse.json(
      { error: error.message || "Unable to generate result." },
      { status: 500 },
    );
  }
}
