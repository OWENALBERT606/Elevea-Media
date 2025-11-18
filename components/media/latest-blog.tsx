
// "use client";

// import { useState } from "react";
// import Image from "next/image";

// export default function LatestBlog({ blogs }: { blogs: any[] }) {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   // Use the real blogs, but keep safe fallback
//   const blogPosts = blogs?.slice(0, 6) ?? [];

//   return (
//     <section id="blog" className="py-6 bg-background relative overflow-hidden">
//       {/* Animated background */}
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
//         <div
//           className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"
//           style={{ animationDelay: "2s" }}
//         ></div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-12 scroll-fade-in">
//           <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
//             Latest Insights
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Expert perspectives, industry trends, and practical tips to help
//             your business thrive.
//           </p>
//         </div>

//         {/* Blog Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {blogPosts.slice(0,3).map((post, index) => (
//             <article
//               key={post.id}
//               className="scroll-scale-in group relative overflow-hidden rounded-xl bg-card border border-muted hover:border-primary transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 cursor-pointer flex flex-col"
//               style={{ animationDelay: `${index * 0.1}s` }}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               {/* Image */}
//               <div className="relative h-56 overflow-hidden">
//                 <Image
//                   src={post.thumbnail || "/placeholder.jpg"}
//                   alt={post.title}
//                   fill
//                   className={`object-cover transition-all duration-700 ${
//                     hoveredIndex === index
//                       ? "scale-110 brightness-75"
//                       : "scale-100 brightness-100"
//                   }`}
//                 />

//                 {/* Category */}
//                 <div className="absolute top-4 left-4 z-10">
//                   <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
//                     {post.category?.name || "General"}
//                   </span>
//                 </div>

//                 {/* Gradient overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

//                 {/* Shine effect */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 ${
//                     hoveredIndex === index
//                       ? "translate-x-full"
//                       : "-translate-x-full"
//                   }`}
//                 ></div>
//               </div>

//               {/* Content */}
//               <div className="p-6 flex-grow flex flex-col">
//                 <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
//                   <span>
//                     {new Date(post.createdAt).toLocaleDateString("en-US", {
//                       month: "short",
//                       day: "numeric",
//                       year: "numeric",
//                     })}
//                   </span>
//                   <span>•</span>
//                   <span>5 min read</span>
//                 </div>

//                 <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
//                   {post.title}
//                 </h3>

//                 <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
//                   {post.description || "No summary available"}
//                 </p>

//                 {/* Author */}
//                 {/* <div className="flex items-center gap-3 pt-4 border-t border-muted">
//                   <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary/20">
//                     <Image
//                       src={post.author?.image || "/avatar.png"}
//                       alt={post.author?.name || "Author"}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div className="flex-grow">
//                     <p className="font-semibold text-foreground text-sm">
//                       {post.author?.name || "Unknown Author"}
//                     </p>
//                   </div>
//                   <svg
//                     className={`w-5 h-5 text-primary transform transition-transform duration-300 ${
//                       hoveredIndex === index ? "translate-x-1" : ""
//                     }`}
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M17 8l4 4m0 0l-4 4m4-4H3"
//                     />
//                   </svg>
//                 </div> */}
//               </div>

//               {/* Bottom accent line */}
//               <div
//                 className={`h-1 bg-primary transition-all duration-500 ${
//                   hoveredIndex === index ? "w-full" : "w-0"
//                 }`}
//               ></div>
//             </article>
//           ))}
//         </div>

//         {/* View All */}
//         <div className="text-center mt-12 scroll-fade-in">
//           <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105 inline-flex items-center gap-2">
//             View All Articles
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Animations */}
//       <style jsx>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0) translateX(0);
//           }
//           50% {
//             transform: translateY(-30px) translateX(30px);
//           }
//         }
//         .animate-float {
//           animation: float 10s ease-in-out infinite;
//         }
//         @keyframes scroll-fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         @keyframes scroll-scale-in {
//           from {
//             opacity: 0;
//             transform: scale(0.95) translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1) translateY(0);
//           }
//         }
//         .scroll-fade-in {
//           animation: scroll-fade-in 0.8s ease-out forwards;
//         }
//         .scroll-scale-in {
//           animation: scroll-scale-in 0.7s ease-out forwards;
//           opacity: 0;
//         }
//         .line-clamp-2 {
//           display: -webkit-box;
//           -webkit-line-clamp: 2;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//         .line-clamp-3 {
//           display: -webkit-box;
//           -webkit-line-clamp: 3;
//           -webkit-box-orient: vertical;
//           overflow: hidden;
//         }
//       `}</style>
//     </section>
//   );
// }



"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function LatestBlog({ blogs }: { blogs: any[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // limit to 6 posts
  const blogPosts = blogs?.slice(0, 6) ?? [];

  return (
    <section id="blog" className="py-6 bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 scroll-fade-in">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground">
            Latest Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert perspectives, industry trends, and practical tips to help
            your business thrive.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post, index) => (
            <Link href={`/blog/${post.id}`} key={post.id} className="block">
              <article
                className="scroll-scale-in group relative overflow-hidden rounded-xl bg-card border border-muted hover:border-primary transition-all duration-500 hover:shadow-xl hover:shadow-primary/20 cursor-pointer flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={post.thumbnail || "/placeholder.jpg"}
                    alt={post.title}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      hoveredIndex === index
                        ? "scale-110 brightness-75"
                        : "scale-100 brightness-100"
                    }`}
                  />

                  {/* Category */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-full shadow-lg">
                      {post.category?.name || "General"}
                    </span>
                  </div>

                  {/* Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Shine effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-all duration-1000 ${
                      hoveredIndex === index
                        ? "translate-x-full"
                        : "-translate-x-full"
                    }`}
                  ></div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                    <span>
                      {new Date(post.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span>•</span>
                    <span>5 min read</span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-grow">
                    {post.description || "No summary available"}
                  </p>
                </div>

                {/* Accent line */}
                <div
                  className={`h-1 bg-primary transition-all duration-500 ${
                    hoveredIndex === index ? "w-full" : "w-0"
                  }`}
                ></div>
              </article>
            </Link>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12 scroll-fade-in">
          <Link href="/blog">
            <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50 transform hover:scale-105 inline-flex items-center gap-2">
              View All Articles
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(30px);
          }
        }
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        @keyframes scroll-fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scroll-scale-in {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .scroll-fade-in {
          animation: scroll-fade-in 0.8s ease-out forwards;
        }
        .scroll-scale-in {
          animation: scroll-scale-in 0.7s ease-out forwards;
          opacity: 0;
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
    </section>
  );
}
