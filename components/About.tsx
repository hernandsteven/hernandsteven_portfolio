'use client'
import Tag from './Tag'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { headerSlideInFromLeft } from '@/util/animations'
import { Download } from './Icons'

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
      className="flex min-h-screen flex-col justify-center gap-6 "
    >
      <motion.h1
        ref={aboutRef}
        variants={headerSlideInFromLeft}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        className="self-center text-2xl md:self-start "
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
        software engineer. I started learning how to code websites using HTML,
        CSS, and JQuery.
      </p>
      <div className="min-h-48 mt-4 grid grid-rows-1 gap-8 md:grid-cols-2  ">
        <div className="flex h-28 flex-col gap-6 ">
          <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.5, duration: 0.8 },
            }}
            className="self-center text-xl md:self-start "
          >
            <b>Languages I Speak</b>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.5, duration: 0.8 },
            }}
            viewport={{ margin: '0px 100px -50px 0px' }}
            className="flex flex-wrap justify-center gap-2 md:justify-start "
          >
            {languages.map((language) => (
              <Tag key={language} tag={language} />
            ))}
          </motion.div>
        </div>
        <div className="flex flex-col gap-6 ">
          <motion.h1
            initial={{ opacity: 0, x: 50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 1, duration: 0.8 },
            }}
            className="self-center text-xl md:self-start "
          >
            <b>Technologies I Use</b>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 0.8,
              },
            }}
            viewport={{ margin: '0px 100px -50px 0px' }}
            className="flex flex-wrap justify-center gap-2 md:justify-start "
          >
            {technologies.map((tech) => (
              <Tag key={tech} tag={tech} />
            ))}
          </motion.div>
        </div>
      </div>
      <div className="mt-6 flex flex-col items-center gap-2">
        <button
          onClick={() => downloadPDF()}
          className="flex w-fit flex-row items-center gap-2 rounded-md border border-gray-800 bg-gradient-to-t from-gray-800 to-transparent p-2 text-white shadow-sm shadow-gray-800 transition  ease-in-out hover:bg-gray-700"
        >
          <Download />
          Download Resume
        </button>
      </div>
      <hr className="mt-6" />
    </section>
  )
}
