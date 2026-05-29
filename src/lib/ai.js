import { getOpenAI } from "./openai";
import { buildResumePackagePrompt } from "./prompts";
import { getOrderById, updateOrder } from "./orders";

export async function generateOrderResult(orderId) {
  const order = await getOrderById(orderId);

  if (!order) {
    throw new Error("Order not found");
  }

  if (order.paymentStatus !== "paid") {
    throw new Error("Order is not paid");
  }

  if (order.result && order.aiStatus === "complete") {
    return order.result;
  }

  await updateOrder(orderId, { aiStatus: "processing" });

  try {
    const openai = getOpenAI();
    const completion = await openai.chat.completions.create({
      model: process.env.OPENAI_MODEL || "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content:
            "You write excellent, honest resume and interview content. Return JSON only.",
        },
        {
          role: "user",
          content: buildResumePackagePrompt(order),
        },
      ],
      temperature: 0.7,
    });

    const content = completion.choices[0]?.message?.content;
    if (!content) {
      throw new Error("Empty AI response");
    }

    const result = JSON.parse(content);

    await updateOrder(orderId, {
      aiStatus: "complete",
      result,
    });

    return result;
  } catch (error) {
    await updateOrder(orderId, { aiStatus: "failed" });
    throw error;
  }
}
