import { HeroHeader } from "@/components/blocks/hero-section-1";
import { AnomalousMatterHero } from "@/components/ui/anomalous-matter-hero";
import BentoSocialMediaSection from "@/components/ui/bento-social-media";
import { MorphingText } from "@/components/ui/liquid-text";
import { Footer } from "@/components/ui/footer-section";

export default function SocialMediaManagementPage() {
  return (
    <>
      <HeroHeader />
      <AnomalousMatterHero
        title="Social Media Management"
        subtitle="Building authentic connections and engaging communities across all platforms."
        description="We manage your social media presence with strategic content creation, community engagement, and performance optimization. From content planning to crisis management, we help you build meaningful relationships with your audience."
      />
      <main className="relative z-10">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Social Media Management Process
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine creative storytelling with data-driven strategies to create 
              social media campaigns that not only engage your audience but drive 
              brand awareness and business growth.
            </p>
          </div>
        </div>
      </main>
      <BentoSocialMediaSection />
      
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