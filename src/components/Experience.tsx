import { useRef, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'
import Astronaut from './models/Astronaut'
import SpaceEnvironment from './models/SpaceEnvironment'
import Tunnel from './models/Tunnel'
import Monitor from './models/Monitor'

const Experience = () => {
  const { camera } = useThree()
  const scroll = useScroll()
  const scene = useRef<THREE.Group>(null)
  const astronautRef = useRef<THREE.Group>(null)
  const tunnelRef = useRef<THREE.Group>(null)
  const monitorRef = useRef<THREE.Group>(null)

  // Initial camera and object positions
  useEffect(() => {
    if (scene.current && astronautRef.current) {
      camera.position.set(0, 0, 5)
      astronautRef.current.position.set(0, 0, 0)
      astronautRef.current.rotation.set(0, Math.PI, 0)
      astronautRef.current.scale.set(0.5, 0.5, 0.5)
    }
    
    if (tunnelRef.current) {
      tunnelRef.current.position.set(0, 0, -50)
      tunnelRef.current.visible = false
    }
    
    if (monitorRef.current) {
      monitorRef.current.position.set(0, 0, -100)
      monitorRef.current.visible = false
    }
  }, [camera])

  // Animation based on scroll position
  useFrame(() => {
    if (!astronautRef.current || !tunnelRef.current || !monitorRef.current) return
    
    const scrollProgress = scroll.offset // 0 to 1
    
    // Section 1: Initial space flight (0-0.2)
    if (scrollProgress < 0.2) {
      const sectionProgress = scrollProgress / 0.2
      astronautRef.current.position.z = THREE.MathUtils.lerp(0, -10, sectionProgress)
      astronautRef.current.position.y = THREE.MathUtils.lerp(0, 1, sectionProgress)
      astronautRef.current.rotation.x = THREE.MathUtils.lerp(0, 0.2, sectionProgress)
      
      camera.position.z = THREE.MathUtils.lerp(5, 15, sectionProgress)
      tunnelRef.current.visible = false
      monitorRef.current.visible = false
    }
    
    // Section 2: Approaching tunnel (0.2-0.4)
    else if (scrollProgress < 0.4) {
      const sectionProgress = (scrollProgress - 0.2) / 0.2
      astronautRef.current.position.z = THREE.MathUtils.lerp(-10, -30, sectionProgress)
      astronautRef.current.rotation.y = Math.PI + THREE.MathUtils.lerp(0, 1, sectionProgress)
      
      tunnelRef.current.visible = true
      tunnelRef.current.position.z = THREE.MathUtils.lerp(-50, -30, sectionProgress)
      monitorRef.current.visible = false
    }
    
    // Section 3: Through the tunnel (0.4-0.6)
    else if (scrollProgress < 0.6) {
      const sectionProgress = (scrollProgress - 0.4) / 0.2
      astronautRef.current.position.z = THREE.MathUtils.lerp(-30, -70, sectionProgress)
      tunnelRef.current.visible = true
      
      // Camera follows through tunnel
      camera.position.z = THREE.MathUtils.lerp(15, -40, sectionProgress)
      
      // Tunnel effect intensifies
      tunnelRef.current.rotation.z = THREE.MathUtils.lerp(0, Math.PI * 4, sectionProgress)
      monitorRef.current.visible = false
    }
    
    // Section 4: Breaking through monitor (0.6-0.8)
    else if (scrollProgress < 0.8) {
      const sectionProgress = (scrollProgress - 0.6) / 0.2
      astronautRef.current.position.z = THREE.MathUtils.lerp(-70, -90, sectionProgress)
      
      tunnelRef.current.visible = false
      monitorRef.current.visible = true
      monitorRef.current.position.z = THREE.MathUtils.lerp(-100, -90, sectionProgress)
      
      // Breaking effect
      if (sectionProgress > 0.8) {
        monitorRef.current.scale.set(
          1 + sectionProgress * 0.2,
          1 + sectionProgress * 0.2,
          1 + sectionProgress * 0.2
        )
      }
      
      camera.position.z = THREE.MathUtils.lerp(-40, -70, sectionProgress)
    }
    
    // Section 5: Transition to normal web (0.8-1.0)
    else {
      const sectionProgress = (scrollProgress - 0.8) / 0.2
      astronautRef.current.position.z = THREE.MathUtils.lerp(-90, -120, sectionProgress)
      astronautRef.current.rotation.y = Math.PI + THREE.MathUtils.lerp(1, 4, sectionProgress)
      
      // Fade out 3D elements
      astronautRef.current.scale.set(
        0.5 * (1 - sectionProgress),
        0.5 * (1 - sectionProgress),
        0.5 * (1 - sectionProgress)
      )
      
      monitorRef.current.visible = true
      monitorRef.current.position.z = THREE.MathUtils.lerp(-90, -110, sectionProgress)
      monitorRef.current.scale.set(
        1 + sectionProgress,
        1 + sectionProgress,
        1 + sectionProgress
      )
      
      camera.position.z = THREE.MathUtils.lerp(-70, -100, sectionProgress)
    }
  })

  return (
    <group ref={scene}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <SpaceEnvironment />
      <group ref={astronautRef}>
        <Astronaut />
      </group>
      <group ref={tunnelRef}>
        <Tunnel />
      </group>
      <group ref={monitorRef}>
        <Monitor />
      </group>
    </group>
  )
}

export default Experience
