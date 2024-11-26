import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion, useScroll, useTransform } from "framer-motion"
import { Mail, MapPin, Lock, FileText, Calendar, Phone, Send } from 'lucide-react'
import { PageLayout } from "@/components/page-layout"
import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from "react"
import { OrbitControls, Float } from '@react-three/drei'
import { Particles } from "@/components/three/Particles"
import { FloatingText } from "@/components/three/FloatingText"
import { ThreeErrorBoundary } from '@/components/three/ErrorBoundary'

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const { scrollYProgress } = useScroll({
    target: formRef,
    offset: ["start start", "end start"]
  })

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const y = useTransform(scrollYProgress, [0, 0.5], [0, -50])

  return (
    <PageLayout 
      title="Start Your Journey with Us"
      subtitle="Our account manager will get in touch with you within 1 day."
    >
      {/* 3D Background */}
      <div className="fixed inset-0 -z-10">
        <ThreeErrorBoundary>
          <Canvas
            camera={{ position: [0, 0, 10], fov: 50 }}
            dpr={[1, 2]}
          >
            <OrbitControls 
              enableZoom={false} 
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 2}
            />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Suspense fallback={null}>
              <Particles 
                count={500}
                size={0.02}
                spread={20}
                color="#8B5CF6"
                opacity={0.6}
              />
              <Float 
                speed={2} 
                rotationIntensity={0.5} 
                floatIntensity={0.5}
                position={[0, 2, 0]}
              >
                <FloatingText 
                  text="Contact Us"
                  scale={0.5}
                  color="#8B5CF6"
                  emissiveIntensity={0.4}
                />
              </Float>
            </Suspense>
          </Canvas>
        </ThreeErrorBoundary>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contact Form Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <motion.form 
            ref={formRef}
            style={{ opacity, y }}
            className="glass-card space-y-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2">
              <label className="text-sm font-medium">Full Name</label>
              <Input 
                placeholder="Please enter your full name" 
                required 
                className="bg-white/5 border-white/10 focus:border-primary/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Email Address</label>
              <Input 
                type="email" 
                placeholder="Please enter your email address" 
                required 
                className="bg-white/5 border-white/10 focus:border-primary/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Phone Number</label>
              <Input 
                placeholder="Please enter your phone number"
                className="bg-white/5 border-white/10 focus:border-primary/50"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea 
                placeholder="Please provide a brief description of your request" 
                className="min-h-[120px] bg-white/5 border-white/10 focus:border-primary/50"
                required
              />
            </div>
            <Button 
              className="w-full bg-primary hover:bg-primary/90 text-white
                       transform hover:-translate-y-1 transition-all duration-300
                       hover:shadow-lg hover:shadow-primary/20"
            >
              Send Message
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </motion.form>

          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card group hover:border-primary/30"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{info.title}</h3>
                    <p className="text-muted-foreground">{info.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Locations */}
            {contactLocations.map((location, index) => (
              <motion.div
                key={location.city}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (index + contactInfo.length) * 0.1 }}
                className="glass-card group hover:border-primary/30"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">{location.city}</h3>
                    <p className="text-muted-foreground">{location.address}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card text-center group"
            >
              <div className="inline-flex p-4 rounded-full bg-primary/10 text-primary mb-4
                            group-hover:bg-primary group-hover:text-white transition-colors">
                {step.icon}
              </div>
              <h3 className="font-medium mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}

const contactInfo = [
  {
    title: "Email",
    content: "crosscult@crosscult.agency",
    icon: <Mail className="w-6 h-6" />
  }
];

const processSteps = [
  {
    title: "Initial Contact",
    description: "Our account manager will get in touch with you within 1 day.",
    icon: <Mail className="w-6 h-6" />
  },
  {
    title: "NDA Signing",
    description: "We sign an NDA with all clients before diving into any project details. Your privacy is our high priority.",
    icon: <Lock className="w-6 h-6" />
  },
  {
    title: "Requirements",
    description: "After we get all the information we need, we make a proposal according to your requirements.",
    icon: <FileText className="w-6 h-6" />
  },
  {
    title: "Proposal",
    description: "Within 7 days, you will receive a comprehensive proposal with clear timelines and a team setup.",
    icon: <Calendar className="w-6 h-6" />
  }
];

const contactLocations = [
  {
    city: "Kyiv",
    address: "Yaroslavska St, 58, Kyiv, 04071, 7th Floor",
  },
  {
    city: "Tel Aviv",
    address: "Dizengoff Square 1, Tel Aviv-Yafo, Israel",
  }
];