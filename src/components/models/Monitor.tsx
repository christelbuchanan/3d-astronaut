import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Monitor = () => {
  const monitorRef = useRef<THREE.Mesh>(null)
  const screenRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (screenRef.current) {
      // Add subtle glow effect
      const intensity = 0.5 + Math.sin(state.clock.getElapsedTime() * 2) * 0.2
      if (screenRef.current.material instanceof THREE.MeshStandardMaterial) {
        screenRef.current.material.emissiveIntensity = intensity
      }
    }
  })
  
  return (
    <group>
      {/* Monitor frame */}
      <mesh ref={monitorRef}>
        <boxGeometry args={[16, 9, 0.5]} />
        <meshStandardMaterial 
          color="#222222" 
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      
      {/* Screen */}
      <mesh ref={screenRef} position={[0, 0, 0.26]}>
        <planeGeometry args={[15, 8]} />
        <meshStandardMaterial 
          color="#000000" 
          emissive="#4060ff"
          emissiveIntensity={0.5}
        />
      </mesh>
      
      {/* Stand */}
      <mesh position={[0, -5, -1]}>
        <boxGeometry args={[2, 1, 2]} />
        <meshStandardMaterial color="#222222" />
      </mesh>
      
      {/* Screen light */}
      <pointLight position={[0, 0, 2]} intensity={0.5} color="#4060ff" distance={10} decay={2} />
    </group>
  )
}

export default Monitor
