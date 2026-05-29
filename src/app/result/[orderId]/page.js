import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ResultViewer from "@/components/ResultViewer";
import { getOrderById, serializeOrder } from "@/lib/orders";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Your application package",
  robots: { index: false, follow: false },
};

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
        <main className="flex min-h-[60vh] items-center justify-center px-4 py-16 text-center">
          <div className="card max-w-md p-8">
            <h1 className="font-display text-2xl font-bold">Still generating…</h1>
            <p className="mt-3 text-slate-400">
              Your package is being prepared. Refresh in a moment.
            </p>
            <Link href={`/result/${orderId}`} className="btn-primary mt-6 inline-flex px-4 py-2 text-sm">
              Refresh
            </Link>
          </div>
        </main>
        <SiteFooter />
      </>
    );
  }

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <ResultViewer order={serialized} result={order.result} />
      </main>
      <SiteFooter />
    </>
  );
}
