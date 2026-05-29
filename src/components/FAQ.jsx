const faqs = [
  {
    q: "Do I need to create an account?",
    a: "No. Paste your info, pay once, and access your results immediately after checkout.",
  },
  {
    q: "How is this different from ChatGPT?",
    a: "Every section is structured for job applications and tailored to the specific posting you provide — summary, bullets, cover letter, interview prep, and salary language in one flow.",
  },
  {
    q: "Is my data stored?",
    a: "Your order is saved so you can retrieve results. We don't sell your data. Use Stripe for secure payment.",
  },
  {
    q: "What if I'm applying to multiple jobs?",
    a: "Each order is for one job posting. Run a new package for each role — tailoring is what gets interviews.",
  },
  {
    q: "Can I get a refund?",
    a: "If something goes wrong with payment or delivery, email us from your checkout receipt and we'll make it right.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-white/5 px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h2 className="font-display text-center text-3xl font-bold sm:text-4xl">
          Questions
        </h2>
        <dl className="mt-12 space-y-4">
          {faqs.map((item) => (
            <div key={item.q} className="card p-6">
              <dt className="font-display font-semibold text-slate-100">{item.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-slate-400">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
