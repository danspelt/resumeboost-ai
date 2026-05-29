import { PrimaryButton, SecondaryButton } from "@/components/Button";
import { PRICE_CAD } from "@/lib/constants";

const trustItems = [
  "Secure Stripe checkout",
  "Results in ~2 minutes",
  "One-time $29 CAD",
  "No account required",
];

export default function LandingHero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pb-28 sm:pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-200">
            <span className="pulse-glow inline-block h-2 w-2 rounded-full bg-emerald-400" />
            Tailored to each job posting — not generic AI fluff
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Turn your resume into an{" "}
            <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200 bg-clip-text text-transparent">
              interview-ready
            </span>{" "}
            application package
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            Paste your resume and the job posting. In minutes you get a sharper
            summary, stronger bullets, a cover letter, interview answers, and a
            LinkedIn headline — built for the role you actually want.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryButton href="/start" size="lg">
              Get my package — ${PRICE_CAD}
            </PrimaryButton>
            <SecondaryButton href="#deliverables" size="lg">
              See what&apos;s included
            </SecondaryButton>
          </div>
          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-400">
            {trustItems.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-emerald-400">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="animate-float card relative z-10 p-6 shadow-2xl shadow-cyan-500/10">
            <p className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
              Your deliverables
            </p>
            <div className="mt-4 space-y-3">
              {[
                "Improved resume summary",
                "5+ rewritten experience bullets",
                "Tailored cover letter",
                "Interview Q&A pack",
                "Salary expectation script",
                "LinkedIn headline",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2.5"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-300">
                    {index + 1}
                  </span>
                  <span className="text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-center text-xs text-slate-500">
              Copy everything · Download as text
            </p>
          </div>
          <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-amber-500/15 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
