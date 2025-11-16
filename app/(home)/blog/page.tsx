

import { getDashboardBlogs, getBlogCategories } from '@/actions/blogs'
import BlogPage from '@/components/blogPageClient'

export const revalidate = 60

export default async function BlogServerPage() {
  const [blogs, categories] = await Promise.all([
    getDashboardBlogs(),
    getBlogCategories(),
  ])

  const published = blogs?.filter((b) => b.published) || []

  const sorted = published.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  })

  return <BlogPage posts={sorted} categories={categories}/>
}
