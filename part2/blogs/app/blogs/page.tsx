import Link from "next/link"
import { getBlogs } from "../services/blogs"

const Blogs = () => {
  const blogs = getBlogs()
    return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>
              <h2>{blog.title}</h2>
            </Link>
            <p><em>by {blog.author}</em></p>
            <p>Likes: {blog.likes}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Blogs
