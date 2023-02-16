import { AnalyticsWrapper } from '@/components/analytics'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html id="home" lang="en" className="bg-[#111010] text-white">
      <head />
      <body className="flex flex-col ">
        <div className="mx-4  mt-8 flex max-w-4xl flex-col antialiased md:mt-20 md:flex-row lg:mx-auto lg:mt-32">
          <Sidebar />
          <main className="mt-6 flex min-w-0 flex-auto overflow-x-hidden px-0 md:mt-0 md:px-2 ">
            {children}
          </main>
        </div>
        <Footer />
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
