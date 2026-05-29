import { PrimaryButton } from "@/components/Button";
import { PRICE_CAD } from "@/lib/constants";

const features = [
  "Improved resume summary",
  "Rewritten experience bullets",
  "Tailored cover letter",
  "Interview answer pack",
  "Salary expectation script",
  "LinkedIn headline",
];

export default function PricingCTA() {
  return (
    <section className="border-t border-white/5 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">
              One-time package
            </p>
            <p className="mt-2 font-display text-5xl font-bold">
              ${PRICE_CAD}{" "}
              <span className="text-2xl font-medium text-slate-400">CAD</span>
            </p>
            <p className="mt-3 text-slate-400">
              Less than a single hour with a career coach. More tailored than a generic template.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm text-slate-300">
                  <span className="text-emerald-400">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <PrimaryButton href="/start" size="lg" className="mt-10 w-full sm:w-auto">
              Start my application package
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
