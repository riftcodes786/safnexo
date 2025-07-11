"use client"

import Layout from "@/components/layout"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageSquare, BotIcon as Robot, Settings, TrendingUp } from "lucide-react"

export default function ChatbotAutomationPage() {
  const features = [
    {
      title: "Intelligent Chatbots",
      description: "AI-powered conversational agents for 24/7 customer support and lead generation.",
      icon: Robot,
    },
    {
      title: "Workflow Automation",
      description: "Automate repetitive tasks and streamline business processes for efficiency.",
      icon: Settings,
    },
    {
      title: "Natural Language Processing (NLP)",
      description: "Bots that understand and respond to human language naturally.",
      icon: MessageSquare,
    },
    {
      title: "Performance Analytics",
      description: "Track bot performance and identify areas for continuous improvement.",
      icon: TrendingUp,
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

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-none mb-8 tracking-tight">
            <span className="block">Chatbot &</span>
            <span className="block bg-gradient-to-r from-green-400 via-emerald-400 to-green-600 bg-clip-text text-transparent">
              Automation
            </span>
          </h1>
          <p className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
            Transforming customer interactions and streamlining operations with intelligent conversational AI and
            workflow automation.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-white/90 px-8 py-4 text-lg font-medium"
            onClick={() => (window.location.href = "/#contact")}
          >
            Automate Your Business
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 tracking-tight">Smart Conversations, Seamless Workflows</h2>
              <div className="space-y-6 text-xl text-white/70 leading-relaxed">
                <p>
                  Our Chatbot & Automation services empower businesses to enhance customer service, generate leads, and
                  optimize internal processes through the power of artificial intelligence.
                </p>
                <p>
                  We design and deploy custom chatbots that understand natural language and provide instant support,
                  alongside automation solutions that eliminate manual tasks, freeing up your team to focus on strategic
                  initiatives.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-white/10 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div
                  className="w-full h-full flex items-center justify-center text-white text-8xl font-bold"
                  style={{ background: "linear-gradient(to bottom right, #22C55E, #10B981)" }}
                >
                  BOT
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur-xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-32 px-8 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Automation Solutions</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Leveraging AI to streamline operations and enhance customer engagement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/5 border-white/10 rounded-2xl p-8 flex flex-col items-start text-left hover:bg-white/10 transition-colors duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6">
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
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Our Chatbot & Automation Process</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">A systematic approach to intelligent automation.</p>
          </div>

          <div className="relative space-y-12 before:absolute before:left-1/2 before:-translate-x-1/2 before:h-full before:w-px before:bg-white/10 before:top-0">
            {[
              {
                title: "Needs Assessment & Strategy",
                description:
                  "Identifying automation opportunities and defining the scope and goals for your AI solutions.",
              },
              {
                title: "Design & Development",
                description:
                  "Building custom chatbots and automation scripts tailored to your specific business requirements.",
              },
              {
                title: "Integration & Testing",
                description:
                  "Seamlessly integrating AI solutions with your existing systems and rigorous testing for reliability.",
              },
              {
                title: "Deployment & Monitoring",
                description: "Launching your automated systems and providing continuous monitoring and optimization.",
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
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center text-white text-xl font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0">
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
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">Ready to Automate Your Success?</h2>
          <p className="text-2xl text-white/70 mb-12 leading-relaxed">
            Let's build intelligent solutions that streamline your operations and elevate customer experience.
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
