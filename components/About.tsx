'use client'
import Tag from './Tag'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { headerSlideInFromLeft } from '@/util/animations'

const languages = [
  'JavaScript',
  'TypeScript',
  'Java',
  'Python',
  'PostgreSQL',
  'SQL',
  'HTML',
  'CSS',
]
const technologies = [
  'React',
  'Next.js',
  'Node.js',
  'Tailwind',
  'Jest',
  'Supabase',
  'Zustand',
  'Redux',
]

export default function About() {
  const aboutRef = useRef(null)
  const isInView = useInView(aboutRef, {
    once: false,
    margin: '0px 100px -50px 0px',
  })

  const downloadPDF = () => {
    fetch('/STEVENHERNANDEZ.pdf').then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob)
        let alink = document.createElement('a')
        alink.href = fileURL
        alink.download = 'STEVENHERNANDEZ.pdf'
        alink.click()
      })
    })
  }
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col justify-center gap-4 border-t border-dashed border-t-white "
    >
      <motion.h1
        ref={aboutRef}
        variants={headerSlideInFromLeft}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        className=" mt-20 text-2xl "
      >
        <b className="">About Me</b>
      </motion.h1>
      <p>
        Since I was a child, I&apos;ve been fascinated by technology. I have
        fond memories of when my mom bought me a Dell desktop computer when I
        was 10 years old. I used to download games and experiment with the game
        files to see what would happen if I changed them. My passion for
        technology has only grown over the years.
        <br />
        <br />
        In my sophomore year of high school, I discovered programming, and it
        was love at first sight. I knew right away that I wanted to be a
        software engineer. I started learning how to code, beginning with Java,
        which gave me the foundation to learn other programming languages.
      </p>
      <div className="mt-4 grid grid-cols-2 border-t border-dashed">
        <div className="flex h-28 flex-col gap-4 border-r border-dashed p-4">
          <h1 className="text-xl font-bold"> Languages I Speak </h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.5 } }}
            viewport={{ margin: '0px 100px -50px 0px' }}
            className="flex flex-wrap gap-2 "
          >
            {languages.map((language) => (
              <Tag key={language} tag={language} />
            ))}
          </motion.div>
        </div>
        <div className="flex flex-col gap-4 p-4 ">
          <h1 className="text-xl font-bold"> Technologies I Use</h1>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.5,
              },
            }}
            viewport={{ margin: '0px 100px -50px 0px' }}
            className="flex flex-wrap gap-2 "
          >
            {technologies.map((tech) => (
              <Tag key={tech} tag={tech} />
            ))}
          </motion.div>
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center gap-2">
        <button
          onClick={() => downloadPDF()}
          className="mt-10 w-fit rounded-md border border-gray-800 bg-gradient-to-t from-gray-800 to-transparent p-2 text-white shadow-sm shadow-gray-800 transition  ease-in-out hover:bg-gray-700"
        >
          Download Resume
        </button>
      </div>
    </section>
  )
}
