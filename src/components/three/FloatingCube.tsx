import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'
import { Float } from '@react-three/drei'

interface FloatingCubeProps {
  size?: number
  color?: string
  wireframe?: boolean
  opacity?: number
  rotationSpeed?: number
}

export function FloatingCube({
  size = 1,
  color = "#8B5CF6",
  wireframe = true,
  opacity = 0.3,
  rotationSpeed = 0.2
}: FloatingCubeProps) {
  const mesh = useRef<THREE.Mesh>(null!)
  
  // Create geometry once
  const geometry = useMemo(() => new THREE.BoxGeometry(size, size, size), [size])
  
  // Create material once
  const material = useMemo(() => 
    new THREE.MeshStandardMaterial({
      color,
      transparent: true,
      opacity,
      wireframe,
      metalness: 0.5,
      roughness: 0.2
    }), [color, opacity, wireframe])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    mesh.current.rotation.x = Math.sin(time) * rotationSpeed
    mesh.current.rotation.y = Math.cos(time) * rotationSpeed
  })

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh 
        ref={mesh}
        geometry={geometry}
        material={material}
      />
    </Float>
  )
} 