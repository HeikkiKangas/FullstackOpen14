import Link from "next/link"
import { getFilteredBlogs, getBlogs } from "../services/blogs"
import { filterBlogs } from "../actions/blogs"

export const instant = false

const Blogs = async ({
    searchParams
}: {
    searchParams: Promise<{ filter?: string }>
}) => {
  const { filter } = await searchParams
  const blogs = filter
    ? getFilteredBlogs(filter)
    : getBlogs()

    return (
    <div>
      <h1>Blogs</h1>
      <form action={filterBlogs}>
        <input type="text" name="filter" placeholder="Filter by title" />
        <button type="submit">Filter</button>
      </form>
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
