'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What services does Elevea offer?",
      answer: "Elevea provides comprehensive business solutions including strategic marketing, creative design, brand consultation, business strategy, digital solutions, and growth acceleration services. We tailor our approach to meet your specific business needs and objectives."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary based on scope and complexity. A basic branding project might take 4-6 weeks, while comprehensive digital transformation initiatives can span 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the process."
    },
    {
      question: "What industries do you work with?",
      answer: "We work across diverse industries including technology, healthcare, finance, retail, education, and manufacturing. Our adaptable methodology and industry expertise allow us to deliver exceptional results regardless of your sector."
    },
    {
      question: "How do you measure project success?",
      answer: "We establish clear KPIs and metrics at the project outset, tailored to your specific goals. This might include increased revenue, improved brand awareness, higher conversion rates, or enhanced operational efficiency. We provide regular reports and analytics to track progress."
    },
    {
      question: "What is your pricing structure?",
      answer: "Our pricing is customized based on project scope, duration, and specific requirements. We offer flexible engagement models including project-based pricing, monthly retainers, and hourly consulting. Contact us for a detailed quote tailored to your needs."
    },
    {
      question: "Do you offer ongoing support after project completion?",
      answer: "Yes! We offer comprehensive post-project support including maintenance packages, ongoing consultation, training, and optimization services. We believe in building long-term partnerships and ensuring your continued success."
    },
    {
      question: "How do I get started with Elevea?",
      answer: "Getting started is easy! Simply reach out through our contact form, email, or phone. We'll schedule an initial consultation to discuss your needs, challenges, and goals. From there, we'll develop a customized proposal and roadmap for your project."
    },
    {
      question: "What makes Elevea different from other consulting firms?",
      answer: "Our unique combination of strategic thinking, creative excellence, and data-driven execution sets us apart. We don't believe in one-size-fits-all solutions. Instead, we invest time in understanding your business, industry, and goals to deliver truly customized strategies that drive measurable results."
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-card relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and approach
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="scroll-fade-in bg-background border border-muted rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group"
                aria-expanded={openIndex === index}
              >
                <div className="flex items-center gap-4 flex-1">
                  {/* Number Badge */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-primary text-white scale-110'
                      : 'bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Question */}
                  <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                    openIndex === index
                      ? 'text-primary'
                      : 'text-foreground group-hover:text-primary'
                  }`}>
                    {faq.question}
                  </h3>
                </div>

                {/* Toggle Icon */}
                <div className={`flex-shrink-0 ml-4 transition-all duration-300 ${
                  openIndex === index ? 'rotate-180 text-primary' : 'rotate-0 text-muted-foreground'
                }`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer - Animated dropdown */}
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 pl-20">
                  {/* Decorative line */}
                  <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-4"></div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>

              {/* Bottom accent line that appears when open */}
              <div className={`h-1 bg-gradient-to-r from-primary via-primary/50 to-transparent transition-all duration-500 ${
                openIndex === index ? 'w-full opacity-100' : 'w-0 opacity-0'
              }`}></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center scroll-fade-in bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Still have questions?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Our team is here to help. Get in touch with us for personalized answers and guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105 flex items-center justify-center gap-2">
              Contact Us
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <button className="px-8 py-4 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary/10 transition-all duration-300">
              Schedule a Call
            </button>
          </div>
        </div>

        {/* Help Topics Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: '📧',
              title: 'Email Support',
              description: 'Get answers within 24 hours',
              link: 'support@elevea.com'
            },
            {
              icon: '💬',
              title: 'Live Chat',
              description: 'Chat with our team now',
              link: 'Start Chat'
            },
            {
              icon: '📞',
              title: 'Phone Support',
              description: 'Mon-Fri, 9AM-6PM',
              link: '+1 (555) 123-4567'
            },
          ].map((topic, index) => (
            <div
              key={index}
              className="scroll-fade-in text-center p-6 bg-background rounded-xl border border-muted hover:border-primary/50 transition-all duration-300 hover:shadow-lg group cursor-pointer"
              style={{ animationDelay: `${(index + faqs.length) * 0.1}s` }}
            >
              <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                {topic.icon}
              </div>
              <h4 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {topic.title}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {topic.description}
              </p>
              <div className="text-primary font-semibold text-sm">
                {topic.link}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(5deg);
          }
          66% {
            transform: translateY(20px) rotate(-5deg);
          }
        }

        .animate-float {
          animation: float 10s ease-in-out infinite;
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
          opacity: 0;
        }
      `}</style>
    </section>
  )
}