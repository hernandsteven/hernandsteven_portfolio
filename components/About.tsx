export default function About() {
  return (
    <section
      id="about"
      className="flex min-h-screen flex-col justify-center gap-4 border-t border-t-white "
    >
      <h1 className="text-2xl">
        <b className="">About Me</b>
      </h1>
      <p>
        Since I was a child, I've been fascinated by technology. I have fond
        memories of when my mom bought me a Dell desktop computer when I was 10
        years old. I used to download games and experiment with the game files
        to see what would happen if I changed them. My passion for technology
        has only grown over the years.
        <br />
        <br />
        In my sophomore year of high school, I discovered programming, and it
        was love at first sight. I knew right away that I wanted to be a
        software engineer. I started learning how to code, beginning with Java,
        which gave me the foundation to learn other programming languages.
        <br />
        <br />
        During my college years, I delved deeper into software engineering by
        studying data structures and algorithms. I also started exploring
        software engineering interviews and full-stack development.
      </p>
      <div className="mt-4 flex flex-col items-center gap-2">
        <p>Want a deeper view of my background? </p>
        <button className="w-fit rounded-md bg-gray-800 p-2 text-white transition  ease-in-out hover:bg-gray-700">
          Download Resume
        </button>
      </div>
    </section>
  )
}
