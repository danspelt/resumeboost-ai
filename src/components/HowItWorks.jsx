import { PRICE_CAD } from "@/lib/constants";

const steps = [
  "Paste your resume",
  "Paste the job posting",
  "Pay securely with Stripe",
  "Get your improved application package",
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-3xl font-bold text-slate-900">How it works</h2>
        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step}
              className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
                {index + 1}
              </span>
              <p className="mt-4 font-medium text-slate-900">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function PricingCard() {
  const features = [
    "Improved resume summary",
    "Stronger experience bullets",
    "Tailored cover letter",
    "Interview answer pack",
    "Salary expectation answer",
    "LinkedIn headline suggestion",
  ];

  return (
    <section className="border-t border-slate-200">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-lg rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <p className="text-sm font-medium uppercase tracking-wide text-indigo-600">
            One-time package
          </p>
          <p className="mt-2 text-4xl font-bold text-slate-900">
            ${PRICE_CAD} <span className="text-lg font-medium text-slate-500">CAD</span>
          </p>
          <ul className="mt-6 space-y-3 text-slate-600">
            {features.map((feature) => (
              <li key={feature} className="flex gap-2">
                <span className="text-indigo-600">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
