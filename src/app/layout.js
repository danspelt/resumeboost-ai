import { Outfit, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { APP_NAME } from "@/lib/constants";

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: `${APP_NAME} — Interview-ready resume packages in minutes`,
    template: `%s · ${APP_NAME}`,
  },
  description:
    "Paste your resume and job posting. Get a tailored summary, bullets, cover letter, interview answers, and LinkedIn headline for $29 CAD.",
  keywords: [
    "resume AI",
    "cover letter generator",
    "interview prep",
    "job application",
    "resume writer Canada",
  ],
  openGraph: {
    title: `${APP_NAME} — Get interview-ready in minutes`,
    description:
      "One-time $29 CAD package: resume summary, bullets, cover letter, interview answers, and more.",
    type: "website",
    locale: "en_CA",
    siteName: APP_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: "Tailored resume packages for the job you want. $29 CAD one-time.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="mesh-bg min-h-full antialiased">{children}</body>
    </html>
  );
}
