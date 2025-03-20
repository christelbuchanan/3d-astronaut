import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Tunnel = () => {
  const tunnelRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (tunnelRef.current) {
      // Add rotation animation
      tunnelRef.current.rotation.z += 0.005
    }
  })
  
  return (
    <group>
      {/* Main tunnel */}
      <mesh ref={tunnelRef}>
        <cylinderGeometry args={[5, 5, 50, 32, 1, true]} />
        <meshStandardMaterial 
          color="#000000" 
          emissive="#000000"
          side={THREE.BackSide}
          transparent={true}
          opacity={0.8}
        />
      </mesh>
      
      {/* Tunnel rings */}
      {[...Array(10)].map((_, index) => (
        <mesh key={index} position={[0, 0, -index * 5 + 20]}>
          <torusGeometry args={[5, 0.1, 16, 32]} />
          <meshStandardMaterial 
            color={index % 2 === 0 ? "#4040ff" : "#ff4040"} 
            emissive={index % 2 === 0 ? "#4040ff" : "#ff4040"}
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
      
      {/* Tunnel lights */}
      <pointLight position={[0, 0, 15]} intensity={1} color="#4040ff" distance={20} decay={2} />
      <pointLight position={[0, 0, 0]} intensity={1} color="#ff4040" distance={20} decay={2} />
      <pointLight position={[0, 0, -15]} intensity={1} color="#4040ff" distance={20} decay={2} />
    </group>
  )
}

export default Tunnel
