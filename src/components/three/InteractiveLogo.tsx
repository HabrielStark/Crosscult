import { useRef } from 'react'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { Text3D, Float } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'

export function InteractiveLogo() {
  const meshRef = useRef<THREE.Group>(null!)
  const { mouse } = useThree()

  const [springs, api] = useSpring(() => ({
    position: [0, 0, 0] as [number, number, number],
    rotation: [0, 0, 0] as [number, number, number],
    config: { mass: 1, tension: 280, friction: 60 }
  }))

  return (
    <animated.group
      ref={meshRef}
      position={springs.position}
      rotation={springs.rotation}
    >
      <Float 
        speed={2}
        rotationIntensity={0.5}
        floatIntensity={0.5}
      >
        <Text3D
          font="/fonts/inter_bold.json"
          size={0.5}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          CrossCult
          <meshStandardMaterial
            color="#8B5CF6"
            metalness={0.8}
            roughness={0.2}
            emissive="#8B5CF6"
            emissiveIntensity={0.2}
          />
        </Text3D>
      </Float>
    </animated.group>
  )
} 