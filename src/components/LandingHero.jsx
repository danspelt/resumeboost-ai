import Link from "next/link";
import { PRICE_CAD } from "@/lib/constants";

export default function LandingHero() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="max-w-3xl">
        <p className="mb-4 inline-flex rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700">
          Built by a full-stack developer
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Get a stronger resume for the job you want.
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-600">
          Paste your resume and job posting. ResumeBoost AI creates a polished
          resume summary, cover letter, and interview answers in minutes.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/start"
            className="rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-indigo-500"
          >
            Start for ${PRICE_CAD}
          </Link>
          <a
            href="#how-it-works"
            className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            How it works
          </a>
        </div>
      </div>
    </section>
  );
}
