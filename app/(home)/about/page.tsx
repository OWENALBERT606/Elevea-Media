'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function AboutUsPage() {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: '/team/sarah.jpg',
      bio: 'Visionary leader with 15+ years of experience in tech innovation and strategic marketing.',
      linkedin: '#',
      twitter: '#',
      email: 'sarah@eleveamedia.com'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: '/team/michael.jpg',
      bio: 'Tech enthusiast passionate about building scalable digital solutions.',
      linkedin: '#',
      twitter: '#',
      email: 'michael@eleveamedia.com'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      image: '/team/emily.jpg',
      bio: 'Creative designer focused on user-centered experiences and brand identity.',
      linkedin: '#',
      twitter: '#',
      email: 'emily@eleveamedia.com'
    },
    {
      id: 4,
      name: 'David Okonkwo',
      role: 'Head of Operations',
      image: '/team/david.jpg',
      bio: 'Operations expert ensuring seamless business processes and client satisfaction.',
      linkedin: '#',
      twitter: '#',
      email: 'david@eleveamedia.com'
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Marketing Director',
      image: '/team/lisa.jpg',
      bio: 'Strategic marketer with a passion for brand storytelling and growth.',
      linkedin: '#',
      twitter: '#',
      email: 'lisa@eleveamedia.com'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Customer Success Lead',
      image: '/team/james.jpg',
      bio: 'Dedicated to ensuring exceptional customer experiences and lasting partnerships.',
      linkedin: '#',
      twitter: '#',
      email: 'james@eleveamedia.com'
    }
  ]

  const values = [
    {
      icon: '🎯',
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do, ensuring their success is our success.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We embrace creativity and innovation, constantly pushing boundaries to deliver cutting-edge solutions.'
    },
    {
      icon: '🤝',
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and foster a culture of open communication and mutual support.'
    },
    {
      icon: '🏆',
      title: 'Excellence',
      description: 'We strive for excellence in every project, maintaining the highest standards of quality and performance.'
    }
  ]

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '200+', label: 'Happy Clients' },
    { number: '15+', label: 'Years Experience' },
    { number: '50+', label: 'Team Members' },
  ]

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
            <span className="text-[#D99732] font-semibold text-sm">WHO WE ARE</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            About Elevea Media
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Building the future through innovation, dedication, and a commitment to excellence in every project we deliver
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background -mt-16 relative z-10">
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

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-[#D99732]/20 border border-[#D99732] rounded-full mb-6">
                <span className="text-[#D99732] font-semibold text-sm">OUR JOURNEY</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
                Founded in 2015, Elevea Media began with a simple mission: to transform the way businesses 
                operate through innovative technology solutions and strategic marketing. What started as a small team of 
                passionate developers and creatives has grown into a thriving agency serving clients worldwide.
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed text-lg">
                Over the years, we've evolved and adapted, but our core values remain unchanged. 
                We believe in creating meaningful impact through technology, fostering innovation, 
                and building lasting relationships with our clients and partners.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Today, we're proud to be at the forefront of digital transformation, helping 
                businesses of all sizes achieve their goals and unlock their full potential through 
                strategic marketing, creative design, and cutting-edge technology.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border border-muted shadow-2xl">
                <Image 
                  src="/images/about-story.jpg" 
                  alt="Our Story" 
                  width={600}
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

      {/* Mission & Vision Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-8 md:p-10 rounded-2xl border border-muted hover:border-[#D99732] transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-[#D99732]/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To empower businesses with innovative technology solutions and strategic marketing 
                that drive growth, enhance efficiency, and create lasting value. We're committed to 
                delivering exceptional results that exceed expectations and foster long-term success 
                for every client we serve.
              </p>
            </div>

            <div className="bg-background p-8 md:p-10 rounded-2xl border border-muted hover:border-[#D99732] transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-[#D99732]/20 rounded-2xl flex items-center justify-center mb-6">
                <span className="text-4xl">👁️</span>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-lg">
                To be the leading force in digital transformation across Africa and beyond, recognized 
                globally for our innovative solutions, exceptional service, and unwavering commitment to 
                client success. We envision a future where technology and creativity seamlessly enhance 
                every aspect of business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#D99732]/20 border border-[#D99732] rounded-full mb-6">
              <span className="text-[#D99732] font-semibold text-sm">OUR PRINCIPLES</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card p-6 md:p-8 rounded-2xl border border-muted hover:border-[#D99732] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#D99732] transition-colors">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-[#D99732]/20 border border-[#D99732] rounded-full mb-6">
              <span className="text-[#D99732] font-semibold text-sm">OUR TEAM</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Talented individuals working together to create extraordinary results for our clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="bg-background rounded-2xl overflow-hidden border border-muted hover:border-[#D99732] transition-all duration-300 hover:shadow-2xl group"
              >
                <div className="relative overflow-hidden aspect-[4/5]">
                  <Image 
                    src={member.image} 
                    alt={member.name}
                    width={400}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B2B2B] via-transparent to-transparent opacity-60" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-[#D99732] font-semibold mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="flex gap-3">
                    <a 
                      href={member.linkedin}
                      className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-[#D99732] hover:text-white transition-all duration-300 group/social"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a 
                      href={member.twitter}
                      className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-[#D99732] hover:text-white transition-all duration-300 group/social"
                      aria-label="Twitter"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-[#D99732] hover:text-white transition-all duration-300 group/social"
                      aria-label="Email"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#2B2B2B] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life and elevate your brand to new heights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#D99732] text-white rounded-full font-semibold hover:bg-[#D99732]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#D99732]/50 transform hover:scale-105 inline-flex items-center justify-center gap-2"
            >
              Get In Touch
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