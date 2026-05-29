const items = [
  {
    title: "Resume summary",
    description: "A tight, role-specific opener that frames your experience for this exact job.",
    icon: "✦",
  },
  {
    title: "Rewritten bullets",
    description: "Impact-focused bullets with metrics, tech, and outcomes — not duty lists.",
    icon: "◆",
  },
  {
    title: "Cover letter",
    description: "Personalized letter connecting your background to what they’re hiring for.",
    icon: "❖",
  },
  {
    title: "Interview answers",
    description: "Prepared responses for strengths, gaps, teamwork, and why this company.",
    icon: "▣",
  },
  {
    title: "Salary script",
    description: "A confident way to answer compensation questions without underselling.",
    icon: "◎",
  },
  {
    title: "LinkedIn headline",
    description: "Search-friendly headline that matches the role and your best strengths.",
    icon: "◉",
  },
];

export default function Deliverables() {
  return (
    <section id="deliverables" className="border-t border-white/5 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">
            Everything in one package
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            One payment. Six deliverables. All tailored to the job posting you paste.
          </p>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="card p-6 transition hover:border-cyan-500/30">
              <span className="text-2xl text-amber-300">{item.icon}</span>
              <h3 className="mt-4 font-display text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
