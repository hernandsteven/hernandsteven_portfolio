import Tag from './Tag'

const languages = [
  'JavaScript',
  'TypeScript',
  'Java',
  'Python',
  'PostgreSQL',
  'SQL',
  'HTML',
  'CSS',
] as const
const technologies = [
  'React',
  'Next.js',
  'Node.js',
  'Tailwind',
  'Jest',
  'Supabase',
  'Zustand',
  'Redux',
] as const

export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col justify-center gap-4 border-t border-dashed border-t-white "
    >
      <h1 className="text-2xl">
        <b className="">About Me</b>
      </h1>
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
          <div className="flex flex-wrap gap-2 ">
            {languages.map((language) => (
              <Tag key={language} tag={language} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4 p-4 ">
          <h1 className="text-xl font-bold"> Technologies I Use</h1>

          <div className="flex flex-wrap gap-2 ">
            {technologies.map((tech) => (
              <Tag key={tech} tag={tech} />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col items-center gap-2">
        <button className="w-fit rounded-md bg-gray-800 p-2 text-white transition  ease-in-out hover:bg-gray-700">
          Download Resume
        </button>
      </div>
    </section>
  )
}
