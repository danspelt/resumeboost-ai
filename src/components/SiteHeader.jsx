import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

export default function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          {APP_NAME}
        </Link>
        <Link
          href="/start"
          className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500"
        >
          Start for $29
        </Link>
      </div>
    </header>
  );
}
