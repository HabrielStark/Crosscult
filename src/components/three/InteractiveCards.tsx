import { useRef, useMemo, useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import * as THREE from 'three'
import { Float, GradientTexture } from '@react-three/drei'
import { useSpring, animated } from '@react-spring/three'

interface InteractiveCardsProps {
  count?: number
  spacing?: number
  colors?: [string, string]
  opacity?: number
  scale?: [number, number]
}

export function InteractiveCards({ 
  count = 4,
  spacing = 2,
  colors = ['#8B5CF6', '#4C1D95'],
  opacity = 0.1,
  scale = [1.5, 2]
}: InteractiveCardsProps) {
  const group = useRef<THREE.Group>(null!)
  const { mouse } = useThree()
  const clock = useRef(new THREE.Clock())

  const cards = useMemo(() => 
    Array.from({ length: count }, (_, i) => ({
      position: [
        (i - (count - 1) / 2) * spacing,
        0,
        0
      ] as [number, number, number],
      rotation: [0, i * Math.PI / count, 0] as [number, number, number]
    })), [count, spacing])

  const [springs, api] = useSpring(() => ({
    rotation: [0, 0, 0] as [number, number, number],
    config: { mass: 5, tension: 350, friction: 40 }
  }))

  useEffect(() => {
    const time = clock.current.getElapsedTime()
    api.start({
      rotation: [
        mouse.y * 0.1,
        mouse.x * 0.1 + Math.sin(time * 0.1) * 0.1,
        0
      ]
    })
  }, [mouse, api])

  return (
    <animated.group
      ref={group}
      rotation={springs.rotation as any}
    >
      {cards.map((card, i) => (
        <Float
          key={i}
          speed={1.5}
          rotationIntensity={0.2}
          floatIntensity={0.5}
        >
          <mesh
            position={card.position}
            rotation={card.rotation}
          >
            <planeGeometry args={scale} />
            <meshStandardMaterial
              color={colors[0]}
              metalness={0.5}
              roughness={0.2}
              transparent
              opacity={opacity}
              side={THREE.DoubleSide}
            >
              <GradientTexture
                stops={[0, 1]}
                colors={colors}
                size={256}
              />
            </meshStandardMaterial>
          </mesh>
        </Float>
      ))}
    </animated.group>
  )
} 