"use client"

import { Button } from "@material-tailwind/react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"

const LoginPage = () => {
  const router = useRouter()
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    const result = await signIn("credentials", {
      redirect: false,
      username: formData.get("username") as string,
      password: formData.get("password") as string
    })

    if (result?.error) {
      setError("Invalid username or password")
    } else {
      router.push("/")
      router.refresh()
    }
  }

  return (
    <div className="w-full max-w-sm min-w-[200px] mx-auto">
      {error && <p style={{ backgroundColor: "red" }}>{error}</p>}
      <div className="relative flex flex-col rounded-xl bg-transparent">
        <h4 className="block text-xl font-medium text-slate-800">
          Login
        </h4>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
          <div className="mb-1 flex flex-col gap-6">
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm text-slate-600">
                Username
              </label>
              <input type="text" id="username" name="username" required className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Username" />
            </div>
            <div className="w-full max-w-sm min-w-[200px]">
              <label className="block mb-2 text-sm text-slate-600">
                Password
              </label>
              <input type="password" id="password" name="password" required className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Password" />
            </div>
          </div>
          <button type="submit" className="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
