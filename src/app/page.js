import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import LandingHero from "@/components/LandingHero";
import Deliverables from "@/components/Deliverables";
import HowItWorks from "@/components/HowItWorks";
import SocialProof from "@/components/SocialProof";
import FAQ from "@/components/FAQ";
import PricingCTA from "@/components/PricingCTA";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <LandingHero />
        <Deliverables />
        <HowItWorks />
        <SocialProof />
        <PricingCTA />
        <FAQ />
      </main>
      <SiteFooter />
    </>
  );
}
