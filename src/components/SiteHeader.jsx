import Link from "next/link";
import { APP_NAME, PRICE_CAD } from "@/lib/constants";
import { PrimaryButton } from "@/components/Button";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 glass border-b-0">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="font-display text-xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-cyan-300 to-emerald-300 bg-clip-text text-transparent">
            {APP_NAME}
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-sm text-slate-300 sm:flex">
          <a href="#deliverables" className="transition hover:text-white">
            What you get
          </a>
          <a href="#how-it-works" className="transition hover:text-white">
            How it works
          </a>
          <a href="#faq" className="transition hover:text-white">
            FAQ
          </a>
        </nav>
        <PrimaryButton href="/start" size="sm">
          Start — ${PRICE_CAD}
        </PrimaryButton>
      </div>
    </header>
  );
}
