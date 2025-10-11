import { HeroSection } from "@/components/blocks/hero-section-1";
import { Stats } from "@/components/ui/stats-section-with-text";
import FeaturesSection from "@/components/ui/features";
import TestimonialsSection from "@/components/ui/animated-testimonials";
import FAQs from "@/components/ui/faqs";
import { PaymentSummaryCard } from "@/components/ui/card-3";
import { Footer } from "@/components/ui/footer-section";
import { MorphingText } from "@/components/ui/liquid-text";
// Contact section temporarily removed; awaiting new design

export default function Home() {
  return (
    <>
      <section id="about"><HeroSection /></section>
      <section id="features"><Stats /></section>
      <section id="services"><FeaturesSection /></section>
      <section id="testimonials"><TestimonialsSection /></section>
      <section id="faqs"><FAQs /></section>
      <div id="contact" className="mx-auto max-w-5xl px-6 pb-24">
        <div className="text-center mb-10">
          <h3 className="text-foreground text-2xl md:text-3xl font-semibold">Ready to start your project?</h3>
          <p className="text-muted-foreground mt-2">Connect with our team — we typically reply within 24 hours.</p>
        </div>
        <div className="flex justify-center">
          <PaymentSummaryCard
            title="Contact Safenexo"
            amount={0}
            currency=""
            statText="$2.5M+ revenue generated for clients"
            subCardTitle="Book a discovery call"
            subCardSubtitle="Tell us about your goals"
            avatars={[
              { src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=80&auto=format&fit=crop', alt: 'Reviewer 1' },
              { src: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=80&auto=format&fit=crop', alt: 'Reviewer 2' },
              { src: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=80&auto=format&fit=crop', alt: 'Reviewer 3' },
            ]}
            moreCount={5}
            subCardHref="mailto:contact.safenexo@gmail.com?subject=Project%20Inquiry%20from%20Website&body=Hi%20Safenexo%2C%0D%0A%0D%0AI'm%20interested%20in%20discussing%20a%20project.%20Here%20are%20the%20details%3A%0D%0A-%20Company%3A%20%0D%0A-%20Goals%3A%20%0D%0A-%20Timeline%3A%20%0D%0A%0D%0AThanks!"
          />
        </div>
      </div>

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
