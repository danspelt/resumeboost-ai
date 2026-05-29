import { APP_NAME } from "@/lib/constants";

export const metadata = {
  title: `${APP_NAME} — Stronger resumes, cover letters, and interview answers`,
  description:
    "Paste your resume and job posting. Get a polished resume summary, cover letter, interview answers, and LinkedIn headline for $29 CAD.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-white text-slate-900">{children}</body>
    </html>
  );
}
