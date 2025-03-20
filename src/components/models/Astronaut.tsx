import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

const Astronaut = () => {
  const group = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (group.current) {
      // Add subtle floating animation
      group.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1
    }
  })

  return (
    <group ref={group}>
      {/* Body - improved shape */}
      <mesh position={[0, 0, 0]}>
        <capsuleGeometry args={[0.5, 1, 8, 16]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.3}
          roughness={0.7}
        />
      </mesh>
      
      {/* Helmet - improved with visor */}
      <group position={[0, 0.9, 0]}>
        {/* Helmet base */}
        <mesh>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshStandardMaterial 
            color="#dddddd" 
            metalness={0.5}
            roughness={0.3}
          />
        </mesh>
        
        {/* Visor */}
        <mesh position={[0, 0, 0.15]} scale={[0.8, 0.5, 0.4]}>
          <sphereGeometry args={[0.4, 32, 32, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
          <meshStandardMaterial 
            color="#4080ff" 
            metalness={0.1}
            roughness={0.1}
            transparent={true}
            opacity={0.9}
          />
        </mesh>
        
        {/* Helmet rim */}
        <mesh position={[0, 0, 0.15]} rotation={[Math.PI * 0.1, 0, 0]}>
          <torusGeometry args={[0.33, 0.02, 16, 32, Math.PI]} />
          <meshStandardMaterial color="#888888" metalness={0.8} roughness={0.2} />
        </mesh>
      </group>
      
      {/* Backpack - more detailed */}
      <group position={[0, 0, -0.4]}>
        <mesh>
          <boxGeometry args={[0.8, 0.8, 0.4]} />
          <meshStandardMaterial 
            color="#cccccc" 
            metalness={0.5}
            roughness={0.5}
          />
        </mesh>
        
        {/* Life support details */}
        <mesh position={[0, 0.2, 0.21]}>
          <boxGeometry args={[0.6, 0.3, 0.05]} />
          <meshStandardMaterial color="#888888" />
        </mesh>
        
        {/* Tanks */}
        <mesh position={[0.25, 0, 0.1]} rotation={[0, 0, Math.PI/2]}>
          <cylinderGeometry args={[0.1, 0.1, 0.6, 16]} />
          <meshStandardMaterial color="#aaaaaa" metalness={0.7} />
        </mesh>
        <mesh position={[-0.25, 0, 0.1]} rotation={[0, 0, Math.PI/2]}>
          <cylinderGeometry args={[0.1, 0.1, 0.6, 16]} />
          <meshStandardMaterial color="#aaaaaa" metalness={0.7} />
        </mesh>
      </group>
      
      {/* Arms - improved with joints */}
      <group position={[0.6, 0, 0]} rotation={[0, 0, -Math.PI / 6]}>
        {/* Upper arm */}
        <mesh position={[0, 0.2, 0]}>
          <capsuleGeometry args={[0.15, 0.4, 8, 16]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        
        {/* Lower arm */}
        <mesh position={[0.1, -0.2, 0]} rotation={[0, 0, Math.PI / 8]}>
          <capsuleGeometry args={[0.12, 0.4, 8, 16]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        
        {/* Glove */}
        <mesh position={[0.2, -0.5, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#dddddd" />
        </mesh>
      </group>
      
      <group position={[-0.6, 0, 0]} rotation={[0, 0, Math.PI / 6]}>
        {/* Upper arm */}
        <mesh position={[0, 0.2, 0]}>
          <capsuleGeometry args={[0.15, 0.4, 8, 16]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        
        {/* Lower arm */}
        <mesh position={[-0.1, -0.2, 0]} rotation={[0, 0, -Math.PI / 8]}>
          <capsuleGeometry args={[0.12, 0.4, 8, 16]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        
        {/* Glove */}
        <mesh position={[-0.2, -0.5, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#dddddd" />
        </mesh>
      </group>
      
      {/* Legs - improved with joints */}
      <group position={[0.3, -0.8, 0]} rotation={[0, 0, Math.PI / 16]}>
        {/* Upper leg */}
        <mesh position={[0, -0.2, 0]}>
          <capsuleGeometry args={[0.18, 0.4, 8, 16]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        
        {/* Lower leg */}
        <mesh position={[0, -0.7, 0]} rotation={[Math.PI / 16, 0, 0]}>
          <capsuleGeometry args={[0.15, 0.4, 8, 16]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        
        {/* Boot */}
        <mesh position={[0, -1.1, 0.1]} rotation={[Math.PI / 8, 0, 0]}>
          <boxGeometry args={[0.2, 0.1, 0.3]} />
          <meshStandardMaterial color="#888888" />
        </mesh>
      </group>
      
      <group position={[-0.3, -0.8, 0]} rotation={[0, 0, -Math.PI / 16]}>
        {/* Upper leg */}
        <mesh position={[0, -0.2, 0]}>
          <capsuleGeometry args={[0.18, 0.4, 8, 16]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        
        {/* Lower leg */}
        <mesh position={[0, -0.7, 0]} rotation={[Math.PI / 16, 0, 0]}>
          <capsuleGeometry args={[0.15, 0.4, 8, 16]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        
        {/* Boot */}
        <mesh position={[0, -1.1, 0.1]} rotation={[Math.PI / 8, 0, 0]}>
          <boxGeometry args={[0.2, 0.1, 0.3]} />
          <meshStandardMaterial color="#888888" />
        </mesh>
      </group>
      
      {/* Chest details */}
      <mesh position={[0, 0.3, 0.5]} scale={[0.7, 0.4, 0.1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#aaaaaa" />
      </mesh>
      
      {/* Control panel */}
      <mesh position={[0, 0.3, 0.55]} scale={[0.5, 0.25, 0.05]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#333333" />
      </mesh>
      
      {/* Lights */}
      <pointLight position={[0, 0.9, 0.5]} intensity={0.5} color="#80a0ff" distance={1} />
      <pointLight position={[0, 0.3, 0.6]} intensity={0.2} color="#ff8060" distance={0.5} />
    </group>
  )
}

export default Astronaut
