import SiteHeader from "@/components/SiteHeader";
import LandingHero from "@/components/LandingHero";
import HowItWorks, { PricingCard } from "@/components/HowItWorks";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <LandingHero />
        <HowItWorks />
        <PricingCard />
        <section className="border-t border-slate-200 bg-slate-900 px-4 py-12 text-center text-white sm:px-6">
          <p className="text-lg font-medium">
            Built by a developer who ships real web apps with Next.js, React,
            MongoDB, Firebase, and accessibility in mind.
          </p>
        </section>
      </main>
    </>
  );
}
