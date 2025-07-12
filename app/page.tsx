"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowUpRight, Dribbble, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function SafenexoStudio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const services = [
    {
      title: "AI Web Development",
      description: "Intelligent websites that adapt and evolve with your users",
      gradient: "from-blue-500/20 to-cyan-500/20",
      href: "/services/ai-web-development",
    },
    {
      title: "Mobile App Experiences",
      description: "Native and cross-platform apps with AI-driven UX",
      gradient: "from-purple-500/20 to-pink-500/20",
      href: "/services/mobile-app-experiences",
    },
    {
      title: "Chatbot & Automation Systems",
      description: "Conversational AI that transforms customer interactions",
      gradient: "from-green-500/20 to-emerald-500/20",
      href: "/services/chatbot-automation",
    },
    {
      title: "Organic Growth SEO",
      description: "AI-powered content strategies that rank and convert",
      gradient: "from-orange-500/20 to-red-500/20",
      href: "/services/organic-growth-seo",
    },
    {
      title: "Digital Strategy & Consulting",
      description: "Strategic guidance for AI-first digital transformation",
      gradient: "from-indigo-500/20 to-blue-500/20",
      href: "/services/digital-strategy",
    },
  ]

  const projects = [
    {
      title: "NeuralCommerce",
      subtitle: "AI-Powered E-commerce Platform",
      gradient: "from-blue-500/10 to-cyan-500/10",
      href: "/case-studies/neuralcommerce",
    },
    {
      title: "Quantum Analytics",
      subtitle: "Real-time Data Visualization",
      gradient: "from-green-500/10 to-emerald-500/10",
      href: "/case-studies/quantum-analytics",
    },
    {
      title: "Synapse CRM",
      subtitle: "Intelligent Customer Management",
      gradient: "from-purple-500/10 to-pink-500/10",
      href: "/case-studies/synapse-crm",
    },
    {
      title: "Nexus Mobile",
      subtitle: "Cross-Platform App Suite",
      gradient: "from-orange-500/10 to-red-500/10",
      href: "/case-studies/nexus-mobile",
    },
  ]

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll(".scroll-animate")
    animateElements.forEach((el) => observer.observe(el))

    return () => {
      animateElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <>
      {/* Structured Data for Homepage */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Safenexo",
            "url": "https://safenexo.com",
            "logo": "https://safenexo.com/favicon_safenexo.png",
            "description": "Safenexo is a next-gen studio crafting intelligent digital products with precision and creativity. We merge AI, automation, and human creativity to craft powerful digital systems.",
            "foundingDate": "2024",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "customer service",
              "email": "hello@safenexo.com"
            },
            "sameAs": [
              "https://twitter.com/safenexo",
              "https://linkedin.com/company/safenexo",
              "https://dribbble.com/safenexo"
            ],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Digital Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "AI Web Development",
                    "description": "Intelligent websites that adapt and evolve with your users"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Mobile App Experiences",
                    "description": "Native and cross-platform apps with AI-driven UX"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Chatbot & Automation Systems",
                    "description": "Conversational AI that transforms customer interactions"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Organic Growth SEO",
                    "description": "AI-powered content strategies that rank and convert"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Digital Strategy & Consulting",
                    "description": "Strategic guidance for AI-first digital transformation"
                  }
                }
              ]
            },
            "worksFor": {
              "@type": "Organization",
              "name": "Safenexo"
            }
          })
        }}
      />

      <div className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
        {/* Custom Cursor */}
        <div
          className={`fixed w-4 h-4 pointer-events-none z-50 transition-all duration-200 ease-out ${
            isHovering ? "scale-200 bg-white/40 shadow-lg shadow-white/20" : "scale-100 bg-white/20"
          } rounded-full mix-blend-difference`}
          style={{
            left: mousePosition.x - 8,
            top: mousePosition.y - 8,
            transform: `translate3d(0, 0, 0)`,
          }}
        />

        {/* Navigation */}
        <nav className="fixed top-0 w-full z-40 backdrop-blur-xl bg-[#0A0A0A]/80 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold tracking-tight">
                Safenexo
              </Link>
              <div className="hidden md:flex items-center space-x-12 text-sm font-medium">
                <Link href="/#about" className="text-white/70 hover:text-white transition-colors">
                  About
                </Link>
                <div className="relative group">
                  <span className="text-white/70 hover:text-white transition-colors cursor-pointer">Services</span>
                  <div className="absolute top-full left-0 mt-2 w-64 bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 rounded-xl p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="space-y-2">
                      <Link
                        href="/services/ai-web-development"
                        className="block text-white/70 hover:text-white transition-colors py-2"
                      >
                        AI Web Development
                      </Link>
                      <Link
                        href="/services/mobile-app-experiences"
                        className="block text-white/70 hover:text-white transition-colors py-2"
                      >
                        Mobile App Experiences
                      </Link>
                      <Link
                        href="/services/chatbot-automation"
                        className="block text-white/70 hover:text-white transition-colors py-2"
                      >
                        Chatbot & Automation
                      </Link>
                      <Link
                        href="/services/organic-growth-seo"
                        className="block text-white/70 hover:text-white transition-colors py-2"
                      >
                        Organic Growth SEO
                      </Link>
                      <Link
                        href="/services/digital-strategy"
                        className="block text-white/70 hover:text-white transition-colors py-2"
                      >
                        Digital Strategy
                      </Link>
                    </div>
                  </div>
                </div>
                <Link href="/#work" className="text-white/70 hover:text-white transition-colors">
                  Work
                </Link>
                <Link href="/#contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-8">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-8 tracking-tight">
              <span className="block opacity-0 animate-fade-up">Building the</span>
              <span className="block opacity-0 animate-fade-up delay-200">Future with</span>
              <span className="block bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent opacity-0 animate-fade-up delay-400">
                AI & Design
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-up delay-600">
              Safenexo is a next-gen studio crafting intelligent digital products with precision and creativity.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center opacity-0 animate-fade-up delay-800">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 px-8 py-4 text-lg font-medium"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => (window.location.href = "/#contact")}
              >
                Start Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 px-8 py-4 text-lg font-medium bg-transparent"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => (window.location.href = "/#contact")}
              >
                View Services
              </Button>
            </div>
          </div>
        </section>

        {/* About Section with Scroll Animation */}
        <section id="about" className="py-32 px-8 min-h-screen flex items-center justify-center scroll-mt-24">
          <div className="max-w-6xl mx-auto text-center">
            <div className="space-y-12">
              <div className="scroll-animate">
                <h2 className="text-6xl md:text-7xl font-bold leading-tight tracking-tight text-white mb-16">
                  About Safenexo
                </h2>
              </div>

              <div className="scroll-animate" style={{ transitionDelay: "0.2s" }}>
                <p className="text-3xl md:text-4xl font-light leading-relaxed text-white/90 max-w-5xl mx-auto">
                  We merge AI, automation, and human creativity to craft powerful digital systems.
                </p>
              </div>

              <div className="scroll-animate" style={{ transitionDelay: "0.4s" }}>
                <p className="text-3xl md:text-4xl font-light leading-relaxed text-white/90 max-w-5xl mx-auto">
                  From smart websites to full-scale AI agents, we engineer growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-32 px-8 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">Our Services</h2>
              <p className="text-2xl text-white/70 max-w-4xl mx-auto">
                Comprehensive digital solutions powered by artificial intelligence and cutting-edge technology.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.href}
                  className="group block"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <Card className="bg-white/5 border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                    <CardContent className="p-8">
                      <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl mb-6`}></div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-white/70 leading-relaxed mb-6">{service.description}</p>
                      <div className="flex items-center text-white/50 group-hover:text-white transition-colors">
                        <span className="text-sm font-medium">Learn More</span>
                        <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-32 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">Featured Work</h2>
              <p className="text-2xl text-white/70 max-w-4xl mx-auto">
                Discover how we've transformed businesses through intelligent digital solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Link
                  key={index}
                  href={project.href}
                  className="group block"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className={`relative aspect-[4/3] bg-gradient-to-br ${project.gradient} rounded-2xl overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <h3 className="text-3xl font-bold mb-2 group-hover:text-white transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-white/70 text-lg">{project.subtitle}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-8 bg-white/[0.02]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight">Let's Build Together</h2>
            <p className="text-2xl text-white/70 mb-12 leading-relaxed">
              Ready to transform your business with AI-powered digital solutions?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 px-8 py-4 text-lg font-medium"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 px-8 py-4 text-lg font-medium bg-transparent"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Schedule a Call
              </Button>
            </div>

            <div className="flex justify-center space-x-8">
              <a
                href="https://twitter.com/safenexo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/company/safenexo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://dribbble.com/safenexo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-white transition-colors"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <Dribbble className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
