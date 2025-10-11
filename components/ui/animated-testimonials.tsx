"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { SectionReveal } from "@/components/ui/section-reveal";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <SectionReveal className={cn("max-w-sm md:max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-20", className)}>
      <div className="text-center mb-16">
        <h2 className="text-foreground text-balance text-4xl md:text-5xl font-semibold mb-4">What our clients say</h2>
        <p className="text-muted-foreground">Real feedback from teams we've helped grow</p>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.src}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 999
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    draggable={false}
                    className="h-full w-full rounded-3xl object-cover object-center border border-white/10"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-between flex-col py-4">
          <motion.div
            key={active}
            initial={{
              y: 20,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -20,
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            <h3 className="text-2xl font-bold text-foreground">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {testimonials[active].designation}
            </p>
            <motion.p className="text-lg text-muted-foreground mt-8">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button border border-white/10 hover:border-white/20 transition-colors"
            >
              <IconArrowLeft className="h-5 w-5 text-foreground group-hover/button:rotate-12 transition-transform duration-300" />
            </button>
            <button
              onClick={handleNext}
              className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center group/button border border-white/10 hover:border-white/20 transition-colors"
            >
              <IconArrowRight className="h-5 w-5 text-foreground group-hover/button:-rotate-12 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
};

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        "Safenexo transformed our digital presence completely. Their web development and AI automation solutions increased our conversion rate by 40% in just 3 months.",
      name: "Sarah Chen",
      designation: "CEO at TechFlow",
      src: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote:
        "The UI/UX design work was exceptional. They understood our brand perfectly and created an interface that our customers absolutely love. User engagement doubled.",
      name: "Michael Rodriguez",
      designation: "Product Manager at InnovateSphere",
      src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "Their digital marketing strategy and SEO optimization helped us rank #1 for our target keywords. Organic traffic increased by 300% within 6 months.",
      name: "Emily Watson",
      designation: "Marketing Director at CloudScale",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "The AI automation tools they built for us saved 20 hours per week. Our team can now focus on strategic work instead of repetitive tasks.",
      name: "James Kim",
      designation: "Operations Lead at DataPro",
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=3464&auto=format&fit=crop",
    },
    {
      quote:
        "From concept to launch, Safenexo delivered beyond our expectations. Their social media management increased our followers by 500% and engagement by 250%.",
      name: "Lisa Thompson",
      designation: "Brand Manager at FutureNet",
      src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=2592&auto=format&fit=crop",
    },
  ];

  return <AnimatedTestimonials testimonials={testimonials} autoplay />;
}
