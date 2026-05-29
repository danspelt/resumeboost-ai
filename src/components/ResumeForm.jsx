"use client";

import { useState } from "react";
import { TONE_OPTIONS } from "@/lib/constants";

const initialForm = {
  fullName: "",
  email: "",
  resumeText: "",
  jobPostingText: "",
  targetJobTitle: "",
  tone: TONE_OPTIONS[0],
};

const MIN_RESUME = 100;
const MIN_JOB = 80;

export default function ResumeForm({ canceled = false }) {
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");

    if (form.resumeText.trim().length < MIN_RESUME) {
      setError(`Please paste at least ${MIN_RESUME} characters of resume text.`);
      return;
    }
    if (form.jobPostingText.trim().length < MIN_JOB) {
      setError(`Please paste at least ${MIN_JOB} characters from the job posting.`);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/checkout/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Unable to start checkout");
      }

      window.location.assign(data.checkoutUrl);
    } catch (submitError) {
      setError(submitError.message);
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card p-6 sm:p-8">
      {canceled ? (
        <div className="mb-6 rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100">
          Payment canceled — your info is still here. Continue when ready.
        </div>
      ) : null}

      {error ? (
        <div className="mb-6 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" required>
          <input
            required
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            className="input-field"
            placeholder="Jane Doe"
          />
        </Field>
        <Field label="Email" required>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="input-field"
            placeholder="you@email.com"
          />
        </Field>
      </div>

      <div className="mt-6">
        <Field label="Target job title" required>
          <input
            required
            value={form.targetJobTitle}
            onChange={(event) => updateField("targetJobTitle", event.target.value)}
            className="input-field"
            placeholder="Senior Full-Stack Developer"
          />
        </Field>
      </div>

      <div className="mt-6">
        <Field label="Tone" required>
          <select
            value={form.tone}
            onChange={(event) => updateField("tone", event.target.value)}
            className="input-field"
          >
            {TONE_OPTIONS.map((tone) => (
              <option key={tone} value={tone}>
                {tone}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <div className="mt-6">
        <Field
          label="Current resume text"
          required
          hint={`${form.resumeText.length} chars · min ${MIN_RESUME}`}
        >
          <textarea
            required
            rows={10}
            value={form.resumeText}
            onChange={(event) => updateField("resumeText", event.target.value)}
            className="input-field resize-y"
            placeholder="Paste your full resume here..."
          />
        </Field>
      </div>

      <div className="mt-6">
        <Field
          label="Job posting text"
          required
          hint={`${form.jobPostingText.length} chars · min ${MIN_JOB}`}
        >
          <textarea
            required
            rows={10}
            value={form.jobPostingText}
            onChange={(event) => updateField("jobPostingText", event.target.value)}
            className="input-field resize-y"
            placeholder="Paste the full job description here..."
          />
        </Field>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="btn-primary mt-8 w-full px-6 py-4 text-base disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Redirecting to secure checkout..." : "Continue to payment — $29 CAD"}
      </button>
      <p className="mt-4 text-center text-xs text-slate-500">
        Secured by Stripe · One-time payment · Results in ~2 minutes
      </p>
    </form>
  );
}

function Field({ label, required, hint, children }) {
  return (
    <label className="block">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="text-sm font-medium text-slate-200">
          {label}
          {required ? " *" : ""}
        </span>
        {hint ? <span className="text-xs text-slate-500">{hint}</span> : null}
      </div>
      {children}
    </label>
  );
}
