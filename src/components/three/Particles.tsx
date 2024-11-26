import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticlesProps {
  count?: number
  size?: number
  spread?: number
  color?: string
  opacity?: number
}

export function Particles({ 
  count = 500,
  size = 0.02,
  spread = 20,
  color = "#8B5CF6",
  opacity = 0.6 
}: ParticlesProps) {
  const mesh = useRef<THREE.Points>(null!)
  
  // Memoize positions to prevent recalculation
  const positions = useMemo(() => {
    const temp = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      temp[i * 3] = (Math.random() - 0.5) * spread
      temp[i * 3 + 1] = (Math.random() - 0.5) * spread
      temp[i * 3 + 2] = (Math.random() - 0.5) * spread
    }
    return temp
  }, [count, spread])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    mesh.current.rotation.x = Math.sin(time * 0.1) * 0.001
    mesh.current.rotation.y = Math.cos(time * 0.2) * 0.001
  })

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geo
  }, [positions])

  return (
    <points ref={mesh}>
      <primitive object={geometry} />
      <pointsMaterial
        size={size}
        color={color}
        transparent
        opacity={opacity}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
} 