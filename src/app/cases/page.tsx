import { PageLayout } from "@/components/page-layout"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink, Star, Users, TrendingUp } from "lucide-react"
import { Canvas } from '@react-three/fiber'
import { Suspense, useRef } from "react"
import { OrbitControls, Float } from '@react-three/drei'
import { Particles } from "@/components/three/Particles"
import { GradientSphere } from "@/components/three/GradientSphere"

export default function Cases() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  return (
    <PageLayout
      title="Our Success Stories"
      subtitle="Explore how we've helped businesses achieve their goals through innovative solutions and strategic thinking."
    >
      {/* 3D Background */}
      <div className="fixed inset-0 -z-10">
        <Canvas>
          <OrbitControls enableZoom={false} enablePan={false} />
          <ambientLight intensity={0.5} />
          <Suspense fallback={null}>
            <Particles count={1000} />
            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <GradientSphere />
            </Float>
          </Suspense>
        </Canvas>
      </div>

      {/* Categories Filter with Enhanced Animation */}
      <section className="px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 
                         text-primary transition-all duration-300 hover:shadow-lg
                         hover:shadow-primary/20"
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Cases Grid with Enhanced Cards */}
      <section className="px-4 sm:px-6 lg:px-8" ref={containerRef}>
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {cases.map((case_, index) => (
              <motion.div
                key={case_.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card group hover:bg-white/5"
              >
                {/* Case Image with Gradient Overlay */}
                <div className="relative h-48 -mt-8 -mx-8 mb-6 rounded-t-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 
                                group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300" />
                  <motion.div
                    className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 
                             transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  />
                </div>

                {/* Content with Enhanced Typography */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gradient">{case_.title}</h3>
                    <span className="text-sm px-4 py-1.5 rounded-full bg-primary/10 text-primary
                                 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      {case_.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground group-hover:text-white/90 transition-colors">
                    {case_.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <Button 
                      variant="outline" 
                      className="group/btn border-white/20 hover:bg-white/10"
                    >
                      View Case Study
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="hover:bg-white/10"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Statistics Section */}
      <motion.section 
        className="px-4 sm:px-6 lg:px-8 py-20 mt-20 relative overflow-hidden"
        style={{ y }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card group hover:bg-white/5 text-center"
              >
                <div className="text-4xl font-bold text-gradient mb-4">{stat.value}</div>
                <div className="text-muted-foreground group-hover:text-white/90 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </PageLayout>
  )
}

const categories = [
  "All",
  "Cryptocurrency",
  "Web3",
  "Gaming",
  "IT Services",
  "Education",
  "Digital Marketing",
  "Media"
];

const cases = [
  {
    title: "BYBIT",
    description: "A trusted cryptocurrency exchange, ranked among the top 3 CEX by coin market cap. Since 2018, it has served over 10 million users, offering 100+ assets.",
    category: "Cryptocurrency",
  },
  {
    title: "PWRT Teams",
    description: "Leader in building cross-border IT and engineering organizations. With over 300 teams built, they've achieved a remarkable level of expertise.",
    category: "IT Services",
  },
  {
    title: "Mimo",
    description: "Provides coding courses in Python, JavaScript, HTML, SQL, and other languages, with over 25 million learners.",
    category: "Education",
  },
  {
    title: "Crombie",
    description: "Delivers top-performing teams to IT companies, tasked with developing custom systems, software, and applications.",
    category: "IT Services",
  },
  {
    title: "Finch Labs",
    description: "Improves website value, reduces bounce rates, and enhances lead generation.",
    category: "Digital Marketing",
  },
  {
    title: "Rainmaker",
    description: "A Web3 Social Creator Economy platform, combines smart contracts with marketing budgets.",
    category: "Web3",
  },
  {
    title: "CPC (Crypto Players Club)",
    description: "NFT-based sports metaverse, revolutionizing soccer with a decentralized ecosystem, combining P2E games and rewarding fan engagement.",
    category: "Gaming",
  },
  {
    title: "Script.TV",
    description: "Blockchain-based media platform aiming to revolutionize live television.",
    category: "Media",
  }
];

const stats = [
  { value: "50+", label: "Successful Projects" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "30M+", label: "Users Reached" },
  { value: "24/7", label: "Support Available" }
];