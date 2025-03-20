import { useEffect, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ScrollControls, Scroll } from '@react-three/drei'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Experience from './components/Experience'
import Header from './components/Header'
import Footer from './components/Footer'
import IntroSection from './components/IntroSection'
import TunnelSection from './components/TunnelSection'
import BreakoutSection from './components/BreakoutSection'
import ContentSection from './components/ContentSection'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const [loaded, setLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {!loaded ? (
        <div className="absolute inset-0 flex items-center justify-center text-white text-2xl">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-t-blue-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin mb-4"></div>
            <p>Initializing ChatAndBuild...</p>
          </div>
        </div>
      ) : (
        <>
          <div className="absolute inset-0 z-10">
            <Canvas
              camera={{ position: [0, 0, 5], fov: 75 }}
              className="touch-none"
            >
              <ScrollControls pages={5} damping={0.25}>
                <Experience />
                <Scroll html>
                  <div className="w-screen">
                    {/* Empty sections for scroll height */}
                    <section className="h-screen"></section>
                    <section className="h-screen"></section>
                    <section className="h-screen"></section>
                    <section className="h-screen"></section>
                    <section className="h-screen"></section>
                  </div>
                </Scroll>
              </ScrollControls>
            </Canvas>
          </div>
          <div 
            ref={containerRef} 
            className="absolute inset-0 z-20 pointer-events-none"
          >
            <Header />
            <IntroSection />
            <TunnelSection />
            <BreakoutSection />
            <ContentSection />
            <Footer />
          </div>
        </>
      )}
    </div>
  )
}

export default App
