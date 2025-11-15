'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NotFoundPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const popularPages = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Services', href: '/services', icon: '⚙️' },
    { name: 'Our Work', href: '/portfolio', icon: '💼' },
    { name: 'Blog', href: '/blog', icon: '📝' },
    { name: 'About Us', href: '/about', icon: '👥' },
    { name: 'Contact', href: '/contacts', icon: '📧' },
  ]

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 bg-[#D99732]/10 rounded-full blur-3xl transition-all duration-300"
          style={{
            left: `${mousePosition.x / 20}px`,
            top: `${mousePosition.y / 20}px`,
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-[#D99732]/5 rounded-full blur-3xl transition-all duration-500"
          style={{
            right: `${mousePosition.x / 30}px`,
            bottom: `${mousePosition.y / 30}px`,
          }}
        ></div>

        {/* Floating shapes */}
        <div className="absolute top-20 left-20 w-20 h-20 border-2 border-[#D99732]/20 rotate-45 animate-float"></div>
        <div className="absolute bottom-40 right-40 w-16 h-16 border-2 border-[#D99732]/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-10 w-12 h-12 border-2 border-[#D99732]/20 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Animated 404 */}
        <div className="mb-8 relative">
          <h1 className="text-[150px] md:text-[250px] font-bold text-[#D99732]/10 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-bounce">
              <div className="text-8xl mb-4">🔍</div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="mb-8 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-muted-foreground mb-2">
            The page you're looking for seems to have wandered off...
          </p>
          <p className="text-muted-foreground">
            Don't worry, even the best explorers get lost sometimes!
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Try searching for what you need..."
              className="w-full px-6 py-4 pl-14 rounded-full bg-card border-2 border-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#D99732] transition-all duration-300 shadow-lg"
            />
            <svg 
              className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-muted-foreground" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-[#D99732] text-white rounded-full font-semibold hover:bg-[#D99732]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#D99732]/50"
            >
              Search
            </button>
          </form>
        </div>

        {/* Popular Pages */}
        <div className="mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Popular Pages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {popularPages.map((page, index) => (
              <Link
                key={page.name}
                href={page.href}
                className="group relative overflow-hidden bg-card border-2 border-muted hover:border-[#D99732] rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-[#D99732]/20 transform hover:scale-105"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {page.icon}
                </div>
                <div className="font-semibold text-foreground group-hover:text-[#D99732] transition-colors">
                  {page.name}
                </div>
                <div className="absolute bottom-0 left-0 h-1 bg-[#D99732] w-0 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <Link
            href="/"
            className="group px-8 py-4 bg-[#D99732] text-white rounded-full font-semibold hover:bg-[#D99732]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#D99732]/50 transform hover:scale-105 inline-flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Back to Home
          </Link>
          <Link
            href="/contacts"
            className="px-8 py-4 border-2 border-[#D99732] text-[#D99732] rounded-full font-semibold hover:bg-[#D99732]/10 transition-all duration-300 inline-flex items-center justify-center gap-2"
          >
            Contact Support
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
          </Link>
        </div>

        {/* Fun Error Codes */}
        <div className="mt-16 pt-8 border-t border-muted animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <p className="text-sm text-muted-foreground mb-4">
            Error Code: <span className="font-mono text-[#D99732]">404_PAGE_NOT_FOUND</span>
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
            <span>🎯 Status: Lost</span>
            <span>•</span>
            <span>🗺️ Location: Unknown</span>
            <span>•</span>
            <span>💡 Suggestion: Go Home</span>
          </div>
        </div>

        {/* Elevea Logo */}
        <div className="mt-12 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <Link href="/" className="inline-block opacity-30 hover:opacity-100 transition-opacity duration-300">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-11-14%20at%2015.19.53%20%281%29-NdAyks2z34Kl5iCEsG9Qj0lFsFDRj3.jpeg"
              alt="Elevea Logo"
              className="h-12 w-auto mx-auto"
            />
          </Link>
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

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  )
}