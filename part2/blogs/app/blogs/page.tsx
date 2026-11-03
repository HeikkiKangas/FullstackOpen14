import Link from "next/link"
import { getBlogs } from "../services/blogs"
import { filterBlogs } from "../actions/blogs"

export const instant = false

const Blogs = async ({
  searchParams
}: {
  searchParams: Promise<{ filter?: string }>
}) => {
  const { filter } = await searchParams
  const blogs = filter
    ? await getBlogs(filter)
    : await getBlogs()

  return (
    <div  className="w-full max-w-sm min-w-[200px] mx-auto">
      <h1 className="text-3xl font-bold">Blogs</h1>
      <form action={filterBlogs} className="shadow-md p-2 gap-2 mx-auto">
        <div className="w-full max-w-sm min-w-[200px]">
          <div className="relative">
            <input type="text" id="filter" name="filter" className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-16 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Filter by title" />
            <button
              type="submit"
              className="absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Filter
            </button>
          </div>
        </div>
      </form>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id} className="border-b border-gray-300 p-2">
            <Link href={`/blogs/${blog.id}`}>
              <h2 className="text-xl font-bold m-2">{blog.title}</h2>
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
