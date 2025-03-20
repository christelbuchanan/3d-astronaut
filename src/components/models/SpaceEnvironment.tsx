import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const SpaceEnvironment = () => {
  const starsRef = useRef<THREE.Points>(null)
  const nebulaRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += 0.0001
      starsRef.current.rotation.z += 0.0001
    }
    
    if (nebulaRef.current) {
      nebulaRef.current.rotation.z += 0.0002
    }
  })
  
  // Create stars
  const starCount = 2000
  const starPositions = new Float32Array(starCount * 3)
  const starSizes = new Float32Array(starCount)
  
  for (let i = 0; i < starCount; i++) {
    const i3 = i * 3
    // Create a sphere of stars
    const radius = 50 + Math.random() * 100
    const theta = Math.random() * Math.PI * 2
    const phi = Math.random() * Math.PI
    
    starPositions[i3] = radius * Math.sin(phi) * Math.cos(theta)
    starPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    starPositions[i3 + 2] = radius * Math.cos(phi)
    
    starSizes[i] = Math.random() * 2
  }
  
  return (
    <group>
      {/* Stars */}
      <points ref={starsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={starCount}
            array={starPositions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={starCount}
            array={starSizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.1}
          color="#ffffff"
          sizeAttenuation={true}
          transparent={true}
          opacity={0.8}
          blending={THREE.AdditiveBlending}
        />
      </points>
      
      {/* Nebula */}
      <mesh ref={nebulaRef} position={[0, 0, -50]} rotation={[0, 0, 0]}>
        <sphereGeometry args={[40, 32, 32]} />
        <meshStandardMaterial
          color="#0a0a4a"
          emissive="#0a0a4a"
          emissiveIntensity={0.5}
          transparent={true}
          opacity={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Distant light sources */}
      <pointLight position={[30, 30, -50]} intensity={1} color="#4060ff" distance={100} decay={2} />
      <pointLight position={[-30, -30, -50]} intensity={1} color="#ff4060" distance={100} decay={2} />
    </group>
  )
}

export default SpaceEnvironment
