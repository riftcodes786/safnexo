import { HeroHeader } from "@/components/blocks/hero-section-1";
import { AnomalousMatterHero } from "@/components/ui/anomalous-matter-hero";
import BentoAIAutomationSection from "@/components/ui/bento-ai-automation";
import { MorphingText } from "@/components/ui/liquid-text";
import { Footer } from "@/components/ui/footer-section";

export default function AIAutomationPage() {
  return (
    <>
      <HeroHeader />
      <AnomalousMatterHero
        title="AI Automation"
        subtitle="Transforming workflows with intelligent automation and smart solutions."
        description="We implement AI-powered automation solutions that streamline your business processes, reduce manual work, and enhance productivity. From chatbots to workflow automation, we help you leverage artificial intelligence for sustainable growth."
      />
      <main className="relative z-10">
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our AI Automation Process
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine artificial intelligence with practical business solutions to create 
              automation systems that not only save time and resources but improve 
              accuracy and customer experience.
            </p>
          </div>
        </div>
      </main>
      <BentoAIAutomationSection />
      
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