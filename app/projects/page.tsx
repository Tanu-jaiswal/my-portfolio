import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Frontend Resume Builder",
    category: "Web Development",
    date: "March 2026",
    description:
      "A responsive resume builder designed to make resume creation simple, structured and user-friendly with a clean interface and real-time preview.",
    technologies: ["HTML", "CSS", "JavaScript"],
    highlights: [
      "Structured resume templates",
      "Clean and responsive UI",
      "Dynamic form handling",
      "Real-time resume preview",
    ],
  },
  {
    number: "02",
    title: "Sudoku Solver",
    category: "Data Structures & Algorithms",
    date: "November 2025",
    description:
      "A Sudoku solving application built to demonstrate algorithmic thinking, recursion and backtracking techniques for solving Sudoku puzzles.",
    technologies: ["C", "DSA", "Recursion", "Backtracking"],
    highlights: [
      "Recursive solving algorithm",
      "Backtracking implementation",
      "Logical problem solving",
      "Algorithmic thinking",
    ],
  },
  {
    number: "03",
    title: "QR Code Scanner",
    category: "Python Project",
    date: "March 2025",
    description:
      "A Python-based QR code scanning tool developed to demonstrate practical programming concepts and automated QR data detection.",
    technologies: ["Python"],
    highlights: [
      "QR code detection",
      "Automatic data decoding",
      "Core Python implementation",
      "Practical automation",
    ],
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

          {/* Logo */}
          <Link
            href="/"
            className="text-3xl font-black tracking-tight"
          >
            TJ<span className="text-amber-400">.</span>
          </Link>

          {/* Navigation */}
          <div className="hidden items-center gap-10 text-base font-semibold md:flex">

            <Link
              href="/"
              className="text-gray-300 transition hover:text-amber-400"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-gray-300 transition hover:text-amber-400"
            >
              About
            </Link>

            <Link
              href="/skills"
              className="text-gray-300 transition hover:text-amber-400"
            >
              Skills
            </Link>

            <Link
              href="/projects"
              className="text-amber-400"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="text-gray-300 transition hover:text-amber-400"
            >
              Contact
            </Link>

          </div>

          {/* Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-amber-400/30 bg-amber-400/10 px-6 py-3 text-base font-semibold text-amber-300 transition hover:bg-amber-400/20"
          >
            Resume
          </a>

        </div>

      </nav>


      {/* ================= PROJECTS HERO ================= */}
      <section className="relative overflow-hidden">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[160px]" />

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

          {/* Heading */}
          <div className="max-w-4xl">

            <div className="mb-7 inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2.5 text-base font-semibold text-amber-300">
              Selected Work
            </div>

            <h1 className="text-6xl font-black leading-tight tracking-tight sm:text-7xl lg:text-8xl">
              My
              <span className="text-amber-400"> Projects.</span>
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-400 sm:text-2xl">
              A selection of projects I have built while developing
              my programming, web development, problem-solving and
              analytical skills.
            </p>

          </div>


          {/* ================= PROJECT CARDS ================= */}
          <div className="mt-20 space-y-8">

            {projects.map((project) => (
              <article
                key={project.number}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-400/30 sm:p-10"
              >

                {/* Hover glow */}
                <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-72 w-72 rounded-full bg-amber-400/5 blur-[100px] transition group-hover:bg-amber-400/10" />

                <div className="relative">

                  {/* Top row */}
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">

                    <div className="flex items-start gap-5">

                      <span className="text-3xl font-black text-amber-400/70">
                        {project.number}
                      </span>

                      <div>

                        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-400">
                          {project.category}
                        </p>

                        <h2 className="mt-2 text-3xl font-black sm:text-4xl">
                          {project.title}
                        </h2>

                      </div>

                    </div>

                    <span className="w-fit rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-gray-400">
                      {project.date}
                    </span>

                  </div>


                  {/* Description */}
                  <p className="mt-8 max-w-4xl text-lg leading-8 text-gray-400 sm:text-xl">
                    {project.description}
                  </p>


                  {/* Highlights */}
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">

                    {project.highlights.map((highlight) => (
                      <div
                        key={highlight}
                        className="flex items-center gap-3 rounded-xl border border-white/5 bg-black/30 px-5 py-4"
                      >

                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-400/10 text-sm text-amber-400">
                          ✓
                        </span>

                        <span className="text-base text-gray-300">
                          {highlight}
                        </span>

                      </div>
                    ))}

                  </div>


                  {/* Technologies */}
                  <div className="mt-8 flex flex-wrap gap-3">

                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                </div>

              </article>
            ))}

          </div>


          {/* ================= PROJECT PHILOSOPHY ================= */}
          <div className="mt-20 grid gap-6 lg:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                What I Focus On
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Learning by building.
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                Each project gives me an opportunity to strengthen
                my understanding of programming concepts and apply
                them to practical problems.
              </p>

            </div>


            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                Development Approach
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Simple. Practical. Responsive.
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                I focus on creating clean interfaces, understandable
                code and practical solutions while continuously
                improving my development skills.
              </p>

            </div>

          </div>


          {/* ================= CTA ================= */}
          <div className="mt-16 rounded-3xl border border-amber-400/20 bg-amber-400/[0.05] p-8 sm:p-12">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Let&apos;s Connect
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Interested in my work?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Have a project idea, internship opportunity or simply
              want to connect? I&apos;d be happy to hear from you.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                href="/contact"
                className="rounded-full bg-amber-400 px-8 py-4 text-lg font-bold text-black transition hover:-translate-y-1 hover:bg-amber-300"
              >
                Contact Me →
              </Link>

              <Link
                href="/"
                className="rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-lg font-bold transition hover:border-amber-400/40 hover:bg-amber-400/10"
              >
                Back to Home
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 bg-black px-6 py-8 text-center">

        <p className="text-base text-gray-500">
          © 2026 Tanu Jaiswal. All rights reserved.
        </p>

      </footer>

    </main>
  );
}