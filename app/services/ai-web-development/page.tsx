"use client"

import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, CheckCircle, Code, Lightbulb } from "lucide-react"

export default function AIWebDevelopmentPage() {
  const features = [
    {
      title: "Intelligent Personalization",
      description: "AI-driven content and product recommendations tailored to each user.",
      icon: Lightbulb,
    },
    {
      title: "Automated Content Generation",
      description: "Leverage AI to create dynamic and engaging website content.",
      icon: Code,
    },
    {
      title: "Predictive Analytics",
      description: "Anticipate user behavior and optimize conversion funnels.",
      icon: Brain,
    },
    {
      title: "Adaptive UI/UX",
      description: "Web interfaces that learn and evolve based on user interaction.",
      icon: CheckCircle,
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-cyan-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none mb-6 sm:mb-8 tracking-tight">
            <span className="block">AI Web</span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Development
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            Crafting intelligent websites that adapt, learn, and evolve with your users, delivering unparalleled digital
            experiences.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium"
            onClick={() => (window.location.href = "/#contact")}
          >
            Start Your AI Project
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-32 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 tracking-tight">Intelligent Web Experiences</h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
                <p>
                  In today's dynamic digital landscape, static websites are no longer enough. Our AI Web Development
                  service focuses on building intelligent platforms that understand user behavior, personalize content
                  in real-time, and automate complex processes.
                </p>
                <p>
                  From advanced recommendation engines to AI-powered content management systems, we integrate
                  cutting-edge artificial intelligence to create websites that are not just visually stunning, but also
                  smart, efficient, and highly effective at driving engagement and conversions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div
                  className="w-full h-full flex items-center justify-center text-white text-4xl sm:text-6xl md:text-8xl font-bold"
                  style={{ background: "linear-gradient(to bottom right, #3B82F6, #06B6D4)" }}
                >
                  AI
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 sm:py-32 px-4 sm:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">
              Key Features
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed px-4">
              Discover the powerful capabilities that make our AI web development stand out
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.05] transition-all duration-500"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white group-hover:text-white transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-white/60 group-hover:text-white/80 transition-colors duration-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-32 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 tracking-tight">
            Ready to Build Your AI-Powered Website?
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            Let's discuss how we can transform your digital presence with intelligent AI solutions that drive real results.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium"
            onClick={() => (window.location.href = "/#contact")}
          >
            Get Started Today
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </section>
    </Layout>
  )
}
