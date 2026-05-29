import { MongoClient } from "mongodb";

const dbName = process.env.MONGODB_DB || "resume_ai";

let clientPromise;

function getClientPromise() {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable");
  }

  if (clientPromise) {
    return clientPromise;
  }

  const client = new MongoClient(uri);
  clientPromise = client.connect();
  return clientPromise;
}

export async function getDb() {
  const client = await getClientPromise();
  return client.db(dbName);
}

export async function getOrdersCollection() {
  const db = await getDb();
  return db.collection("resume_orders");
}
