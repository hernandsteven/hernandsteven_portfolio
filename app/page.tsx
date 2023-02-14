import About from '@/components/About'
import { Github, LinkedIn, Mail } from '@/components/Icons'
import Projects from '@/components/Projects'
import Image from 'next/image'
import avatar from '../public/avatar.png'
import Link from 'next/link'

const socials = [
  {
    name: 'Github',
    href: 'https://github.com/hernandsteven',
    icon: <Github />,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/hernandsteven99/',
    icon: <LinkedIn />,
  },
  {
    name: 'Mail',
    href: 'mailto:hernandsteven@gmail.com',
    icon: <Mail />,
  },
]

const Home = () => {
  return (
    <div className="mt-2 flex flex-col gap-28 md:mt-0 md:pl-8">
      <section className="flex w-full flex-col gap-4 ">
        <h1 className="text-6xl font-bold">Steven Hernandez</h1>
        <p>
          Hello there, I'm Steven. I'm a <b className="line-through">student</b>{' '}
          <b>software engineer</b> who loves to build things.{' '}
        </p>
        <div className="my-8 flex items-start">
          <Image
            alt="Steven Hernandez"
            src={avatar}
            height={150}
            className="rounded-full "
            placeholder="blur"
            priority
          />
          <div className="my-auto ml-8 flex flex-col gap-2">
            {socials.map(({ name, href, icon }) => (
              <Link
                target="_blank"
                key={name}
                href={href}
                className="flex items-center gap-2"
              >
                {icon}
              </Link>
            ))}
          </div>
        </div>
        <p>
          A software engineer with entry-level experience specializing in full
          stack development. Including expertise in TypeScript, React, SQL, and
          Agile software development. Committed to building high-quality user
          Interfaces and backend API’s. Passionate about learning emerging
          technologies and continuously expanding technical knowledge.
        </p>
      </section>
      <About />
      <Projects />
    </div>
  )
}

export default Home
