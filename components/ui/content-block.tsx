'use client'
import { cn } from '@/lib/utils'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Bold, Italic, Strikethrough, Underline } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ContentSection() {
    return (
        <section>
            <div className="bg-muted/50 py-24">
                <div className="mx-auto w-full max-w-5xl px-6">
                    <div>
                        <span className="text-primary">About Safenexo</span>
                        <h2 className="text-foreground mt-4 text-4xl font-semibold">Building the Future with AI & Design</h2>
                        <p className="text-muted-foreground mb-12 mt-4 text-lg">We are a full-service digital agency specializing in intelligent technology solutions. Our mission is to transform businesses through pixel-perfect design, scalable development, and strategic AI automation that drives measurable growth and competitive advantage.</p>
                    </div>

                    <div className="border-foreground/5 space-y-6 [--color-border:color-mix(in_oklab,var(--color-foreground)10%,transparent)] sm:space-y-0 sm:divide-y">
                        <div className="grid sm:grid-cols-5 sm:divide-x">
                            <CodeIllustration className="sm:col-span-2" />
                            <div className="mt-6 sm:col-span-3 sm:mt-0 sm:border-l sm:pl-12">
                                <h3 className="text-foreground text-xl font-semibold">Web Development</h3>
                                <p className="text-muted-foreground mt-4 text-lg">We create modern, responsive websites and web applications that deliver exceptional user experiences. Our development process ensures timely delivery while focusing on high-priority features that drive business results.</p>
                            </div>
                        </div>
                        <div className="grid sm:grid-cols-5 sm:divide-x">
                            <div className="pt-12 sm:col-span-3 sm:border-r sm:pr-12">
                                <h3 className="text-foreground text-xl font-semibold">AI Automation Solutions</h3>
                                <p className="text-muted-foreground mt-4 text-lg">We develop custom AI automations and intelligent workflows that streamline your business processes. Our solutions eliminate manual tasks, reduce operational costs, and provide strategic automation tailored to your specific business needs and goals.</p>
                            </div>
                            <div className="row-start-1 flex items-center justify-center pt-12 sm:col-span-2 sm:row-start-auto">
                                <CircularAnimation className="pt-8" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export const CodeIllustration = ({ className }: { className?: string }) => {
    const items = ['Web Apps', 'Mobile Apps', 'UI/UX', 'AI Solutions', 'Automation'];
    
    return (
        <div className={cn('relative overflow-hidden h-32', className)}>
            <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_50%,transparent_100%)]">
                <div className="animate-scroll-up">
                    <ul className="text-muted-foreground mx-auto w-fit font-mono text-2xl font-medium space-y-4">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className={cn(
                                    "text-center transition-all duration-500",
                                    index === 2 && "text-foreground font-semibold scale-110"
                                )}>
                                {item}
                            </li>
                        ))}
                        {/* Duplicate items for seamless loop */}
                        {items.map((item, index) => (
                            <li
                                key={`duplicate-${index}`}
                                className={cn(
                                    "text-center transition-all duration-500",
                                    index === 2 && "text-foreground font-semibold scale-110"
                                )}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export const CircularAnimation = ({ className }: { className?: string }) => {
    const items = ['AI Chatbots', 'Process Automation', 'Data Analysis', 'Smart Workflows', 'Machine Learning'];
    
    return (
        <div className={cn('relative overflow-hidden h-32 w-full', className)}>
            <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_0%,#000_20%,#000_80%,transparent_100%)]">
                <div className="animate-scroll-up">
                    <ul className="text-muted-foreground mx-auto w-fit font-mono text-2xl font-medium space-y-4">
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className={cn(
                                    "text-center transition-all duration-500",
                                    index === 2 && "text-foreground font-semibold scale-110"
                                )}>
                                {item}
                            </li>
                        ))}
                        {/* Duplicate items for seamless loop */}
                        {items.map((item, index) => (
                            <li
                                key={`duplicate-${index}`}
                                className={cn(
                                    "text-center transition-all duration-500",
                                    index === 2 && "text-foreground font-semibold scale-110"
                                )}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
