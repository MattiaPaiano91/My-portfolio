export type Post = {
  id: number
  slug: string
  title: string
  date: string
  readTime: number
  tags: string[]
  excerpt: string
  content: string
}

export type Project = {
  id: number
  slug: string
  title: string
  summary: string
  description: string
  tech: string[]
  image: string
  url: string
  accent: string
  featured: boolean
}
