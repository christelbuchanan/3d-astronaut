import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const TunnelSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const section = sectionRef.current
    const text = textRef.current
    const scrollIndicator = scrollIndicatorRef.current
    
    if (!section || !text || !scrollIndicator) return
    
    gsap.fromTo(
      text,
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top center',
          end: 'bottom center',
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
      className="section tunnel-section h-screen flex items-center justify-center relative"
    >
      <div 
        ref={textRef}
        className="glass-panel text-center max-w-xl backdrop-blur-md bg-black/30 p-6 rounded-xl border border-blue-500/30"
      >
        <h2 className="text-3xl font-bold mb-4 text-white">
          Fly Through <span className="text-blue-400">Infinite</span> Possibilities
        </h2>
        <p className="text-base text-gray-300 mb-4">
          As we traverse this cosmic gateway, your ideas transform into digital realities.
          ChatAndBuild connects your vision to the vast universe of creation.
        </p>
        <p className="text-sm text-blue-300">
          Where will your imagination take you today?
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="scroll-indicator"
      >
        <div className="scroll-arrow"></div>
        <div className="scroll-arrow"></div>
        <p className="text-white text-sm mt-2">Continue flying</p>
      </div>
      
      {/* Tunnel effect particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array(30).fill(0).map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-500 opacity-50"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: 'blur(2px)',
              animation: `tunnel-particle ${Math.random() * 5 + 3}s linear infinite`
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default TunnelSection
