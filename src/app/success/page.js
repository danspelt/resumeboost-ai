import { Suspense } from "react";
import SuccessClient from "./SuccessClient";

export default function SuccessPage() {
  return (
    <Suspense
      fallback={
        <main className="mx-auto max-w-2xl px-4 py-16 text-center text-slate-600">
          Loading payment confirmation...
        </main>
      }
    >
      <SuccessClient />
    </Suspense>
  );
}
