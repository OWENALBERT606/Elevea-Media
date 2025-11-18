// 'use client'

// import { getClients } from '@/actions/clients'
// import Clients from '@/components/media/clients'
// import CTA from '@/components/media/cta'
// import FAQ from '@/components/media/faq'
// import Footer from '@/components/media/footer'
// import Header from '@/components/media/header'
// import Hero from '@/components/media/hero'
// import LatestBlog from '@/components/media/latest-blog'
// import Portfolio from '@/components/media/portfolio'
// import Services from '@/components/media/services'
// import Team from '@/components/media/team'
// import Testimonials from '@/components/media/testimonials'
// import { Client } from '@prisma/client'
// import { useEffect, useRef, useState } from 'react'

// export default async function Home() {
//   const [scrollElements, setScrollElements] = useState<NodeListOf<Element> | null>(null);
//     const clients: Client[] = (await getClients()) || [];
  

//   useEffect(() => {
//     // Get all elements with scroll animation classes
//     const elements = document.querySelectorAll('.scroll-fade-in, .scroll-scale-in')
//     setScrollElements(elements)

//     const handleScroll = () => {
//       if (!elements) return

//       elements.forEach((element) => {
//         const elementTop = element.getBoundingClientRect().top
//         const elementVisible = 150
//         if (elementTop < window.innerHeight - elementVisible) {
//           element.classList.add('visible')
//         }
//       })
//     }

//     window.addEventListener('scroll', handleScroll)
//     // Trigger once on load
//     handleScroll()

//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   return (
//     <main className="min-h-screen bg-background">
//       <Hero />
//       <div className="px-4 sm:px-6 lg:px-8">
//       <Services />
//       <Portfolio />
//       <LatestBlog/>
//       <CTA />
//       <Clients clients={clients}/>
//        <Testimonials />
//       <FAQ/>
//       </div>
//     </main>
//   )
// }




"use client";

import { useEffect, useState } from "react";
import { getClients } from "@/actions/clients";
import Clients from "@/components/media/clients";
import CTA from "@/components/media/cta";
import FAQ from "@/components/media/faq";
import Footer from "@/components/media/footer";
import Header from "@/components/media/header";
import Hero from "@/components/media/hero";
import LatestBlog from "@/components/media/latest-blog";
import Portfolio from "@/components/media/portfolio";
import Services from "@/components/media/services";
import Team from "@/components/media/team";
import Testimonials from "@/components/media/testimonials";
import { Blog, Client, Testimonial } from "@prisma/client";
import { getBlogs } from "@/actions/blogs";
import { getTestimonials } from "@/actions/testimonials";

export default function Home() {
  const [scrollElements, setScrollElements] = useState<NodeListOf<Element> | null>(null);
  const [clients, setClients] = useState<Client[]>([]);
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
  async function loadTestimonials() {
    const data = await getTestimonials();
    setTestimonials(data || []);
  }
  loadTestimonials();
}, []);


  // Fetch clients on mount
  useEffect(() => {
    async function loadClients() {
      const data = await getClients();
      setClients(data || []);
    }
    loadClients();
  }, []);


    // Fetch blogs on mount
  useEffect(() => {
    async function loadBlogs() {
      const data = await getBlogs();
      setBlogs(data || []);
    }
    loadBlogs();
  }, []);



  // Scroll animation
  useEffect(() => {
    const elements = document.querySelectorAll('.scroll-fade-in, .scroll-scale-in');
    setScrollElements(elements);

    const handleScroll = () => {
      if (!elements) return;

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('visible');
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  console.log(testimonials);

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <div className="px-4 sm:px-6 lg:px-8">
        <Services />
        <Portfolio />
        <LatestBlog blogs={blogs} />
        <CTA />
        <Clients clients={clients} />
        <Testimonials testimonials={testimonials} />
        <FAQ />
      </div>
    </main>
  );
}
