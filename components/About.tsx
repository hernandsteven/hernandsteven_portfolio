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
        Ever since I was a kid, I've always been fascinated by technology. I
        remember when I was 10 years old and my mom bought me a Dell desktop
        computer. I would download games and play them on my computer. I would
        tinker with the game files and try to figure out if I change files in
        the game, will it break the game? Over the years my passion for
        technology grew.
        <br />
        <br />
        In my sophmore year of highschool I was introduced to programming. From
        there on out I knew that I wanted to be a software engineer. I started
        learning how to code and I fell in love with it. I started learning how
        to code in Java and that gave me the foundation to learn other
        programming languages.
        <br />
        <br />
        In college I started learning Data Structures and Algorithms. I dipped
        my toes into the world of software engineering interviews and Full-stack
        development.
      </p>
      <button className="mt-12 w-fit rounded-md  bg-gray-800 p-2 text-white transition  ease-in-out hover:bg-gray-700">
        Download Resume
      </button>
    </section>
  )
}
