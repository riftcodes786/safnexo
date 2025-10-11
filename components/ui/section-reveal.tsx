"use client";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { Variants } from "framer-motion";
import React from "react";

const heroLikeVariants: { container: Variants; item: Variants } = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { type: "spring", bounce: 0.3, duration: 1.2 },
    },
  },
};

type SectionRevealProps = React.PropsWithChildren<{ className?: string }>;

export function SectionReveal({ children, className }: SectionRevealProps) {
  return (
    <AnimatedGroup variants={heroLikeVariants} className={className} inView once rootMargin="-20% 0px -10% 0px">
      {children}
    </AnimatedGroup>
  );
}


