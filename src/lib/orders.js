import { ObjectId } from "mongodb";
import { getOrdersCollection } from "./mongodb";

export async function createOrder(input) {
  const collection = await getOrdersCollection();
  const now = new Date();

  const doc = {
    email: input.email.trim().toLowerCase(),
    fullName: input.fullName.trim(),
    targetJobTitle: input.targetJobTitle.trim(),
    resumeText: input.resumeText.trim(),
    jobPostingText: input.jobPostingText.trim(),
    tone: input.tone,
    paymentStatus: "pending",
    stripeSessionId: null,
    aiStatus: "not_started",
    result: null,
    createdAt: now,
    updatedAt: now,
  };

  const { insertedId } = await collection.insertOne(doc);
  return { ...doc, _id: insertedId };
}

export async function getOrderById(orderId) {
  if (!ObjectId.isValid(orderId)) {
    return null;
  }

  const collection = await getOrdersCollection();
  return collection.findOne({ _id: new ObjectId(orderId) });
}

export async function updateOrder(orderId, updates) {
  const collection = await getOrdersCollection();
  return collection.updateOne(
    { _id: new ObjectId(orderId) },
    {
      $set: {
        ...updates,
        updatedAt: new Date(),
      },
    },
  );
}

export function serializeOrder(order) {
  if (!order) {
    return null;
  }

  return {
    id: order._id.toString(),
    email: order.email,
    fullName: order.fullName,
    targetJobTitle: order.targetJobTitle,
    tone: order.tone,
    paymentStatus: order.paymentStatus,
    aiStatus: order.aiStatus,
    result: order.result,
    createdAt: order.createdAt,
    updatedAt: order.updatedAt,
  };
}
