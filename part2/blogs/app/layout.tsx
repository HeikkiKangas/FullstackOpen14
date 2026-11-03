import AuthSessionProvider from "./components/SessionProvider"
import NavBar from "./components/NavBar"
import "./globals.css"
import MaterialTailwindProvider from "./MaterialTailwindProvider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AuthSessionProvider>
          <MaterialTailwindProvider>
            <NavBar />
            {children}
          </MaterialTailwindProvider>
        </AuthSessionProvider>
      </body>
    </html>
  )
}
