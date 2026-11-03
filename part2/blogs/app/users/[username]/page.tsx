import { getUserByUsername } from "@/app/services/users"
import Link from "next/link"
import { notFound } from "next/navigation"

export const instant = false

const UserPage = async ({ params }: { params: Promise<{ username: string }> }) => {
    const { username } = await params
    const user = await getUserByUsername(username)

    if (!user) {
      notFound()
    }

    return (
      <div>
        <h2 className="text-2xl font-bold mx-2 text-center">{user.name}</h2>
        <table className="table-fixed mx-auto shadow-xl">
          <tbody>
          {user
            .blogs
            .sort((a, b) => a.likes != b.likes ? b.likes - a.likes : a.title.localeCompare(b.title))
            .map((blog) => (
              <tr key={blog.id}>
                <td className="border px-2 py-2 font-medium">
                  <Link href={`/blogs/${blog.id}`}>
                    {blog.title}
                  </Link>
                </td>
                <td className="border px-2 py-2 font-medium">
                  <em>{blog.likes} likes</em>
                </td>
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    )
}

export default UserPage
