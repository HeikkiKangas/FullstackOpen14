import { notFound } from "next/navigation"
import { getBlogById } from "../../services/blogs"

export const instant = false

const BlogPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const blog = getBlogById(Number(id))

  if (!blog) {
    notFound()
  }

  return (
    <div>
      <h2>{blog.title}</h2>
      <p>{blog.author}</p>
      <a href={blog.url} target="_blank" rel="noopener noreferrer">
        {blog.url}
      </a>
      <p>Likes: {blog.likes}</p>
    </div>
  )
}

export default BlogPage
