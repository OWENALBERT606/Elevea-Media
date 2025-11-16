'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Top Banner - Hidden on scroll */}
      <div className={`fixed top-0 w-full z-50 bg-[#2B2B2B] text-white transition-all duration-500 ${
        isScrolled ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between py-2 gap-2 text-sm">
            {/* Contact Info */}
            <div className="flex flex-wrap items-center gap-4 text-white/80">
              <a href="tel:+256700123456" className="flex items-center gap-2 hover:text-[#D99732] transition-colors group">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+256706656262 , 
+256776656262</span>
              </a>
              <span className="hidden sm:block text-white/40">|</span>
              <a href="mailto:info@eleveamedia.com" className="flex items-center gap-2 hover:text-[#D99732] transition-colors group">
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@eleveamedia.com</span>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3">
              <span className="text-white/60 text-xs hidden sm:inline">Follow us:</span>
              <div className="flex items-center gap-2">
                {[
                  { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z', href: '#' },
                  { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z', href: '#' },
                  { name: 'Instagram', icon: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01', href: '#' },
                  { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z', href: '#' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-[#D99732] flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                    aria-label={social.name}
                  >
                    <svg className="w-4 h-4 text-white/80 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`fixed w-full z-40 transition-all duration-500 ${
          isScrolled 
            ? 'top-0 bg-background/95 backdrop-blur-md shadow-lg' 
            : 'top-10 bg-background/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="relative">
                <div className="absolute inset-0 bg-[#D99732]/20 rounded-lg blur-md group-hover:bg-[#D99732]/30 transition-all"></div>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-14%20at%2015.19.53%20%281%29-NdAyks2z34Kl5iCEsG9Qj0lFsFDRj3.jpeg"
                  alt="Elevea Logo"
                  className="h-12 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-foreground group-hover:text-[#D99732] transition-colors">Elevea</span>
                <p className="text-xs text-muted-foreground">Media Agency</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {[
                { name: 'Home', href: '/' },
                { name: 'Services', href: '/services' },
                { name: 'Our Work', href: '/projects' },
                { name: 'Blog', href: '/blog'},
                { name: 'About Us', href: '/about'},
                { name: 'Contact Us', href: '/contacts'},
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-foreground hover:text-[#D99732] transition-all duration-300 relative group font-medium"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#D99732] group-hover:w-3/4 transition-all duration-300"></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button + Mobile Menu */}
            <div className="flex items-center gap-4">
              <Link
                href="/contacts"
                className="hidden sm:flex items-center gap-2 px-6 py-2.5 bg-[#D99732] text-white rounded-full hover:bg-[#D99732]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#D99732]/50 font-semibold transform hover:scale-105"
              >
                <span>Contact Us</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-foreground hover:text-[#D99732] transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-2 pb-6 space-y-1 bg-background/95 backdrop-blur-md border-t border-muted">
            {[
              { name: 'Home', href: '/' },
              { name: 'Services', href: '/services' },
              { name: 'Our Work', href: '/projects' },
              { name: 'Team', href: '/team' },
              { name: 'Blog', href: '/blog' },
              { name: 'About', href: '/about' },
              { name: 'Contact', href: '/contacts' },
            ].map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-3 text-foreground hover:text-[#D99732] hover:bg-[#D99732]/5 rounded-lg transition-all duration-300 font-medium"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Spacer to prevent content from being hidden under fixed header */}
      <div className={`transition-all duration-500 ${isScrolled ? 'h-20' : 'h-28'}`}></div>

      <style jsx>{`
        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 0 5px rgba(217, 151, 50, 0.3));
          }
          50% {
            filter: drop-shadow(0 0 15px rgba(217, 151, 50, 0.6));
          }
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}