import { useRef } from 'react'
import { Text } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'
import * as THREE from 'three'

interface FloatingTextProps {
  text: string;
  scale?: number;
  color?: string;
  emissiveIntensity?: number;
}

export function FloatingText({
  text,
  scale = 1,
  color = "#8B5CF6",
  emissiveIntensity = 0.4
}: FloatingTextProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  const [springs] = useSpring(() => ({
    rotation: [0, 0, 0],
    position: [0, 0, 0],
    config: { mass: 1, tension: 170, friction: 26 }
  }))

  return (
    <animated.group
      ref={meshRef}
      scale={scale}
      rotation={springs.rotation as any}
      position={springs.position as any}
    >
      <Text
        font="/fonts/inter-bold.ttf"
        fontSize={1.5}
        letterSpacing={0.1}
        textAlign="center"
        anchorX="center"
        anchorY="middle"
        maxWidth={10}
      >
        {text}
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={emissiveIntensity}
          roughness={0.2}
          metalness={0.8}
        />
      </Text>
    </animated.group>
  )
} 