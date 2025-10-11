"use client"

import * as React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowUp, Globe, Play, Plus, Signature, Sparkles, Code2, Palette, Megaphone, Search, Share2, Bot } from 'lucide-react'
import { SectionReveal } from '@/components/ui/section-reveal'

const MESCHAC_AVATAR = 'https://avatars.githubusercontent.com/u/47919550?v=4'
const BERNARD_AVATAR = 'https://avatars.githubusercontent.com/u/31113941?v=4'
const THEO_AVATAR = 'https://avatars.githubusercontent.com/u/68236786?v=4'
const GLODIE_AVATAR = 'https://avatars.githubusercontent.com/u/99137927?v=4'

export default function FeaturesSection() {
  return (
    <SectionReveal>
      <section>
        <div className="py-24">
          <div className="mx-auto w-full max-w-5xl px-6 lg:px-0">
            <div className="text-center">
              <h2 className="text-foreground text-balance text-4xl md:text-5xl font-semibold">Services that power growth</h2>
              <p className="text-muted-foreground mt-3">Safenexo delivers end‑to‑end solutions across engineering, design, marketing, and automation.</p>
            </div>
            <div className="mt-16 space-y-12">
              <Link href="/services/web-app-development" className="grid items-center gap-6 sm:grid-cols-5 hover:opacity-90 transition-opacity duration-300">
                <Card variant="soft" className="p-6 sm:col-span-2 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-sm">
                  <DevIllustration />
                </Card>
                <div className="max-w-md sm:col-span-3 p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-sm">
                  <h3 className="text-foreground text-lg font-semibold flex items-center gap-2"><Code2 className="size-5"/> Web & App Development</h3>
                  <p className="text-muted-foreground mt-3 text-balance">Full‑stack websites and mobile apps built with modern stacks, performance budgets, and scalable architectures.</p>
                </div>
              </Link>

              <Link href="/services/ui-ux-design" className="grid items-center gap-6 sm:grid-cols-5 hover:opacity-90 transition-opacity duration-300">
                <Card variant="soft" className="overflow-hidden p-6 sm:col-span-2 sm:overflow-clip border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-sm">
                  <CodeReviewIllustration />
                </Card>
                <div className="max-w-md sm:col-span-3 p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-sm">
                  <h3 className="text-foreground text-lg font-semibold flex items-center gap-2"><Palette className="size-5"/> UI/UX Design</h3>
                  <p className="text-muted-foreground mt-3 text-balance">Research‑driven design systems and prototypes that turn complex flows into delightful experiences.</p>
                </div>
              </Link>

              <Link href="/services/digital-marketing" className="grid items-center gap-6 sm:grid-cols-5 hover:opacity-90 transition-opacity duration-300">
                <Card variant="soft" className="p-6 sm:col-span-2 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-sm">
                  <MarketingIllustration />
                </Card>
                <div className="max-w-md sm:col-span-3 p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-sm">
                  <h3 className="text-foreground text-lg font-semibold flex items-center gap-2"><Megaphone className="size-5"/> Digital Marketing</h3>
                  <p className="text-muted-foreground mt-3 text-balance">Paid, lifecycle, and content strategies engineered for measurable ROI and sustainable growth.</p>
                </div>
              </Link>

              <Link href="/services/seo-optimization" className="grid items-center gap-6 sm:grid-cols-5 hover:opacity-90 transition-opacity duration-300">
                <Card variant="soft" className="p-6 sm:col-span-2 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-sm">
                  <SeoIllustration />
                </Card>
                <div className="max-w-md sm:col-span-3 p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-sm">
                  <h3 className="text-foreground text-lg font-semibold flex items-center gap-2"><Search className="size-5"/> SEO Optimization</h3>
                  <p className="text-muted-foreground mt-3 text-balance">Site audits, structured data, and content frameworks to improve rankings and capture intent.</p>
                </div>
              </Link>

              <Link href="/services/social-media-management" className="grid items-center gap-6 sm:grid-cols-5 hover:opacity-90 transition-opacity duration-300">
                <Card variant="soft" className="p-6 sm:col-span-2 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-sm">
                  <SocialIllustration />
                </Card>
                <div className="max-w-md sm:col-span-3 p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-sm">
                  <h3 className="text-foreground text-lg font-semibold flex items-center gap-2"><Share2 className="size-5"/> Social Media Management</h3>
                  <p className="text-muted-foreground mt-3 text-balance">Creative production and community management with performance dashboards and A/B testing.</p>
                </div>
              </Link>

              <Link href="/services/ai-automation" className="grid items-center gap-6 sm:grid-cols-5 hover:opacity-90 transition-opacity duration-300">
                <Card variant="soft" className="p-6 sm:col-span-2 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-sm">
                  <AutomationIllustration />
                </Card>
                <div className="max-w-md sm:col-span-3 p-6 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm shadow-sm">
                  <h3 className="text-foreground text-lg font-semibold flex items-center gap-2"><Bot className="size-5"/> AI & Automation Solutions</h3>
                  <p className="text-muted-foreground mt-3 text-balance">From chatbots to workflow automation, we integrate AI to reduce costs and unlock new capabilities.</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  )
}

