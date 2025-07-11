"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowUpRight, Linkedin, Twitter, Dribbble } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
      <section id="services" className="py-32 px-8 relative overflow-hidden scroll-mt-24">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-gradient-to-r from-cyan-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              What We Do
            </h2>
            <p className="text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              We don't just build digital products—we architect intelligent ecosystems that evolve with your business
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <div
                  className="group relative cursor-pointer"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/[0.05] transition-all duration-700 overflow-hidden">
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl`}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
                      <div className="md:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                          <span className="text-sm font-medium text-white/50 uppercase tracking-wider">
                            0{index + 1}
                          </span>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-bold mb-6 text-white group-hover:text-white transition-colors duration-500">
                          {service.title}
                        </h3>
                        <p className="text-xl text-white/60 group-hover:text-white/80 transition-colors duration-500 leading-relaxed max-w-2xl">
                          {service.description}
                        </p>
                      </div>
                      <div className="flex justify-end">
                        <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white/40 group-hover:scale-110 transition-all duration-500">
                          <ArrowUpRight className="w-8 h-8 text-white/60 group-hover:text-white transition-colors duration-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center overflow-hidden">
              <Image
                src="/images/muhammad-abdullah.jpeg"
                alt="Muhammad Abdullah"
                width={128}
                height={128}
                className="rounded-full"
              />
            </div>
            <h3 className="text-3xl font-bold mb-2">Muhammad Abdullah</h3>
            <p className="text-white/70 mb-8">Founder & CEO</p>
            <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-white/80 italic">
              "Leading Safenexo with a vision for autonomous digital transformation."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Enhanced */}
      <section id="work" className="py-32 px-8 relative overflow-hidden scroll-mt-24">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 tracking-tight bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Selected Work
            </h2>
            <p className="text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Intelligent digital products that push boundaries and deliver exceptional results
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* NeuralCommerce */}
            <Link href="/case-studies/neuralcommerce">
              <div
                className="group cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 hover:border-white/20 transition-all duration-700">
                  <div className="aspect-[4/3] relative overflow-hidden flex items-center justify-center">
                    <div
                      className="absolute inset-0 flex items-center justify-center text-white text-8xl font-bold"
                      style={{ background: "linear-gradient(to bottom right, #3B82F6, #06B6D4)" }}
                    >
                      N
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="inline-block px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium mb-4">
                        AI Web Development
                      </div>
                      <h3 className="text-3xl font-bold mb-3 text-white">NeuralCommerce</h3>
                      <p className="text-white/80 text-lg mb-4">
                        AI-powered e-commerce platform with 340% conversion increase
                      </p>
                      <div className="flex items-center text-white/60 group-hover:text-white/80 transition-colors">
                        <span className="text-sm font-medium">View Case Study</span>
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Quantum Analytics */}
            <Link href="/case-studies/quantum-analytics">
              <div
                className="group cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-white/10 hover:border-white/20 transition-all duration-700">
                  <div className="aspect-[4/3] relative overflow-hidden flex items-center justify-center">
                    <div
                      className="absolute inset-0 flex items-center justify-center text-white text-8xl font-bold"
                      style={{ background: "linear-gradient(to bottom right, #22C55E, #10B981)" }}
                    >
                      Q
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-sm font-medium mb-4">
                        Chatbot & Automation
                      </div>
                      <h3 className="text-3xl font-bold mb-3 text-white">Quantum Analytics</h3>
                      <p className="text-white/80 text-lg mb-4">
                        Real-time data visualization with 50M+ data points processed
                      </p>
                      <div className="flex items-center text-white/60 group-hover:text-white/80 transition-colors">
                        <span className="text-sm font-medium">View Case Study</span>
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Synapse CRM */}
            <Link href="/case-studies/synapse-crm">
              <div
                className="group cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 hover:border-white/20 transition-all duration-700">
                  <div className="aspect-[4/3] relative overflow-hidden flex items-center justify-center">
                    <div
                      className="absolute inset-0 flex items-center justify-center text-white text-8xl font-bold"
                      style={{ background: "linear-gradient(to bottom right, #A855F7, #EC4899)" }}
                    >
                      S
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="inline-block px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium mb-4">
                        Mobile App Experience
                      </div>
                      <h3 className="text-3xl font-bold mb-3 text-white">Synapse CRM</h3>
                      <p className="text-white/80 text-lg mb-4">
                        Intelligent CRM app with 220% lead conversion increase
                      </p>
                      <div className="flex items-center text-white/60 group-hover:text-white/80 transition-colors">
                        <span className="text-sm font-medium">View Case Study</span>
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            {/* Nexus Mobile */}
            <Link href="/case-studies/nexus-mobile">
              <div
                className="group cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-white/10 hover:border-white/20 transition-all duration-700">
                  <div className="aspect-[4/3] relative overflow-hidden flex items-center justify-center">
                    <div
                      className="absolute inset-0 flex items-center justify-center text-white text-8xl font-bold"
                      style={{ background: "linear-gradient(to bottom right, #F97316, #EF4444)" }}
                    >
                      N
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-8 left-8 right-8">
                      <div className="inline-block px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-sm font-medium mb-4">
                        Organic Growth SEO
                      </div>
                      <h3 className="text-3xl font-bold mb-3 text-white">Nexus Mobile</h3>
                      <p className="text-white/80 text-lg mb-4">SEO transformation with 450% organic traffic growth</p>
                      <div className="flex items-center text-white/60 group-hover:text-white/80 transition-colors">
                        <span className="text-sm font-medium">View Case Study</span>
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Email Section */}
      <section id="contact" className="py-32 px-8 relative overflow-hidden scroll-mt-24">
        {/* Enhanced Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Let's build something intelligent.
            </h2>
            <p className="text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your digital presence with AI? Let's start the conversation.
            </p>
          </div>

          <div
            className="group relative cursor-pointer"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onClick={() =>
              window.open(
                "mailto:support@safenexo.com?subject=Project Inquiry&body=Hi Safenexo team,%0D%0A%0D%0AI would like to discuss a project with you.%0D%0A%0D%0AProject Type: %0D%0ATimeline: %0D%0ABudget Range: %0D%0A%0D%0APlease let me know when we can schedule a call.%0D%0A%0D%0AThank you!",
              )
            }
          >
            <Card className="bg-white/5 border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-700 overflow-hidden relative">
              <CardContent className="p-16 relative">
                {/* Enhanced Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Content */}
                <div className="relative z-10 space-y-10">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-blue-500/25">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {/* Glow effect */}
                      <div className="absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                    </div>

                    <div>
                      <h3 className="text-5xl md:text-6xl font-bold mb-6 text-white group-hover:text-white transition-colors duration-500 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                        Get In Touch
                      </h3>
                      <p className="text-2xl text-white/70 group-hover:text-white/90 transition-colors duration-500 max-w-3xl mx-auto leading-relaxed">
                        Click to send us an email and let's discuss how we can transform your digital presence with
                        intelligent solutions that drive real results.
                      </p>
                    </div>

                    <div className="flex items-center justify-center gap-6 text-white/60 group-hover:text-white/80 transition-colors duration-500">
                      <span className="text-xl font-medium">support@safenexo.com</span>
                      <ArrowRight className="w-8 h-8 group-hover:translate-x-3 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-24 px-8 overflow-hidden">
        {/* Animated Background - same as hero */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="text-4xl md:text-5xl font-bold mb-8 tracking-tight bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Safenexo
            </div>
            <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
              Crafting intelligent digital experiences that push the boundaries of what's possible
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Services</h4>
              <ul className="space-y-3 text-white/70">
                <li>
                  <Link href="/services/ai-web-development" className="hover:text-white transition-colors">
                    AI Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-app-experiences" className="hover:text-white transition-colors">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="/services/chatbot-automation" className="hover:text-white transition-colors">
                    Automation
                  </Link>
                </li>
                <li>
                  <Link href="/services/organic-growth-seo" className="hover:text-white transition-colors">
                    SEO & Growth
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Company</h4>
              <ul className="space-y-3 text-white/70">
                <li>
                  <Link href="/#about" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#work" className="hover:text-white transition-colors">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies/neuralcommerce" className="hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Connect</h4>
              <div className="flex flex-col space-y-2 mb-6">
                <a
                  href="https://www.facebook.com/share/1BN3DHXz1J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors text-base font-medium"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/safenexo?igsh=eXQ4aDZpa2luY3V3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors text-base font-medium"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/safenexo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors text-base font-medium"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
            <div className="text-white/50 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Safenexo. Crafting the future of digital.
            </div>
            <div className="text-white/50">
              Powered by{" "}
              <a
                href="https://tydir.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-white transition-colors font-medium"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                Tydir
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
