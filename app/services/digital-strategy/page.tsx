"use client"

import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, Lightbulb, TrendingUp, Users, Target } from "lucide-react"

export default function DigitalStrategyPage() {
  const features = [
    {
      title: "AI-Driven Market Analysis",
      description: "Identify market trends and opportunities with advanced AI insights.",
      icon: Lightbulb,
    },
    {
      title: "Growth Hacking Strategies",
      description: "Develop innovative strategies for rapid user acquisition and retention.",
      icon: TrendingUp,
    },
    {
      title: "Customer Journey Mapping",
      description: "Optimize every touchpoint for a seamless and engaging customer experience.",
      icon: Users,
    },
    {
      title: "Performance & ROI Optimization",
      description: "Ensure your digital investments deliver measurable results and high ROI.",
      icon: Target,
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/15 to-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-indigo-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-8 tracking-tight">
            <span className="block">Digital Strategy &</span>
            <span className="block bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Consulting
            </span>
          </h1>
          <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
            Strategic guidance for AI-first digital transformation, empowering your business to navigate the future with
            confidence.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 px-8 py-4 text-lg font-medium"
            onClick={() => (window.location.href = "/#contact")}
          >
            Get Strategic Guidance
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 tracking-tight">Charting Your Digital Future</h2>
              <div className="space-y-6 text-xl text-white/70 leading-relaxed">
                <p>
                  In a rapidly evolving digital world, a clear and intelligent strategy is paramount. Our Digital
                  Strategy & Consulting services provide the roadmap for your business to thrive, leveraging AI to
                  identify opportunities and optimize your digital presence.
                </p>
                <p>
                  We work closely with you to develop comprehensive strategies that encompass everything from market
                  entry to long-term growth, ensuring your digital initiatives are aligned with your overarching
                  business objectives.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div
                  className="w-full h-full flex items-center justify-center text-white text-8xl font-bold"
                  style={{ background: "linear-gradient(to bottom right, #6366F1, #3B82F6)" }}
                >
                  STRAT
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-blue-500/20 rounded-2xl blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-32 px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Strategic Pillars</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Guiding your business through the complexities of digital transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 border-white/10 rounded-2xl p-8 flex flex-col items-start text-left hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Consulting Process</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A collaborative approach to building robust digital strategies.
            </p>
          </div>

          <div className="relative space-y-12 before:absolute before:left-1/2 before:-translate-x-1/2 before:h-full before:w-px before:bg-white/10 before:top-0">
            {[
              {
                title: "Assessment & Analysis",
                description:
                  "Comprehensive review of your current digital landscape, market position, and business objectives.",
              },
              {
                title: "Strategy Formulation",
                description:
                  "Developing a tailored digital strategy, including AI integration, technology roadmap, and growth plans.",
              },
              {
                title: "Implementation Roadmap",
                description:
                  "Creating a detailed plan for execution, including resource allocation, timelines, and key performance indicators.",
              },
              {
                title: "Monitoring & Adaptation",
                description:
                  "Continuous monitoring of strategy performance and agile adaptation to market changes and new opportunities.",
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
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0">
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
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Ready for Strategic Growth?</h2>
          <p className="text-2xl text-white/70 mb-12 leading-relaxed">
            Let's define a powerful digital strategy that propels your business forward.
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
