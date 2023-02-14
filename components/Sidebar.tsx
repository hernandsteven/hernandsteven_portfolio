'use client'
import { motion, useScroll } from 'framer-motion'

const navItems = [
  {
    name: 'Home',
    href: '#home',
  },
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
]
export default function Sidebar() {
  const { scrollYProgress } = useScroll()

  return (
    <aside>
      <div className="md:sticky md:top-20">
        <h1 className="px-4 pb-4 text-6xl font-bold ">sh.</h1>
        <div className="flex flex-row  justify-center  md:justify-start md:border-r md:border-r-gray-800">
          <nav className="flex flex-row px-4 md:flex-col ">
            {navItems.map(({ name, href }) => (
              <a
                className=" mx-4 rounded-md text-2xl md:mx-0  md:my-12 "
                href={href}
                key={name}
              >
                {name}
              </a>
            ))}
          </nav>
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className=" hidden w-[.5px] origin-top-left rounded-full bg-white shadow-2xl shadow-white md:block lg:sticky lg:top-20"
          />
        </div>
      </div>
    </aside>
  )
}
