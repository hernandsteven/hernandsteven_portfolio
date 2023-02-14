import Link from 'next/link'
import Image, { StaticImageData } from 'next/image'
import { UpRightArrow } from './Icons'

interface ProjectCardProps {
  name: string
  description: string
  href: string
  imageSrc: StaticImageData
  tags: string[]
}

export default function ProjectCard({
  name,
  description,
  href,
  imageSrc,
  tags,
}: ProjectCardProps) {
  return (
    <Link
      href={href ?? 'https://google.com'}
      className="flex cursor-pointer  rounded-md border-[0.1px] border-gray-800 p-2 shadow-xl shadow-gray-800 transition ease-in-out hover:scale-105 md:flex-row "
      style={{ overflow: 'hidden' }}
    >
      <div className="flex w-full flex-col justify-between md:w-1/2">
        <div>
          <h1 className="w-full rounded bg-gray-800 p-2 text-2xl font-bold">
            {name}
          </h1>
          <div className="flex flex-row gap-2 p-2">
            {tags?.map((tag, idx) => (
              <span key={idx} className="text-sm font-bold text-gray-400">
                {tag}
              </span>
            ))}
          </div>
          <p className="p-2">{description}</p>
        </div>
        <div className="flex flex-row ">
          <p className="background-clip-text bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text font-bold text-transparent">
            {' '}
            Try it{' '}
          </p>
          <UpRightArrow />
        </div>
      </div>
      <Image
        alt={name}
        src={imageSrc}
        priority
        placeholder="blur"
        className="hidden h-full w-1/2 rounded-r bg-white md:block"
      />
    </Link>
  )
}
