import { HeroHeader } from "@/components/blocks/hero-section-1";
import { AnomalousMatterHero } from "@/components/ui/anomalous-matter-hero";
import BentoSEOOptimizationSection from "@/components/ui/bento-seo-optimization";
import { MorphingText } from "@/components/ui/liquid-text";
import { Footer } from "@/components/ui/footer-section";

export default function SEOOptimizationPage() {
  return (
    <>
      <HeroHeader />
      <AnomalousMatterHero
        title="SEO Optimization"
        subtitle="Boosting your visibility and driving organic traffic through strategic optimization."
        description="We optimize your digital presence to rank higher in search results and attract qualified traffic. Our data-driven SEO strategies combine technical expertise with content optimization to deliver sustainable growth and increased online visibility."
      />
      <main className="relative z-10">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our SEO Optimization Process
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine technical SEO expertise with content strategy to create 
              optimization plans that not only improve your search rankings but 
              drive meaningful traffic and business growth.
            </p>
          </div>
        </div>
      </main>
      <BentoSEOOptimizationSection />
      
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-28 md:pt-24 md:pb-32">
        <MorphingText
          texts={[
            "Safenexo crafts ",
            "intelligent products",
            "pixel‑perfect design",
            "AI automations",
            "growth marketing",
            "scalable engineering",
          ]}
          className="text-foreground"
        />
        <p className="text-muted-foreground text-center mt-3">
          Strategy, design, and engineering to help brands grow.
        </p>
      </div>
      
      <Footer />
    </>
  );
}