const SeoIllustration = () => {
  return (
    <Card aria-hidden className="aspect-video p-4">
      <div className="flex items-center justify-between">
        <div className="text-xs text-muted-foreground">Organic performance</div>
        <div className="bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 px-2 py-0.5 rounded-full text-[10px]">+48% MoM</div>
      </div>
      <div className="mt-2 h-24 w-full overflow-hidden rounded bg-foreground/5">
        <div className="h-full w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_10px,rgba(255,255,255,0.06)_10px,rgba(255,255,255,0.06)_11px)]">
          <div className="h-full w-full bg-gradient-to-tr from-transparent via-foreground/10 to-foreground/20 [clip-path:polygon(0%_80%,10%_75%,20%_70%,30%_72%,40%_65%,50%_68%,60%_55%,70%_60%,80%_48%,90%_52%,100%_40%)]"></div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-[10px]">
        <div className="rounded border border-white/10 bg-white/5 p-2">
          <div className="text-muted-foreground">Clicks</div>
          <div className="font-semibold">12.3k</div>
        </div>
        <div className="rounded border border-white/10 bg-white/5 p-2">
          <div className="text-muted-foreground">Impr.</div>
          <div className="font-semibold">1.2M</div>
        </div>
        <div className="rounded border border-white/10 bg-white/5 p-2">
          <div className="text-muted-foreground">Avg Pos</div>
          <div className="font-semibold">8.4</div>
        </div>
      </div>
    </Card>
  )
}

const SocialIllustration = () => {
  return (
    <Card aria-hidden className="aspect-video p-4">
      <div className="flex items-center gap-2">
        <div className="bg-foreground/10 size-8 rounded-full"></div>
        <div className="bg-foreground/10 size-8 rounded-full"></div>
        <div className="bg-foreground/10 size-8 rounded-full"></div>
        <div className="ml-auto text-[10px] rounded-full border border-sky-500/20 bg-sky-500/15 px-2 py-0.5 text-sky-300">+2.3% ER</div>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-2">
        {[40,55,30,70].map((h,i)=> (
          <div key={i} className="bg-foreground/10 rounded-sm" style={{height:`${h}px`}} />
        ))}
      </div>
      <div className="mt-3 flex items-center justify-between text-[10px]">
        <div className="rounded border border-white/10 bg-white/5 px-2 py-1">Posts 18</div>
        <div className="rounded border border-white/10 bg-white/5 px-2 py-1">Comments 245</div>
        <div className="rounded border border-white/10 bg-white/5 px-2 py-1">Shares 92</div>
      </div>
    </Card>
  )
}

