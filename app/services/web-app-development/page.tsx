import { HeroHeader } from "@/components/blocks/hero-section-1";
import { AnomalousMatterHero } from "@/components/ui/anomalous-matter-hero";
import Bento3Section from "@/components/ui/bento-monochrome-1";
import { MorphingText } from "@/components/ui/liquid-text";
import { Footer } from "@/components/ui/footer-section";

export default function WebAppDevelopmentPage() {
  return (
    <>
      <HeroHeader />
      <AnomalousMatterHero
        title="Web & App Development"
        subtitle="Building the future with intelligent code and creative design."
        description="We craft modern web applications and mobile experiences that adapt, evolve, and exceed expectations. From concept to deployment, we bring your digital vision to life."
      />
      <main className="relative z-10">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Development Process
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine cutting-edge technologies with user-centered design to create 
              applications that not only look beautiful but perform flawlessly across 
              all devices and platforms.
            </p>
          </div>
        </div>
      </main>
      <Bento3Section />
      
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
