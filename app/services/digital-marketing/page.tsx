import { HeroHeader } from "@/components/blocks/hero-section-1";
import { AnomalousMatterHero } from "@/components/ui/anomalous-matter-hero";
import BentoDigitalMarketingSection from "@/components/ui/bento-digital-marketing";
import { MorphingText } from "@/components/ui/liquid-text";
import { Footer } from "@/components/ui/footer-section";

export default function DigitalMarketingPage() {
  return (
    <>
      <HeroHeader />
      <AnomalousMatterHero
        title="Digital Marketing"
        subtitle="Driving growth through strategic digital campaigns and data-driven insights."
        description="We create comprehensive digital marketing strategies that connect your brand with the right audience at the right time. From campaign planning to performance optimization, we deliver measurable results that fuel your business growth."
      />
      <main className="relative z-10">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Digital Marketing Process
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine strategic thinking with cutting-edge digital tools to create 
              campaigns that not only reach your target audience but convert them into 
              loyal customers and brand advocates.
            </p>
          </div>
        </div>
      </main>
      <BentoDigitalMarketingSection />
      
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