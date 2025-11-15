


'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Portfolio() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const projects = [
    {
      image: '/media/15630.jpg',
      title: 'Digital Transformation Initiative',
      category: 'Strategy',
      description: 'Complete digital overhaul for enterprise client, resulting in 200% increase in online engagement',
      stats: { metric: '200%', label: 'Growth' }
    },
    {
      image: '/media/15630.jpg',
      title: 'Brand Redesign Campaign',
      category: 'Design',
      description: 'Comprehensive rebrand including logo, identity system, and brand guidelines for modern market positioning',
      stats: { metric: '5x', label: 'Brand Recognition' }
    },
    {
      image: '/media/15630.jpg',
      title: 'Marketing Strategy Launch',
      category: 'Marketing',
      description: 'Multi-channel marketing campaign driving customer acquisition and brand awareness',
      stats: { metric: '150%', label: 'ROI' }
    },
    {
      image: '/media/15630.jpg',
      title: 'Growth Hacking Campaign',
      category: 'Growth',
      description: 'Data-driven growth strategies delivering exponential user base expansion',
      stats: { metric: '10K+', label: 'New Users' }
    },
    {
      image: '/media/15630.jpg',
      title: 'E-Commerce Platform',
      category: 'Development',
      description: 'Full-stack e-commerce solution with integrated payment and inventory management',
      stats: { metric: '$2M+', label: 'Revenue' }
    },
    {
      image: '/media/15630.jpg',
      title: 'Social Media Revolution',
      category: 'Marketing',
      description: 'Viral social media campaign generating millions of impressions and engagement',
      stats: { metric: '5M+', label: 'Impressions' }
    },
  ]

  return (
    <section id="portfolio" className="py-20 bg-card relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of our most impactful projects and successful campaigns
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="scroll-scale-in group relative overflow-hidden rounded-2xl cursor-pointer h-96 shadow-lg hover:shadow-2xl transition-shadow duration-500"
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setSelectedProject(index)}
            >
              {/* Project Image */}
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className={`object-cover transition-all duration-700 ${
                    hoveredIndex === index 
                      ? 'scale-110 brightness-75' 
                      : 'scale-100 brightness-100'
                  }`}
                />
                
                {/* Gradient overlay - always present */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80"></div>
                
                {/* Animated overlay on hover */}
                <div className={`absolute inset-0 bg-primary/20 transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}></div>

                {/* Diagonal shine effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent transition-all duration-1000 ${
                  hoveredIndex === index ? 'translate-x-full translate-y-full' : '-translate-x-full -translate-y-full'
                }`}></div>
              </div>

              {/* Category Badge - Top Right */}
              <div className={`absolute top-4 right-4 z-20 transition-all duration-500 ${
                hoveredIndex === index ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
              }`}>
                <span className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
                  {project.category}
                </span>
              </div>

              {/* Stats Badge - Top Left */}
              <div className={`absolute top-4 left-4 z-20 transition-all duration-500 ${
                hoveredIndex === index ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
              }`} style={{ transitionDelay: '100ms' }}>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                  <div className="text-lg font-bold text-primary">{project.stats.metric}</div>
                  <div className="text-xs text-muted-foreground">{project.stats.label}</div>
                </div>
              </div>

              {/* Content - Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                {/* Title - Always visible */}
                <h3 className={`text-xl font-bold text-white mb-2 transition-all duration-500 ${
                  hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-80'
                }`}>
                  {project.title}
                </h3>
                
                {/* Description - Slides up on hover */}
                <p className={`text-white/90 text-sm mb-4 transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'translate-y-0 opacity-100 max-h-20' 
                    : 'translate-y-8 opacity-0 max-h-0'
                }`}>
                  {project.description}
                </p>

                {/* View Project Button */}
                <div className={`transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-8 opacity-0'
                }`} style={{ transitionDelay: '200ms' }}>
                  <button className="flex items-center gap-2 text-primary bg-white px-4 py-2 rounded-full font-semibold text-sm hover:bg-primary hover:text-white transition-colors duration-300 shadow-lg">
                    View Project
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Bottom accent bar */}
              <div className={`absolute bottom-0 left-0 h-1 bg-primary transition-all duration-700 ${
                hoveredIndex === index ? 'w-full' : 'w-0'
              }`}></div>

              {/* Corner decoration */}
              <div className={`absolute top-0 left-0 w-0 h-0 transition-all duration-500 ${
                hoveredIndex === index 
                  ? 'border-t-[40px] border-l-[40px]' 
                  : 'border-t-0 border-l-0'
              } border-t-primary border-l-transparent`}></div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 scroll-fade-in">
          <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105">
            View All Projects
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          33% {
            transform: translateY(-30px) translateX(30px) rotate(5deg);
          }
          66% {
            transform: translateY(30px) translateX(-30px) rotate(-5deg);
          }
        }

        .animate-float {
          animation: float 10s ease-in-out infinite;
        }

        @keyframes scroll-fade-in {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scroll-scale-in {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .scroll-fade-in {
          animation: scroll-fade-in 0.8s ease-out forwards;
        }

        .scroll-scale-in {
          animation: scroll-scale-in 0.7s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  )
}
