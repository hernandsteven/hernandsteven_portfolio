'use client'
import ProjectCard from './ProjectCard'
import visualizer from '../public/visualizer.png'
import battlezone from '../public/battlezone.png'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { headerSlideInFromLeft } from '@/util/animations'

const projectData = [
  {
    name: 'Battlezone ',
    description:
      'An esports tounament platform where gamers can join and create tournaments.',
    href: 'https://battlezone-hernandsteven.vercel.app/',
    imageSrc: battlezone,
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Zustand'],
  },
  {
    name: 'Pathfinding Visualizer',
    description:
      'A React application that visualizes common searching algorithms.',
    href: 'https://hernandsteven.github.io/visualizer/',
    imageSrc: visualizer,
    tags: ['React', 'JavaScript'],
  },
]

export default function Projects() {
  const projectsRef = useRef(null)
  const isInView = useInView(projectsRef, {
    once: false,

    margin: '0px 100px -50px 0px',
  })
  return (
    <section
      id="projects"
      className="mb-20 flex w-full flex-col justify-center gap-4 "
    >
      <motion.h1
        ref={projectsRef}
        variants={headerSlideInFromLeft}
        initial="initial"
        animate={isInView ? 'animate' : 'initial'}
        className="self-center text-2xl md:self-start"
      >
        <b className="">Projects </b>
      </motion.h1>

      <div className="flex flex-col items-center gap-24 md:items-start ">
        {projectData.map(({ name, description, href, imageSrc, tags }) => (
          <ProjectCard
            key={name}
            name={name}
            description={description}
            href={href}
            imageSrc={imageSrc}
            tags={tags}
          />
        ))}
      </div>
    </section>
  )
}
