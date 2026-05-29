"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

export default function SuccessClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");
  const [message, setMessage] = useState("Confirming your payment...");

  useEffect(() => {
    if (!sessionId) {
      setMessage("Missing payment session. Please contact support if you were charged.");
      return;
    }

    async function confirmPayment() {
      try {
        const response = await fetch("/api/checkout/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
        });

        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error || "Unable to confirm payment");
        }

        router.replace(`/result/${data.orderId}`);
      } catch (error) {
        setMessage(error.message);
      }
    }

    confirmPayment();
  }, [sessionId, router]);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600" />
          <h1 className="text-2xl font-bold text-slate-900">Payment received</h1>
          <p className="mt-3 text-slate-600">{message}</p>
          {!sessionId ? (
            <Link
              href="/start"
              className="mt-6 inline-block rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white"
            >
              Back to form
            </Link>
          ) : null}
        </div>
      </main>
    </>
  );
}