const AutomationIllustration = () => {
  return (
    <Card aria-hidden className="aspect-video p-4">
      <div className="grid grid-cols-4 gap-2">
        {[1,2,3,4].map((k)=> (
          <div key={k} className="rounded border border-white/10 bg-white/5 p-2 text-[10px]">
            <div className="bg-foreground/10 h-2 rounded w-3/4"></div>
            <div className="mt-2 bg-foreground/10 h-2 rounded w-1/2"></div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-2 text-[10px]">
        <div className="rounded-full border border-emerald-500/20 bg-emerald-500/15 px-2 py-0.5 text-emerald-300">Jobs ✓</div>
        <div className="rounded-full border border-violet-500/20 bg-violet-500/15 px-2 py-0.5 text-violet-300">Agents</div>
        <div className="rounded-full border border-cyan-500/20 bg-cyan-500/15 px-2 py-0.5 text-cyan-300">APIs</div>
      </div>
    </Card>
  )
}

const MeetingIllustration = () => {
  return (
    <Card aria-hidden className="aspect-video p-4">
      <div className="relative hidden h-fit">
        <div className="absolute -left-1.5 bottom-1.5 rounded-md border-t border-red-700 bg-red-500 px-1 py-px text-[10px] font-medium text-white shadow-md shadow-red-500/35">PDF</div>
        <div className="h-10 w-8 rounded-md border bg-gradient-to-b from-zinc-100 to-zinc-200"></div>
      </div>
      <div className="mb-0.5 text-sm font-semibold">AI Strategy Meeting</div>
      <div className="mb-4 flex gap-2 text-sm">
        <span className="text-muted-foreground">2:30 - 3:45 PM</span>
      </div>
      <div className="mb-2 flex -space-x-1.5">
        <div className="flex -space-x-1.5">
          {[
            { src: MESCHAC_AVATAR, alt: 'Méschac Irung' },
            { src: BERNARD_AVATAR, alt: 'Bernard Ngandu' },
            { src: THEO_AVATAR, alt: 'Théo Balick' },
            { src: GLODIE_AVATAR, alt: 'Glodie Lukose' },
          ].map((avatar, index) => (
            <div key={index} className="bg-background size-7 rounded-full border p-0.5 shadow shadow-zinc-950/5">
              <img className="aspect-square rounded-full object-cover" src={avatar.src} alt={avatar.alt} height="460" width="460" />
            </div>
          ))}
        </div>
      </div>
      <div className="text-muted-foreground text-sm font-medium">ML Pipeline Discussion</div>
    </Card>
  )
}

const CodeReviewIllustration = () => {
  return (
    <div aria-hidden className="relative">
      <Card className="aspect-video w-4/5 p-3 transition-transform duration-200 ease-in-out group-hover:-rotate-3">
        <div className="mb-3 grid grid-cols-[auto_1fr] gap-2">
          <div className="bg-background size-6 rounded-full border p-0.5 shadow shadow-zinc-950/5">
            <img className="aspect-square rounded-full object-cover" src={MESCHAC_AVATAR} alt="M Irung" height="460" width="460" />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-muted-foreground line-clamp-1 text-sm font-medium">Méschac Irung</span>
            <span className="text-muted-foreground/75 text-xs">2m</span>
          </div>
        </div>
        <div className="ml-8 space-y-2">
          <div className="bg-foreground/10 h-2 rounded-full"></div>
          <div className="bg-foreground/10 h-2 w-3/5 rounded-full"></div>
          <div className="bg-foreground/10 h-2 w-1/2 rounded-full"></div>
        </div>
        <Signature className="ml-8 mt-3 size-5" />
      </Card>
      <Card className="aspect-3/5 absolute right-0 top-4 flex w-2/5 translate-y-4 p-2 transition-transform duration-200 ease-in-out group-hover:rotate-3">
        <div className="bg-foreground/5 m-auto flex size-10 rounded-full">
          <Play className="fill-foreground/50 stroke-foreground/50 m-auto size-4" />
        </div>
      </Card>
    </div>
  )
}

const AIAssistantIllustration = () => {
  return (
    <Card aria-hidden className="aspect-video p-4 transition-transform duration-200 group-hover:translate-y-0">
      <div className="w-fit">
        <Sparkles className="size-3.5 fill-purple-300 stroke-purple-300" />
        <p className="mt-2 line-clamp-2 text-sm">How can I optimize my neural network to reduce inference time while maintaining accuracy?</p>
      </div>
      <div className="bg-foreground/5 -mx-3 -mb-3 mt-3 space-y-3 rounded-lg p-3">
        <div className="text-muted-foreground text-sm">Ask AI Assistant</div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="size-7 rounded-2xl bg-transparent shadow-none">
              <Plus />
            </Button>
            <Button variant="outline" size="icon" className="size-7 rounded-2xl bg-transparent shadow-none">
              <Globe />
            </Button>
          </div>
          <Button size="icon" className="size-7 rounded-2xl bg-black">
            <ArrowUp strokeWidth={3} />
          </Button>
        </div>
      </div>
    </Card>
  )
}

const DevIllustration = () => {
  return (
    <Card aria-hidden className="aspect-video p-4">
      <div className="mb-2 flex items-center gap-2 text-xs">
        <div className="rounded border border-white/10 bg-white/5 px-2 py-0.5">Next.js</div>
        <div className="rounded border border-white/10 bg-white/5 px-2 py-0.5">TypeScript</div>
        <div className="rounded border border-white/10 bg-white/5 px-2 py-0.5">Tailwind</div>
      </div>
      <div className="rounded-lg border border-white/10 bg-black/40 p-3">
        <div className="bg-foreground/10 h-2 w-2/3 rounded" />
        <div className="mt-2 grid grid-cols-3 gap-2">
          <div className="h-16 rounded bg-foreground/10" />
          <div className="h-16 rounded bg-foreground/10" />
          <div className="h-16 rounded bg-foreground/10" />
        </div>
      </div>
    </Card>
  )
}

const MarketingIllustration = () => {
  return (
    <Card aria-hidden className="aspect-video p-4">
      <div className="flex items-center justify-between text-xs">
        <div className="text-muted-foreground">Campaign ROI</div>
        <div className="rounded-full border border-emerald-500/20 bg-emerald-500/15 px-2 py-0.5 text-emerald-300">+126%</div>
      </div>
      <div className="mt-3 grid grid-cols-5 gap-2 items-end">
        {[30,45,22,60,48].map((h,i)=> (
          <div key={i} className="rounded bg-foreground/10" style={{height:`${h}px`}} />
        ))}
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-[10px]">
        <div className="rounded border border-white/10 bg-white/5 p-2"><div className="text-muted-foreground">Leads</div><div className="font-semibold">1,240</div></div>
        <div className="rounded border border-white/10 bg-white/5 p-2"><div className="text-muted-foreground">CPC</div><div className="font-semibold">$0.42</div></div>
        <div className="rounded border border-white/10 bg-white/5 p-2"><div className="text-muted-foreground">CVR</div><div className="font-semibold">6.1%</div></div>
      </div>
    </Card>
  )
}


