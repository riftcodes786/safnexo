"use client"

import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ArrowLeft, TrendingUp, Users, MessageSquare, Smartphone, Globe, Zap, Target } from "lucide-react"
import Link from "next/link"

export default function NeuralCommerceCaseStudy() {
  const metrics = [
    {
      value: "340%",
      label: "Increase in Conversions",
      icon: TrendingUp,
    },
    {
      value: "2.8M",
      label: "Monthly Active Users",
      icon: Users,
    },
    {
      value: "89%",
      label: "Customer Satisfaction",
      icon: MessageSquare,
    },
    {
      value: "45s",
      label: "Average Response Time",
      icon: Zap,
    },
  ]

  const services = [
    {
      title: "AI Web Development",
      description: "Intelligent product recommendations and dynamic pricing algorithms",
      icon: Globe,
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile app with AI-powered shopping assistant",
      icon: Smartphone,
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "Chatbot & Automation",
      description: "24/7 customer support and automated order processing",
      icon: MessageSquare,
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "SEO & Growth Strategy",
      description: "Organic traffic growth and conversion optimization",
      icon: Target,
      gradient: "from-orange-500/20 to-red-500/20",
    },
  ]

  const timeline = [
    {
      phase: "Discovery & Strategy",
      duration: "2 weeks",
      description: "Market research, user analysis, and AI strategy development",
    },
    {
      phase: "Design & Architecture",
      duration: "3 weeks",
      description: "UI/UX design, system architecture, and AI model planning",
    },
    {
      phase: "Development & Integration",
      duration: "8 weeks",
      description: "Full-stack development with AI integration and testing",
    },
    {
      phase: "Launch & Optimization",
      duration: "2 weeks",
      description: "Deployment, monitoring, and performance optimization",
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-8">
            <Link href="/#work" className="inline-flex items-center text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Work
            </Link>
          </div>

          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-8">
              Case Study
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-8 tracking-tight">
              <span className="block">NeuralCommerce</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Revolution
              </span>
            </h1>
            <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
              How we transformed a traditional e-commerce platform into an AI-powered shopping experience that increased
              conversions by 340% and revolutionized customer engagement.
            </p>

            <div className="grid md:grid-cols-4 gap-8 mt-16">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/10">
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
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
                  TechMart, a mid-sized electronics retailer, was struggling with declining online sales and increasing
                  customer acquisition costs. Their traditional e-commerce platform couldn't compete with AI-powered
                  giants.
                </p>
                <p>
                  They needed a complete digital transformation that would leverage artificial intelligence to
                  personalize shopping experiences, automate customer service, and optimize their entire sales funnel.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div
                  className="w-full h-full flex items-center justify-center text-white text-8xl font-bold"
                  style={{ background: "linear-gradient(to bottom right, #3B82F6, #06B6D4)" }}
                >
                  NC
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div
                  className="w-full h-full flex items-center justify-center text-white text-8xl font-bold"
                  style={{ background: "linear-gradient(to bottom right, #06B6D4, #8B5CF6)" }}
                >
                  AI
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-green-500/20 rounded-2xl blur-xl opacity-50"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl font-bold mb-8 tracking-tight">Our Solution</h2>
              <div className="space-y-6 text-xl text-white/70 leading-relaxed">
                <p>
                  We developed NeuralCommerce, a comprehensive AI-powered e-commerce ecosystem that combines intelligent
                  web experiences, mobile apps, automated customer service, and data-driven growth strategies.
                </p>
                <p>
                  The platform uses machine learning to understand customer behavior, predict preferences, and deliver
                  personalized experiences that drive engagement and conversions.
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
              A comprehensive suite of AI-powered solutions working together to create an intelligent commerce platform
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
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              From concept to launch in 15 weeks with continuous optimization
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                    <h3 className="text-3xl font-bold">{item.phase}</h3>
                    <div className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium text-white/70">
                      {item.duration}
                    </div>
                  </div>
                  <p className="text-xl text-white/70 leading-relaxed max-w-3xl">{item.description}</p>
                </div>
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
            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  340%
                </div>
                <h3 className="text-xl font-semibold mb-2">Conversion Rate Increase</h3>
                <p className="text-white/70">AI-powered personalization drove unprecedented conversion improvements</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  85%
                </div>
                <h3 className="text-xl font-semibold mb-2">Support Automation</h3>
                <p className="text-white/70">Chatbot handles majority of customer inquiries automatically</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
                  250%
                </div>
                <h3 className="text-xl font-semibold mb-2">Mobile App Engagement</h3>
                <p className="text-white/70">Cross-platform app with AI assistant drives user engagement</p>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <div
                  className="w-full h-full flex items-center justify-center text-white text-5xl font-bold rounded-full"
                  style={{ background: "linear-gradient(to bottom right, #3B82F6, #06B6D4)" }}
                >
                  SC
                </div>
              </div>
              <blockquote className="text-3xl font-light leading-relaxed text-white/90 italic mb-8 max-w-4xl mx-auto">
                "Safenexo didn't just build us a website—they created an intelligent business partner. The AI-powered
                features have transformed how we understand and serve our customers. Our revenue has tripled, and we're
                now the market leader in our category."
              </blockquote>
              <div>
                <div className="text-xl font-semibold">Sarah Chen</div>
                <div className="text-white/70">CEO, TechMart</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Ready for Your Transformation?</h2>
          <p className="text-2xl text-white/70 mb-12 leading-relaxed">
            Let's discuss how we can create similar results for your business with AI-powered solutions.
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
