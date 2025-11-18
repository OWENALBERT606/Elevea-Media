

// 'use client'

// import { useState, useEffect } from 'react'
// import Image from 'next/image'

// export default function Testimonials({testimonials}:{testimonials:any}) {
//   const [currentIndex, setCurrentIndex] = useState(0)
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true)



//   // Auto-play functionality
//   useEffect(() => {
//     if (!isAutoPlaying) return

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % testimonials.length)
//     }, 5000) // Change slide every 5 seconds

//     return () => clearInterval(interval)
//   }, [isAutoPlaying, testimonials.length])

//   const goToSlide = (index: number) => {
//     setCurrentIndex(index)
//     setIsAutoPlaying(false)
//     // Resume auto-play after 10 seconds of inactivity
//     setTimeout(() => setIsAutoPlaying(true), 10000)
//   }

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev + 1) % testimonials.length)
//     setIsAutoPlaying(false)
//     setTimeout(() => setIsAutoPlaying(true), 10000)
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
//     setIsAutoPlaying(false)
//     setTimeout(() => setIsAutoPlaying(true), 10000)
//   }

//   return (
//     <section id="testimonials" className="py-20 bg-card relative overflow-hidden">
//       {/* Animated background elements */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
//         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-16 scroll-fade-in">
//           <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">What Our Clients Say</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Testimonials from businesses we've helped succeed
//           </p>
//         </div>

//         <div className="relative max-w-5xl mx-auto">
//           {/* Main Slider Container */}
//           <div className="relative bg-background border border-muted rounded-2xl shadow-2xl overflow-hidden min-h-[400px]">
//             {/* Quote decoration */}
//             <div className="absolute top-8 left-8 text-primary/10 z-0">
//               <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
//               </svg>
//             </div>

//             {/* Testimonials */}
//             <div className="relative">
//               {testimonials.map((testimonial:any, index:any) => (
//                 <div
//                   key={index}
//                   className={`transition-all duration-700 ease-in-out ${
//                     index === currentIndex
//                       ? 'opacity-100 translate-x-0 relative'
//                       : index < currentIndex
//                       ? 'opacity-0 -translate-x-full absolute inset-0'
//                       : 'opacity-0 translate-x-full absolute inset-0'
//                   }`}
//                 >
//                   <div className="p-12 md:p-16">
//                     {/* Stars Rating */}
//                     <div className="flex gap-1 mb-6 justify-center md:justify-start">
//                       {[...Array(testimonial.rating)].map((_, i) => (
//                         <svg
//                           key={i}
//                           className="w-6 h-6 text-primary animate-scale-in"
//                           style={{ animationDelay: `${i * 0.1}s` }}
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//                         </svg>
//                       ))}
//                     </div>

//                     {/* Testimonial Text */}
//                     <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed font-light italic relative z-10">
//                       "{testimonial.text}"
//                     </blockquote>

//                     {/* Author Info */}
//                     <div className="flex items-center gap-4">
//                       <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary shadow-lg">
//                         <Image
//                           src={testimonial.imageUrl}
//                           alt={testimonial.author}
//                           fill
//                           className="object-cover"
//                         />
//                       </div>
//                       <div>
//                         <p className="font-bold text-foreground text-lg">{testimonial.author}</p>
//                         <p className="text-muted-foreground">{testimonial.title}</p>
//                         <p className="text-primary text-sm font-semibold">{testimonial.company}</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Navigation Arrows */}
//             <button
//               onClick={prevSlide}
//               className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-primary border border-muted hover:border-primary text-muted-foreground hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 z-20"
//               aria-label="Previous testimonial"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//               </svg>
//             </button>
//             <button
//               onClick={nextSlide}
//               className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-primary border border-muted hover:border-primary text-muted-foreground hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 z-20"
//               aria-label="Next testimonial"
//             >
//               <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//               </svg>
//             </button>
//           </div>

//           {/* Dots Navigation */}
//           <div className="flex justify-center gap-3 mt-8">
//             {testimonials.map((_:any, index:any) => (
//               <button
//                 key={index}
//                 onClick={() => goToSlide(index)}
//                 className={`transition-all duration-300 rounded-full ${
//                   index === currentIndex
//                     ? 'bg-primary w-12 h-3 shadow-lg shadow-primary/50'
//                     : 'bg-muted hover:bg-primary/50 w-3 h-3'
//                 }`}
//                 aria-label={`Go to testimonial ${index + 1}`}
//               />
//             ))}
//           </div>

