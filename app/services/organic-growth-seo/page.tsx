"use client"

import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Lightbulb, BarChart, Code } from "lucide-react"

export default function OrganicGrowthSEOPage() {
  const features = [
    {
      title: "AI-Powered Keyword Research",
      description: "Identify high-impact keywords with predictive AI analysis.",
      icon: Search,
    },
    {
      title: "Content Strategy & Generation",
      description: "Develop and create SEO-optimized content that ranks and converts.",
      icon: Lightbulb,
    },
    {
      title: "Technical SEO Optimization",
      description: "Ensure your website's technical foundation is flawless for search engines.",
      icon: Code,
    },
    {
      title: "Performance Monitoring & Reporting",
      description: "Track SEO progress with detailed analytics and actionable insights.",
      icon: BarChart,
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

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-8 tracking-tight">
            <span className="block">Organic Growth</span>
            <span className="block bg-gradient-to-r from-orange-400 via-red-400 to-orange-600 bg-clip-text text-transparent">
              SEO
            </span>
          </h1>
          <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
            Driving sustainable online growth through intelligent SEO strategies that boost visibility and attract
            qualified traffic.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 px-8 py-4 text-lg font-medium"
            onClick={() => (window.location.href = "/#contact")}
          >
            Boost Your SEO
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 tracking-tight">Sustainable Digital Visibility</h2>
              <div className="space-y-6 text-xl text-white/70 leading-relaxed">
                <p>
                  In the competitive digital landscape, appearing at the top of search results is crucial. Our Organic
                  Growth SEO services are designed to enhance your online visibility, drive qualified organic traffic,
                  and establish your brand as an authority in your industry.
                </p>
                <p>
                  We combine advanced AI analytics with proven SEO methodologies to create strategies that are not just
                  effective today, but also adaptable to future search engine changes, ensuring long-term success.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div
                  className="w-full h-full flex items-center justify-center text-white text-8xl font-bold"
                  style={{ background: "linear-gradient(to bottom right, #F97316, #EF4444)" }}
                >
                  SEO
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-32 px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our SEO Offerings</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive strategies to elevate your search engine rankings and organic presence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 border-white/10 rounded-2xl p-8 flex flex-col items-start text-left hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-6">
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our SEO Process</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A data-driven approach to achieving top search engine rankings.
            </p>
          </div>

          <div className="relative space-y-12 before:absolute before:left-1/2 before:-translate-x-1/2 before:h-full before:w-px before:bg-white/10 before:top-0">
            {[
              {
                title: "Audit & Analysis",
                description:
                  "In-depth analysis of your current SEO performance, competitor landscape, and keyword opportunities.",
              },
              {
                title: "Strategy Development",
                description:
                  "Crafting a tailored SEO strategy including on-page, off-page, and technical optimizations.",
              },
              {
                title: "Implementation & Content Creation",
                description:
                  "Executing the strategy, optimizing website elements, and creating high-quality, SEO-friendly content.",
              },
              {
                title: "Monitoring & Reporting",
                description:
                  "Continuous tracking of rankings, traffic, and conversions with regular, transparent reports.",
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
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-xl font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0">
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
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Ready for Organic Growth?</h2>
          <p className="text-2xl text-white/70 mb-12 leading-relaxed">
            Let's elevate your search engine presence and drive sustainable organic traffic to your business.
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
