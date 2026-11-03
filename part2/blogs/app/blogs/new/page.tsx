import { createBlog } from "@/app/actions/blogs"

const NewBlog = () => {
    return (
    <div>
      <h1 className="text-4xl font-bold text-center">Add new blog</h1>
        <form action={createBlog} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
          <div className="mb-1 flex flex-col gap-6">
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm text-slate-600">
                Title
              </label>
              <input type="text" id="title" name="title" required className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Title" />
            </div>
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm text-slate-600">
                Author
              </label>
              <input type="text" id="author" name="author" required className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Author" />
            </div>
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm text-slate-600">
                URL
              </label>
              <input type="url" id="url" name="url" required className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="URL" />
            </div>
          </div>
          <button type="submit" className="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Add Blog
          </button>
        </form>
    </div>
  )
}

export default NewBlog
