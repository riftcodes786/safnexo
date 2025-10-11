import { HeroHeader } from "@/components/blocks/hero-section-1";
import { Footer } from "@/components/ui/footer-section";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import ContentSection from "@/components/ui/content-block";
import { SectionReveal } from "@/components/ui/section-reveal";
import { CEOMessage } from "@/components/ui/ceo-message";

export default function AboutPage() {
  return (
    <>
      <HeroHeader />
      <main>
        <HeroGeometric 
          badge="Full-Service Digital Agency"
          title1="Powering Business Growth"
          title2="Through Technology & Innovation"
        />
        <SectionReveal>
          <ContentSection />
        </SectionReveal>
        <CEOMessage />
      </main>
      <Footer />
    </>
  );
}