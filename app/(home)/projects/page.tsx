'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function OurWorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'branding', name: 'Brand Development' },
    { id: 'digital-marketing', name: 'Digital Marketing' },
    { id: 'strategy', name: 'Marketing Strategy' },
    { id: 'pr', name: 'Public Relations' },
    { id: 'creative', name: 'Creative Production' },
    { id: 'communication', name: 'Corporate Communication' },
    { id: 'consulting', name: 'Training & Consultancy' },
  ]

  const projects = [
    {
      id: 1,
      title: 'TechVision Rebranding',
      category: 'branding',
      description: 'Complete brand identity redesign for a leading technology company in East Africa',
      image: '/work/techvision.jpg',
      tags: ['Brand Identity', 'Logo Design', 'Brand Guidelines'],
      client: 'TechVision Ltd.',
      year: '2024',
      result: '150% increase in brand recognition'
    },
    {
      id: 2,
      title: 'RetailHub Digital Campaign',
      category: 'digital-marketing',
      description: 'Multi-channel digital marketing campaign driving online engagement and sales',
      image: '/work/retailhub.jpg',
      tags: ['Social Media', 'SEO', 'Content Marketing'],
      client: 'RetailHub Uganda',
      year: '2024',
      result: '300% increase in online engagement'
    },
    {
      id: 3,
      title: 'GrowthCo Market Launch',
      category: 'strategy',
      description: 'Comprehensive marketing strategy for new product launch in competitive market',
      image: '/work/growthco.jpg',
      tags: ['Market Research', 'Campaign Strategy', 'Launch Plan'],
      client: 'GrowthCo East Africa',
      year: '2024',
      result: '250% ROI in first quarter'
    },
    {
      id: 4,
      title: 'SecureBank Crisis Management',
      category: 'pr',
      description: 'Strategic public relations campaign managing reputation during critical period',
      image: '/work/securebank.jpg',
      tags: ['Crisis Communication', 'Media Relations', 'Reputation Management'],
      client: 'SecureBank',
      year: '2024',
      result: '95% positive media coverage'
    },
    {
      id: 5,
      title: 'Taste Restaurant Video Series',
      category: 'creative',
      description: 'Creative video production showcasing culinary excellence and brand story',
      image: '/work/taste.jpg',
      tags: ['Video Production', 'Photography', 'Content Creation'],
      client: 'Taste Restaurant Group',
      year: '2023',
      result: '2M+ views across platforms'
    },
    {
      id: 6,
      title: 'InnovateTech Internal Comms',
      category: 'communication',
      description: 'Corporate communication strategy improving internal engagement and alignment',
      image: '/work/innovatetech.jpg',
      tags: ['Internal Communications', 'Employee Engagement', 'Change Management'],
      client: 'InnovateTech Solutions',
      year: '2023',
      result: '85% employee satisfaction'
    },
    {
      id: 7,
      title: 'Grand Hotels Brand Training',
      category: 'consulting',
      description: 'Comprehensive brand training program for hospitality staff across multiple locations',
      image: '/work/grandhotels.jpg',
      tags: ['Brand Training', 'Customer Service', 'Staff Development'],
      client: 'Grand Hotels Uganda',
      year: '2023',
      result: '200+ staff trained successfully'
    },
    {
      id: 8,
      title: 'MediCare Health Awareness',
      category: 'digital-marketing',
      description: 'Digital health awareness campaign reaching thousands across social platforms',
      image: '/work/medicare.jpg',
      tags: ['Social Media', 'Health Communication', 'Community Engagement'],
      client: 'MediCare Foundation',
      year: '2023',
      result: '500K+ people reached'
    },
    {
      id: 9,
      title: 'Fashion Week PR Campaign',
      category: 'pr',
      description: 'Comprehensive public relations strategy for major fashion event',
      image: '/work/fashionweek.jpg',
      tags: ['Event PR', 'Media Relations', 'Influencer Outreach'],
      client: 'Kampala Fashion Week',
      year: '2023',
      result: '100+ media placements'
    },
    {
      id: 10,
      title: 'EcoGreen Sustainability Campaign',
      category: 'strategy',
      description: 'Strategic campaign positioning company as sustainability leader in East Africa',
      image: '/work/ecogreen.jpg',
      tags: ['Positioning Strategy', 'Campaign Planning', 'Stakeholder Engagement'],
      client: 'EcoGreen Industries',
      year: '2024',
      result: '180% brand value increase'
    },
    {
      id: 11,
      title: 'StartUp Uganda Brand Identity',
      category: 'branding',
      description: 'Complete brand development for emerging tech startup ecosystem',
      image: '/work/startup.jpg',
      tags: ['Brand Strategy', 'Visual Identity', 'Brand Positioning'],
      client: 'StartUp Uganda',
      year: '2024',
      result: '50+ startups onboarded'
    },
    {
      id: 12,
      title: 'FinanceHub Corporate Video',
      category: 'creative',
      description: 'High-quality corporate video production showcasing company values and services',
      image: '/work/financehub.jpg',
      tags: ['Corporate Video', 'Scriptwriting', 'Post-Production'],
      client: 'FinanceHub Uganda',
      year: '2023',
      result: '1M+ video views'
    },
  ]

  const stats = [
    { number: '200+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '98%', label: 'Success Rate' },
    { number: '25+', label: 'Awards Won' },
  ]

  const testimonials = [
    {
      id: 1,
      name: 'John Mukasa',
      position: 'CEO, TechVision Ltd.',
      content: 'Elevea Media transformed our brand identity completely. Their strategic approach and creative execution exceeded our expectations and positioned us as market leaders.',
      image: '/testimonials/john.jpg',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah Namukasa',
      position: 'Marketing Director, RetailHub Uganda',
      content: 'The digital marketing campaign delivered outstanding results. Our online engagement increased by 300% and sales followed. Truly exceptional work.',
      image: '/testimonials/sarah.jpg',
      rating: 5
    },
    {
      id: 3,
      name: 'David Okello',
      position: 'Communications Manager, SecureBank',
      content: 'Their crisis management and PR expertise were invaluable during a critical period. Professional, strategic, and results-driven. Highly recommend.',
      image: '/testimonials/david.jpg',
      rating: 5
    },
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-[#2B2B2B] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block px-4 py-2 bg-[#D99732]/20 border border-[#D99732] rounded-full mb-6 animate-fade-in">
            <span className="text-[#D99732] font-semibold text-sm">PORTFOLIO</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Our Work
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Explore our portfolio of successful projects and see how we've helped businesses achieve their goals
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-1  px-4 md:px-8 lg:px-12 bg-background -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-muted text-center hover:border-[#D99732] transition-all duration-300 hover:shadow-xl hover:shadow-[#D99732]/20 transform hover:scale-105"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#D99732] mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-semibold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#D99732] text-white shadow-lg shadow-[#D99732]/50'
                    : 'bg-card text-foreground border border-muted hover:border-[#D99732]'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12  px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-2xl overflow-hidden border border-muted hover:border-[#D99732] transition-all duration-300 hover:shadow-2xl hover:shadow-[#D99732]/20"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B] via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#D99732] text-white text-xs font-semibold rounded-full">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#D99732] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-background border border-muted text-xs font-medium rounded-full text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-muted">
                    <div>
                      <p className="text-xs text-muted-foreground">Client</p>
                      <p className="text-sm font-semibold text-foreground">{project.client}</p>
                    </div>
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex items-center gap-2 text-[#D99732] font-semibold hover:gap-3 transition-all"
                    >
                      View
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">No Projects Found</h3>
              <p className="text-muted-foreground">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-8  px-4 md:px-8 lg:px-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#D99732]/20 border border-[#D99732] rounded-full mb-6">
              <span className="text-[#D99732] font-semibold text-sm">FEATURED PROJECT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Case Study Spotlight
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Deep dive into one of our most successful projects
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center bg-background rounded-3xl p-8 md:p-12 border border-muted">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                TechVision Brand Transformation
              </h3>
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                We partnered with TechVision to completely reimagine their brand identity and market positioning. 
                From brand strategy to creative production and digital marketing, we delivered 
                a comprehensive solution that transformed their market presence and drove measurable results.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#D99732]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#D99732]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Brand Recognition</h4>
                    <p className="text-muted-foreground text-sm">150% increase in brand awareness within 6 months</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#D99732]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#D99732]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Media Coverage</h4>
                    <p className="text-muted-foreground text-sm">200+ positive media placements across major outlets</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-[#D99732]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#D99732]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Market Position</h4>
                    <p className="text-muted-foreground text-sm">Elevated from #5 to #1 market leader in their sector</p>
                  </div>
                </div>
              </div>

              <Link
                href="/work/case-study"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#D99732] text-white rounded-full font-semibold hover:bg-[#D99732]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#D99732]/50 transform hover:scale-105"
              >
                Read Full Case Study
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-muted shadow-2xl">
                <Image
                  src="/work/featured.jpg"
                  alt="Featured Case Study"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D99732] rounded-full blur-3xl opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#D99732] rounded-full blur-3xl opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block px-4 py-2 bg-[#D99732]/20 border border-[#D99732] rounded-full mb-6">
              <span className="text-[#D99732] font-semibold text-sm">TESTIMONIALS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-card p-8 rounded-2xl border border-muted hover:border-[#D99732] transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-[#D99732]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D99732]">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12  px-4 md:px-8 lg:px-12 bg-[#2B2B2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's work together to create something amazing that drives real results for your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#D99732] text-white rounded-full font-semibold hover:bg-[#D99732]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#D99732]/50 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Start Your Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              View Our Services
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