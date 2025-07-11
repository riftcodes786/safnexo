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
      <section className="relative pt-32 pb-20 px-8 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-red-500/15 to-orange-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-8 tracking-tight">
            <span className="block">Mobile App</span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">
              Experiences
            </span>
          </h1>
          <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
            Crafting intuitive and intelligent mobile applications that captivate users and drive engagement on every
            device.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 px-8 py-4 text-lg font-medium"
            onClick={() => (window.location.href = "/#contact")}
          >
            Build Your Mobile App
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 tracking-tight">Seamless Mobile Journeys</h2>
              <div className="space-y-6 text-xl text-white/70 leading-relaxed">
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
                  className="w-full h-full flex items-center justify-center text-white text-8xl font-bold"
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
      <section className="py-32 px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Mobile App Expertise</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Delivering cutting-edge mobile solutions for iOS, Android, and cross-platform needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 border-white/10 rounded-2xl p-8 flex flex-col items-start text-left hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Mobile Development Process</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A streamlined approach to bring your mobile vision to life.
            </p>
          </div>

          <div className="relative space-y-12 before:absolute before:left-1/2 before:-translate-x-1/2 before:h-full before:w-px before:bg-white/10 before:top-0">
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
                  <h3 className="text-3xl font-bold mb-4">{item.title}</h3>
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

      {/* CTA Section */}
      <section className="py-32 px-8 bg-white/[0.02]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Ready to Launch Your App?</h2>
          <p className="text-2xl text-white/70 mb-12 leading-relaxed">
            Let's create a mobile experience that stands out and connects with your audience.
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
