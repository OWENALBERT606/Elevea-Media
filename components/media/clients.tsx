'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Clients({clients}:{clients:any}) {
  const [activeTestimonial, setActiveTestimonial] = useState(0)



  return (
    <section className="py-8 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">Trusted By Industry Leaders</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Partnering with forward-thinking companies to drive innovation and growth
          </p>
        </div>

        {/* Client Logos Carousel */}
        <div className="mb-20 overflow-hidden">
          <div className="relative">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
            
            {/* Scrolling logos */}
            <div className="flex animate-scroll">
              {clients?.map((client:any, index:any) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 w-40 h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                >
                  <Image
                    src={client.imageUrl}
                    alt={client.name}
                    width={160}
                    height={80}
                    className="object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: '150+', label: 'Happy Clients' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '12+', label: 'Years Experience' },
            { number: '400+', label: 'Projects Delivered' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center scroll-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }

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
      `}</style>
    </section>
  )
}