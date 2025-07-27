"use client"

import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Database,
  Globe,
  MessageSquare,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react"
import Link from "next/link"

export default function QuantumAnalyticsCaseStudy() {
  const metrics = [
    {
      value: "50M+",
      label: "Data Points Processed",
      icon: Database,
    },
    {
      value: "99.9%",
      label: "Data Accuracy",
      icon: CheckCircle,
    },
    {
      value: "150%",
      label: "Efficiency Gain",
      icon: TrendingUp,
    },
    {
      value: "Real-time",
      label: "Reporting",
      icon: Zap,
    },
  ]

  const services = [
    {
      title: "Chatbot & Automation",
      description: "Automated data ingestion and real-time anomaly detection.",
      icon: MessageSquare,
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "AI Web Development",
      description: "Interactive dashboards and predictive analytics interfaces.",
      icon: Globe,
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Digital Strategy & Consulting",
      description: "Data strategy and actionable insights for business growth.",
      icon: Target,
      gradient: "from-indigo-500/20 to-blue-500/20",
    },
  ]

  const timeline = [
    {
      phase: "Data Source Integration",
      duration: "3 weeks",
      description: "Connecting and normalizing data from disparate sources.",
    },
    {
      phase: "AI Model Development",
      duration: "4 weeks",
      description: "Building and training machine learning models for predictive analytics.",
    },
    {
      phase: "Dashboard & Reporting UI",
      duration: "5 weeks",
      description: "Designing and developing intuitive real-time data visualization dashboards.",
    },
    {
      phase: "Deployment & Training",
      duration: "2 weeks",
      description: "Deploying the system and training client teams on its usage and capabilities.",
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-green-500/15 to-emerald-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-lime-500/15 to-teal-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-500/10 to-green-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-8">
            <Link href="/#work" className="inline-flex items-center text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Work
            </Link>
          </div>

          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-8">
              Case Study
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-8 tracking-tight">
              <span className="block">Quantum</span>
              <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Analytics
              </span>
            </h1>
            <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
              Developing a real-time data visualization and predictive analytics platform that transformed
              decision-making for a global logistics company.
            </p>

            <div className="grid md:grid-cols-4 gap-8 mt-16">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/10">
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
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
                  GlobalLogistics, a major player in supply chain management, faced challenges with fragmented data
                  sources, delayed reporting, and a lack of predictive insights. Their existing systems couldn't handle
                  the volume and velocity of real-time operational data.
                </p>
                <p>
                  They needed a unified analytics platform that could ingest massive datasets, provide real-time
                  visibility into operations, and leverage AI to forecast demand and optimize routes.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div
                  className="w-full h-full flex items-center justify-center text-white text-8xl font-bold"
                  style={{ background: "linear-gradient(to bottom right, #22C55E, #10B981)" }}
                >
                  QA
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-50"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div
                  className="w-full h-full flex items-center justify-center text-white text-8xl font-bold"
                  style={{ background: "linear-gradient(to bottom right, #10B981, #06B6D4)" }}
                >
                  DATA
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-lime-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-50"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl font-bold mb-8 tracking-tight">Our Solution</h2>
              <div className="space-y-6 text-xl text-white/70 leading-relaxed">
                <p>
                  We developed Quantum Analytics, a cutting-edge platform that integrates real-time data streams,
                  applies advanced machine learning models, and presents actionable insights through intuitive
                  dashboards.
                </p>
                <p>
                  The platform provides a holistic view of operations, enabling GlobalLogistics to make proactive
                  decisions, optimize resource allocation, and significantly improve their supply chain efficiency.
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
              A comprehensive suite of AI-powered solutions working together to create an intelligent analytics platform
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
            <p className="text-xl text-white/70 max-w-3xl mx-auto">From concept to actionable insights in 14 weeks</p>
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
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0">
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
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                  150%
                </div>
                <h3 className="text-xl font-semibold mb-2">Operational Efficiency</h3>
                <p className="text-white/70">
                  Automated data processing and predictive insights streamlined operations
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-lime-500/10 to-teal-500/10 border-lime-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-lime-400 to-teal-400 bg-clip-text text-transparent mb-4">
                  30%
                </div>
                <h3 className="text-xl font-semibold mb-2">Cost Reduction</h3>
                <p className="text-white/70">Optimized resource allocation and reduced manual data handling costs</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  Real-time
                </div>
                <h3 className="text-xl font-semibold mb-2">Decision Making</h3>
                <p className="text-white/70">Instant access to critical data for agile business decisions</p>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <div
                  className="w-full h-full flex items-center justify-center text-white text-5xl font-bold rounded-full"
                  style={{ background: "linear-gradient(to bottom right, #22C55E, #10B981)" }}
                >
                  DL
                </div>
              </div>
              <blockquote className="text-3xl font-light leading-relaxed text-white/90 italic mb-8 max-w-4xl mx-auto">
                "Quantum Analytics has revolutionized our operations. The real-time insights and predictive capabilities
                have allowed us to optimize our logistics like never before, leading to significant cost savings and
                improved service delivery. Safenexo truly delivered a game-changer."
              </blockquote>
              <div>
                <div className="text-xl font-semibold">David Lee</div>
                <div className="text-white/70">COO, GlobalLogistics</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Ready for Data-Driven Decisions?</h2>
          <p className="text-2xl text-white/70 mb-12 leading-relaxed">
            Let's discuss how we can unlock the power of your data with intelligent analytics solutions.
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
