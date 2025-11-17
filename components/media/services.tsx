

// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'

// export default function Services() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

//   const services = [
//     {
//       title: 'Strategic Marketing',
//       description: 'Develop targeted marketing strategies that drive growth and enhance brand visibility.',
//       image: '/media/113378.jpg',
//     },
//     {
//       title: 'Creative Design',
//       description: 'Craft compelling visual identities and designs that captivate your audience.',
//       image: '/media/15630.jpg',
//     },
//     {
//       title: 'Brand Consultation',
//       description: 'Expert guidance to strengthen your brand positioning and market presence.',
//       image: '/media/2149337287.jpg',
//     },
//     {
//       title: 'Business Strategy',
//       description: 'Custom business solutions tailored to overcome your unique challenges.',
//       image: '/media/122887.jpg',
//     },
//     {
//       title: 'Digital Solutions',
//       description: 'Comprehensive digital services to accelerate your online presence.',
//      image: '/media/17564.jpg',
//     },
//     {
//       title: 'Growth Acceleration',
//       description: 'Proven methodologies to scale your business rapidly and sustainably.',
//       image: '/media/26195.jpg',
//     },
//   ]

//   return (
//     <section id="services" className="py-20 bg-background relative overflow-hidden">
//       {/* Animated background pattern */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="text-center mb-16 scroll-fade-in">
//           <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">Our Services</h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Comprehensive solutions designed to address your business challenges and drive success
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="scroll-scale-in group relative overflow-hidden rounded-lg border border-muted hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 h-80 cursor-pointer"
//               style={{ animationDelay: `${index * 0.1}s` }}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {/* Background Image */}
//               <div className="absolute inset-0 overflow-hidden">
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   fill
//                   className={`object-cover transition-all duration-700 ${
//                     hoveredIndex === index 
//                       ? 'scale-110 brightness-50' 
//                       : 'scale-100 brightness-100'
//                   }`}
//                 />
                
//                 {/* Dark overlay on hover */}
//                 <div className={`absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80 transition-opacity duration-500 ${
//                   hoveredIndex === index ? 'opacity-100' : 'opacity-0'
//                 }`}></div>
                
//                 {/* Animated shine effect */}
//                 <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-all duration-1000 ${
//                   hoveredIndex === index ? 'translate-x-full' : '-translate-x-full'
//                 }`}></div>
//               </div>

//               {/* Title - Always visible at bottom */}
//               <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10">
//                 <h3 className={`text-xl font-bold text-white transition-all duration-500 ${
//                   hoveredIndex === index ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
//                 }`}>
//                   {service.title}
//                 </h3>
//               </div>

//               {/* Content - Shows on hover */}
//               <div className={`absolute inset-0 p-8 flex flex-col justify-center items-center text-center transition-all duration-500 z-20 ${
//                 hoveredIndex === index 
//                   ? 'opacity-100 translate-y-0' 
//                   : 'opacity-0 translate-y-8 pointer-events-none'
//               }`}>
//                 <h3 className="text-2xl font-bold text-white mb-4">
//                   {service.title}
//                 </h3>
                
//                 <p className="text-white/90 mb-6 leading-relaxed">
//                   {service.description}
//                 </p>

//                 {/* CTA Button */}
//                 <button className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105 flex items-center gap-2">
//                   Learn More
//                   <svg 
//                     className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
//                     fill="none" 
//                     stroke="currentColor" 
//                     viewBox="0 0 24 24"
//                   >
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                   </svg>
//                 </button>
//               </div>

//               {/* Top accent line that expands on hover */}
//               <div className={`absolute top-0 left-0 h-1 bg-primary transition-all duration-500 ${
//                 hoveredIndex === index ? 'w-full' : 'w-0'
//               }`}></div>

//               {/* Bottom accent line that expands on hover */}
//               <div className={`absolute bottom-0 right-0 h-1 bg-primary transition-all duration-500 ${
//                 hoveredIndex === index ? 'w-full' : 'w-0'
//               }`}></div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0) translateX(0);
//           }
//           33% {
//             transform: translateY(-20px) translateX(20px);
//           }
//           66% {
//             transform: translateY(20px) translateX(-20px);
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

