"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Globe } from "@/components/ui/globe";
import { 
  Users, 
  Target, 
  Lightbulb, 
  Award, 
  Globe as GlobeIcon, 
  Zap,
  Shield,
  TrendingUp
} from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function AboutContent() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="space-y-24"
    >
      {/* Mission Section */}
      <motion.section variants={itemVariants} className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Our Mission</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Empowering Global Innovation
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At Safenexo, we believe technology should break down barriers and connect 
                the world. Our mission is to empower businesses across the globe with 
                intelligent digital solutions that drive growth, efficiency, and innovation.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                  <GlobeIcon className="w-8 h-8 text-blue-400 mb-3" />
                  <h3 className="font-semibold mb-2">Global Reach</h3>
                  <p className="text-sm text-muted-foreground">Serving clients across 25+ countries</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6">
                  <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
                  <h3 className="font-semibold mb-2">Proven Results</h3>
                  <p className="text-sm text-muted-foreground">$2.5M+ revenue generated</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <Globe className="h-96 w-full" />
            </div>
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section variants={itemVariants} className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Values</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our core values shape every project, every decision, and every relationship we build.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
                title: "Innovation First",
                description: "We push boundaries and explore cutting-edge technologies to deliver solutions that set you apart from the competition."
              },
              {
                icon: <Shield className="w-8 h-8 text-blue-400" />,
                title: "Security & Trust",
                description: "Your data and privacy are our top priority. We implement enterprise-grade security measures in everything we build."
              },
              {
                icon: <Users className="w-8 h-8 text-green-400" />,
                title: "Human-Centered",
                description: "Technology should enhance human potential, not replace it. We design with people at the center of every solution."
              },
              {
                icon: <Zap className="w-8 h-8 text-purple-400" />,
                title: "Speed & Efficiency",
                description: "We deliver fast, efficient solutions that streamline your operations and accelerate your growth trajectory."
              },
              {
                icon: <Target className="w-8 h-8 text-red-400" />,
                title: "Results-Driven",
                description: "Every project is measured by its impact. We focus on delivering measurable ROI and tangible business outcomes."
              },
              {
                icon: <Award className="w-8 h-8 text-orange-400" />,
                title: "Excellence",
                description: "We maintain the highest standards in code quality, design, and customer service to ensure exceptional results."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section variants={itemVariants} className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4">Our Team</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet the Innovators
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A diverse team of experts passionate about creating digital solutions that make a difference.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Muhammad Abdullah",
                role: "CEO & Founder",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop",
                description: "Visionary leader with 10+ years in digital innovation and AI implementation."
              },
              {
                name: "Sarah Chen",
                role: "Lead Developer",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300&auto=format&fit=crop",
                description: "Full-stack expert specializing in scalable web applications and cloud architecture."
              },
              {
                name: "Alex Rodriguez",
                role: "Design Director",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
                description: "Creative strategist focused on user experience and brand identity development."
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden border-2 border-white/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-blue-400 mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section variants={itemVariants} className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 md:p-12">
            <div className="text-center mb-12">
              <Badge className="mb-4">By the Numbers</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Impact in Numbers
              </h2>
              <p className="text-lg text-muted-foreground">
                Real results that speak to our commitment to excellence and client success.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "120+", label: "Projects Delivered", color: "text-blue-400" },
                { number: "$2.5M+", label: "Revenue Generated", color: "text-green-400" },
                { number: "98%", label: "Client Retention", color: "text-purple-400" },
                { number: "25+", label: "Countries Served", color: "text-orange-400" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className={`text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}
