export default function SocialProof() {
  return (
    <section className="border-t border-white/5 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            { stat: "6", label: "Deliverables per order" },
            { stat: "~2 min", label: "Average generation time" },
            { stat: "$29", label: "One-time CAD — no subscription" },
          ].map((item) => (
            <div key={item.label} className="text-center">
              <p className="font-display text-4xl font-bold text-amber-300">{item.stat}</p>
              <p className="mt-2 text-sm text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
        <blockquote className="card mx-auto mt-12 max-w-3xl p-8 text-center">
          <p className="text-lg leading-relaxed text-slate-200">
            &ldquo;Built by a full-stack developer with real experience in Next.js, React,
            MongoDB, Firebase, GitHub, accessibility, and UX — so the product is designed
            the way good web apps should work: fast, clear, and focused on outcomes.&rdquo;
          </p>
          <footer className="mt-4 text-sm text-slate-500">— The team behind ResumeBoost AI</footer>
        </blockquote>
      </div>
    </section>
  );
}
