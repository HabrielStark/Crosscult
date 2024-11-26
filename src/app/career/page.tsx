import { PageLayout } from "@/components/page-layout"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react"
import { Canvas } from '@react-three/fiber'
import { Suspense } from "react"
import { OrbitControls } from '@react-three/drei'
import { FloatingCube } from "@/components/three/FloatingCube"
import { Particles } from "@/components/three/Particles"

export default function Career() {
  return (
    <PageLayout
      title="Join Our Team"
      subtitle="Be part of a dynamic team shaping the future of Web3 and digital marketing."
    >
      {/* 3D Background */}
      <div className="fixed inset-0 -z-10">
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <Particles count={500} />
            <FloatingCube />
          </Suspense>
        </Canvas>
      </div>

      {/* Benefits Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card group hover:bg-white/5 transition-all duration-500"
              >
                <div className="text-4xl text-gradient mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gradient">{benefit.title}</h3>
                <p className="text-muted-foreground group-hover:text-white/90 transition-colors">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-20 relative">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Hiring Process
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-primary/20" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Open Positions
          </motion.h2>
          <div className="grid gap-8">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card group hover:bg-white/5 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 group-hover:text-white/90 transition-colors">
                      {position.description}
                    </p>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4 text-primary" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4 text-primary" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-primary" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" className="group border-white/20 hover:bg-white/10">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

const benefits = [
  {
    icon: "🚀",
    title: "Growth Opportunities",
    description: "Continuous learning and career advancement paths for all team members."
  },
  {
    icon: "🌍",
    title: "Remote First",
    description: "Work from anywhere with our distributed team across the globe."
  },
  {
    icon: "💪",
    title: "Work-Life Balance",
    description: "Flexible hours and unlimited PTO to maintain a healthy lifestyle."
  }
];

const positions = [
  {
    title: "Senior Marketing Manager",
    department: "Marketing",
    location: "Kyiv / Remote",
    type: "Full-time",
    description: "Lead strategic marketing initiatives and drive growth for our clients in the Web3 and crypto space.",
  },
  {
    title: "Web3 Developer",
    department: "Technology",
    location: "Tel Aviv / Remote",
    type: "Full-time",
    description: "Build innovative blockchain solutions and contribute to cutting-edge Web3 projects.",
  },
  {
    title: "Content Strategist",
    department: "Content",
    location: "Remote",
    type: "Full-time",
    description: "Create compelling content strategies and manage content production for global brands.",
  },
  {
    title: "UI/UX Designer",
    department: "Design",
    location: "Kyiv / Remote",
    type: "Full-time",
    description: "Design beautiful and intuitive interfaces for Web3 and blockchain applications.",
  },
];

const process = [
  {
    title: "Apply",
    description: "Submit your application with your CV and portfolio",
  },
  {
    title: "Review",
    description: "Our team will review your application within 3 days",
  },
  {
    title: "Interview",
    description: "Meet with our team to discuss your experience and goals",
  },
  {
    title: "Welcome",
    description: "Join our team and start your journey with us",
  },
];