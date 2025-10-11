import { MoveDownLeft, MoveUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SectionReveal } from "@/components/ui/section-reveal";

function Stats() {
  return (
    <SectionReveal className="w-full py-16 md:py-20 lg:py-32">
      <div className="container mx-auto px-6 relative">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 blur-[1px] bg-[radial-gradient(70%_70%_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge className="bg-cyan-600 text-white">About Safenexo</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-2xl md:text-4xl lg:text-5xl tracking-tighter lg:max-w-xl font-semibold text-left">
                Smart, scalable digital products that fuel growth
              </h2>
              <p className="text-base md:text-lg lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                We design and build web and mobile apps, craft conversion-first
                UI/UX, and automate workflows with AI so your team can focus on
                impact. From MVP to enterprise scale, we deliver fast and iterate
                with you.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid text-left grid-cols-1 sm:grid-cols-2 w-full gap-2">
              <div className="flex gap-0 flex-col justify-between p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-sm">
                <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-semibold flex flex-row gap-4 items-end">
                  120+
                  <span className="text-muted-foreground text-sm tracking-normal">
                    projects shipped
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  Across startups and brands
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-sm">
                <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-semibold flex flex-row gap-4 items-end">
                  50+
                  <span className="text-muted-foreground text-sm tracking-normal">
                    5-star reviews
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  On Trustpilot and beyond
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-sm">
                <MoveUpRight className="w-4 h-4 mb-10 text-primary" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-semibold flex flex-row gap-4 items-end">
                  $2.5M+
                  <span className="text-muted-foreground text-sm tracking-normal">
                    client revenue
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  Driven by our products
                </p>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-sm">
                <MoveDownLeft className="w-4 h-4 mb-10 text-destructive" />
                <h2 className="text-4xl tracking-tighter max-w-xl text-left font-semibold flex flex-row gap-4 items-end">
                  30%
                  <span className="text-muted-foreground text-sm tracking-normal">
                    lower CAC
                  </span>
                </h2>
                <p className="text-base leading-relaxed tracking-tight text-muted-foreground max-w-xl text-left">
                  Through UX and automation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionReveal>
  );
}

export { Stats };


