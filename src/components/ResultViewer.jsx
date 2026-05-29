"use client";

import CopyButton from "./CopyButton";

function Section({ title, children, copyText }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        {copyText ? <CopyButton text={copyText} /> : null}
      </div>
      <div className="prose prose-slate max-w-none whitespace-pre-wrap text-slate-700">
        {children}
      </div>
    </section>
  );
}

export default function ResultViewer({ order, result }) {
  const downloadText = buildDownloadText(order, result);

  function handleDownload() {
    const blob = new Blob([downloadText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `resumeboost-${order.id}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-emerald-700">
            Ready
          </p>
          <h1 className="mt-1 text-2xl font-bold text-slate-900">
            {order.fullName}&apos;s application package
          </h1>
          <p className="mt-2 text-slate-600">Target role: {order.targetJobTitle}</p>
        </div>
        <button
          type="button"
          onClick={handleDownload}
          className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
        >
          Download as Text
        </button>
      </div>

      <Section title="Improved Resume Summary" copyText={result.resumeSummary}>
        {result.resumeSummary}
      </Section>

      <Section
        title="Top Skills to Highlight"
        copyText={result.topSkills?.join("\n") || ""}
      >
        <ul className="list-disc space-y-2 pl-5">
          {(result.topSkills || []).map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </Section>

      <Section
        title="Rewritten Experience Bullets"
        copyText={(result.rewrittenBullets || []).map((item) => `• ${item}`).join("\n")}
      >
        <ul className="list-disc space-y-2 pl-5">
          {(result.rewrittenBullets || []).map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </Section>

      <Section title="Cover Letter" copyText={result.coverLetter}>
        {result.coverLetter}
      </Section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-xl font-semibold text-slate-900">Interview Answers</h2>
        <div className="mt-4 space-y-6">
          {(result.interviewAnswers || []).map((item) => (
            <div key={item.question} className="rounded-xl bg-slate-50 p-4">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-medium text-slate-900">{item.question}</h3>
                <CopyButton text={item.answer} label="Copy answer" />
              </div>
              <p className="whitespace-pre-wrap text-slate-700">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <Section
        title="Salary Expectation Answer"
        copyText={result.salaryExpectationAnswer}
      >
        {result.salaryExpectationAnswer}
      </Section>

      <Section title="Suggested LinkedIn Headline" copyText={result.linkedInHeadline}>
        {result.linkedInHeadline}
      </Section>
    </div>
  );
}

function buildDownloadText(order, result) {
  return [
    `ResumeBoost AI — ${order.fullName}`,
    `Target role: ${order.targetJobTitle}`,
    "",
    "IMPROVED RESUME SUMMARY",
    result.resumeSummary,
    "",
    "TOP SKILLS",
    ...(result.topSkills || []).map((skill) => `- ${skill}`),
    "",
    "REWRITTEN BULLETS",
    ...(result.rewrittenBullets || []).map((bullet) => `- ${bullet}`),
    "",
    "COVER LETTER",
    result.coverLetter,
    "",
    "INTERVIEW ANSWERS",
    ...(result.interviewAnswers || []).flatMap((item) => [
      `Q: ${item.question}`,
      `A: ${item.answer}`,
      "",
    ]),
    "SALARY EXPECTATION ANSWER",
    result.salaryExpectationAnswer,
    "",
    "LINKEDIN HEADLINE",
    result.linkedInHeadline,
  ].join("\n");
}
