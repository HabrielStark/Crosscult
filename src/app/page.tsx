import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Canvas } from '@react-three/fiber'
import { useRef, Suspense } from "react"
import { OrbitControls, Float } from '@react-three/drei'
import { InteractiveBackground } from "@/components/three/InteractiveBackground"
import { InteractiveCards } from "@/components/three/InteractiveCards"
import { FloatingText } from "@/components/three/FloatingText"
import { ThreeErrorBoundary } from '@/components/three/ErrorBoundary'
import { Particles } from "@/components/three/Particles"

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <ThreeErrorBoundary>
            <Canvas>
              <OrbitControls 
                enableZoom={false} 
                enablePan={false}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
              <ambientLight intensity={0.5} />
              <Suspense fallback={null}>
                <InteractiveBackground />
                <Float 
                  speed={2} 
                  rotationIntensity={0.5} 
                  floatIntensity={0.5}
                  position={[0, 2, 0]}
                >
                  <FloatingText 
                    text="CrossCult"
                    scale={0.5}
                    color="#8B5CF6"
                    emissiveIntensity={0.4}
                  />
                </Float>
              </Suspense>
            </Canvas>
          </ThreeErrorBoundary>
        </div>

        {/* Hero Content */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block text-primary text-lg font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Digital Agency
            </motion.span>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-8 leading-tight"
            >
              <span className="text-foreground dark:text-white">Formula for your success</span>
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Together we move forward
              </span>
            </motion.h1>
            <motion.p className="text-muted-foreground dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              CrossCult - Together we move forward. This is a group of people who are ready to make your wildest dreams come true. 
              We will find the tools that will grow your business.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Button 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg
                         transform hover:-translate-y-1 transition-all duration-300
                         hover:shadow-lg hover:shadow-primary/20"
              >
                Let's Talk
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-primary/20 text-foreground dark:text-white hover:bg-primary/10 px-8 py-6 text-lg
                         transform hover:-translate-y-1 transition-all duration-300
                         hover:shadow-lg hover:shadow-primary/10"
              >
                Our Projects
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground dark:text-white/50" />
        </motion.div>
      </section>

      {/* Stats Section with 3D elements */}
      <section className="py-20 bg-muted/30 dark:bg-black/90">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.value}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center glass-card hover:bg-primary/5 transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground dark:text-gray-400 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Expertise Section */}
      <section className="py-20 bg-background dark:bg-black relative overflow-hidden" ref={scrollRef}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        {/* Floating 3D Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <Canvas>
            <ambientLight intensity={0.5} />
            <Suspense fallback={null}>
              <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                <InteractiveCards 
                  count={4}
                  spacing={2}
                  colors={['#8B5CF6', '#4C1D95']}
                  opacity={0.1}
                  scale={[1.5, 2]}
                />
              </Float>
              <Particles 
                count={100} 
                spread={20}
                color="#8B5CF6"
                opacity={0.4}
              />
            </Suspense>
          </Canvas>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground dark:text-white mb-6">
              Our Expertise
            </h2>
            <p className="text-muted-foreground dark:text-gray-400 max-w-2xl mx-auto">
              We provide end-to-end solutions for businesses looking to make their mark in the digital world
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card group hover:bg-primary/5 dark:hover:bg-white/5 
                         transform hover:-translate-y-2 transition-all duration-500"
              >
                <div className="relative">
                  {/* Decorative Number */}
                  <div className="absolute -top-4 -right-4 text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
                    {service.number}
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-foreground dark:text-white mb-4 
                                group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground dark:text-gray-400 mb-6 
                                group-hover:text-foreground dark:group-hover:text-gray-300 transition-colors">
                      {service.description}
                    </p>
                    
                    {/* Service Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: (index * 0.1) + (i * 0.05) }}
                          className="flex items-center gap-2 text-sm text-muted-foreground 
                                   group-hover:text-foreground transition-colors"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Projects Completed" },
  { value: "50+", label: "Team Members" },
  { value: "95%", label: "Client Satisfaction" }
];

const services = [
  {
    number: "01",
    title: "Strategy",
    description: "Strategic planning and execution for digital success",
    features: [
      "Go-to-market strategy",
      "Token launch planning",
      "Scaling PMF",
      "Roadmap development",
      "Communication strategy"
    ]
  },
  {
    number: "02",
    title: "Growth",
    description: "Social media management, Content writing, AMA sessions, Podcast content & promotion, Campaigns",
    features: [
      "Social media management",
      "Content writing",
      "AMA sessions",
      "Podcast content & promotion",
      "Campaigns"
    ]
  },
  {
    number: "03",
    title: "Traffic Sources",
    description: "SEO & SAO, PPC, KOLs (worldwide), Influence marketing, Ambassador program building",
    features: [
      "SEO & SAO",
      "PPC",
      "KOLs (worldwide)",
      "Influence marketing",
      "Ambassador program building"
    ]
  },
  {
    number: "04",
    title: "Design",
    description: "Branding, Rebranding, Animations & 3D motion, Metaverse & Avatars, X-reality, CGI production",
    features: [
      "Branding",
      "Rebranding",
      "Animations & 3D motion",
      "Metaverse & Avatars",
      "X-reality",
      "CGI production"
    ]
  }
];