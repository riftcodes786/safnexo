"use client"

import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Zap, Shield, Cloud } from "lucide-react"

export default function MobileAppExperiencesPage() {
  const features = [
    {
      title: "AI-Driven UX/UI",
      description: "Adaptive interfaces that personalize user experience based on behavior and preferences.",
      icon: Zap,
    },
    {
      title: "Cross-Platform Development",
      description: "Reach a wider audience with native-like apps on iOS and Android from a single codebase.",
      icon: Smartphone,
    },
    {
      title: "Secure & Scalable Backends",
      description: "Robust cloud-based infrastructure to support millions of users and data points.",
      icon: Cloud,
    },
    {
      title: "Real-time Analytics",
      description: "Monitor app performance and user engagement with intelligent insights.",
      icon: Shield,
    },
  ]

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-red-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-none mb-6 sm:mb-8 tracking-tight">
            <span className="block">Mobile App</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
            Crafting intuitive and intelligent mobile applications that captivate users and drive engagement on every
            device.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium"
            onClick={() => (window.location.href = "/#contact")}
          >
            Build Your Mobile App
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 sm:py-32 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 tracking-tight">Seamless Mobile Journeys</h2>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg md:text-xl text-white/70 leading-relaxed">
                <p>
                  In a mobile-first world, your app is often the primary touchpoint with your customers. We specialize
                  in developing high-performance, visually stunning, and AI-enhanced mobile applications that deliver
                  exceptional user experiences.
                </p>
                <p>
                  From concept to deployment, we focus on creating apps that are not only functional but also intuitive,
                  secure, and scalable, ensuring your brand stands out in a crowded marketplace.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div
                  className="w-full h-full flex items-center justify-center text-white text-4xl sm:text-6xl md:text-8xl font-bold"
                  style={{ background: "linear-gradient(to bottom right, #A855F7, #EC4899)" }}
                >
                  APP
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 sm:py-32 px-4 sm:px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">Our Mobile App Expertise</h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto px-4">
              Delivering cutting-edge mobile solutions for iOS, Android, and cross-platform needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group relative bg-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-white/[0.05] transition-all duration-500"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-purple-400" />
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

      {/* Process Section */}
      <section className="py-16 sm:py-32 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight">Our Mobile Development Process</h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto px-4">
              A streamlined approach to bring your mobile vision to life.
            </p>
          </div>

          <div className="relative space-y-8 sm:space-y-12 before:absolute before:left-1/2 before:-translate-x-1/2 before:h-full before:w-px before:bg-white/10 before:top-0">
            {[
              {
                title: "Concept & Strategy",
                description:
                  "Defining your app's core purpose, target audience, and key features for a solid foundation.",
              },
              {
                title: "UI/UX Design",
                description:
                  "Crafting intuitive and engaging user interfaces that provide a seamless mobile experience.",
              },
              {
                title: "Development & Testing",
                description:
                  "Building robust and high-performance apps with rigorous testing across devices and platforms.",
              },
              {
                title: "Deployment & Optimization",
                description:
                  "Launching your app on app stores and continuously optimizing for performance and user acquisition.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex items-center justify-between md:flex-row flex-col-reverse md:odd:flex-row-reverse w-full"
              >
                <div className="w-full md:w-1/2 md:odd:pr-12 md:even:pl-12 text-center md:text-left">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">{item.title}</h3>
                  <p className="text-base sm:text-lg text-white/70 leading-relaxed">{item.description}</p>
                </div>
                <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-lg sm:text-xl font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0">
                  {index + 1}
                </div>
                <div className="w-full md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-32 px-4 sm:px-8 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 tracking-tight">Ready to Launch Your App?</h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-8 sm:mb-12 leading-relaxed px-4">
            Let's create a mobile experience that stands out and connects with your audience.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium"
            onClick={() => (window.location.href = "/#contact")}
          >
            Get a Free Consultation
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </section>
    </Layout>
  )
}
