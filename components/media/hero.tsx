// 'use client'

// import { useEffect, useState } from 'react'

// export default function Hero() {
//   const [textIndex, setTextIndex] = useState(0)
//   const words = ['Innovative', 'Creative', 'Strategic', 'Transformative']

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setTextIndex((prev) => (prev + 1) % words.length)
//     }, 3000)
//     return () => clearInterval(interval)
//   }, [])

//   return (
//     <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden pt-20">
//       {/* Animated background elements */}
//       <div className="absolute inset-0">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
//         <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className="animate-fadeInUp">
//           <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-foreground">
//             The{' '}
//             <span className="text-primary inline-block min-w-max">
//               {words[textIndex]}
//             </span>
//             {' '}Solutions
//           </h1>
//           <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
//             Empowering businesses with expert guidance, creative solutions, and strategic consulting to overcome challenges and achieve sustainable growth.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
//             <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105">
//               Start Your Journey
//             </button>
//             <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-all duration-300">
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* Stats section */}
//         <div className="grid grid-cols-3 gap-6 mt-20 pt-12 border-t border-muted">
//           <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
//             <div className="text-4xl font-bold text-primary">400+</div>
//             <p className="text-muted-foreground mt-2">Projects Completed</p>
//           </div>
//           <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
//             <div className="text-4xl font-bold text-primary">150+</div>
//             <p className="text-muted-foreground mt-2">Happy Clients</p>
//           </div>
//           <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
//             <div className="text-4xl font-bold text-primary">12+</div>
//             <p className="text-muted-foreground mt-2">Years Experience</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0)
  const [currentSlide, setCurrentSlide] = useState(0)
  const words = ['Innovative', 'Creative', 'Strategic', 'Transformative']
  
  // Add your carousel images here
  const carouselImages = [
    {
      src: '/media/business-person-using-laptop-multitasking-finish-daily-startup-tasks.jpg',
      alt: 'Business consulting'
    },
    {
      src: '/media/2150063140.jpg',
      alt: 'Strategic planning'
    },
    {
      src: '/media/121758.jpg',
      alt: 'Team collaboration'
    },
    {
      src: '/media/marketing-ideas-share-research-planning-concept.jpg',
      alt: 'Innovation'
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
    }, 5000)
    return () => clearInterval(slideInterval)
  }, [])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="animate-fadeInUp text-center lg:text-left">
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-foreground">
              The{' '}
              <span className="text-primary inline-block min-w-max">
                {words[textIndex]}
              </span>
              <br />Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              Empowering businesses with expert guidance, creative solutions, and strategic consulting to overcome challenges and achieve sustainable growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-12">
              <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105">
                Start Your Journey
              </button>
              <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-all duration-300">
                Learn More
              </button>
            </div>

            {/* Stats section */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-muted">
              <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                <div className="text-3xl lg:text-4xl font-bold text-primary">400+</div>
                <p className="text-muted-foreground mt-2 text-sm">Projects Completed</p>
              </div>
              <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl lg:text-4xl font-bold text-primary">150+</div>
                <p className="text-muted-foreground mt-2 text-sm">Happy Clients</p>
              </div>
              <div className="animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl lg:text-4xl font-bold text-primary">12+</div>
                <p className="text-muted-foreground mt-2 text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right side - Carousel */}
          <div className="relative animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Carousel images */}
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentSlide
                      ? 'opacity-100 translate-x-0'
                      : index < currentSlide
                      ? 'opacity-0 -translate-x-full'
                      : 'opacity-0 translate-x-full'
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
              ))}

              {/* Navigation arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots indicator */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide
                        ? 'bg-white w-8'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}