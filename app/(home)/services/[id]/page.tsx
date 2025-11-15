'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceDetailProps {
  service?: {
    id: string
    title: string
    description: string
    icon: string
    category: string
    image: string
    tagline: string
    overview: string
    benefits: string[]
    features: {
      title: string
      description: string
      icon: string
    }[]
    process: {
      step: string
      title: string
      description: string
    }[]
    pricing: {
      name: string
      price: string
      description: string
      features: string[]
      popular?: boolean
    }[]
    faqs: {
      question: string
      answer: string
    }[]
    caseStudies: {
      title: string
      client: string
      result: string
      image: string
    }[]
  }
}

export default function ServiceDetailPage({ service: propService }: ServiceDetailProps) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0)
  const [selectedPlan, setSelectedPlan] = useState(1)

  // Dummy data for Strategic Marketing service
  const dummyService = {
    id: 'strategic-marketing',
    title: 'Strategic Marketing',
    description: 'Data-driven marketing strategies that deliver measurable results and drive sustainable business growth.',
    icon: '🎯',
    category: 'Marketing',
    image: '/media/121758.jpg',
    tagline: 'Transform Your Marketing, Transform Your Business',
    overview: 'Our strategic marketing services combine data analytics, creative thinking, and industry expertise to create comprehensive marketing strategies that drive real business results. We don\'t just create campaigns—we build sustainable growth engines tailored to your unique business goals and target audience.',
    benefits: [
      'Increase brand awareness and market visibility by up to 300%',
      'Generate 2-5x more qualified leads through targeted campaigns',
      'Improve customer acquisition costs by 40-60%',
      'Build lasting customer relationships and brand loyalty',
      'Gain competitive advantage through market intelligence',
      'Achieve measurable ROI on every marketing dollar spent',
    ],
    features: [
      {
        title: 'Market Research & Analysis',
        description: 'Deep dive into your market, competitors, and target audience to uncover opportunities and inform strategy.',
        icon: '🔍'
      },
      {
        title: 'Competitor Intelligence',
        description: 'Comprehensive analysis of competitor strategies, strengths, and weaknesses to position you ahead.',
        icon: '🎭'
      },
      {
        title: 'Customer Journey Mapping',
        description: 'Detailed mapping of customer touchpoints to optimize every interaction and maximize conversions.',
        icon: '🗺️'
      },
      {
        title: 'Multi-Channel Strategy',
        description: 'Integrated campaigns across digital, social, email, and traditional channels for maximum impact.',
        icon: '📱'
      },
      {
        title: 'Performance Analytics',
        description: 'Real-time tracking and reporting of key metrics to ensure campaign success and ROI.',
        icon: '📊'
      },
      {
        title: 'Continuous Optimization',
        description: 'Ongoing testing, learning, and refinement to improve results and stay ahead of trends.',
        icon: '⚡'
      },
    ],
    process: [
      {
        step: '01',
        title: 'Discovery & Research',
        description: 'We start by understanding your business, goals, target audience, and competitive landscape through comprehensive research and stakeholder interviews.'
      },
      {
        step: '02',
        title: 'Strategy Development',
        description: 'Our team creates a customized marketing strategy with clear objectives, KPIs, and tactical plans aligned with your business goals.'
      },
      {
        step: '03',
        title: 'Campaign Execution',
        description: 'We implement your marketing campaigns with precision, managing all aspects from creative development to channel deployment.'
      },
      {
        step: '04',
        title: 'Monitoring & Optimization',
        description: 'Continuous tracking, analysis, and optimization of campaign performance to maximize results and ROI.'
      },
    ],
    pricing: [
      {
        name: 'Starter',
        price: '$2,500',
        description: 'Perfect for small businesses getting started with strategic marketing',
        features: [
          'Market research & competitor analysis',
          'Basic marketing strategy',
          'Monthly performance reports',
          'Email support',
          'Up to 2 marketing channels',
          '1 quarterly strategy review'
        ]
      },
      {
        name: 'Professional',
        price: '$5,000',
        description: 'Ideal for growing businesses ready to scale their marketing',
        features: [
          'Comprehensive market analysis',
          'Advanced multi-channel strategy',
          'Bi-weekly performance reports',
          'Priority support',
          'Up to 5 marketing channels',
          'Monthly strategy reviews',
          'A/B testing & optimization',
          'Dedicated account manager'
        ],
        popular: true
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        description: 'Tailored solutions for large organizations with complex needs',
        features: [
          'Full-service marketing strategy',
          'Real-time analytics dashboard',
          'Weekly performance calls',
          '24/7 priority support',
          'Unlimited marketing channels',
          'Weekly strategy sessions',
          'Advanced testing & AI insights',
          'Dedicated marketing team',
          'Custom integrations',
          'White-label reporting'
        ]
      },
    ],
    faqs: [
      {
        question: 'How long does it take to see results?',
        answer: 'While some metrics like website traffic may improve within the first month, meaningful business results typically emerge within 3-6 months. Strategic marketing is a long-term investment that builds momentum over time. We provide regular reports so you can track progress at every stage.'
      },
      {
        question: 'What makes your approach different?',
        answer: 'We combine data-driven insights with creative excellence. Every strategy is custom-built for your specific business, market, and goals—no cookie-cutter solutions. We also focus on sustainable growth rather than quick wins, ensuring long-term success.'
      },
      {
        question: 'Do you work with businesses in my industry?',
        answer: 'We have experience across diverse industries including technology, healthcare, finance, retail, and B2B services. Our methodology is adaptable to any sector, and we invest time understanding your specific industry dynamics and challenges.'
      },
      {
        question: 'What level of involvement is required from our team?',
        answer: 'We work collaboratively with your team. Initially, we need 5-10 hours of your time for discovery and alignment. Ongoing, we typically need 2-4 hours monthly for strategy reviews and approvals. We handle the heavy lifting while keeping you informed and engaged.'
      },
      {
        question: 'Can we change or cancel our plan?',
        answer: 'Yes! We offer flexible contracts. You can upgrade, downgrade, or pause services with 30 days notice. We want you to stay because you love the results, not because you\'re locked in.'
      },
      {
        question: 'How do you measure success?',
        answer: 'We establish clear KPIs during the strategy phase based on your goals—whether that\'s lead generation, revenue growth, brand awareness, or customer acquisition. We track these metrics rigorously and provide transparent reporting on progress and ROI.'
      },
    ],
    caseStudies: [
      {
        title: 'TechStart Inc. - 300% Lead Increase',
        client: 'TechStart Inc.',
        result: 'Achieved 300% increase in qualified leads and 150% revenue growth in 12 months',
        image: '/media/121758.jpg'
      },
      {
        title: 'RetailCo - Market Expansion Success',
        client: 'RetailCo',
        result: 'Successfully entered 3 new markets with 250% ROI on marketing spend',
        image: '/media/121758.jpg'
      },
      {
        title: 'HealthPlus - Brand Awareness',
        client: 'HealthPlus',
        result: 'Increased brand awareness by 400% and reduced customer acquisition cost by 45%',
        image: '/media/121758.jpg'
      },
    ]
  }

  const service = propService || dummyService

  const relatedServices = [
    {
      title: 'Creative Design',
      description: 'Stunning visuals that captivate',
      icon: '🎨',
      href: '/services/creative-design'
    },
    {
      title: 'Digital Solutions',
      description: 'Comprehensive digital services',
      icon: '📱',
      href: '/services/digital-solutions'
    },
    {
      title: 'Growth Acceleration',
      description: 'Scale your business rapidly',
      icon: '🚀',
      href: '/services/growth-acceleration'
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-[#2B2B2B] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/60 mb-6">
            <Link href="/" className="hover:text-[#D99732] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-[#D99732] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#D99732]/20 border border-[#D99732] rounded-full mb-6">
                <span className="text-4xl">{service.icon}</span>
                <span className="text-[#D99732] font-semibold">{service.category}</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-2xl text-white/90 mb-6 font-light">
                {service.tagline}
              </p>
              <p className="text-lg text-white/70 mb-8">
                {service.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#pricing"
                  className="px-8 py-4 bg-[#D99732] text-white rounded-full font-semibold hover:bg-[#D99732]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#D99732]/50 transform hover:scale-105 inline-flex items-center justify-center gap-2"
                >
                  Get Started
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/contacts"
                  className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Talk to Expert
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Why Choose Our {service.title}?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {service.overview}
              </p>

              {/* Benefits List */}
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#D99732]/20 flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-[#D99732]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-foreground">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { number: '300%', label: 'Average Growth' },
                { number: '150+', label: 'Successful Campaigns' },
                { number: '98%', label: 'Client Satisfaction' },
                { number: '5x', label: 'Average ROI' },
              ].map((stat, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 border border-muted hover:border-[#D99732] transition-all duration-300 hover:shadow-lg text-center">
                  <div className="text-4xl font-bold text-[#D99732] mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              What's Included
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive features designed to drive results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div
                key={index}
                className="bg-background rounded-2xl p-8 border border-muted hover:border-[#D99732] transition-all duration-300 hover:shadow-xl group"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#D99732] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that delivers results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((item, index) => (
              <div key={index} className="relative">
                {/* Connector */}
                {index < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-[#D99732] to-transparent -z-10"></div>
                )}

                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#D99732]/20 to-[#D99732]/5 flex items-center justify-center border-2 border-[#D99732]/30 relative">
                    <span className="text-3xl font-bold text-[#D99732]">{item.step}</span>
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

      {/* Case Studies */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real results from real businesses
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.caseStudies.map((study, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-background border border-muted hover:border-[#D99732] transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#D99732] transition-colors">
                    {study.client}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {study.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Choose Your Plan
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing to match your needs and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {service.pricing.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 border-2 transition-all duration-300 ${
                  plan.popular
                    ? 'border-[#D99732] shadow-2xl shadow-[#D99732]/20 scale-105'
                    : 'border-muted hover:border-[#D99732] hover:shadow-xl'
                } bg-card`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-2 bg-[#D99732] text-white text-sm font-bold rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-[#D99732] mb-2">
                    {plan.price}
                    {plan.price !== 'Custom' && <span className="text-lg text-muted-foreground">/month</span>}
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-[#D99732] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#D99732] text-white hover:bg-[#D99732]/90 hover:shadow-lg hover:shadow-[#D99732]/50'
                    : 'border-2 border-[#D99732] text-[#D99732] hover:bg-[#D99732]/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know
            </p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-background rounded-xl border border-muted hover:border-[#D99732] transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-foreground pr-8">
                    {faq.question}
                  </span>
                  <svg
                    className={`w-6 h-6 text-[#D99732] flex-shrink-0 transition-transform duration-300 ${
                      activeFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="h-px bg-gradient-to-r from-[#D99732]/50 to-transparent mb-4"></div>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Related Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore our other solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedServices.map((relatedService, index) => (
              <Link
                key={index}
                href={relatedService.href}
                className="group bg-card rounded-2xl p-8 border border-muted hover:border-[#D99732] transition-all duration-300 hover:shadow-xl text-center"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {relatedService.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-[#D99732] transition-colors">
                  {relatedService.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {relatedService.description}
                </p>
                <span className="text-[#D99732] font-semibold inline-flex items-center gap-2">
                  Learn More
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#2B2B2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let's discuss how {service.title} can transform your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacts"
              className="px-8 py-4 bg-[#D99732] text-white rounded-full font-semibold hover:bg-[#D99732]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#D99732]/50 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Schedule a Consultation
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              View Case Studies
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