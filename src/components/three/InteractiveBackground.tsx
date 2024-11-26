import { useRef } from 'react'
import * as THREE from 'three'
import { useSpring, animated } from '@react-spring/three'

export function InteractiveBackground() {
  const group = useRef<THREE.Group>(null!)

  const [spring] = useSpring(() => ({
    position: [0, 0, 0],
    config: { mass: 1, tension: 170, friction: 26 }
  }), [])

  return (
    <animated.group
      ref={group}
      position={spring.position as any}
    >
      {/* Rest of the component */}
    </animated.group>
  )
} 