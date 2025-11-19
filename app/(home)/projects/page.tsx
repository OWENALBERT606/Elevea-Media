

'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getProjects } from '@/actions/projects'

// Define your Project type
type Project = {
  id: number
  title: string
  category: string
  description: string
  image: string
  tags: string[]
  client: string
  year: string
  result?: string
}

export default function OurWorkPage() {
    const [projects, setProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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

  const stats = [
    { number: '200+', label: 'Projects Completed' },
    { number: '150+', label: 'Happy Clients' },
    { number: '98%', label: 'Success Rate' },
    { number: '25+', label: 'Awards Won' },
  ]

 

  // Fetch projects dynamically
   useEffect(() => {
    async function loadProjects() {
      const data = await getProjects()

      // Map Prisma Project model to frontend Project type
      const mapped: Project[] = data.map((p: any) => ({
        id: p.id,
        title: p.title,
        category: p.category,
        description: p.description,
        image: p.coverImage || '/default.jpg',
        tags: Array.isArray(p.gallery) ? p.gallery : [],
        client: p.clientName || 'Unknown',
        year: new Date(p.createdAt).getFullYear().toString(),
        result: p.results || '',
      }))

      setProjects(mapped)
    }

    loadProjects()
  }, [])


  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-[#2B2B2B] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block px-4 py-2 bg-[#D99732]/20 border border-[#D99732] rounded-full mb-6 animate-fade-in">
            <span className="text-[#D99732] font-semibold text-sm">PORTFOLIO</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">Our Work</h1>
          <p
            className="text-xl text-white/80 max-w-3xl mx-auto mb-8 animate-fade-in-up"
            style={{ animationDelay: '0.2s' }}
          >
            Explore our portfolio of successful projects and see how we've helped businesses achieve their goals
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-1 px-4 md:px-8 lg:px-12 bg-background -mt-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-8 border border-muted text-center hover:border-[#D99732] transition-all duration-300 hover:shadow-xl hover:shadow-[#D99732]/20 transform hover:scale-105"
              >
                <div className="text-4xl md:text-5xl font-bold text-[#D99732] mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-semibold">{stat.label}</div>
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
      <section className="py-12 px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl cursor-pointer h-96 shadow-lg hover:shadow-2xl transition-shadow duration-500"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="absolute inset-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      hoveredIndex === index ? 'scale-110 brightness-75' : 'scale-100 brightness-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80"></div>
                  <div
                    className={`absolute inset-0 bg-[#D99732]/20 transition-opacity duration-500 ${
                      hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}
                  ></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3
                    className={`text-xl font-bold text-white mb-2 transition-all duration-500 ${
                      hoveredIndex === index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-80'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`text-white/90 text-sm mb-4 transition-all duration-500 ${
                      hoveredIndex === index ? 'translate-y-0 opacity-100 max-h-20' : 'translate-y-8 opacity-0 max-h-0'
                    }`}
                  >
                    {project.description}
                  </p>
                  <Link
                    href={`/projects/${project.id}`}
                    className={`inline-flex items-center gap-2 text-[#D99732] font-semibold transition-all duration-300 ${
                      hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
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

      {/* Testimonials and CTA Sections */}
      {/* Keep your existing Featured Case Study, Testimonials, and CTA sections here */}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
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