import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const BreakoutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const section = sectionRef.current
    const card = cardRef.current
    const scrollIndicator = scrollIndicatorRef.current
    
    if (!section || !card || !scrollIndicator) return
    
    gsap.fromTo(
      card,
      { 
        opacity: 0,
        y: 100
      },
      { 
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'center center',
          scrub: true
        }
      }
    )
    
    gsap.fromTo(
      scrollIndicator,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 0.5,
        scrollTrigger: {
          trigger: section,
          start: 'center center',
          end: 'bottom center',
          scrub: true
        }
      }
    )
  }, [])
  
  return (
    <section 
      ref={sectionRef}
      className="section breakout-section h-screen flex items-center justify-center relative"
    >
      <div 
        ref={cardRef}
        className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 p-6"
      >
        <div className="glass-card bg-gradient-to-br from-blue-900/40 to-purple-900/40 backdrop-blur-md p-6 rounded-xl border border-blue-500/30 transform hover:scale-105 transition-transform">
          <div className="text-blue-400 text-3xl mb-3">✨</div>
          <h3 className="text-xl font-bold text-white mb-3">Imagine It</h3>
          <p className="text-sm text-gray-300">
            Describe your vision in natural language. ChatAndBuild's AI understands your creative intent and transforms words into digital blueprints.
          </p>
        </div>
        
        <div className="glass-card bg-gradient-to-br from-purple-900/40 to-blue-900/40 backdrop-blur-md p-6 rounded-xl border border-purple-500/30 transform hover:scale-105 transition-transform">
          <div className="text-purple-400 text-3xl mb-3">🚀</div>
          <h3 className="text-xl font-bold text-white mb-3">Build It</h3>
          <p className="text-sm text-gray-300">
            Watch as your ideas materialize in real-time. From websites to apps, games to 3D models—if you can dream it, you can build it.
          </p>
        </div>
        
        <div className="glass-card bg-gradient-to-br from-blue-900/40 to-indigo-900/40 backdrop-blur-md p-6 rounded-xl border border-indigo-500/30 transform hover:scale-105 transition-transform">
          <div className="text-indigo-400 text-3xl mb-3">🌐</div>
          <h3 className="text-xl font-bold text-white mb-3">Share It</h3>
          <p className="text-sm text-gray-300">
            Deploy your creations instantly to the digital cosmos. Share your work with the world and inspire others in the ChatAndBuild community.
          </p>
        </div>
        
        <div className="glass-card bg-gradient-to-br from-indigo-900/40 to-blue-900/40 backdrop-blur-md p-6 rounded-xl border border-blue-500/30 transform hover:scale-105 transition-transform">
          <div className="text-blue-400 text-3xl mb-3">🔮</div>
          <h3 className="text-xl font-bold text-white mb-3">Own It</h3>
          <p className="text-sm text-gray-300">
            Your creations belong to you. With ChatAndBuild, you maintain full ownership and control of everything you build in our digital universe.
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="scroll-indicator"
      >
        <div className="scroll-arrow"></div>
        <div className="scroll-arrow"></div>
        <p className="text-white text-sm mt-2">Almost there</p>
      </div>
    </section>
  )
}

export default BreakoutSection
