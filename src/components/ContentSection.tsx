import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const ContentSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const nebulaRef = useRef<HTMLDivElement>(null)
  const returnIndicatorRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const section = sectionRef.current
    const content = contentRef.current
    const cta = ctaRef.current
    const nebula = nebulaRef.current
    const returnIndicator = returnIndicatorRef.current
    
    if (!section || !content || !cta || !nebula || !returnIndicator) return
    
    // Create nebula stars
    if (nebula) {
      const starsContainer = document.createElement('div')
      starsContainer.className = 'nebula-stars'
      
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div')
        star.className = 'nebula-star'
        star.style.width = `${Math.random() * 3 + 1}px`
        star.style.height = star.style.width
        star.style.left = `${Math.random() * 100}%`
        star.style.top = `${Math.random() * 100}%`
        star.style.opacity = `${Math.random() * 0.8 + 0.2}`
        starsContainer.appendChild(star)
      }
      
      nebula.appendChild(starsContainer)
    }
    
    gsap.fromTo(
      content,
      { opacity: 0, y: 50 },
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
      cta,
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'center center',
          end: 'bottom center',
          scrub: true
        }
      }
    )
    
    // Activate nebula effect
    gsap.fromTo(
      nebula,
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'center center',
          scrub: true,
          onEnter: () => {
            nebula.classList.add('active')
          },
          onLeaveBack: () => {
            nebula.classList.remove('active')
          }
        }
      }
    )
    
    // Show return indicator
    gsap.fromTo(
      returnIndicator,
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
      className="section content-section h-screen flex flex-col items-center justify-center relative"
    >
      {/* Nebula effect */}
      <div 
        ref={nebulaRef}
        className="nebula"
      ></div>
      
      <div 
        ref={contentRef}
        className="container mx-auto px-4 text-center mb-12 z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          Your <span className="text-blue-500">Cosmic</span> Creation Journey Awaits
        </h2>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          In the vast digital universe, ChatAndBuild gives you the power to manifest your ideas.
          No coding required—just your imagination and our AI-powered platform.
        </p>
        
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <div className="stat-card bg-blue-900/30 backdrop-blur-md p-4 rounded-xl border border-blue-500/30 w-56">
            <div className="text-2xl font-bold text-white mb-1">1000+</div>
            <div className="text-sm text-blue-300">Projects Created Daily</div>
          </div>
          
          <div className="stat-card bg-purple-900/30 backdrop-blur-md p-4 rounded-xl border border-purple-500/30 w-56">
            <div className="text-2xl font-bold text-white mb-1">∞</div>
            <div className="text-sm text-purple-300">Possibilities</div>
          </div>
          
          <div className="stat-card bg-indigo-900/30 backdrop-blur-md p-4 rounded-xl border border-indigo-500/30 w-56">
            <div className="text-2xl font-bold text-white mb-1">100%</div>
            <div className="text-sm text-indigo-300">Ownership</div>
          </div>
        </div>
      </div>
      
      <div 
        ref={ctaRef}
        className="container mx-auto px-4 text-center z-10"
      >
        <div className="cta-card bg-gradient-to-r from-blue-900/50 to-purple-900/50 backdrop-blur-md p-6 rounded-xl border border-blue-500/30 max-w-xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-3">Ready to Begin Your Creation Journey?</h3>
          <p className="text-sm text-gray-300 mb-4">
            Join thousands of creators who are building the future with ChatAndBuild.
          </p>
          <button className="btn-primary text-sm">
            Launch Your Universe
          </button>
        </div>
      </div>
      
      {/* Return journey indicator */}
      <div 
        ref={returnIndicatorRef}
        className="scroll-indicator"
        style={{ transform: 'rotate(180deg)' }}
      >
        <div className="scroll-arrow"></div>
        <div className="scroll-arrow"></div>
        <p className="text-white text-sm mt-2" style={{ transform: 'rotate(180deg)' }}>
          Return to Earth
        </p>
      </div>
    </section>
  )
}

export default ContentSection
