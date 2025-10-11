"use client";
import React from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedGroup } from '@/components/ui/animated-group'
import { cn } from '@/lib/utils'

const transitionVariants = {
    item: {
        hidden: {
            opacity: 0,
            filter: 'blur(12px)',
            y: 12,
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: {
                type: 'spring',
                bounce: 0.3,
                duration: 1.5,
            },
        },
    },
}

export function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden">
                <div
                    aria-hidden
                    className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block">
                    <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
                    <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
                    <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
                </div>
                <section>
                    <div className="relative pt-24 md:pt-36">
                        <div aria-hidden className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]" />
                        <div className="mx-auto max-w-7xl px-6">
                            <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                                <AnimatedGroup variants={transitionVariants}>
                                    <h1
                                        className="mt-8 max-w-5xl mx-auto text-balance lg:mt-16 text-[clamp(2.25rem,8vw,7rem)]">
                                        Building the Future with AI & Design
                                    </h1>
                                    <p
                                        className="mx-auto mt-6 md:mt-8 max-w-2xl text-balance text-[clamp(1rem,2.5vw,1.25rem)]">
                                        Safenexo crafts intelligent, scalable digital products, websites, apps, and automations that drive measurable growth.
                                    </p>
                                </AnimatedGroup>

                                <AnimatedGroup
                                    variants={{
                                        container: {
                                            visible: {
                                                transition: {
                                                    staggerChildren: 0.05,
                                                    delayChildren: 0.75,
                                                },
                                            },
                                        },
                                        ...transitionVariants,
                                    }}
                                    className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row">
                                    <div
                                        key={1}
                                        className="bg-foreground/10 rounded-[14px] border p-0.5">
                                        <Button
                                            asChild
                                            size="lg"
                                            className="rounded-xl px-5 text-base">
                                            <Link href="#contact">
                                                <span className="text-nowrap">Start Project</span>
                                            </Link>
                                        </Button>
                                    </div>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="h-10.5 rounded-xl px-5">
                                        <Link href="#services">
                                            <span className="text-nowrap">View Services</span>
                                        </Link>
                                    </Button>
                                </AnimatedGroup>
                            </div>
                        </div>

                        <AnimatedGroup
                            variants={{
                                container: {
                                    visible: {
                                        transition: {
                                            staggerChildren: 0.05,
                                            delayChildren: 0.75,
                                        },
                                    },
                                },
                                ...transitionVariants,
                            }}>
                            <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                                <div
                                    aria-hidden
                                    className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                                />
                                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15 ring-1 hidden lg:block">
                                    <img
                                        className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block w-full h-auto"
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2700&auto=format&fit=crop"
                                        alt="Safenexo team working on AI and design solutions"
                                        width="2700"
                                        height="1440"
                                    />
                                    <img
                                        className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden w-full h-auto"
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2700&auto=format&fit=crop"
                                        alt="Safenexo team working on AI and design solutions"
                                        width="2700"
                                        height="1440"
                                    />
                                </div>
                            </div>
                        </AnimatedGroup>
                    </div>
                </section>
                <section className="bg-background pb-16 pt-16 md:pb-32">
                    <div className="group relative m-auto max-w-5xl px-6">
                        <div className="absolute inset-0 z-10 flex scale-95 items-center justify-center opacity-0 duration-500 group-hover:scale-100 group-hover:opacity-100">
                            <Link
                                href="/"
                                className="block text-sm duration-150 hover:opacity-75">
                                <span> Trusted by teams</span>

                                <ChevronRight className="ml-1 inline-block size-3" />
                            </Link>
                        </div>
                        <div className="group-hover:blur-xs mx-auto mt-12 grid max-w-2xl grid-cols-2 sm:grid-cols-4 gap-x-12 gap-y-8 transition-all duration-500 group-hover:opacity-50 sm:gap-x-16 sm:gap-y-14">
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                    alt="Nvidia Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/github.svg"
                                    alt="GitHub Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/nike.svg"
                                    alt="Nike Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-6 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/openai.svg"
                                    alt="OpenAI Logo"
                                    height="24"
                                    width="auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

interface MenuItem {
    name: string;
    href: string;
}

const menuItems: MenuItem[] = [
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/#contact' },
    { name: 'FAQs', href: '/#faqs' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleNavigation = (href: string) => {
        setMenuState(false) // Close mobile menu on navigation
        
        // Handle anchor links (hash navigation)
        if (href.startsWith('/#')) {
            const hash = href.substring(1) // Remove the leading slash
            const element = document.querySelector(hash)
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
                return
            }
        }
        
        // Handle regular page navigation
        if (href.startsWith('/')) {
            window.location.href = href
        }
    }
    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 group">
                <div className={cn('mx-auto mt-2 max-w-6xl px-4 sm:px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex items-center justify-between py-3 lg:py-4">
                        {/* Logo */}
                        <Link
                            href="/"
                            aria-label="home"
                            className="flex items-center space-x-2 z-30">
                            <Logo />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex lg:items-center lg:space-x-8">
                            {menuItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleNavigation(item.href)}
                                    className="text-muted-foreground hover:text-accent-foreground text-sm font-medium transition-colors duration-150"
                                    aria-label={`Navigate to ${item.name}`}
                                >
                                    {item.name}
                                </button>
                            ))}
                        </div>

                        {/* Desktop CTA Button */}
                        <div className="hidden lg:flex lg:items-center">
                            <Button 
                                size="sm"
                                onClick={() => handleNavigation('/#contact')}
                                aria-label="Get Started - Navigate to Contact"
                            >
                                <span>Get Started</span>
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuState(!menuState)}
                            aria-label={menuState == true ? 'Close Menu' : 'Open Menu'}
                            className="relative z-30 lg:hidden p-2 rounded-lg hover:bg-background/10 transition-colors">
                            <Menu className={cn('size-6 transition-all duration-200', menuState && 'rotate-180 scale-0 opacity-0')} />
                            <X className={cn('absolute inset-0 m-auto size-6 transition-all duration-200 -rotate-180 scale-0 opacity-0', menuState && 'rotate-0 scale-100 opacity-100')} />
                        </button>

                        {/* Mobile Menu Dropdown */}
                        {menuState && (
                            <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-background/95 backdrop-blur-lg rounded-2xl border shadow-2xl shadow-zinc-300/20 dark:shadow-none z-40 lg:hidden">
                                <div className="p-6 space-y-6">
                                    {/* Mobile Navigation Links */}
                                    <ul className="space-y-4">
                                        {menuItems.map((item, index) => (
                                            <li key={index}>
                                                <button
                                                    onClick={() => {
                                                        handleNavigation(item.href);
                                                        setMenuState(false);
                                                    }}
                                                    className="text-muted-foreground hover:text-accent-foreground block w-full text-left text-base font-medium transition-colors duration-150 py-2"
                                                    aria-label={`Navigate to ${item.name}`}
                                                >
                                                    {item.name}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                    
                                    {/* Mobile CTA Button */}
                                    <div className="pt-4 border-t border-border">
                                        <Button 
                                            size="sm"
                                            onClick={() => {
                                                handleNavigation('/#contact');
                                                setMenuState(false);
                                            }}
                                            className="w-full"
                                            aria-label="Get Started - Navigate to Contact"
                                        >
                                            <span>Get Started</span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )
}

const Logo = ({ className }: { className?: string }) => {
    return (
        <img
            src="/untitled-design-2.png"
            alt="Safenexo Logo"
            className={cn('h-12 w-auto', className)}
        />
    )
}


