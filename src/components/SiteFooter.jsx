import Link from "next/link";
import { APP_NAME } from "@/lib/constants";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/5 px-4 py-12 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <p className="font-display font-bold text-slate-200">{APP_NAME}</p>
          <p className="mt-1 text-sm text-slate-500">
            AI-powered application packages for serious job seekers.
          </p>
        </div>
        <div className="flex gap-6 text-sm text-slate-400">
          <Link href="/start" className="transition hover:text-white">
            Get started
          </Link>
          <a href="#faq" className="transition hover:text-white">
            FAQ
          </a>
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-6xl text-center text-xs text-slate-600">
        Payments secured by Stripe. © {new Date().getFullYear()} {APP_NAME}.
      </p>
    </footer>
  );
}
