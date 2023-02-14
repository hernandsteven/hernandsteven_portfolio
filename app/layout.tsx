import Sidebar from '@/components/Sidebar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html id="home" lang="en" className="bg-[#111010] text-white">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="mx-4 mb-40 mt-8 flex max-w-4xl flex-col antialiased md:mt-20 md:flex-row lg:mx-auto lg:mt-32">
        <Sidebar />
        <main className="mt-6 flex min-w-0 flex-auto px-2 md:mt-0 md:px-0">
          {children}
        </main>
      </body>
    </html>
  )
}
