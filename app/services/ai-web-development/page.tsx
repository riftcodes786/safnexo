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
      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-8 tracking-tight">
            <span className="block">AI Web</span>
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Development
            </span>
          </h1>
          <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
            Crafting intelligent websites that adapt, learn, and evolve with your users, delivering unparalleled digital
            experiences.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 px-8 py-4 text-lg font-medium"
            onClick={() => (window.location.href = "/#contact")}
          >
            Start Your AI Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 tracking-tight">Intelligent Web Experiences</h2>
              <div className="space-y-6 text-xl text-white/70 leading-relaxed">
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
                  className="w-full h-full flex items-center justify-center text-white text-8xl font-bold"
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
      <section className="py-32 px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">What We Offer</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our AI Web Development services are designed to give your business a competitive edge.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 border-white/10 rounded-2xl p-8 flex flex-col items-start text-left hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-white/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our AI Development Process</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A structured approach to building intelligent and scalable web solutions.
            </p>
          </div>

          <div className="relative space-y-12 before:absolute before:left-1/2 before:-translate-x-1/2 before:h-full before:w-px before:bg-white/10 before:top-0">
            {[
              {
                title: "Discovery & Strategy",
                description:
                  "We begin by understanding your business goals, target audience, and existing infrastructure to define the AI strategy.",
              },
              {
                title: "AI Model Design & Training",
                description:
                  "Designing and training custom AI models tailored to your specific needs, ensuring optimal performance.",
              },
              {
                title: "Development & Integration",
                description:
                  "Building the web application and seamlessly integrating AI functionalities into your platform.",
              },
              {
                title: "Testing & Optimization",
                description:
                  "Rigorous testing and continuous optimization of AI models and web performance for peak efficiency.",
              },
              {
                title: "Deployment & Support",
                description:
                  "Launching your intelligent website and providing ongoing support and maintenance to ensure long-term success.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between md:flex-row flex-col-reverse md:odd:flex-row-reverse w-full"
              >
                <div className="w-full md:w-1/2 md:odd:pr-12 md:even:pl-12 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </div>
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0">
                  {index + 1}
                </div>
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Ready to Build Your Intelligent Web?</h2>
          <p className="text-2xl text-white/70 mb-12 leading-relaxed">
            Let's discuss how AI can transform your online presence and drive unprecedented growth.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 px-8 py-4 text-lg font-medium"
            onClick={() => (window.location.href = "/#contact")}
          >
            Get a Free Consultation
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
    </Layout>
  )
}
