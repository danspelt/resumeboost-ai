"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";

const steps = [
  "Confirming payment",
  "Analyzing job posting",
  "Generating your package",
];

export default function SuccessClient() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const sessionId = searchParams.get("session_id");
  const [errorMessage, setErrorMessage] = useState("");
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    if (!sessionId) {
      return;
    }

    const interval = setInterval(() => {
      setStepIndex((current) => (current + 1) % steps.length);
    }, 2500);

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

        clearInterval(interval);
        router.replace(`/result/${data.orderId}`);
      } catch (error) {
        clearInterval(interval);
        setErrorMessage(error.message);
      }
    }

    confirmPayment();
    return () => clearInterval(interval);
  }, [sessionId, router]);

  const message = !sessionId
    ? "Missing payment session. Contact support if you were charged."
    : errorMessage || "Confirming your payment...";

  return (
    <>
      <SiteHeader />
      <main className="flex min-h-[70vh] items-center justify-center px-4 py-16">
        <div className="card w-full max-w-md p-8 text-center">
          <div className="mx-auto mb-6 h-12 w-12 animate-spin rounded-full border-4 border-cyan-500/20 border-t-cyan-400" />
          <h1 className="font-display text-2xl font-bold">Payment received</h1>
          <p className="mt-3 text-slate-400">{message}</p>
          {sessionId && !errorMessage ? (
            <p className="mt-6 text-sm font-medium text-cyan-300">{steps[stepIndex]}…</p>
          ) : null}
          {!sessionId ? (
            <Link href="/start" className="btn-primary mt-6 inline-flex px-4 py-2 text-sm">
              Back to form
            </Link>
          ) : null}
        </div>
      </main>
    </>
  );
}
