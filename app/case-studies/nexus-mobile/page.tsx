"use client"

import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Globe, Search, Target, TrendingUp } from "lucide-react"
import Link from "next/link"

export default function NexusMobileCaseStudy() {
  const metrics = [
    {
      value: "450%",
      label: "Organic Traffic Growth",
      icon: TrendingUp,
    },
    {
      value: "1st Page",
      label: "Keyword Rankings",
      icon: Search,
    },
    {
      value: "200%",
      label: "Lead Generation Increase",
      icon: Target,
    },
    {
      value: "Global",
      label: "Reach",
      icon: Globe,
    },
  ]

  const services = [
    {
      title: "Organic Growth SEO",
      description: "Comprehensive SEO strategy, content optimization, and technical SEO.",
      icon: Search,
      gradient: "from-orange-500/20 to-red-500/20",
    },
    {
      title: "AI Web Development",
      description: "Website optimization for speed, mobile-friendliness, and structured data.",
      icon: Globe,
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Digital Strategy & Consulting",
      description: "Market analysis, competitor benchmarking, and long-term growth planning.",
      icon: Target,
      gradient: "from-indigo-500/20 to-blue-500/20",
    },
  ]

  const timeline = [
    {
      phase: "SEO Audit & Keyword Research",
      duration: "3 weeks",
      description: "In-depth analysis of existing SEO, competitor landscape, and high-potential keywords.",
    },
    {
      phase: "On-Page & Technical SEO",
      duration: "6 weeks",
      description: "Optimizing website content, meta tags, site structure, and technical elements for search engines.",
    },
    {
      phase: "Content Strategy & Link Building",
      duration: "8 weeks",
      description: "Developing and executing a content plan, and building high-quality backlinks.",
    },
    {
      phase: "Monitoring & Reporting",
      duration: "Ongoing",
      description: "Continuous tracking of SEO performance, adjustments, and detailed progress reports.",
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/15 to-red-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-500/15 to-amber-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="mb-8">
            <Link href="/#work" className="inline-flex items-center text-white/70 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Work
            </Link>
          </div>

          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium mb-8">
              Case Study
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-8 tracking-tight">
              <span className="block">Nexus</span>
              <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-yellow-400 bg-clip-text text-transparent">
                Mobile
              </span>
            </h1>
            <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
              Achieving a 450% increase in organic traffic and first-page rankings for key terms, transforming Nexus
              Mobile into a digital leader in its industry.
            </p>

            <div className="grid md:grid-cols-4 gap-8 mt-16">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/10">
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
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
                  Nexus Mobile, a rapidly growing tech startup, had an innovative product but struggled with online
                  visibility. Their website was not ranking for critical keywords, leading to low organic traffic and
                  missed opportunities for lead generation.
                </p>
                <p>
                  They needed a robust SEO strategy to improve their search engine rankings, attract qualified organic
                  traffic, and establish their authority in the competitive mobile technology market.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div
                  className="w-full h-full flex items-center justify-center text-white text-8xl font-bold"
                  style={{ background: "linear-gradient(to bottom right, #F97316, #EF4444)" }}
                >
                  NM
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-xl opacity-50"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div
                  className="w-full h-full flex items-center justify-center text-white text-8xl font-bold"
                  style={{ background: "linear-gradient(to bottom right, #EF4444, #FBBF24)" }}
                >
                  SEO
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-2xl blur-xl opacity-50"></div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-5xl font-bold mb-8 tracking-tight">Our Solution</h2>
              <div className="space-y-6 text-xl text-white/70 leading-relaxed">
                <p>
                  We implemented a comprehensive Organic Growth SEO strategy for Nexus Mobile, focusing on in-depth
                  keyword research, technical SEO optimization, and a robust content marketing plan.
                </p>
                <p>
                  Our approach included optimizing existing content, creating new high-value articles, and building a
                  strong backlink profile, all designed to improve search engine visibility and drive qualified traffic.
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
              A comprehensive suite of solutions working together to achieve exceptional organic growth
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
            <p className="text-xl text-white/70 max-w-3xl mx-auto">A strategic roadmap for sustained organic growth</p>
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
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-xl font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0">
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
            <Card className="bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-4">
                  450%
                </div>
                <h3 className="text-xl font-semibold mb-2">Organic Traffic Growth</h3>
                <p className="text-white/70">Comprehensive SEO strategy led to massive increase in organic visitors</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border-yellow-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent mb-4">
                  1st Page
                </div>
                <h3 className="text-xl font-semibold mb-2">Keyword Rankings</h3>
                <p className="text-white/70">Achieved top rankings for highly competitive industry keywords</p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                  200%
                </div>
                <h3 className="text-xl font-semibold mb-2">Lead Generation Increase</h3>
                <p className="text-white/70">Improved visibility translated directly into more qualified leads</p>
              </CardContent>
            </Card>
          </div>

          {/* Testimonial */}
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
            <CardContent className="p-12 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <div
                  className="w-full h-full flex items-center justify-center text-white text-5xl font-bold rounded-full"
                  style={{ background: "linear-gradient(to bottom right, #F97316, #EF4444)" }}
                >
                  EW
                </div>
              </div>
              <blockquote className="text-3xl font-light leading-relaxed text-white/90 italic mb-8 max-w-4xl mx-auto">
                "Safenexo's SEO expertise is unparalleled. Our organic traffic has exploded, and we're now consistently
                ranking for terms we never thought possible. This has fundamentally changed our business, bringing in a
                flood of new, qualified leads. They are true growth partners."
              </blockquote>
              <div>
                <div className="text-xl font-semibold">Emily White</div>
                <div className="text-white/70">CMO, Nexus Mobile</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Ready to Dominate Search?</h2>
          <p className="text-2xl text-white/70 mb-12 leading-relaxed">
            Let's craft an SEO strategy that puts your business at the forefront of organic growth.
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
