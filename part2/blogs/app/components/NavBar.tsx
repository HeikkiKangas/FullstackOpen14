"use client"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"


const NavBar = () => {
  const { data: session } = useSession()

  return (
    <nav className="block w-full max-w-screen-md px-4 py-2 mx-auto bg-white shadow-md rounded-md my-2">
      <div className="container flex w-full flex-col items-center justify-between gap-4 text-slate-800 md:flex-row">
        <div className="flex shrink-0">
          <ul className="flex flex-row items-center gap-2 lg:gap-6">
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <a href="/" className="flex items-center">
                Home
              </a>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75" />
              </svg>
              <a href="/blogs" className="flex items-center">
                Blogs
              </a>
            </li>
            <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
              </svg>
              <a href="/users" className="flex items-center">
                Users
              </a>
            </li>
            {session &&
              <li className="flex items-center p-1 text-sm gap-x-2 text-slate-600">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                </svg>
                <a href="/blogs/new" className="flex items-center">
                  Add Blog
                </a>
              </li>
            }
          </ul>
        </div>
        <div className="flex shrink-0 items-center gap-2 whitespace-nowrap md:ml-auto">
          {
            session
              ? <>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <em>{session.user?.name}</em>
                <button
                  type="button"
                  onClick={() => signOut()}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold
                    text-white shadow-sm transition hover:bg-blue-700
                    focus-visible:outline-2 focus-visible:outline-offset-2
                    focus-visible:outline-blue-600"
                >
                  Logout
                </button>
              </>
              : <><Link href="/login"><button
                type="button"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold
                 text-white shadow-sm transition hover:bg-blue-700
                 focus-visible:outline-2 focus-visible:outline-offset-2
                 focus-visible:outline-blue-600"
              >
                Login
              </button></Link>
              <Link href="/register"><button
                type="button"
                className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold
                 text-white shadow-sm transition hover:bg-blue-700
                 focus-visible:outline-2 focus-visible:outline-offset-2
                 focus-visible:outline-blue-600"
              >
                Register
              </button></Link>
              </>
          }
        </div>
      </div>
    </nav>
  )
}

export default NavBar
