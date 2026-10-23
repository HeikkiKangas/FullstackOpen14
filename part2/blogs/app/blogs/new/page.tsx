import { createBlog } from "@/app/actions/blogs"

const NewBlog = () => {
    return (
    <div>
      <h1>Add new blog</h1>
        <form action={createBlog}>
          <div>
            <label>Title:</label>
            <input type="text" id="title" name="title" required />
          </div>
          <div>
            <label>Author:</label>
            <input type="text" id="author" name="author" required />
          </div>
          <div>
            <label>URL:</label>
            <input type="url" id="url" name="url" required />
          </div>
          <input type="hidden" name="userId" value={1} />
          <button type="submit">Add Blog</button>
        </form>
    </div>
  )
}

export default NewBlog
