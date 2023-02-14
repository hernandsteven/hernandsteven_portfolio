import ProjectCard from './ProjectCard'
import visualizer from '../public/visualizer.png'
import battlezone from '../public/battlezone.png'

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
  return (
    <section
      id="projects"
      className="flex w-full flex-col justify-center gap-4 border-t border-dashed border-t-white "
    >
      <h1 className="my-8 text-2xl">
        <b className="">Projects </b>
      </h1>

      <div className="flex flex-col gap-24 ">
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
