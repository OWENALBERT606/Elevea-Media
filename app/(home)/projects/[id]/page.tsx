'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'

export default function ProjectDetailPage() {
  // In a real app, you'd fetch project data based on the ID from useParams()
  // For now, we'll use static data for the featured project
  
  const project = {
    id: 1,
    title: 'TechVision Brand Transformation',
    category: 'Brand Development',
    client: 'TechVision Ltd.',
    industry: 'Technology & Innovation',
    year: '2024',
    duration: '6 months',
    location: 'Kampala, Uganda',
    services: ['Brand Strategy', 'Visual Identity', 'Brand Guidelines', 'Digital Marketing', 'Public Relations'],
    heroImage: '/work/techvision-hero.jpg',
    
    challenge: 'TechVision, a growing technology company in East Africa, was struggling with brand recognition and market positioning. Despite offering innovative solutions, they were perceived as just another tech company in a crowded market. Their existing brand identity was outdated, inconsistent across channels, and failed to communicate their unique value proposition.',
    
    solution: 'We developed a comprehensive brand transformation strategy that repositioned TechVision as a forward-thinking industry leader. Our approach included extensive market research, competitor analysis, stakeholder interviews, and the creation of a distinctive brand identity that reflected their innovation and expertise.',
    
    process: [
      {
        step: '01',
        title: 'Discovery & Research',
        description: 'We conducted in-depth market research, stakeholder interviews, and competitive analysis to understand the landscape and identify opportunities.',
        image: '/work/process-1.jpg'
      },
      {
        step: '02',
        title: 'Brand Strategy',
        description: 'Developed a comprehensive brand strategy including positioning, messaging architecture, and brand personality framework.',
        image: '/work/process-2.jpg'
      },
      {
        step: '03',
        title: 'Visual Identity',
        description: 'Created a modern, distinctive visual identity system including logo, color palette, typography, and brand guidelines.',
        image: '/work/process-3.jpg'
      },
      {
        step: '04',
        title: 'Implementation',
        description: 'Executed a phased rollout across all touchpoints including digital platforms, marketing materials, and internal communications.',
        image: '/work/process-4.jpg'
      },
      {
        step: '05',
        title: 'Launch Campaign',
        description: 'Launched an integrated marketing campaign combining digital marketing, PR, and creative production to introduce the new brand.',
        image: '/work/process-5.jpg'
      },
      {
        step: '06',
        title: 'Monitoring & Optimization',
        description: 'Tracked brand performance metrics and refined strategy based on market feedback and engagement data.',
        image: '/work/process-6.jpg'
      }
    ],
    
    results: [
      {
        metric: '150%',
        label: 'Increase in Brand Recognition',
        description: 'Brand awareness doubled among target audience within 6 months'
      },
      {
        metric: '200+',
        label: 'Media Placements',
        description: 'Positive coverage across major news outlets and industry publications'
      },
      {
        metric: '#1',
        label: 'Market Leader Position',
        description: 'Elevated from #5 to #1 in their sector based on industry rankings'
      },
      {
        metric: '85%',
        label: 'Stakeholder Satisfaction',
        description: 'Internal stakeholders highly satisfied with new brand identity'
      },
      {
        metric: '300%',
        label: 'Social Media Growth',
        description: 'Significant increase in followers and engagement across platforms'
      },
      {
        metric: '45%',
        label: 'Lead Generation Increase',
        description: 'More qualified leads generated through improved brand positioning'
      }
    ],
    
    testimonial: {
      quote: 'Working with Elevea Media was transformative for our business. They didn\'t just redesign our logo - they helped us rediscover who we are and articulate our value in a way that resonates with our market. The results speak for themselves: we\'re now recognized as the leading technology company in our sector.',
      author: 'John Mukasa',
      position: 'CEO, TechVision Ltd.',
      image: '/testimonials/john-mukasa.jpg'
    },
    
    gallery: [
      { image: '/work/gallery-1.jpg', caption: 'Brand Identity System' },
      { image: '/work/gallery-2.jpg', caption: 'Marketing Collateral' },
      { image: '/work/gallery-3.jpg', caption: 'Digital Applications' },
      { image: '/work/gallery-4.jpg', caption: 'Brand Guidelines' },
      { image: '/work/gallery-5.jpg', caption: 'Social Media Assets' },
      { image: '/work/gallery-6.jpg', caption: 'Corporate Materials' },
    ]
  }

  const relatedProjects = [
    {
      id: 2,
      title: 'RetailHub Digital Campaign',
      category: 'Digital Marketing',
      image: '/work/retailhub.jpg'
    },
    {
      id: 3,
      title: 'GrowthCo Market Launch',
      category: 'Marketing Strategy',
      image: '/work/growthco.jpg'
    },
    {
      id: 4,
      title: 'SecureBank Crisis Management',
      category: 'Public Relations',
      image: '/work/securebank.jpg'
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-[#2B2B2B] text-white py-12 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link 
            href="/work"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>

          <div className="inline-block px-4 py-2 bg-[#D99732]/20 border border-[#D99732] rounded-full mb-6">
            <span className="text-[#D99732] font-semibold text-sm">{project.category.toUpperCase()}</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {project.title}
          </h1>
          
          <div className="grid md:grid-cols-4 gap-6 mb-8 max-w-4xl">
            <div>
              <p className="text-white/60 text-sm mb-1">Client</p>
              <p className="font-semibold">{project.client}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm mb-1">Industry</p>
              <p className="font-semibold">{project.industry}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm mb-1">Year</p>
              <p className="font-semibold">{project.year}</p>
            </div>
            <div>
              <p className="text-white/60 text-sm mb-1">Duration</p>
              <p className="font-semibold">{project.duration}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.services.map((service, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm font-medium backdrop-blur-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video rounded-3xl overflow-hidden border border-muted shadow-2xl">
            <Image
              src={project.heroImage}
              alt={project.title}
              width={1400}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-block px-4 py-2 bg-[#D99732]/20 border border-[#D99732] rounded-full mb-6">
                <span className="text-[#D99732] font-semibold text-sm">THE CHALLENGE</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Understanding the Problem
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div>
              <div className="inline-block px-4 py-2 bg-[#D99732]/20 border border-[#D99732] rounded-full mb-6">
                <span className="text-[#D99732] font-semibold text-sm">OUR SOLUTION</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Strategic Approach
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#D99732]/20 border border-[#D99732] rounded-full mb-6">
              <span className="text-[#D99732] font-semibold text-sm">OUR PROCESS</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              How We Did It
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to delivering exceptional results
            </p>
          </div>

          <div className="space-y-12">
            {project.process.map((step, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-5xl font-bold text-[#D99732]/20">
                      {step.step}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-muted shadow-xl">
                    <Image
                      src={step.image}
                      alt={step.title}
                      width={600}
                      height={450}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#D99732]/20 border border-[#D99732] rounded-full mb-6">
              <span className="text-[#D99732] font-semibold text-sm">MEASURABLE IMPACT</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              The Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Data-driven outcomes that transformed the business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="bg-card p-8 rounded-2xl border border-muted hover:border-[#D99732] transition-all duration-300 hover:shadow-xl text-center group"
              >
                <div className="text-5xl md:text-6xl font-bold text-[#D99732] mb-3 group-hover:scale-110 transition-transform">
                  {result.metric}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {result.label}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {result.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#D99732]/20 border border-[#D99732] rounded-full mb-6">
              <span className="text-[#D99732] font-semibold text-sm">PROJECT GALLERY</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Visual Showcase
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden border border-muted hover:border-[#D99732] transition-all duration-300 hover:shadow-xl"
              >
                <Image
                  src={item.image}
                  alt={item.caption}
                  width={600}
                  height={450}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white font-semibold">{item.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-[#2B2B2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <svg className="w-16 h-16 text-[#D99732] mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          
          <blockquote className="text-2xl md:text-3xl font-medium text-center mb-12 leading-relaxed">
            "{project.testimonial.quote}"
          </blockquote>

          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#D99732]">
              <Image
                src={project.testimonial.image}
                alt={project.testimonial.author}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <h4 className="font-bold text-lg">{project.testimonial.author}</h4>
              <p className="text-white/80">{project.testimonial.position}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Related Projects
            </h2>
            <p className="text-xl text-muted-foreground">
              Explore more of our work
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedProjects.map((relatedProject) => (
              <Link
                key={relatedProject.id}
                href={`/work/${relatedProject.id}`}
                className="group bg-card rounded-2xl overflow-hidden border border-muted hover:border-[#D99732] transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={relatedProject.image}
                    alt={relatedProject.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[#D99732] font-semibold text-sm mb-2">
                    {relatedProject.category}
                  </p>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-[#D99732] transition-colors">
                    {relatedProject.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready for Similar Results?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how we can help transform your brand
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
              href="/work"
              className="px-8 py-4 border-2 border-muted text-foreground rounded-full font-semibold hover:border-[#D99732] hover:text-[#D99732] transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              View More Projects
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
      `}</style>
    </div>
  )
}