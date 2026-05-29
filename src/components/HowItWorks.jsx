const steps = [
  {
    step: "01",
    title: "Paste your resume",
    body: "Drop in your current resume text — no formatting headaches required.",
  },
  {
    step: "02",
    title: "Add the job posting",
    body: "We analyze the role so every output speaks to what the employer wants.",
  },
  {
    step: "03",
    title: "Pay securely",
    body: "One-time $29 CAD via Stripe. No subscription. No hidden fees.",
  },
  {
    step: "04",
    title: "Copy your package",
    body: "Get your full application kit in minutes. Copy or download instantly.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-white/5 bg-[#0a1020] px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display text-center text-3xl font-bold sm:text-4xl">
          From paste to paid in under 5 minutes
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((item) => (
            <article key={item.step} className="card p-6">
              <span className="font-display text-3xl font-bold text-cyan-400/80">{item.step}</span>
              <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
