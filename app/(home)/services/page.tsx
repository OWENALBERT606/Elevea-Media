



'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { categories, services } from '@/lib/lib'

export default function ServicesPage() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState('all')

  const process = [
    {
      step: '01',
      title: 'Discovery & Consultation',
      description: 'We start by understanding your business, goals, and challenges through in-depth consultation sessions.',
      icon: '🔍'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Our team creates a customized strategy tailored to your specific needs and objectives.',
      icon: '📋'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'We execute the strategy with precision, keeping you informed at every stage of the process.',
      icon: '⚡'
    },
    {
      step: '04',
      title: 'Optimization & Growth',
      description: 'Continuous monitoring, testing, and optimization to ensure maximum results and ROI.',
      icon: '📈'
    },
  ]

  const testimonials = [
    {
      quote: "Elevea transformed our marketing approach completely. Their strategic insights led to a 300% increase in qualified leads.",
      author: "Sarah Mitchell",
      position: "CEO, TechStart Inc.",
      image: "/media/121758.jpg"
    },
    {
      quote: "The creative team at Elevea brought our brand vision to life in ways we never imagined. Absolutely stellar work!",
      author: "Michael Rodriguez",
      position: "Founder, Creative Studios",
      image: "/media/121758.jpg"
    },
    {
      quote: "Working with Elevea was a game-changer. Their growth strategies helped us scale from 10K to 100K users in just 6 months.",
      author: "Emily Chen",
      position: "CMO, GrowthLabs",
      image: "/media/121758.jpg"
    },
  ]

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-[#2B2B2B] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-[#D99732]/20 border border-[#D99732] rounded-full mb-6 animate-fade-in">
              <span className="text-[#D99732] font-semibold text-sm">COMPREHENSIVE SOLUTIONS</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Our Services
            </h1>
            <p className="text-xl text-white/80 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Expert solutions designed to help your business grow, innovate, and succeed in today's competitive landscape
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Link
                href="#services"
                className="px-8 py-4 bg-[#D99732] text-white rounded-full font-semibold hover:bg-[#D99732]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#D99732]/50 transform hover:scale-105 inline-flex items-center justify-center gap-2"
              >
                Explore Services
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <Link
                href="/contacts"
                className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Get in Touch
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 md:px-8 lg:px-12 bg-card border-b border-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '400+', label: 'Projects Completed' },
              { number: '150+', label: 'Happy Clients' },
              { number: '98%', label: 'Satisfaction Rate' },
              { number: '12+', label: 'Years Experience' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#D99732] mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">What We Offer</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category:any) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === category.id
                    ? 'bg-[#D99732] text-white shadow-lg shadow-[#D99732]/50 scale-105'
                    : 'bg-card text-muted-foreground border border-muted hover:border-[#D99732] hover:text-[#D99732] hover:scale-105'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service:any, index:any) => (
              <div
                key={service.id}
                className="group relative overflow-hidden rounded-2xl bg-card border border-muted hover:border-[#D99732] transition-all duration-500 hover:shadow-2xl hover:shadow-[#D99732]/20 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Background */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      hoveredIndex === index ? 'scale-110 brightness-50' : 'scale-100 brightness-75'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80"></div>
                  
                  {/* Icon */}
                  <div className="absolute top-6 left-6">
                    <div className={`text-6xl transform transition-all duration-500 ${
                      hoveredIndex === index ? 'scale-125 rotate-12' : 'scale-100'
                    }`}>
                      {service.icon}
                    </div>
                  </div>

                  {/* Price Tag */}
                  {/* <div className="absolute top-6 right-6">
                    <span className="px-4 py-2 bg-[#D99732] text-white text-sm font-bold rounded-full shadow-lg">
                      {service.price}
                    </span>
                  </div> */}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-[#D99732] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feature:any, idx:any) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <svg className="w-5 h-5 text-[#D99732] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Link 
                    href={`/services/${service.slug}`}
                    className="w-full px-6 py-3 bg-[#D99732] text-white rounded-full font-semibold hover:bg-[#D99732]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#D99732]/50 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                  >
                    Learn More
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>

                {/* Bottom accent line */}
                <div className={`h-1 bg-[#D99732] transition-all duration-500 ${
                  hoveredIndex === index ? 'w-full' : 'w-0'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 px-4 md:px-8 lg:px-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#D99732] to-transparent -z-10"></div>
                )}

                <div className="text-center">
                  {/* Icon Circle */}
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D99732]/20 to-[#D99732]/5 flex items-center justify-center border-2 border-[#D99732]/30 relative group hover:scale-110 transition-transform duration-300">
                    <div className="text-5xl">{item.icon}</div>
                    <div className="absolute -top-3 -right-3 w-12 h-12 rounded-full bg-[#D99732] text-white font-bold flex items-center justify-center text-lg shadow-lg">
                      {item.step}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Client Success Stories</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from businesses we've helped transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-muted hover:border-[#D99732] transition-all duration-300 hover:shadow-xl"
              >
                <div className="text-[#D99732] mb-4">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>
                <p className="text-foreground mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D99732]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-4 md:px-8 lg:px-12 bg-[#2B2B2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let's discuss how our services can help you achieve your goals and drive sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacts"
              className="px-8 py-4 bg-[#D99732] text-white rounded-full font-semibold hover:bg-[#D99732]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#D99732]/50 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Start Your Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

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

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  )
}