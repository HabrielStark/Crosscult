import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface BlogParticlesProps {
  count?: number
  size?: number
  spread?: number
  color?: string
  opacity?: number
}

export function BlogParticles({ 
  count = 500,
  size = 0.03,
  spread = 15,
  color = "#8B5CF6",
  opacity = 0.4
}: BlogParticlesProps) {
  const mesh = useRef<THREE.Points>(null!)
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const colorObj = new THREE.Color(color)
    
    for (let i = 0; i < count; i++) {
      // Position
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * spread
      positions[i3 + 1] = (Math.random() - 0.5) * spread
      positions[i3 + 2] = (Math.random() - 0.5) * spread

      // Color with gradient
      colors[i3] = colorObj.r * (Math.random() * 0.5 + 0.5)
      colors[i3 + 1] = colorObj.g * (Math.random() * 0.5 + 0.5)
      colors[i3 + 2] = colorObj.b * (Math.random() * 0.5 + 0.5)
    }
    return [positions, colors]
  }, [count, spread, color])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    mesh.current.rotation.y = time * 0.05
    mesh.current.rotation.x = time * 0.02
    mesh.current.position.y = Math.sin(time * 0.2) * 0.1
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={size}
        vertexColors
        transparent
        opacity={opacity}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
} 