import { useLoader } from '@react-three/fiber'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader'

export function useFont(path: string) {
  return useLoader(FontLoader, path)
} 