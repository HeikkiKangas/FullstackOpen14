import { db } from "@/db"
import { blogs } from "@/db/schema"
import { eq, like, desc, asc } from "drizzle-orm"

export const getBlogs = async (filter?: string) => {
  if (filter) {
    return db.query.blogs.findMany({
      where: (blogs) => like(blogs.title, `%${filter}%`),
      orderBy: [desc(blogs.likes), asc(blogs.title)]
    })
  }

  return db.query.blogs.findMany({ orderBy: [desc(blogs.likes), asc(blogs.title)] })
}

export const addBlog = async (title: string, author: string, url: string) => {
  await db.insert(blogs).values({ title, author, url })
}

export const getBlogById = async (id: number) => {
  return db.query.blogs.findFirst({
    where: eq(blogs.id, id)
  })
}

export const addBlogLike = async (id: number) => {
  const blog = await db.query.blogs.findFirst({
    where: eq(blogs.id, id)
  })
  if (blog) {
    await db
    .update(blogs)
    .set({ likes: blog.likes + 1 })
    .where(eq(blogs.id, id))
  }
}

/*
export const getFilteredBlogs = async (filter: string) => {
  return db.query.blogs.findMany({
    where: (blogs) => like(blogs.title, `%${filter}%`)
  })
}
*/
