import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import ResultViewer from "@/components/ResultViewer";
import { getOrderById, serializeOrder } from "@/lib/orders";

export default async function ResultPage({ params }) {
  const { orderId } = await params;
  const order = await getOrderById(orderId);

  if (!order) {
    notFound();
  }

  const serialized = serializeOrder(order);

  if (order.paymentStatus !== "paid" || !order.result) {
    return (
      <>
        <SiteHeader />
        <main className="mx-auto max-w-2xl px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-slate-900">Result not ready yet</h1>
          <p className="mt-3 text-slate-600">
            This order is still processing. Refresh in a moment or return to start a
            new package.
          </p>
          <Link
            href="/start"
            className="mt-6 inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white"
          >
            Back to start
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <ResultViewer order={serialized} result={order.result} />
      </main>
    </>
  );
}
