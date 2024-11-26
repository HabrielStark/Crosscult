import { Suspense, lazy } from 'react'
import { motion } from "framer-motion"

const ThreeCanvas = lazy(() => import('@react-three/fiber').then(mod => ({ default: mod.Canvas })))
const OrbitControls = lazy(() => import('@react-three/drei').then(mod => ({ default: mod.OrbitControls })))
const Particles = lazy(() => import('@/components/three/Particles').then(mod => ({ default: mod.Particles })))
const GradientSphere = lazy(() => import('@/components/three/GradientSphere').then(mod => ({ default: mod.GradientSphere })))

interface PageLayoutProps {
  children: React.ReactNode
  title: string
  subtitle?: string
  showParticles?: boolean
  showSphere?: boolean
}

export function PageLayout({
  children,
  title,
  subtitle,
  showParticles = true,
  showSphere = false
}: PageLayoutProps) {
  return (
    <main className="min-h-screen pt-20 pb-16 relative overflow-hidden">
      {/* Title Section */}
      <motion.div
        className="text-center mb-20 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent 
                     bg-gradient-to-r from-primary to-primary/60">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {children}
      </motion.div>

      {/* Background Grid */}
      <div className="fixed inset-0 -z-20 
                    bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)]
                    bg-[size:14px_24px]" />

      {showParticles && (
        <Suspense fallback={null}>
          <ThreeCanvas>
            <OrbitControls enableZoom={false} />
            <Particles count={500} />
            {showSphere && <GradientSphere />}
          </ThreeCanvas>
        </Suspense>
      )}
    </main>
  )
} 