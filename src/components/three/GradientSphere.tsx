import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface GradientSphereProps {
  radius?: number
  position?: [number, number, number]
  color1?: string
  color2?: string
  segments?: number
}

export function GradientSphere({
  radius = 1,
  position = [2, 0, -2],
  color1 = '#8B5CF6',
  color2 = '#4C1D95',
  segments = 32
}: GradientSphereProps) {
  const mesh = useRef<THREE.Mesh>(null!)
  
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color(color1) },
        color2: { value: new THREE.Color(color2) }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 color1;
        uniform vec3 color2;
        uniform float time;
        
        varying vec2 vUv;
        varying vec3 vNormal;
        
        void main() {
          float noise = sin(vUv.y * 10.0 + time);
          float fresnel = pow(1.0 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          vec3 finalColor = mix(color1, color2, noise + fresnel);
          gl_FragColor = vec4(finalColor, 0.5);
        }
      `,
      transparent: true
    })
  }, [color1, color2])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    mesh.current.rotation.y = time * 0.2
    shaderMaterial.uniforms.time.value = time
  })

  return (
    <mesh 
      ref={mesh} 
      position={position}
      material={shaderMaterial}
    >
      <sphereGeometry args={[radius, segments, segments]} />
    </mesh>
  )
} 