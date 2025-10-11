'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SectionReveal } from '@/components/ui/section-reveal'
import Link from 'next/link'

export default function FAQs() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'What services does Safenexo offer?',
            answer: 'Safenexo provides comprehensive digital solutions including web & app development, UI/UX design, digital marketing, SEO optimization, social media management, and AI automation. We help businesses scale through intelligent, modern technology solutions.',
        },
        {
            id: 'item-2',
            question: 'How long does a typical project take?',
            answer: 'Project timelines vary depending on scope and complexity. Simple websites typically take 2-4 weeks, while complex applications can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.',
        },
        {
            id: 'item-3',
            question: 'Do you work with startups or only established businesses?',
            answer: 'We work with businesses of all sizes, from early-stage startups to established enterprises. Our flexible approach allows us to tailor solutions to your budget and timeline, whether you need an MVP or a comprehensive digital transformation.',
        },
        {
            id: 'item-4',
            question: 'What technologies do you specialize in?',
            answer: 'We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and Python. For mobile development, we use React Native and Flutter. Our AI solutions leverage machine learning frameworks and automation tools to streamline business processes.',
        },
        {
            id: 'item-5',
            question: 'How do you ensure project quality and security?',
            answer: 'We follow industry best practices including code reviews, automated testing, and security audits. All projects include regular check-ins, version control, and comprehensive documentation. We also provide ongoing support and maintenance to ensure your digital assets remain secure and up-to-date.',
        },
        {
            id: 'item-6',
            question: 'What is your pricing model?',
            answer: 'Our pricing is project-based and depends on scope, complexity, and timeline. We offer transparent pricing with no hidden fees and provide detailed proposals before starting any work. We also offer retainer packages for ongoing support and maintenance.',
        },
    ]

    return (
        <SectionReveal>
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-foreground text-balance text-4xl md:text-5xl font-semibold mb-4">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground">Everything you need to know about working with Safenexo</p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-5 md:gap-12">
                        <div className="md:col-span-2">
                            <div className="hidden md:block">
                                <p className="text-muted-foreground">
                                    Can't find what you're looking for? Contact our{' '}
                                    <Link
                                        href="#contact"
                                        className="text-primary font-medium hover:underline">
                                        support team
                                    </Link>
                                </p>
                            </div>
                        </div>

                        <div className="md:col-span-3">
                            <Accordion
                                type="single"
                                collapsible
                                className="bg-white/5 backdrop-blur-sm rounded-xl w-full border border-white/10 px-6 py-3 shadow-sm">
                                {faqItems.map((item) => (
                                    <AccordionItem
                                        key={item.id}
                                        value={item.id}
                                        className="border-white/5">
                                        <AccordionTrigger className="cursor-pointer text-base hover:no-underline text-foreground">{item.question}</AccordionTrigger>
                                        <AccordionContent>
                                            <p className="text-base text-muted-foreground">{item.answer}</p>
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>

                        <p className="text-muted-foreground mt-6 md:hidden">
                            Can't find what you're looking for? Contact our{' '}
                            <Link
                                href="#contact"
                                className="text-primary font-medium hover:underline">
                                support team
                            </Link>
                        </p>
                    </div>
                </div>
            </section>
        </SectionReveal>
    )
}
