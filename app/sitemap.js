import { getAllPosts } from '../lib/posts'

export default async function sitemap() {
  const baseUrl = 'https://ketaring.bg'
  
  // Get all blog posts
  const posts = await getAllPosts()
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contacts`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]
  
  // Blog post pages
  const blogPages = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.datetime),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))
  
  return [...staticPages, ...blogPages]
} 