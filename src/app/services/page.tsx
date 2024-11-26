import { PageLayout } from "@/components/page-layout"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  TrendingUp, 
  Globe2, 
  Palette, 
  Zap, 
  BarChart3,
  CheckCircle,
  ArrowRight
} from 'lucide-react'
import { Canvas } from '@react-three/fiber'
import { Suspense } from "react"
import { OrbitControls, Float } from '@react-three/drei'
import { GradientSphere } from "@/components/three/GradientSphere"
import { Particles } from "@/components/three/Particles"
import { FloatingText } from "@/components/three/FloatingText"

export default function Services() {
  return (
    <PageLayout
      title="Ready to Realize Your Wildest Ideas and Goals"
      subtitle="We use only Innovative Technologies and a Customized Approach for each client."
    >
      {/* Enhanced 3D Background */}
      <div className="fixed inset-0 -z-10">
        <Canvas>
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <Particles 
              count={1000}
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
              <GradientSphere />
              <FloatingText 
                text="Services"
                scale={0.5}
                color="#8B5CF6"
                emissiveIntensity={0.4}
              />
            </Float>
          </Suspense>
        </Canvas>
      </div>

      {/* Services Grid with Enhanced Layout */}
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-fr">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card group hover:bg-white/5 h-full flex flex-col"
              >
                <div className="flex flex-col h-full p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-4xl text-primary">{service.icon}</span>
                    <span className="text-5xl font-bold text-primary/30">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gradient mb-4">{service.title}</h3>
                  
                  <div className="space-y-3 flex-grow">
                    {service.items.map((item) => (
                      <div key={item} className="flex items-start gap-3 group/item">
                        <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-1 
                                              group-hover/item:scale-110 transition-transform" />
                        <span className="text-muted-foreground group-hover:text-white/90 
                                       transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-primary/10">
                    <Button 
                      variant="outline" 
                      className="w-full group/btn border-primary/20 hover:bg-primary/10
                               hover:border-primary/40"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Improved Layout */}
      <section className="px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gradient">Why Choose Us</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with creative innovation to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card text-center group hover:bg-white/5 p-8"
              >
                <div className="relative inline-block mb-6">
                  <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full" />
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gradient">{feature.title}</h3>
                <p className="text-muted-foreground group-hover:text-white/90 transition-colors">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

const services = [
  {
    title: "Strategy",
    icon: <Target className="w-12 h-12 text-primary animate-pulse-soft" />,
    items: [
      "Go-to-market",
      "Token launch",
      "Scaling PMF",
      "Roadmap development",
      "Communication strategy"
    ]
  },
  {
    title: "Growth",
    icon: <TrendingUp className="w-12 h-12 text-primary animate-float" />,
    items: [
      "Social media management",
      "Content writing",
      "AMA session providing",
      "Podcast content & promotion",
      "Campaigns",
      "Crypto ads network",
      "Email marketing",
      "Crowd marketing (shilling)"
    ]
  },
  {
    title: "Traffic Sources",
    icon: <Globe2 className="w-12 h-12 text-primary animate-spin-slow" />,
    items: [
      "SEO & SAO",
      "PPC",
      "KOLs (worldwide)",
      "Influence marketing",
      "Ambassador program building",
      "Web3 influencers collaborations"
    ]
  },
  {
    title: "Design",
    icon: <Palette className="w-12 h-12 text-primary animate-enhanced-float" />,
    items: [
      "Branding",
      "Rebranding",
      "Animations & 3D motion",
      "Metaverse & Avatars",
      "X-reality",
      "CGI production"
    ]
  }
];

const features = [
  {
    title: "Custom Approach",
    description: "Tailored solutions for each client's unique needs",
    icon: <Target className="w-12 h-12 text-primary animate-pulse-soft" />
  },
  {
    title: "Innovation",
    description: "Latest technologies and creative solutions",
    icon: <Zap className="w-12 h-12 text-primary animate-float" />
  },
  {
    title: "Results Driven",
    description: "Focus on achieving measurable outcomes",
    icon: <BarChart3 className="w-12 h-12 text-primary animate-enhanced-float" />
  }
];