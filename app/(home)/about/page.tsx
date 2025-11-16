
import { getTeamMembers } from '@/actions/team';
import TeamSection from '@/components/media/team-section';
import { Team } from '@prisma/client';
import Image from 'next/image'
import Link from 'next/link'
import "./about.css";


export default async function AboutUsPage() {
    const teamMembers: Team[] = (await getTeamMembers()) || [];
  


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

      {/* Our Story Section */}
      <section className="py-12 px-4 md:px-8 lg:px-12 bg-background">
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
                  src="/media/122887.jpg" 
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
      <section className="py-12 px-4 md:px-8 lg:px-12 bg-card">
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
      <section className="py-12 px-4 md:px-8 lg:px-12 bg-background">
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
      <TeamSection teamMembers={teamMembers} />
      {/* CTA Section */}
      <section className="py-12 px-4 md:px-8 lg:px-12 bg-[#2B2B2B] text-white relative overflow-hidden">
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

      {/* <style jsx>{`
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
      `}</style> */}
    </div>
  )
}