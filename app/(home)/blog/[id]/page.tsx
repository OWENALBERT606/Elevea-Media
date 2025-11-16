


// 'use client'

// import { useState } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import BlogDetail from '@/components/blog-detail'

// export default function Page({
//   params,
// }: {
//   params: Promise<{ id: string }>;
// }) {
//   const [isLiked, setIsLiked] = useState(false)
//   const [likes, setLikes] = useState(42)
//   const [shareDropdown, setShareDropdown] = useState(false)

//   const post = {
//     id: '1',
//     title: 'The Future of Digital Marketing in 2025: AI, Personalization, and Beyond',
//     content: `
//       <p>The landscape of digital marketing is evolving at an unprecedented pace, and 2025 promises to be a transformative year for businesses and marketers alike. As we stand at the intersection of technology and creativity, it's crucial to understand the emerging trends that will shape the industry.</p>
//       <h2>The Rise of AI-Powered Marketing</h2>
//       <p>Artificial Intelligence has moved from being a buzzword to becoming an essential tool...</p>
//       <h2>Hyper-Personalization: The New Standard</h2>
//       <p>Gone are the days of one-size-fits-all marketing campaigns...</p>
//     `,
//     thumbnail: '/media/121758.jpg',
//     category: { name: 'Digital Marketing' },
//     author: 'Byaruhanga John Baptist',
//     authorImage: '/media/121758.jpg',
//     createdAt: new Date('2024-11-10'),
//     readTime: '8 min',
//     tags: ['Digital Marketing', 'AI', 'Personalization', 'Social Commerce', 'Video Marketing'],
//     videoUrl: '',
//     pdfUrl: ''
//   }

//   const comments = [
//     { id: '1', content: 'Excellent insights on AI-powered marketing.', user: { name: 'Sarah Johnson', image: '/media/121758.jpg' }, createdAt: new Date('2024-11-12') },
//     { id: '2', content: 'Great read on privacy-first marketing.', user: { name: 'Michael Chen' }, createdAt: new Date('2024-11-11') }
//   ]

//   const relatedPosts = [
//     { id: '1', title: 'The Future of Digital Marketing', image: '/media/121758.jpg', category: 'Marketing' },
//     { id: '2', title: 'Building Strong Brands That Last', image: '/media/121758.jpg', category: 'Branding' },
//     { id: '3', title: 'Growth Hacking Strategies for 2025', image: '/media/121758.jpg', category: 'Growth' }
//   ]

//   const handleLike = () => {
//     setIsLiked(!isLiked)
//     setLikes(isLiked ? likes - 1 : likes + 1)
//   }

//   return (
//     <div className="min-h-screen bg-background">
//       {/* Hero Section */}
//       <BlogDetail/>
//     </div>
//   )
// }



// app/blog/[slug]/page.tsx
import { getBlogById, getBlogBySlug, getRelatedBlogs } from "@/actions/blogs";
import BlogDetail from "@/components/blog-detail";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {

 const id = (await params).id;
  const blog = await getBlogById(id);

  if (!blog) {
    return <div className="p-10 text-center text-red-500">Blog not found</div>;
  }

  const relatedPosts = await getRelatedBlogs(blog.id);

  return (
    <div className="min-h-screen bg-background">
      <BlogDetail
        post={blog}
        relatedPosts={relatedPosts}
        comments={blog.comments || []}
      />
    </div>
  );
}
