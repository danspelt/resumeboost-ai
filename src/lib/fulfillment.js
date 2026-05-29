import { generateOrderResult } from "./ai";
import { getOrderById, updateOrder } from "./orders";

export async function markOrderPaid(orderId, stripeSessionId) {
  const order = await getOrderById(orderId);
  if (!order) {
    throw new Error("Order not found");
  }

  if (order.paymentStatus === "paid") {
    return order;
  }

  await updateOrder(orderId, {
    paymentStatus: "paid",
    stripeSessionId,
  });

  return getOrderById(orderId);
}

export async function fulfillOrderById(orderId, stripeSessionId) {
  await markOrderPaid(orderId, stripeSessionId);
  const result = await generateOrderResult(orderId);
  return { orderId, result };
}
