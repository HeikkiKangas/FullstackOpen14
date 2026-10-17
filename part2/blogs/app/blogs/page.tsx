import { getBlogs } from "../services/blogs"

const Blogs = () => {
  const blogs = getBlogs()
    return (
    <div>
      <h1>Blogs</h1>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <h2>{blog.title}</h2>
            <p><em>by {blog.author}</em></p>
            <a href={blog.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
            <p>Likes: {blog.likes}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Blogs
