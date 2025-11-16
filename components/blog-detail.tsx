// import Link from 'next/link'
// import React from 'react'

// export default function BlogDetail() {
//   return (
//     <div>
//         <div className="relative bg-[#2B2B2B] text-white py-20 overflow-hidden">
//         <div className="absolute inset-0 opacity-10">
//           <div className="absolute top-0 left-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl"></div>
//           <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D99732] rounded-full blur-3xl"></div>
//         </div>
//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-[#D99732] transition-colors mb-6 group">
//             <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//             </svg>
//             Back to Blog
//           </Link>
//           <div className="mb-4">
//             <span className="px-4 py-2 bg-[#D99732] text-white text-sm font-bold rounded-full">{post.category.name}</span>
//           </div>
//           <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
//           <div className="flex flex-wrap items-center gap-6 text-white/80">
//             <div className="flex items-center gap-3">
//               <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#D99732]">
//                 <Image src={post.authorImage} alt={post.author} fill className="object-cover"/>
//               </div>
//               <div>
//                 <p className="font-semibold text-white">{post.author}</p>
//                 <p className="text-sm text-white/60">Author</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-2">
//               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
//               </svg>
//               <span>{new Date(post.createdAt).toLocaleDateString()}</span>
//             </div>
//             {post.readTime && <div className="flex items-center gap-2"><span>{post.readTime} read</span></div>}
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
//         <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl">
//           <Image src={post.thumbnail} alt={post.title} width={1200} height={600} className="w-full h-auto object-cover"/>
//         </div>

//         {/* Action Bar */}
//         <div className="flex items-center justify-between mb-8 p-4 bg-card rounded-xl border border-muted">
//           <button onClick={handleLike} className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${isLiked ? 'bg-[#D99732] text-white' : 'bg-background border border-muted hover:border-[#D99732] text-foreground'}`}>
//             <svg className="w-5 h-5" fill={isLiked ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
//             </svg>
//             <span>{likes}</span>
//           </button>
//           <div className="relative">
//             <button onClick={() => setShareDropdown(!shareDropdown)} className="flex items-center gap-2 px-4 py-2 rounded-full bg-background border border-muted hover:border-[#D99732] text-foreground transition-all duration-300">
//               Share
//             </button>
//             {shareDropdown && (
//               <div className="absolute top-full mt-2 left-0 bg-card border border-muted rounded-lg shadow-lg p-2 w-48 z-20">
//                 {['Facebook','Twitter','LinkedIn'].map((social) => (
//                   <button key={social} className="flex items-center gap-3 w-full px-3 py-2 hover:bg-[#D99732]/10 rounded-lg transition-colors text-foreground">{social}</button>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Blog Content */}
//         <article className="mb-12 bg-card rounded-2xl p-8 md:p-12 border border-muted shadow-lg">
//           <div className="prose prose-lg max-w-none text-foreground" dangerouslySetInnerHTML={{ __html: post.content }} />
//         </article>

//         {/* Tags */}
//         {post.tags && (
//           <div className="mb-12">
//             <h3 className="text-lg font-semibold mb-4 text-foreground">Tags</h3>
//             <div className="flex flex-wrap gap-2">
//               {post.tags.map((tag, i) => (
//                 <span key={i} className="px-4 py-2 bg-[#D99732]/10 text-[#D99732] rounded-full text-sm font-medium hover:bg-[#D99732]/20 transition-colors cursor-pointer">#{tag}</span>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Comments */}
//         <div className="mb-12 bg-card rounded-2xl p-8 border border-muted">
//           <h2 className="text-2xl font-bold mb-6 text-[#D99732]">Comments ({comments.length})</h2>
//           {comments.map((c) => (
//             <div key={c.id} className="pb-6 border-b border-muted last:border-0 flex gap-4">
//               <div className="relative w-10 h-10 rounded-full overflow-hidden bg-[#D99732]/20 flex-shrink-0">
//                 {c.user.image ? <Image src={c.user.image} alt={c.user.name} fill className="object-cover"/> : <div className="w-full h-full flex items-center justify-center text-[#D99732] font-bold">{c.user.name.charAt(0)}</div>}
//               </div>
//               <div>
//                 <div className="flex items-center gap-2 mb-2">
//                   <span className="font-semibold text-foreground">{c.user.name}</span>
//                   <span className="text-sm text-muted-foreground">{new Date(c.createdAt).toLocaleDateString()}</span>
//                 </div>
//                 <p className="text-foreground">{c.content}</p>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Related Posts */}
//         <div className="mb-12">
//           <h2 className="text-3xl font-bold mb-8 text-foreground">Related Articles</h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {relatedPosts.map((r) => (
//               <Link key={r.id} href={`/blog/${r.id}`} className="group relative overflow-hidden rounded-xl bg-card border border-muted hover:border-[#D99732] transition-all duration-300 hover:shadow-xl">
//                 <div className="relative h-48 overflow-hidden">
//                   <Image src={r.image} alt={r.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500"/>
//                   <div className="absolute top-4 left-4">
//                     <span className="px-3 py-1 bg-[#D99732] text-white text-xs font-bold rounded-full">{r.category}</span>
//                   </div>
//                 </div>
//                 <div className="p-4">
//                   <h3 className="font-bold text-foreground group-hover:text-[#D99732] transition-colors line-clamp-2">{r.title}</h3>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }




import Image from "next/image";
import Link from "next/link";

export default function BlogDetail({ post, comments, relatedPosts }: any) {

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-[#2B2B2B] text-white py-20 overflow-hidden">
        
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <Link href="/blog" className="inline-flex items-center gap-2 text-white/80 hover:text-[#D99732]">
            ← Back to Blog
          </Link>

          <div className="mb-4">
            <span className="px-4 py-2 bg-[#D99732] text-white text-sm font-bold rounded-full">
              {post.category?.name}
            </span>
          </div>

          <h1 className="text-4xl font-bold mb-6">{post.title}</h1>

          <div className="flex items-center gap-6 text-white/80">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#D99732]">
                <Image src={post.authorImage} alt={post.authorName} width={50} height={50}/>
              </div>
              <div>
                <p className="font-semibold">{post.authorName}</p>
                <p className="text-sm text-white/60">{post.authorTitle}</p>
              </div>
            </div>

            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 -mt-16 relative z-10">

        <div className="mb-12 rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={post.thumbnail || "/placeholder.jpg"}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

        <article className="bg-card p-8 rounded-xl border border-muted">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {/* Related Posts */}
        <h2 className="text-3xl font-bold my-8">Related Articles</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedPosts.map((r: any) => (
            <Link key={r.id} href={`/blog/${r.slug}`}>
              <div className="rounded-xl border p-4 hover:border-[#D99732]">
                <Image
                  src={r.thumbnail || "/placeholder.jpg"}
                  alt={r.title}
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
                <h3 className="font-bold mt-3">{r.title}</h3>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
