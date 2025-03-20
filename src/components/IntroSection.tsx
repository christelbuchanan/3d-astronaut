import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const IntroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
    
    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    )
    .fromTo(
      subtitleRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
      '-=0.5'
    )
    .fromTo(
      scrollIndicatorRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.8 },
      '-=0.3'
    )
  }, [])
  
  return (
    <section id="intro" className="section h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-4 text-center absolute bottom-32">
        <h1 
          ref={titleRef}
          className="text-3xl md:text-4xl font-bold mb-4 text-white"
        >
          <span className="text-blue-500">Build</span> Anything, <span className="text-purple-500">Own</span> Everything
        </h1>
        <p 
          ref={subtitleRef}
          className="text-base md:text-lg text-gray-300 max-w-xl mx-auto"
        >
          Embark on a cosmic journey where your imagination becomes reality.
          With ChatAndBuild, the universe of creation is at your fingertips.
        </p>
      </div>
      
      {/* Scroll indicator */}
      <div 
        ref={scrollIndicatorRef}
        className="scroll-indicator"
      >
        <div className="scroll-arrow"></div>
        <div className="scroll-arrow"></div>
        <p className="text-white text-sm mt-2">Scroll to fly</p>
      </div>
      
      {/* Decorative stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array(20).fill(0).map((_, i) => (
          <div 
            key={i}
            className="star"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  )
}

export default IntroSection
