"use client";

import { ArticleCard } from "@/components/ui/card-23";
import { SectionReveal } from "@/components/ui/section-reveal";

export function CEOMessage() {
  const ceoCardData = {
    tag: "Leadership & Vision",
    date: {
      month: "",
      day: 0,
    },
    title: "Message from CEO Muhammad Abdullah",
    description:
      "At Safenexo, we believe technology should empower businesses to reach their full potential. Our mission is to bridge the gap between innovative AI solutions and real-world business challenges, creating digital experiences that not only look exceptional but drive measurable growth and transformation.",
    imageUrl: "/images/muhammad-abdullah.jpeg",
    imageAlt: "CEO Muhammad Abdullah - Leading Safenexo's vision for AI-powered digital transformation",
    location: {
      city: "",
      country: "",
    },
  };

  return (
    <SectionReveal>
      <section className="py-16 md:py-24">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-foreground text-4xl md:text-5xl font-semibold mb-4">
              Leadership Vision
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Hear from our CEO about the future of digital transformation and how Safenexo is leading the way in AI-powered business solutions.
            </p>
          </div>
          
          <div className="flex justify-center">
            <ArticleCard {...ceoCardData} className="border border-white/10 bg-white/5 backdrop-blur-sm shadow-lg" />
          </div>
          
          <div className="mt-12 text-center">
            <blockquote className="text-xl md:text-2xl text-muted-foreground italic max-w-4xl mx-auto leading-relaxed">
              "We're not just building websites and apps – we're crafting intelligent digital ecosystems that learn, adapt, and evolve with your business. Every project is an opportunity to push the boundaries of what's possible with AI and design."
            </blockquote>
            <div className="mt-6">
              <cite className="text-foreground font-semibold">Muhammad Abdullah</cite>
              <p className="text-muted-foreground">CEO & Co-Founder, Safenexo</p>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}
