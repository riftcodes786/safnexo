"use client"

import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  ArrowLeft,
  TrendingUp,
  Users,
  MessageSquare,
  Smartphone,
  Target,
  Zap,
  Brain,
  Globe,
} from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

export default function SynapseCRMCaseStudy() {
  const metrics = [
    {
      value: "220%",
      label: "Lead Conversion Increase",
      icon: TrendingUp,
    },
    {
      value: "95%",
      label: "Customer Retention",
      icon: Users,
    },
    {
      value: "40%",
      label: "Sales Cycle Reduction",
      icon: Zap,
    },
    {
      value: "AI-Powered",
      label: "Insights",
      icon: Brain,
    },
  ]

  const services = [
    {
      title: "Mobile App Experiences",
      description: "Intuitive mobile CRM app with personalized user journeys.",
      icon: Smartphone,
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "AI Web Development",
      description: "Web-based CRM portal with intelligent lead scoring and automation.",
      icon: Globe,
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Chatbot & Automation",
      description: "Automated customer support and lead nurturing sequences.",
      icon: MessageSquare,
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Digital Strategy & Consulting",
      description: "CRM implementation strategy and sales process optimization.",
      icon: Target,
      gradient: "from-indigo-500/20 to-blue-500/20",
    },
  ]

  const timeline = [
    {
      phase: "Requirements Gathering",
      duration: "2 weeks",
      description: "Detailed analysis of sales processes, customer touchpoints, and CRM needs.",
    },
    {
      phase: "Platform Design & AI Integration",
      duration: "6 weeks",
      description: "Designing the CRM architecture and integrating AI models for lead scoring and personalization.",
    },
    {
      phase: "Mobile & Web Development",
      duration: "8 weeks",
      description: "Building the cross-platform mobile app and web portal for the CRM system.",
    },
    {
      phase: "Testing & User Training",
      duration: "3 weeks",
      description: "Rigorous testing, data migration, and comprehensive training for sales and support teams.",
    },
    {
      phase: "Launch & Post-Launch Support",
      duration: "Ongoing",
      description: "Deployment of Synapse CRM and continuous optimization based on performance data.",
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-8">
            <Link href="/#work" className="inline-flex items-center text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Work
            </Link>
          </div>

          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-400 text-sm font-medium mb-8">
              Case Study
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-8 tracking-tight">
              <span className="block">Synapse</span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                CRM
              </span>
            </h1>
            <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
              Building an intelligent customer relationship management (CRM) system that transformed sales processes and
              boosted lead conversion by 220% for a B2B software company.
            </p>

            <div className="grid md:grid-cols-4 gap-8 mt-16">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/10">
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                    {metric.value}
                  </div>
                  <div className="text-white/70">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-5xl font-bold mb-8 tracking-tight">The Challenge</h2>
              <div className="space-y-6 text-xl text-white/70 leading-relaxed">
                <p>
                  SalesForce Solutions, a growing B2B software provider, struggled with a legacy CRM system that was
                  manual, inefficient, and lacked intelligent insights. Their sales team spent too much time on data
                  entry and not enough on engaging with high-potential leads.
                </p>
                <p>
                  They needed a modern, AI-powered CRM that could automate lead scoring, personalize customer
                  interactions, and provide actionable insights to accelerate their sales cycle.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div
                  className="w-full h-full flex items-center justify-center text-white text-8xl font-bold"
                  style={{ background: "linear-gradient(to bottom right, #A855F7, #EC4899)" }}
                >
                  SC
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-50"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div
                  className="w-full h-full flex items-center justify-center text-white text-8xl font-bold"
                  style={{ background: "linear-gradient(to bottom right, #EC4899, #F97316)" }}
                >
                  CRM
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-50"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl font-bold mb-8 tracking-tight">Our Solution</h2>
              <div className="space-y-6 text-xl text-white/70 leading-relaxed">
                <p>
                  We developed Synapse CRM, a comprehensive AI-powered platform that integrates sales, marketing, and
                  customer service functionalities. It features intelligent lead scoring, automated follow-ups, and a
                  personalized customer journey.
                </p>
                <p>
                  The system provides sales teams with real-time insights into customer behavior, enabling them to focus
                  on high-value activities and close deals faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Implemented */}
      <section className="py-32 px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Services Implemented</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A comprehensive suite of AI-powered solutions working together to create an intelligent CRM platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-500 group backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-8 relative">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  ></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-white/10 to-white/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                    <p className="text-xl text-white/70 leading-relaxed">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Project Timeline</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">From concept to intelligent CRM in 19 weeks</p>
          </div>

          <div className="relative space-y-12 before:absolute before:left-1/2 before:-translate-x-1/2 before:h-full before:w-px before:bg-white/10 before:top-0">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between md:flex-row flex-col-reverse md:odd:flex-row-reverse w-full"
              >
                <div className="w-full md:w-1/2 md:odd:pr-12 md:even:pl-12 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-4">{item.phase}</h3>
                  <p className="text-white/70 leading-relaxed">{item.description}</p>
                </div>
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0">
                  {index + 1}
                </div>
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-32 px-8 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Transformational Results</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              The impact was immediate and sustained, with improvements across all key metrics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  220%
                </div>
                <h3 className="text-xl font-semibold mb-2">Lead Conversion Increase</h3>
                <p className="text-white/70">AI-powered lead scoring and nurturing significantly boosted conversions</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border-red-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent mb-4">
                  40%
                </div>
                <h3 className="text-xl font-semibold mb-2">Sales Cycle Reduction</h3>
                <p className="text-white/70">
                  Automated workflows and intelligent insights accelerated sales processes
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  95%
                </div>
                <h3 className="text-xl font-semibold mb-2">Customer Retention</h3>
                <p className="text-white/70">Personalized engagement and proactive support improved retention rates</p>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <div
                  className="w-full h-full flex items-center justify-center text-white text-5xl font-bold rounded-full"
                  style={{ background: "linear-gradient(to bottom right, #A855F7, #EC4899)" }}
                >
                  MB
                </div>
              </div>
              <blockquote className="text-3xl font-light leading-relaxed text-white/90 italic mb-8 max-w-4xl mx-auto">
                "Synapse CRM has completely transformed our sales and customer service. The AI capabilities are
                unmatched, allowing our team to be incredibly efficient and effective. Safenexo delivered a solution
                that truly understands our business needs and drives tangible results."
              </blockquote>
              <div>
                <div className="text-xl font-semibold">Michael Brown</div>
                <div className="text-white/70">VP of Sales, SalesForce Solutions</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Ready to Supercharge Your Sales?</h2>
          <p className="text-2xl text-white/70 mb-12 leading-relaxed">
            Let's build an intelligent CRM that empowers your team and delights your customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 px-8 py-4 text-lg font-medium"
              onClick={() => (window.location.href = "/#contact")}
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Link href="/#services">
              <Button
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/5 px-8 py-4 text-lg font-medium bg-transparent"
              >
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
