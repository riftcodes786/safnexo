"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function SafenexoStudio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMobileMenuOpen(false)
    }
    
    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.classList.add('mobile-menu-open')
    } else {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('mobile-menu-open')
    }
    
    return () => {
      document.body.style.overflow = 'unset'
      document.body.classList.remove('mobile-menu-open')
    }
  }, [isMobileMenuOpen])

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
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl sm:text-2xl font-bold tracking-tight">
              Safenexo
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-12 text-sm font-medium">
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 top-[72px] bg-[#0A0A0A] border-t border-white/10 z-[9999] mobile-menu-overlay" style={{zIndex: 9999}}>
            <div className="flex flex-col p-8 space-y-6 relative z-10">
              <Link
                href="/#about"
                className="text-2xl font-medium text-white hover:text-white/80 transition-colors py-4 border-b border-white/20 relative z-10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              
              <div className="space-y-4 relative z-10">
                <span className="text-2xl font-medium text-white py-4 border-b border-white/20 block relative z-10">Services</span>
                <div className="pl-4 space-y-4 relative z-10">
                  <Link
                    href="/services/ai-web-development"
                    className="block text-xl text-white/90 hover:text-white transition-colors relative z-10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    AI Web Development
                  </Link>
                  <Link
                    href="/services/mobile-app-experiences"
                    className="block text-xl text-white/90 hover:text-white transition-colors relative z-10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Mobile App Experiences
                  </Link>
                  <Link
                    href="/services/chatbot-automation"
                    className="block text-xl text-white/90 hover:text-white transition-colors relative z-10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Chatbot & Automation
                  </Link>
                  <Link
                    href="/services/organic-growth-seo"
                    className="block text-xl text-white/90 hover:text-white transition-colors relative z-10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Organic Growth SEO
                  </Link>
                  <Link
                    href="/services/digital-strategy"
                    className="block text-xl text-white/90 hover:text-white transition-colors relative z-10"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Digital Strategy
                  </Link>
                </div>
              </div>
              
              <Link
                href="/#work"
                className="text-2xl font-medium text-white hover:text-white/80 transition-colors py-4 border-b border-white/20 relative z-10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work
              </Link>
              <Link
                href="/#contact"
                className="text-2xl font-medium text-white hover:text-white/80 transition-colors py-4 border-b border-white/20 relative z-10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 pt-20 sm:pt-0">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-6 sm:mb-8 tracking-tight">
            <span className="block opacity-0 animate-fade-up">Building the</span>
            <span className="block opacity-0 animate-fade-up delay-200">Future with</span>
            <span className="block bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent opacity-0 animate-fade-up delay-400">
              AI & Design
            </span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fade-up delay-600 px-4">
            Safenexo is a next-gen studio crafting intelligent digital products with precision and creativity.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center opacity-0 animate-fade-up delay-800 px-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => (window.location.href = "/#contact")}
            >
              Start Project
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/5 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium bg-transparent"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              onClick={() => (window.location.href = "/#services")}
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* About Section with Scroll Animation */}
      <section id="about" className="py-16 sm:py-32 px-4 sm:px-8 min-h-screen flex items-center justify-center scroll-mt-24">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-8 sm:space-y-12">
            <div className="scroll-animate">
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-white mb-8 sm:mb-16">
                About Safenexo
              </h2>
            </div>

            <div className="scroll-animate" style={{ transitionDelay: "0.2s" }}>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white/90 max-w-5xl mx-auto px-4">
                We merge AI, automation, and human creativity to craft powerful digital systems.
              </p>
            </div>

            <div className="scroll-animate" style={{ transitionDelay: "0.4s" }}>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed text-white/90 max-w-5xl mx-auto px-4">
                From smart websites to full-scale AI agents, we engineer growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 sm:py-32 px-4 sm:px-8 relative overflow-hidden scroll-mt-24">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/3 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-cyan-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-24">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              What We Do
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed px-4">
              We don't just build digital products—we architect intelligent ecosystems that evolve with your business
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {services.map((service, index) => (
              <Link key={index} href={service.href}>
                <div
                  className="group relative cursor-pointer"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <div className="relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 hover:bg-white/[0.05] transition-all duration-700 overflow-hidden">
                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl sm:rounded-3xl`}
                    ></div>

                    {/* Content */}
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
                      <div className="md:col-span-2">
                        <div className="flex items-center gap-4 mb-4 sm:mb-6">
                          <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                          <span className="text-sm font-medium text-white/50 uppercase tracking-wider">
                            0{index + 1}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white group-hover:text-white transition-colors duration-500">
                          {service.title}
                        </h3>
                        <p className="text-base sm:text-lg md:text-xl text-white/60 group-hover:text-white/80 transition-colors duration-500 leading-relaxed max-w-2xl">
                          {service.description}
                        </p>
                      </div>
                      <div className="flex justify-center md:justify-end">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 border border-white/20 rounded-full flex items-center justify-center group-hover:border-white/40 group-hover:scale-110 transition-all duration-500">
                          <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 text-white/60 group-hover:text-white transition-colors duration-500" />
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
      <section className="py-16 sm:py-32 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 sm:mb-12">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 sm:mb-8 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center overflow-hidden">
              <Image
                src="/images/muhammad-abdullah.jpeg"
                alt="Muhammad Abdullah"
                width={128}
                height={128}
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2">Muhammad Abdullah</h3>
            <p className="text-white/70 mb-6 sm:mb-8">Founder & CEO</p>
            <blockquote className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-white/80 italic px-4">
              "Leading Safenexo with a vision for autonomous digital transformation."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Portfolio Section - Enhanced */}
      <section id="work" className="py-16 sm:py-32 px-4 sm:px-8 relative overflow-hidden scroll-mt-24">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Selected Work
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed px-4">
              Intelligent digital products that push boundaries and deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* NeuralCommerce */}
            <Link href="/case-studies/neuralcommerce">
              <div
                className="group cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 hover:border-white/20 transition-all duration-700">
                  <div className="aspect-[4/3] relative overflow-hidden flex items-center justify-center">
                    <div
                      className="absolute inset-0 flex items-center justify-center text-white text-4xl sm:text-6xl md:text-8xl font-bold"
                      style={{ background: "linear-gradient(to bottom right, #3B82F6, #06B6D4)" }}
                    >
                      N
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
                      <div className="inline-block px-2 sm:px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                        AI Web Development
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-white">NeuralCommerce</h3>
                      <p className="text-white/80 text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
                        AI-powered e-commerce platform with 340% conversion increase
                      </p>
                      <div className="flex items-center text-white/60 group-hover:text-white/80 transition-colors">
                        <span className="text-xs sm:text-sm font-medium">View Case Study</span>
                        <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-white/10 hover:border-white/20 transition-all duration-700">
                  <div className="aspect-[4/3] relative overflow-hidden flex items-center justify-center">
                    <div
                      className="absolute inset-0 flex items-center justify-center text-white text-4xl sm:text-6xl md:text-8xl font-bold"
                      style={{ background: "linear-gradient(to bottom right, #22C55E, #10B981)" }}
                    >
                      Q
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
                      <div className="inline-block px-2 sm:px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                        Chatbot & Automation
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-white">Quantum Analytics</h3>
                      <p className="text-white/80 text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
                        Real-time data visualization with 50M+ data points processed
                      </p>
                      <div className="flex items-center text-white/60 group-hover:text-white/80 transition-colors">
                        <span className="text-xs sm:text-sm font-medium">View Case Study</span>
                        <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/10 hover:border-white/20 transition-all duration-700">
                  <div className="aspect-[4/3] relative overflow-hidden flex items-center justify-center">
                    <div
                      className="absolute inset-0 flex items-center justify-center text-white text-4xl sm:text-6xl md:text-8xl font-bold"
                      style={{ background: "linear-gradient(to bottom right, #A855F7, #EC4899)" }}
                    >
                      S
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
                      <div className="inline-block px-2 sm:px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                        Mobile App Experience
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-white">Synapse CRM</h3>
                      <p className="text-white/80 text-sm sm:text-base md:text-lg mb-3 sm:mb-4">
                        Intelligent CRM app with 220% lead conversion increase
                      </p>
                      <div className="flex items-center text-white/60 group-hover:text-white/80 transition-colors">
                        <span className="text-xs sm:text-sm font-medium">View Case Study</span>
                        <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
                <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-white/10 hover:border-white/20 transition-all duration-700">
                  <div className="aspect-[4/3] relative overflow-hidden flex items-center justify-center">
                    <div
                      className="absolute inset-0 flex items-center justify-center text-white text-4xl sm:text-6xl md:text-8xl font-bold"
                      style={{ background: "linear-gradient(to bottom right, #F97316, #EF4444)" }}
                    >
                      N
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 right-4 sm:right-8">
                      <div className="inline-block px-2 sm:px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full text-orange-300 text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                        Organic Growth SEO
                      </div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-white">Nexus Mobile</h3>
                      <p className="text-white/80 text-sm sm:text-base md:text-lg mb-3 sm:mb-4">SEO transformation with 450% organic traffic growth</p>
                      <div className="flex items-center text-white/60 group-hover:text-white/80 transition-colors">
                        <span className="text-xs sm:text-sm font-medium">View Case Study</span>
                        <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
      <section id="contact" className="py-16 sm:py-32 px-4 sm:px-8 relative overflow-hidden scroll-mt-24">
        {/* Enhanced Background Gradients */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-cyan-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 tracking-tight bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Let's build something intelligent.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed px-4">
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
              <CardContent className="p-8 sm:p-12 md:p-16 relative">
                {/* Enhanced Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                {/* Content */}
                <div className="relative z-10 space-y-6 sm:space-y-10">
                  <div className="relative">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500 shadow-2xl shadow-blue-500/25">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      {/* Glow effect */}
                      <div className="absolute inset-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"></div>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white group-hover:text-white transition-colors duration-500 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
                        Get In Touch
                      </h3>
                      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/70 group-hover:text-white/90 transition-colors duration-500 max-w-3xl mx-auto leading-relaxed px-4">
                        Click to send us an email and let's discuss how we can transform your digital presence with
                        intelligent solutions that drive real results.
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-white/60 group-hover:text-white/80 transition-colors duration-500 mt-4 sm:mt-6">
                      <span className="text-base sm:text-lg md:text-xl font-medium">support@safenexo.com</span>
                      <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 group-hover:translate-x-3 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 sm:py-24 px-4 sm:px-8 overflow-hidden">
        {/* Animated Background - same as hero */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-cyan-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Border */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12 sm:mb-16">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 tracking-tight bg-gradient-to-r from-white via-white to-white/80 bg-clip-text text-transparent">
              Safenexo
            </div>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed px-4">
              Crafting intelligent digital experiences that push the boundaries of what's possible
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Services</h4>
              <ul className="space-y-2 sm:space-y-3 text-white/70">
                <li>
                  <Link href="/services/ai-web-development" className="hover:text-white transition-colors text-sm sm:text-base">
                    AI Development
                  </Link>
                </li>
                <li>
                  <Link href="/services/mobile-app-experiences" className="hover:text-white transition-colors text-sm sm:text-base">
                    Mobile Apps
                  </Link>
                </li>
                <li>
                  <Link href="/services/chatbot-automation" className="hover:text-white transition-colors text-sm sm:text-base">
                    Automation
                  </Link>
                </li>
                <li>
                  <Link href="/services/organic-growth-seo" className="hover:text-white transition-colors text-sm sm:text-base">
                    SEO & Growth
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Company</h4>
              <ul className="space-y-2 sm:space-y-3 text-white/70">
                <li>
                  <Link href="/#about" className="hover:text-white transition-colors text-sm sm:text-base">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#work" className="hover:text-white transition-colors text-sm sm:text-base">
                    Work
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-white transition-colors text-sm sm:text-base">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies/neuralcommerce" className="hover:text-white transition-colors text-sm sm:text-base">
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
            <div className="sm:col-span-2 md:col-span-1">
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 text-white">Connect</h4>
              <div className="flex flex-col space-y-2 mb-6">
                <a
                  href="https://www.facebook.com/share/1BN3DHXz1J"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors text-sm sm:text-base font-medium"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/safenexo?igsh=eXQ4aDZpa2luY3V3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors text-sm sm:text-base font-medium"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/safenexo/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors text-sm sm:text-base font-medium"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-white/10">
            <div className="text-white/50 mb-4 sm:mb-0 text-sm sm:text-base text-center sm:text-left">
              &copy; {new Date().getFullYear()} Safenexo. Crafting the future of digital.
            </div>
            <div className="text-white/50 text-sm sm:text-base text-center sm:text-right">
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
