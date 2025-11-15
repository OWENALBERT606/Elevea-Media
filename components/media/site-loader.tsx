'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function SiteLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 10
      })
    }, 200)

    // Hide loader after 3 seconds
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2B2B2B]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D99732]/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D99732]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
        
        {/* Geometric patterns */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 border-2 border-[#D99732] rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 border-2 border-[#F5F5F5] rotate-12 animate-spin-reverse"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Logo container with animation */}
        <div className="relative mb-8">
          {/* Glowing circle behind logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-[#D99732]/20 rounded-full blur-2xl animate-pulse-slow"></div>
          </div>

          {/* Rotating ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 border-4 border-transparent border-t-[#D99732] border-r-[#D99732] rounded-full animate-spin"></div>
          </div>

          {/* Logo */}
          <div className="relative animate-scale-pulse">
            <Image
              src="/logo.png"
              alt="Elevea Media Agency"
              width={200}
              height={200}
              className="relative z-10"
              priority
            />
          </div>
        </div>

        {/* Company name with letter animation */}
        <div className="flex items-center gap-1 mb-8">
          {['E', 'l', 'e', 'v', 'e', 'a'].map((letter, index) => (
            <span
              key={index}
              className="text-4xl font-bold text-white animate-letter-pop"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                color: index === 0 ? '#D99732' : 'white'
              }}
            >
              {letter}
            </span>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-[#D99732] text-lg font-semibold mb-8 animate-fade-in tracking-wider" style={{ animationDelay: '0.8s' }}>
          MEDIA AGENCY
        </p>

        {/* Progress bar */}
        <div className="w-64 h-2 bg-[#F5F5F5]/10 rounded-full overflow-hidden mb-4">
          <div
            className="h-full bg-gradient-to-r from-[#D99732] to-[#F5F5F5] transition-all duration-300 ease-out relative"
            style={{ width: `${progress}%` }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="flex items-center gap-2 text-white/70">
          <span className="text-sm">Loading</span>
          <div className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-[#D99732] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
            <span className="w-1.5 h-1.5 bg-[#D99732] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
            <span className="w-1.5 h-1.5 bg-[#D99732] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
          </div>
          <span className="text-sm font-mono">{progress}%</span>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(30px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        @keyframes scale-pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes letter-pop {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.8);
          }
          50% {
            transform: translateY(-10px) scale(1.1);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-scale-pulse {
          animation: scale-pulse 2s ease-in-out infinite;
        }

        .animate-letter-pop {
          animation: letter-pop 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  )
}