// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'

// export default function Services() {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

//   const services = [
//     {
//       icon: '🎯',
//       title: 'Strategic Marketing',
//       description: 'Develop targeted marketing strategies that drive growth and enhance brand visibility.',
//       image: '/images/services/marketing.jpg',
//       gradient: 'from-orange-500/20 to-orange-600/10'
//     },
//     {
//       icon: '🎨',
//       title: 'Creative Design',
//       description: 'Craft compelling visual identities and designs that captivate your audience.',
//       image: '/images/services/design.jpg',
//       gradient: 'from-purple-500/20 to-pink-600/10'
//     },
//     {
//       icon: '📊',
//       title: 'Brand Consultation',
//       description: 'Expert guidance to strengthen your brand positioning and market presence.',
//       image: '/images/services/branding.jpg',
//       gradient: 'from-blue-500/20 to-cyan-600/10'
//     },
//     {
//       icon: '💼',
//       title: 'Business Strategy',
//       description: 'Custom business solutions tailored to overcome your unique challenges.',
//       image: '/images/services/business.jpg',
//       gradient: 'from-green-500/20 to-emerald-600/10'
//     },
//     {
//       icon: '📱',
//       title: 'Digital Solutions',
//       description: 'Comprehensive digital services to accelerate your online presence.',
//       image: '/images/services/digital.jpg',
//       gradient: 'from-indigo-500/20 to-blue-600/10'
//     },
//     {
//       icon: '🚀',
//       title: 'Growth Acceleration',
//       description: 'Proven methodologies to scale your business rapidly and sustainably.',
//       image: '/images/services/growth.jpg',
//       gradient: 'from-red-500/20 to-orange-600/10'
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
//               className="scroll-scale-in group relative overflow-hidden rounded-lg border border-muted hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
//               style={{ animationDelay: `${index * 0.1}s` }}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {/* Background Image with Animation */}
//               <div className="absolute inset-0 overflow-hidden">
//                 <div className="absolute inset-0 bg-card"></div>
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   fill
//                   className={`object-cover transition-all duration-700 ${
//                     hoveredIndex === index 
//                       ? 'scale-110 opacity-30' 
//                       : 'scale-100 opacity-10'
//                   }`}
//                 />
//                 {/* Gradient Overlay */}
//                 <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} transition-opacity duration-500 ${
//                   hoveredIndex === index ? 'opacity-100' : 'opacity-0'
//                 }`}></div>
                
//                 {/* Animated shine effect */}
//                 <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all duration-1000 ${
//                   hoveredIndex === index ? 'translate-x-full' : '-translate-x-full'
//                 }`}></div>
//               </div>

//               {/* Content */}
//               <div className="relative z-10 p-8 h-full flex flex-col">
//                 {/* Icon with floating animation */}
//                 <div className="mb-4 relative">
//                   <div className={`text-5xl inline-block transition-all duration-500 ${
//                     hoveredIndex === index 
//                       ? 'scale-125 rotate-12' 
//                       : 'scale-100 rotate-0'
//                   }`}>
//                     {service.icon}
//                   </div>
                  
//                   {/* Glowing circle behind icon */}
//                   <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-primary/20 rounded-full blur-xl transition-all duration-500 ${
//                     hoveredIndex === index ? 'scale-150 opacity-100' : 'scale-0 opacity-0'
//                   }`}></div>
//                 </div>

//                 <h3 className={`text-xl font-bold text-foreground mb-3 transition-colors duration-300 ${
//                   hoveredIndex === index ? 'text-primary' : ''
//                 }`}>
//                   {service.title}
//                 </h3>
                
//                 <p className="text-muted-foreground flex-grow">
//                   {service.description}
//                 </p>

//                 {/* Animated CTA that appears on hover */}
//                 <div className={`mt-6 transition-all duration-500 ${
//                   hoveredIndex === index 
//                     ? 'opacity-100 translate-y-0' 
//                     : 'opacity-0 translate-y-4'
//                 }`}>
//                   <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
//                     Learn More
//                     <svg 
//                       className="w-5 h-5 ml-1 transform group-hover:translate-x-2 transition-transform" 
//                       fill="none" 
//                       stroke="currentColor" 
//                       viewBox="0 0 24 24"
//                     >
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                     </svg>
//                   </div>
//                 </div>

//                 {/* Corner accent that grows on hover */}
//                 <div className="absolute top-0 right-0 w-0 h-0 border-t-[60px] border-r-[60px] border-t-transparent border-r-primary/0 group-hover:border-r-primary/20 transition-all duration-500"></div>
//               </div>

//               {/* Bottom accent line */}
//               <div className={`absolute bottom-0 left-0 h-1 bg-primary transition-all duration-500 ${
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

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services = [
    {
      title: 'Strategic Marketing',
      description: 'Develop targeted marketing strategies that drive growth and enhance brand visibility.',
      image: '/media/113378.jpg',
    },
    {
      title: 'Creative Design',
      description: 'Craft compelling visual identities and designs that captivate your audience.',
      image: '/media/15630.jpg',
    },
    {
      title: 'Brand Consultation',
      description: 'Expert guidance to strengthen your brand positioning and market presence.',
      image: '/media/2149337287.jpg',
    },
    {
      title: 'Business Strategy',
      description: 'Custom business solutions tailored to overcome your unique challenges.',
      image: '/media/122887.jpg',
    },
    {
      title: 'Digital Solutions',
      description: 'Comprehensive digital services to accelerate your online presence.',
     image: '/media/17564.jpg',
    },
    {
      title: 'Growth Acceleration',
      description: 'Proven methodologies to scale your business rapidly and sustainably.',
      image: '/media/26195.jpg',
    },
  ]

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
          {services.map((service, index) => (
            <div
              key={index}
              className="scroll-scale-in group relative overflow-hidden rounded-lg border border-muted hover:border-primary transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 h-80 cursor-pointer"
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
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-white/90 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA Button */}
                <button className="px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105 flex items-center gap-2">
                  Learn More
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Top accent line that expands on hover */}
              <div className={`absolute top-0 left-0 h-1 bg-primary transition-all duration-500 ${
                hoveredIndex === index ? 'w-full' : 'w-0'
              }`}></div>

              {/* Bottom accent line that expands on hover */}
              <div className={`absolute bottom-0 right-0 h-1 bg-primary transition-all duration-500 ${
                hoveredIndex === index ? 'w-full' : 'w-0'
              }`}></div>
            </div>
          ))}
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

        .scroll-fade-in {
          animation: scroll-fade-in 0.8s ease-out forwards;
        }

        .scroll-scale-in {
          animation: scroll-scale-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}