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
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-3xl space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      {canceled ? (
        <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
          Payment was canceled. Your draft is still here — continue when you are
          ready.
        </div>
      ) : null}

      {error ? (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      ) : null}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Full name" required>
          <input
            required
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            className={inputClass}
            placeholder="Jane Doe"
          />
        </Field>
        <Field label="Email" required>
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={inputClass}
            placeholder="you@email.com"
          />
        </Field>
      </div>

      <Field label="Target job title" required>
        <input
          required
          value={form.targetJobTitle}
          onChange={(event) => updateField("targetJobTitle", event.target.value)}
          className={inputClass}
          placeholder="Senior Full-Stack Developer"
        />
      </Field>

      <Field label="Tone" required>
        <select
          value={form.tone}
          onChange={(event) => updateField("tone", event.target.value)}
          className={inputClass}
        >
          {TONE_OPTIONS.map((tone) => (
            <option key={tone} value={tone}>
              {tone}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Current resume text" required>
        <textarea
          required
          rows={10}
          value={form.resumeText}
          onChange={(event) => updateField("resumeText", event.target.value)}
          className={inputClass}
          placeholder="Paste your current resume here..."
        />
      </Field>

      <Field label="Job posting text" required>
        <textarea
          required
          rows={10}
          value={form.jobPostingText}
          onChange={(event) => updateField("jobPostingText", event.target.value)}
          className={inputClass}
          placeholder="Paste the job posting here..."
        />
      </Field>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-indigo-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Redirecting to Stripe..." : "Continue to Payment — $29 CAD"}
      </button>
    </form>
  );
}

function Field({ label, required, children }) {
  return (
    <label className="block space-y-2">
      <span className="text-sm font-medium text-slate-700">
        {label}
        {required ? " *" : ""}
      </span>
      {children}
    </label>
  );
}

const inputClass =
  "w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200";
