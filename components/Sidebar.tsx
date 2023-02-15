'use client'
import { motion, useScroll } from 'framer-motion'
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}
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
      <div className="flex max-w-full flex-row justify-between md:sticky md:top-20 md:flex-col ">
        <motion.h1
          variants={item}
          initial="hidden"
          animate="visible"
          className="px-4 pb-2 text-4xl font-bold md:text-6xl "
        >
          sh.
        </motion.h1>
        <div className="flex flex-row  justify-center  md:justify-start md:border-r md:border-r-gray-800">
          <motion.nav
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex flex-row px-0 md:flex-col md:px-4 "
          >
            {navItems.map(({ name, href }) => (
              <motion.a
                className=" text-l mx-4  my-auto rounded-md md:mx-0  md:my-12 md:text-2xl "
                href={href}
                key={name}
                variants={item}
              >
                {name}
              </motion.a>
            ))}
          </motion.nav>
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className=" hidden w-[.5px] origin-top-left rounded-full bg-white shadow-2xl shadow-white md:block lg:sticky lg:top-20"
          />
        </div>
      </div>
    </aside>
  )
}
