'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link';

export default function BlogPage({ posts, categories }:{ posts: any[]; categories: any }) {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  // Add "All" automatically
  const fullCategories = ['All', ...categories.map((c:any) => c.name)]

  // Filter posts based on category + search
  const filteredPosts = useMemo(() => {
    return posts.filter((post:any) => {
      const matchesCategory =
        activeCategory === 'All' || post.category?.name === activeCategory

      const title = post.title?.toLowerCase() || ''
      const excerpt = post.excerpt?.toLowerCase() || ''

      const matchesSearch =
        title.includes(searchQuery.toLowerCase()) ||
        excerpt.includes(searchQuery.toLowerCase())

      return matchesCategory && matchesSearch
    })
  }, [posts, activeCategory, searchQuery])

  // Featured posts from DB
  const featuredPosts = useMemo(() => {
    return posts.filter((post) => post.featured)
  }, [posts])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-[#2B2B2B] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-0 right-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-[#D99732]/20 border border-[#D99732] rounded-full mb-6 animate-fade-in">
              <span className="text-[#D99732] font-semibold text-sm">INSIGHTS & INSPIRATION</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Our Blog
            </h1>
            <p
              className="text-xl text-white/80 mb-8 animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Expert insights, industry trends, and practical strategies to help your business grow
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-14 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#D99732] focus:bg-white/15 transition-all duration-300"
                />
                <svg
                  className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-white/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-b border-muted sticky top-0 z-40 backdrop-blur-lg bg-card/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center gap-3">
            {fullCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#D99732] text-white shadow-lg shadow-[#D99732]/50 scale-105'
                    : 'bg-background text-muted-foreground border border-muted hover:border-[#D99732] hover:text-[#D99732] hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && activeCategory === 'All' && !searchQuery && (
        <section className="py-8 px-2 md:px-8 lg:px-12 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-1 h-8 bg-[#D99732]"></div>
              <h2 className="text-3xl font-bold text-foreground">Featured Articles</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-muted hover:border-[#D99732] transition-all duration-500 hover:shadow-2xl hover:shadow-[#D99732]/20 cursor-pointer"
                  onMouseEnter={() => setHoveredIndex(-index - 1)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={post.thumbnail || '/blog-placeholder.jpg'}
                      alt={post.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        hoveredIndex === -index - 1 ? 'scale-110 brightness-75' : 'scale-100'
                      }`}
                    />

                    <div className="absolute top-4 left-4 z-10 flex gap-2">
                      <span className="px-4 py-2 bg-[#D99732] text-white text-sm font-bold rounded-full">
                        Featured
                      </span>
                      <span className="px-4 py-2 bg-white/90 text-[#2B2B2B] text-sm font-bold rounded-full">
                        {post.category?.name}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#D99732]">
                      {post.title}
                    </h3>

                    <p className="text-white/80 mb-4 line-clamp-2">{post.excerpt}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Blog Posts */}
      <section className="py-8 px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-1 h-8 bg-[#D99732]"></div>
              <h2 className="text-3xl font-bold text-foreground">
                {activeCategory === 'All' ? 'All Articles' : activeCategory}
              </h2>
            </div>

            <p className="text-muted-foreground">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'}
            </p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-2xl font-bold">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <Link href={`/blog/${post.id}`}
                  key={post.id}
                  className="group relative overflow-hidden rounded-xl bg-card border border-muted hover:border-[#D99732] transition-all duration-500 hover:shadow-xl hover:shadow-[#D99732]/20 cursor-pointer flex flex-col"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.thumbnail || '/blog-placeholder.jpg'}
                      alt={post.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        hoveredIndex === index ? 'scale-110 brightness-75' : ''
                      }`}
                    />

                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-[#D99732] text-white text-xs font-bold rounded-full">
                        {post.category?.name}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-[#D99732] line-clamp-2">
                      {post.title}
                    </h3>
                     <p className="text-sm mb-3 group-hover:text-[#D99732] line-clamp-2">
                      {post.description}
                    </p>

                    <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                    {post.tags && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag:any, idx:any) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-[#D99732]/10 text-[#D99732] text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div
                    className={`h-1 bg-[#D99732] transition-all duration-500 ${
                      hoveredIndex === index ? 'w-full' : 'w-0'
                    }`}
                  ></div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
