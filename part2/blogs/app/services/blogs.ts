const blogs = [
  { 
    id: 1,
    title: "next.js utilizes React Server Components",
    author: "Jane Doe",
    url: "https://nextjs.org/docs/basic-features/pages",
    likes: 10
  },
  {
    id: 2,
    title: "next.js is built on top of React",
    author: "John Doe",
    url: "https://nextjs.org/docs/basic-features/pages",
    likes: 5
  },
  {
    id: 3,
    title: "next.js supports both static and dynamic rendering",
    author: "Jim Doe",
    url: "https://nextjs.org/docs/basic-features/pages",
    likes: 3
  },
]

let nextId = 4

export const getBlogs = () => {
  return [...blogs].sort((a, b) => b.likes - a.likes)
}

export const addBlog = (
    title: string,
    author: string,
    url: string
) => {
  blogs.push({ id: nextId++, title, author, url, likes: 0 })
}

export const getBlogById = (id: number) => {
  return blogs.find(blog => blog.id === id)
}

export const addBlogLike = (id: number) => {
  const blog = blogs.find(blog => blog.id === id)
  if (blog) {
    blog.likes = blog.likes + 1
  }
}

export const getFilteredBlogs = (filter: string) => {
  return blogs.filter(blog => blog.title.toLowerCase().includes(filter.toLowerCase()))
}
