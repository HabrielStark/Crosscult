import { useLoader } from '@react-three/fiber'
import { FontLoader } from 'three/addons/loaders/FontLoader.js'

export function useFont(path: string) {
  return useLoader(FontLoader, path)
} 