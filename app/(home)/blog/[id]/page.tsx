'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface Comment {
  id: string
  content: string
  user: {
    name: string
    image?: string
  }
  createdAt: Date
}

interface BlogPost {
  id: string
  title: string
  content: string
  thumbnail: string
  category: {
    name: string
  }
  author: string
  authorImage: string
  createdAt: Date
  readTime?: string
  videoUrl?: string
  pdfUrl?: string
  tags?: string[]
}

interface BlogDetailPageProps {
  post: BlogPost
  comments: Comment[]
  userId?: string
}

export default function BlogDetailPage({ 
  post: propPost, 
  comments: propComments, 
  userId: propUserId 
}: Partial<BlogDetailPageProps> = {}) {
  const [isLiked, setIsLiked] = useState(false)
  const [likes, setLikes] = useState(42)
  const [shareDropdown, setShareDropdown] = useState(false)

  // Dummy data
  const dummyPost: BlogPost = {
    id: '1',
    title: 'The Future of Digital Marketing in 2025: AI, Personalization, and Beyond',
    content: `
      <p>The landscape of digital marketing is evolving at an unprecedented pace, and 2025 promises to be a transformative year for businesses and marketers alike. As we stand at the intersection of technology and creativity, it's crucial to understand the emerging trends that will shape the industry.</p>

      <h2>The Rise of AI-Powered Marketing</h2>
      <p>Artificial Intelligence has moved from being a buzzword to becoming an essential tool in every marketer's arsenal. Machine learning algorithms now predict customer behavior with remarkable accuracy, enabling businesses to deliver personalized experiences at scale.</p>

      <p>Today's AI tools can analyze vast amounts of data in real-time, identifying patterns and insights that would take human analysts months to uncover. From chatbots that provide instant customer support to AI-driven content creation tools, the possibilities are endless.</p>

      <h2>Hyper-Personalization: The New Standard</h2>
      <p>Gone are the days of one-size-fits-all marketing campaigns. Modern consumers expect brands to understand their preferences, anticipate their needs, and deliver tailored experiences across all touchpoints.</p>

      <p>Successful brands are leveraging data analytics and AI to create micro-segments, enabling them to deliver highly relevant content, product recommendations, and offers. This level of personalization not only improves customer satisfaction but also drives significant increases in conversion rates and customer lifetime value.</p>

      <h2>The Evolution of Social Commerce</h2>
      <p>Social media platforms are no longer just channels for brand awareness—they're becoming full-fledged shopping destinations. Instagram, TikTok, and Facebook have integrated seamless shopping experiences that allow users to discover and purchase products without ever leaving the app.</p>

      <h2>Video Content Dominance</h2>
      <p>Video continues to reign supreme as the most engaging content format. Short-form videos, live streaming, and interactive video experiences are capturing audience attention and driving unprecedented engagement rates.</p>

      <p>Brands that invest in high-quality video content and leverage platforms like YouTube, TikTok, and Instagram Reels are seeing remarkable returns on their marketing investments.</p>

      <h2>Privacy-First Marketing</h2>
      <p>With increasing concerns about data privacy and the phasing out of third-party cookies, marketers must adapt to a privacy-first world. Building first-party data strategies and establishing direct relationships with customers has never been more important.</p>

      <h2>Key Takeaways</h2>
      <ul>
        <li>Embrace AI and automation to scale personalization efforts</li>
        <li>Invest in video content creation and distribution</li>
        <li>Build robust first-party data collection strategies</li>
        <li>Create seamless omnichannel experiences</li>
        <li>Focus on building authentic connections with your audience</li>
      </ul>

      <p>The future of digital marketing is bright, but it requires adaptability, creativity, and a willingness to embrace new technologies. Brands that stay ahead of these trends will be well-positioned to thrive in the evolving digital landscape.</p>
    `,
    thumbnail: '/media/121758.jpg',
    category: {
      name: 'Digital Marketing'
    },
    author: 'Byaruhanga John Baptist',
    authorImage: '/media/121758.jpg',
    createdAt: new Date('2024-11-10'),
    readTime: '8 min',
    tags: ['Digital Marketing', 'AI', 'Personalization', 'Social Commerce', 'Video Marketing'],
  }

  const dummyComments: Comment[] = [
    {
      id: '1',
      content: 'This is an excellent article! The insights on AI-powered marketing are particularly valuable. We\'ve been implementing some of these strategies and the results have been amazing.',
      user: {
        name: 'Sarah Johnson',
        image: '/media/121758.jpg'
      },
      createdAt: new Date('2024-11-12')
    },
    {
      id: '2',
      content: 'Great read! I especially appreciate the section on privacy-first marketing. It\'s refreshing to see this topic being addressed so comprehensively.',
      user: {
        name: 'Michael Chen',
      },
      createdAt: new Date('2024-11-11')
    },
    {
      id: '3',
      content: 'The statistics and examples provided really help drive home the importance of these trends. Bookmarking this for future reference!',
      user: {
        name: 'Emma Williams',
        image: '/media/121758.jpg'
      },
      createdAt: new Date('2024-11-11')
    },
    {
      id: '4',
      content: 'As a small business owner, this gives me a clear roadmap for updating our marketing strategy. Thank you for making it so actionable!',
      user: {
        name: 'David Martinez',
      },
      createdAt: new Date('2024-11-10')
    },
  ]

  // Use dummy data if props are not provided
  const post = propPost || dummyPost
  const comments = propComments || dummyComments
  const userId = propUserId

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : ''

  const relatedPosts = [
    {
      id: '1',
      title: 'The Future of Digital Marketing',
      image: '/media/121758.jpg',
      category: 'Marketing',
    },
    {
      id: '2',
      title: 'Building Strong Brands That Last',
      image: '/media/121758.jpg',
      category: 'Branding',
    },
    {
      id: '3',
      title: 'Growth Hacking Strategies for 2025',
      image: '/media/121758.jpg',
      category: 'Growth',
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative bg-[#2B2B2B] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back Button */}
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-[#D99732] transition-colors mb-6 group"
          >
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="px-4 py-2 bg-[#D99732] text-white text-sm font-bold rounded-full">
              {post.category.name}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-white/80">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D99732]">
                <Image
                  src={post.authorImage || '/media/121758.jpg'}
                  alt={post.author || 'Byaruhanga John Baptist'}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-semibold text-white">
                  {post.author || 'Byaruhanga John Baptist'}
                </p>
                <p className="text-sm text-white/60">Author</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>

            {post.readTime && (
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{post.readTime} read</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={post.thumbnail || '/media/121758.jpg'}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between mb-8 p-4 bg-card rounded-xl border border-muted">
          <div className="flex items-center gap-4">
            {/* Like Button */}
            <button
              onClick={handleLike}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                isLiked 
                  ? 'bg-[#D99732] text-white' 
                  : 'bg-background border border-muted hover:border-[#D99732] text-foreground'
              }`}
            >
              <svg className="w-5 h-5" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span>{likes}</span>
            </button>

            {/* Share Button */}
            <div className="relative">
              <button
                onClick={() => setShareDropdown(!shareDropdown)}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-muted hover:border-[#D99732] text-foreground transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Share
              </button>

              {/* Share Dropdown */}
              {shareDropdown && (
                <div className="absolute top-full mt-2 left-0 bg-card border border-muted rounded-lg shadow-lg p-2 w-48 z-20">
                  {[
                    { name: 'Facebook', icon: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                    { name: 'Twitter', icon: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                    { name: 'LinkedIn', icon: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
                  ].map((social) => (
                    <button
                      key={social.name}
                      className="flex items-center gap-3 w-full px-3 py-2 hover:bg-[#D99732]/10 rounded-lg transition-colors text-foreground"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                      </svg>
                      {social.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* View Count */}
          <div className="flex items-center gap-2 text-muted-foreground">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>2.5K views</span>
          </div>
        </div>

        {/* Blog Content */}
        <article className="mb-12 bg-card rounded-2xl p-8 md:p-12 border border-muted shadow-lg">
          <div
            className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-a:text-[#D99732] prose-strong:text-foreground prose-img:rounded-lg"
            dangerouslySetInnerHTML={{ __html: post.content ?? "" }}
          />
        </article>

        {/* Video Attachment */}
        {post.videoUrl && (
          <div className="mb-12 bg-card rounded-2xl p-6 border border-muted">
            <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
              <svg className="w-6 h-6 text-[#D99732]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Video Attachment
            </h2>
            <video
              controls
              className="w-full rounded-lg shadow-lg"
              src={post.videoUrl}
            />
          </div>
        )}

        {/* PDF Attachment */}
        {post.pdfUrl && (
          <div className="mb-12 bg-card rounded-2xl p-6 border border-muted">
            <h2 className="text-2xl font-bold mb-4 text-foreground flex items-center gap-2">
              <svg className="w-6 h-6 text-[#D99732]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              PDF Attachment
            </h2>
            <iframe
              src={post.pdfUrl}
              className="w-full h-[600px] border border-muted rounded-lg mb-4"
            />
            <a
              href={post.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#D99732] text-white rounded-full font-semibold hover:bg-[#D99732]/90 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
          </div>
        )}

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mb-12">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-[#D99732]/10 text-[#D99732] rounded-full text-sm font-medium hover:bg-[#D99732]/20 transition-colors cursor-pointer"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Comments Section */}
        <div className="mb-12 bg-card rounded-2xl p-8 border border-muted">
          <h2 className="text-2xl font-bold mb-6 text-[#D99732] flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
            </svg>
            Comments ({comments?.length || 0})
          </h2>

          {comments && comments.length > 0 ? (
            <div className="space-y-6">
              {comments.map((comment) => (
                <div
                  key={comment.id}
                  className="pb-6 border-b border-muted last:border-0"
                >
                  <div className="flex items-start gap-4">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#D99732]/20 flex-shrink-0">
                      {comment.user.image ? (
                        <Image
                          src={comment.user.image}
                          alt={comment.user.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#D99732] font-bold">
                          {comment.user.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-foreground">
                          {comment.user.name}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {new Date(comment.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-foreground">{comment.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="text-5xl mb-4">💬</div>
              <p className="text-muted-foreground">
                No comments yet. Be the first to comment!
              </p>
            </div>
          )}
        </div>

        {/* Comment Form - You can integrate your existing CommentForm component here */}
        <div className="mb-12">
          {/* <CommentForm userId={userId} postId={post.id} /> */}
        </div>

        {/* Related Posts */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((related) => (
              <Link
                key={related.id}
                href={`/blog/${related.id}`}
                className="group relative overflow-hidden rounded-xl bg-card border border-muted hover:border-[#D99732] transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={related.image}
                    alt={related.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#D99732] text-white text-xs font-bold rounded-full">
                      {related.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-foreground group-hover:text-[#D99732] transition-colors line-clamp-2">
                    {related.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}