//           {/* Auto-play indicator */}
//           <div className="flex justify-center mt-4">
//             <button
//               onClick={() => setIsAutoPlaying(!isAutoPlaying)}
//               className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
//             >
//               {isAutoPlaying ? (
//                 <>
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
//                   </svg>
//                   Pause
//                 </>
//               ) : (
//                 <>
//                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
//                   </svg>
//                   Play
//                 </>
//               )}
//             </button>
//           </div>
//         </div>

//         {/* Stats Section */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-muted">
//           {[
//             { number: '150+', label: 'Happy Clients', icon: '😊' },
//             { number: '98%', label: 'Satisfaction Rate', icon: '⭐' },
//             { number: '5.0', label: 'Average Rating', icon: '🏆' },
//             { number: '400+', label: 'Success Stories', icon: '📈' },
//           ].map((stat, index) => (
//             <div
//               key={index}
//               className="text-center scroll-fade-in group"
//               style={{ animationDelay: `${index * 0.1}s` }}
//             >
//               <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform">
//                 {stat.icon}
//               </div>
//               <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
//                 {stat.number}
//               </div>
//               <div className="text-muted-foreground">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0) translateX(0);
//           }
//           50% {
//             transform: translateY(-20px) translateX(20px);
//           }
//         }

//         .animate-float {
//           animation: float 8s ease-in-out infinite;
//         }

//         @keyframes scroll-fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes scale-in {
//           from {
//             opacity: 0;
//             transform: scale(0);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         .scroll-fade-in {
//           animation: scroll-fade-in 0.8s ease-out forwards;
//         }

//         .animate-scale-in {
//           animation: scale-in 0.3s ease-out forwards;
//           opacity: 0;
//         }
//       `}</style>
//     </section>
//   )
// }





'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Testimonials({ testimonials }: { testimonials: any[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying || testimonials.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  return (
    <section id="testimonials" className="py-20 bg-card relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonials from businesses we've helped succeed
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="relative bg-background border border-muted rounded-2xl shadow-2xl overflow-hidden min-h-[400px]">
            <div className="absolute top-8 left-8 text-primary/10 z-0">
              <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
              </svg>
            </div>

            {/* Slider */}
            <div className="relative">
              {testimonials.map((t, index) => (
                <div
                  key={t.id}
                  className={`transition-all duration-700 ease-in-out ${
                    index === currentIndex
                      ? 'opacity-100 translate-x-0 relative'
                      : index < currentIndex
                      ? 'opacity-0 -translate-x-full absolute inset-0'
                      : 'opacity-0 translate-x-full absolute inset-0'
                  }`}
                >
                  <div className="p-12 md:p-16">
                    {/* Rating stars */}
                    <div className="flex gap-1 mb-6 justify-center md:justify-start">
                      {[...Array(t.rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 text-primary animate-scale-in"
                          style={{ animationDelay: `${i * 0.1}s` }}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>

                    <blockquote className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed font-light italic relative z-10">
                      "{t.text}"
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-primary shadow-lg">
                        <Image
                          src={t.imageUrl || '/default-avatar.png'}
                          alt={t.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-foreground text-lg">{t.author}</p>
                        <p className="text-muted-foreground">{t.title}</p>
                        <p className="text-primary text-sm font-semibold">{t.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-primary border border-muted hover:border-primary text-muted-foreground hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 z-20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-primary border border-muted hover:border-primary text-muted-foreground hover:text-white transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 z-20"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'bg-primary w-12 h-3 shadow-lg shadow-primary/50'
                    : 'bg-muted hover:bg-primary/50 w-3 h-3'
                }`}
              />
            ))}
          </div>

          {/* Auto-play toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {isAutoPlaying ? (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" />
                  </svg>
                  Pause
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  Play
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(20px);
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        @keyframes scroll-fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .scroll-fade-in {
          animation: scroll-fade-in 0.8s ease-out forwards;
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
