'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const categories = ['All', 'Marketing', 'Branding', 'Growth', 'Design', 'Strategy', 'Social Media', 'Technology']

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Digital Marketing in 2025',
      excerpt: 'Explore the emerging trends and technologies that will shape the digital marketing landscape in the coming year. From AI-powered personalization to immersive experiences.',
      content: 'Full article content here...',
      image: '/blog/digital-marketing-2025.jpg',
      category: 'Marketing',
      author: 'Sarah Johnson',
      authorImage: '/authors/sarah.jpg',
      authorBio: 'Digital Marketing Strategist',
      date: 'Nov 10, 2024',
      readTime: '5 min read',
      views: '2.5K',
      featured: true,
      tags: ['Digital Marketing', 'AI', 'Trends']
    },
    {
      id: 2,
      title: 'Building a Strong Brand Identity: A Complete Guide',
      excerpt: 'Learn the essential steps to create a memorable brand that resonates with your target audience and stands out in a crowded marketplace.',
      content: 'Full article content here...',
      image: '/blog/brand-identity.jpg',
      category: 'Branding',
      author: 'Michael Chen',
      authorImage: '/authors/michael.jpg',
      authorBio: 'Brand Consultant',
      date: 'Nov 8, 2024',
      readTime: '7 min read',
      views: '3.1K',
      featured: true,
      tags: ['Branding', 'Identity', 'Strategy']
    },
    {
      id: 3,
      title: '10 Growth Hacking Strategies That Actually Work',
      excerpt: 'Discover proven tactics to accelerate your business growth and achieve sustainable success in today\'s competitive landscape.',
      content: 'Full article content here...',
      image: '/blog/growth-hacking.jpg',
      category: 'Growth',
      author: 'David Martinez',
      authorImage: '/authors/david.jpg',
      authorBio: 'Growth Specialist',
      date: 'Nov 5, 2024',
      readTime: '6 min read',
      views: '1.8K',
      featured: false,
      tags: ['Growth', 'Hacking', 'Strategy']
    },
    {
      id: 4,
      title: 'The Power of Creative Design in Business Success',
      excerpt: 'How investing in quality design can transform your business and attract more customers in an increasingly visual world.',
      content: 'Full article content here...',
      image: '/blog/creative-design.jpg',
      category: 'Design',
      author: 'Emma Williams',
      authorImage: '/authors/emma.jpg',
      authorBio: 'Creative Director',
      date: 'Nov 3, 2024',
      readTime: '4 min read',
      views: '2.2K',
      featured: false,
      tags: ['Design', 'Creativity', 'Business']
    },
    {
      id: 5,
      title: 'Data-Driven Decision Making for Modern Businesses',
      excerpt: 'Learn how to leverage analytics and insights to make informed strategic decisions that drive measurable results.',
      content: 'Full article content here...',
      image: '/blog/data-driven.jpg',
      category: 'Strategy',
      author: 'James Wilson',
      authorImage: '/authors/james.jpg',
      authorBio: 'Business Analyst',
      date: 'Oct 30, 2024',
      readTime: '8 min read',
      views: '1.5K',
      featured: false,
      tags: ['Data', 'Analytics', 'Strategy']
    },
    {
      id: 6,
      title: 'Social Media Trends You Can\'t Ignore in 2025',
      excerpt: 'Stay ahead of the curve with these upcoming social media trends and platform updates that will shape engagement.',
      content: 'Full article content here...',
      image: '/blog/social-media.jpg',
      category: 'Social Media',
      author: 'Lisa Anderson',
      authorImage: '/authors/lisa.jpg',
      authorBio: 'Social Media Manager',
      date: 'Oct 28, 2024',
      readTime: '5 min read',
      views: '3.5K',
      featured: false,
      tags: ['Social Media', 'Trends', 'Marketing']
    },
    {
      id: 7,
      title: 'SEO Best Practices for 2025: What\'s Changed',
      excerpt: 'The latest SEO strategies and algorithm updates you need to know to maintain and improve your search rankings.',
      content: 'Full article content here...',
      image: '/blog/seo-practices.jpg',
      category: 'Marketing',
      author: 'Robert Taylor',
      authorImage: '/authors/robert.jpg',
      authorBio: 'SEO Specialist',
      date: 'Oct 25, 2024',
      readTime: '6 min read',
      views: '2.8K',
      featured: false,
      tags: ['SEO', 'Marketing', 'Digital']
    },
    {
      id: 8,
      title: 'Content Marketing Strategies That Convert',
      excerpt: 'Create compelling content that not only attracts but converts your audience into loyal customers.',
      content: 'Full article content here...',
      image: '/blog/content-marketing.jpg',
      category: 'Marketing',
      author: 'Jennifer Lee',
      authorImage: '/authors/jennifer.jpg',
      authorBio: 'Content Strategist',
      date: 'Oct 22, 2024',
      readTime: '7 min read',
      views: '2.1K',
      featured: false,
      tags: ['Content', 'Marketing', 'Conversion']
    },
    {
      id: 9,
      title: 'The Rise of AI in Business Automation',
      excerpt: 'How artificial intelligence is revolutionizing business operations and what it means for your company.',
      content: 'Full article content here...',
      image: '/blog/ai-automation.jpg',
      category: 'Technology',
      author: 'Alex Kumar',
      authorImage: '/authors/alex.jpg',
      authorBio: 'AI Consultant',
      date: 'Oct 20, 2024',
      readTime: '9 min read',
      views: '4.2K',
      featured: false,
      tags: ['AI', 'Automation', 'Technology']
    },
  ]

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredPosts = blogPosts.filter(post => post.featured)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-[#2B2B2B] text-white py-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block px-4 py-2 bg-[#D99732]/20 border border-[#D99732] rounded-full mb-6 animate-fade-in">
              <span className="text-[#D99732] font-semibold text-sm">INSIGHTS & INSPIRATION</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
              Our Blog
            </h1>
            <p className="text-xl text-white/80 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
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
                <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
            {categories.map((category) => (
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
        <section className="py-8 px-2 md-px-8 lg:px-12 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                      src={post.image}
                      alt={post.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        hoveredIndex === -index - 1 ? 'scale-110 brightness-75' : 'scale-100 brightness-100'
                      }`}
                    />
                    <div className="absolute top-4 left-4 z-10 flex gap-2">
                      <span className="px-4 py-2 bg-[#D99732] text-white text-sm font-bold rounded-full shadow-lg">
                        Featured
                      </span>
                      <span className="px-4 py-2 bg-white/90 text-[#2B2B2B] text-sm font-bold rounded-full shadow-lg">
                        {post.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-sm">{post.readTime}</span>
                      <span>•</span>
                      <span className="text-sm">{post.views} views</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#D99732] transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-white/80 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#D99732]">
                          <Image
                            src={post.authorImage}
                            alt={post.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{post.author}</p>
                          <p className="text-xs text-white/60">{post.date}</p>
                        </div>
                      </div>

                      <svg className={`w-6 h-6 text-[#D99732] transform transition-transform duration-300 ${
                        hoveredIndex === -index - 1 ? 'translate-x-2' : ''
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Blog Posts */}
      <section className="py-8 px-4 md:px-8 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <h3 className="text-2xl font-bold text-foreground mb-2">No articles found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="group relative overflow-hidden rounded-xl bg-card border border-muted hover:border-[#D99732] transition-all duration-500 hover:shadow-xl hover:shadow-[#D99732]/20 cursor-pointer flex flex-col"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className={`object-cover transition-all duration-700 ${
                        hoveredIndex === index ? 'scale-110 brightness-75' : 'scale-100 brightness-100'
                      }`}
                    />
                    
                    <div className="absolute top-4 left-4 z-10">
                      <span className="px-3 py-1 bg-[#D99732] text-white text-xs font-bold rounded-full shadow-lg">
                        {post.category}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 ${
                      hoveredIndex === index ? 'translate-x-full' : '-translate-x-full'
                    }`}></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <span>{post.views} views</span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#D99732] transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-[#D99732]/10 text-[#D99732] text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-3 pt-4 border-t border-muted">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-[#D99732]/20">
                        <Image
                          src={post.authorImage}
                          alt={post.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-grow">
                        <p className="font-semibold text-foreground text-sm">{post.author}</p>
                        <p className="text-xs text-muted-foreground">{post.authorBio}</p>
                      </div>
                      <svg className={`w-5 h-5 text-[#D99732] transform transition-transform duration-300 ${
                        hoveredIndex === index ? 'translate-x-1' : ''
                      }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>

                  <div className={`h-1 bg-[#D99732] transition-all duration-500 ${
                    hoveredIndex === index ? 'w-full' : 'w-0'
                  }`}></div>
                </article>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length >= 9 && (
            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-[#D99732] text-white rounded-full font-semibold hover:bg-[#D99732]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#D99732]/50 transform hover:scale-105 inline-flex items-center gap-2">
                Load More Articles
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#D99732]/10 to-[#D99732]/5 rounded-2xl p-12 border border-[#D99732]/20 text-center">
            <div className="text-5xl mb-6">📬</div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Never Miss an Update</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Subscribe to our newsletter and get the latest insights, tips, and strategies delivered straight to your inbox every week.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full bg-background border border-muted text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-[#D99732] transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#D99732] text-white rounded-full font-semibold hover:bg-[#D99732]/90 transition-all duration-300 hover:shadow-lg hover:shadow-[#D99732]/50 whitespace-nowrap"
              >
                Subscribe Now
              </button>
            </form>
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

        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}