//         @keyframes scroll-scale-in {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         .scroll-fade-in {
//           animation: scroll-fade-in 0.8s ease-out forwards;
//         }

//         .scroll-scale-in {
//           animation: scroll-scale-in 0.6s ease-out forwards;
//           opacity: 0;
//         }
//       `}</style>
//     </section>
//   )
// }





'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/lib/lib'

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Show all 7 services or customize which ones to display
  // Option 1: Show all services
  const displayedServices = services
  
  // Option 2: Show only first 6 services (uncomment if needed)
  // const displayedServices = services.slice(0, 6)
  
  // Option 3: Select specific services by slug (uncomment if needed)
  // const displayedServices = services.filter(s => 
  //   ['brand-development', 'digital-marketing', 'marketing-strategy-campaigns', 
  //    'public-relations', 'creative-production', 'corporate-communication'].includes(s.slug)
  // )

  return (
    <section id="services" className="py-20 bg-background relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions designed to address your business challenges and drive success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.slice(0,6).map((service, index) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="scroll-scale-in group relative overflow-hidden rounded-lg border border-muted hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 h-80 cursor-pointer block"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    hoveredIndex === index 
                      ? 'scale-110 brightness-50' 
                      : 'scale-100 brightness-100'
                  }`}
                />
                
                {/* Dark overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80 transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
                
                {/* Animated shine effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent transition-all duration-1000 ${
                  hoveredIndex === index ? 'translate-x-full' : '-translate-x-full'
                }`}></div>
              </div>

              {/* Icon - Shows on initial state */}
              <div className={`absolute top-6 left-6 text-5xl transition-all duration-500 z-10 ${
                hoveredIndex === index ? 'opacity-0 scale-75 -translate-y-4' : 'opacity-100 scale-100 translate-y-0'
              }`}>
                <div className="bg-primary/10 backdrop-blur-sm rounded-full w-16 h-16 flex items-center justify-center">
                  {service.icon}
                </div>
              </div>

              {/* Category Badge - Shows on initial state */}
              <div className={`absolute top-6 right-6 transition-all duration-500 z-10 ${
                hoveredIndex === index ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
              }`}>
                <span className="px-3 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                  {service.category}
                </span>
              </div>

              {/* Title - Always visible at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10">
                <h3 className={`text-xl font-bold text-white transition-all duration-500 ${
                  hoveredIndex === index ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
                }`}>
                  {service.title}
                </h3>
              </div>

              {/* Content - Shows on hover */}
              <div className={`absolute inset-0 p-8 flex flex-col justify-center items-center text-center transition-all duration-500 z-20 ${
                hoveredIndex === index 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8 pointer-events-none'
              }`}>
                <div className="text-5xl mb-4 animate-bounce-slow">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-white/90 mb-6 leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>

                {/* CTA Button */}
                <span className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105 flex items-center gap-2">
                  Learn More
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>

              {/* Top accent line that expands on hover */}
              <div className={`absolute top-0 left-0 h-1 bg-primary transition-all duration-500 ${
                hoveredIndex === index ? 'w-full' : 'w-0'
              }`}></div>

              {/* Bottom accent line that expands on hover */}
              <div className={`absolute bottom-0 right-0 h-1 bg-primary transition-all duration-500 ${
                hoveredIndex === index ? 'w-full' : 'w-0'
              }`}></div>
            </Link>
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-12 scroll-fade-in" style={{ animationDelay: '0.8s' }}>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105"
          >
            View All Services
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          33% {
            transform: translateY(-20px) translateX(20px);
          }
          66% {
            transform: translateY(20px) translateX(-20px);
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

        @keyframes scroll-scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .scroll-fade-in {
          animation: scroll-fade-in 0.8s ease-out forwards;
        }

        .scroll-scale-in {
          animation: scroll-scale-in 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  )
}