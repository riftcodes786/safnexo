"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"

import { usePathname } from "next/navigation"

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
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

  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

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

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="relative py-24 px-8 overflow-hidden">
        {/* Animated Background */}
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
