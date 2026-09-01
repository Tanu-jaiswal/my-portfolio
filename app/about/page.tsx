import Link from "next/link";

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

          <Link
            href="/"
            className="text-3xl font-black tracking-tight"
          >
            TJ<span className="text-amber-400">.</span>
          </Link>

          <div className="hidden items-center gap-10 text-base font-semibold md:flex">

            <Link
              href="/"
              className="text-gray-300 transition hover:text-amber-400"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-amber-400"
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
              className="text-gray-300 transition hover:text-amber-400"
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


      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">

        <div className="pointer-events-none absolute left-[-200px] top-[10%] h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[160px]" />

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

          {/* Heading */}
          <div className="max-w-4xl">

            <div className="mb-7 inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2.5 text-base font-semibold text-amber-300">
              About Me
            </div>

            <h1 className="text-6xl font-black leading-tight tracking-tight sm:text-7xl lg:text-8xl">
              My journey,
              <span className="text-amber-400"> my work.</span>
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-400 sm:text-2xl">
              I&apos;m Tanu Jaiswal, a BCA student, software developer
              and researcher focused on building practical skills
              through development, internships and academic work.
            </p>

          </div>


          {/* ================= ABOUT + RESEARCH ================= */}
          <div className="mt-20 grid gap-8 lg:grid-cols-2">

            {/* About */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-9 backdrop-blur-xl sm:p-11">

              <p className="text-base font-semibold uppercase tracking-[0.2em] text-amber-400">
                Who I Am
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Software Developer
              </h2>

              <div className="mt-7 space-y-6 text-lg leading-9 text-gray-400">

                <p>
                  I am currently pursuing my Bachelor of Computer
                  Applications at Invertis University and continuously
                  developing my programming and problem-solving skills.
                </p>

                <p>
                  I enjoy creating modern and responsive web applications
                  and working on projects that allow me to apply my
                  technical knowledge in practical situations.
                </p>

                <p>
                  Alongside development, I have gained experience through
                  internships, certifications and research-oriented work.
                </p>

              </div>

            </div>


            {/* Research */}
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-9 backdrop-blur-xl sm:p-11">

              <p className="text-base font-semibold uppercase tracking-[0.2em] text-amber-400">
                Research
              </p>

              <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                Researcher
              </h2>

              <p className="mt-7 text-lg leading-9 text-gray-400">
                My academic journey also includes research-oriented work,
                where I explore technical topics, analyse information and
                develop a deeper understanding of technology.
              </p>

              <div className="mt-8 rounded-2xl border border-amber-400/20 bg-amber-400/[0.06] p-7">

                <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
                  Research Publication
                </p>

                <p className="mt-3 text-2xl font-bold text-white">
                  1 Research Publication
                </p>

                <p className="mt-3 text-base leading-7 text-gray-400">
                  Research experience demonstrating academic curiosity,
                  analytical thinking and technical exploration.
                </p>

              </div>

            </div>

          </div>


          {/* ================= EDUCATION ================= */}
          <div className="mt-20">

            <div className="mb-9">

              <p className="text-base font-semibold uppercase tracking-[0.2em] text-amber-400">
                Education
              </p>

              <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                Academic Background
              </h2>

            </div>


            <div className="grid gap-6 md:grid-cols-3">

              {/* 10th */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-400/30">

                <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                  10th
                </p>

                <h3 className="mt-4 text-2xl font-bold">
                  Secondary Education
                </h3>

                <p className="mt-3 text-lg text-gray-400">
                  Completed in 2022
                </p>

                <div className="mt-7">

                  <p className="text-4xl font-black text-amber-400">
                    84%
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Sanatan Dharm Sanatan Dharma Balika Inter College,
                    Lakhimpur Kheri
                  </p>

                </div>

              </div>


              {/* 12th */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-400/30">

                <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
                  12th
                </p>

                <h3 className="mt-4 text-2xl font-bold">
                  Senior Secondary
                </h3>

                <p className="mt-3 text-lg text-gray-400">
                  Completed in 2024
                </p>

                <div className="mt-7">

                  <p className="text-4xl font-black text-amber-400">
                    86%
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Sanatan Dharm Saraswati Vidya Mandir,
                    Lakhimpur Kheri
                  </p>

                </div>

              </div>


              {/* BCA */}
              <div className="rounded-3xl border border-amber-400/20 bg-amber-400/[0.05] p-8 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-400/40">

                <p className="text-sm font-semibold uppercase tracking-widest text-amber-400">
                  Graduation
                </p>

                <h3 className="mt-4 text-2xl font-bold">
                  Bachelor of Computer Applications
                </h3>

                <p className="mt-3 text-lg text-gray-400">
                  Invertis University • 2024–2027
                </p>

                <div className="mt-7">

                  <p className="text-4xl font-black text-amber-400">
                    9.1
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Current CGPA
                  </p>

                </div>

              </div>

            </div>

          </div>


          {/* ================= EXPERIENCE ================= */}
          <div className="mt-20">

            <div className="mb-9">

              <p className="text-base font-semibold uppercase tracking-[0.2em] text-amber-400">
                Experience
              </p>

              <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                Internship Experience
              </h2>

            </div>


            <div className="grid gap-6 lg:grid-cols-2">

              {/* Google AI/ML */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

                <div className="flex flex-wrap items-start justify-between gap-4">

                  <div>
                    <h3 className="text-2xl font-bold">
                      Google AI/ML for Developers
                    </h3>

                    <p className="mt-2 text-base text-amber-400">
                      EduSkills
                    </p>
                  </div>

                  <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
                    Jan 2026 – Mar 2026
                  </span>

                </div>

                <ul className="mt-6 space-y-3 text-lg leading-8 text-gray-400">
                  <li>
                    • Completed a 10-week AI/ML internship focused on
                    machine learning concepts, data preprocessing and
                    real-world applications.
                  </li>

                  <li>
                    • Strengthened analytical thinking and
                    problem-solving skills through practical tasks.
                  </li>
                </ul>

              </div>


              {/* Data Science */}
              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

                <div className="flex flex-wrap items-start justify-between gap-4">

                  <div>
                    <h3 className="text-2xl font-bold">
                      Data Science Master Virtual Internship
                    </h3>

                    <p className="mt-2 text-base text-amber-400">
                      EduSkills & AICTE
                    </p>
                  </div>

                  <span className="rounded-full border border-white/10 px-4 py-2 text-sm text-gray-400">
                    Oct 2025 – Dec 2025
                  </span>

                </div>

                <ul className="mt-6 space-y-3 text-lg leading-8 text-gray-400">
                  <li>
                    • Worked on data preprocessing, cleaning and
                    analysis tasks using data-driven approaches.
                  </li>

                  <li>
                    • Gained hands-on exposure to analytical workflows
                    and problem-solving techniques.
                  </li>
                </ul>

              </div>

            </div>

          </div>


          {/* ================= SKILLS ================= */}
          <div className="mt-20">

            <div className="mb-9">

              <p className="text-base font-semibold uppercase tracking-[0.2em] text-amber-400">
                Technical Profile
              </p>

              <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                What I Work With
              </h2>

            </div>


            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <h3 className="text-xl font-bold">
                  Programming
                </h3>

                <p className="mt-4 text-lg leading-8 text-gray-400">
                  Python, C, Data Structures & Algorithms, Java
                </p>
              </div>


              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <h3 className="text-xl font-bold">
                  Frontend Development
                </h3>

                <p className="mt-4 text-lg leading-8 text-gray-400">
                  HTML, CSS, JavaScript
                </p>
              </div>


              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <h3 className="text-xl font-bold">
                  Core Computer Science
                </h3>

                <p className="mt-4 text-lg leading-8 text-gray-400">
                  DBMS, Operating Systems, Software Engineering
                </p>
              </div>


              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <h3 className="text-xl font-bold">
                  Data & Analytics
                </h3>

                <p className="mt-4 text-lg leading-8 text-gray-400">
                  Data Processing, Data Representation, Basic
                  Analytical Thinking
                </p>
              </div>


              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <h3 className="text-xl font-bold">
                  Tools & Technologies
                </h3>

                <p className="mt-4 text-lg leading-8 text-gray-400">
                  GitHub, VS Code, Jupyter Notebook, IntelliJ IDEA
                </p>
              </div>


              <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
                <h3 className="text-xl font-bold">
                  Soft Skills
                </h3>

                <p className="mt-4 text-lg leading-8 text-gray-400">
                  Problem Solving, Logical Thinking, Team
                  Collaboration, Quick Learner, Time Management
                </p>
              </div>

            </div>

          </div>


          {/* ================= CERTIFICATIONS ================= */}
          <div className="mt-20">

            <div className="mb-9">

              <p className="text-base font-semibold uppercase tracking-[0.2em] text-amber-400">
                Certifications
              </p>

              <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                Continuous Learning
              </h2>

            </div>


            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-10">

              <div className="grid gap-4 md:grid-cols-2">

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <p className="text-lg font-semibold">
                    Programming with Python Professional Certificate
                  </p>
                  <p className="mt-2 text-gray-500">
                    OpenEDG Python Institute / LinkedIn Learning
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <p className="text-lg font-semibold">
                    Data Science Master Virtual Internship
                  </p>
                  <p className="mt-2 text-gray-500">
                    EduSkills & AICTE
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <p className="text-lg font-semibold">
                    LLM for Young Developers
                  </p>
                  <p className="mt-2 text-gray-500">
                    IND AI, Meta & NASSCOM FutureSkills
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <p className="text-lg font-semibold">
                    Machine Learning Professional Certification
                  </p>
                  <p className="mt-2 text-gray-500">
                    RapidMiner / Altair
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-black/40 p-5 md:col-span-2">
                  <p className="text-lg font-semibold">
                    AI-ML Virtual Internship
                  </p>
                  <p className="mt-2 text-gray-500">
                    EduSkills – Google for Developers
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* ================= CTA ================= */}
          <div className="mt-16 flex flex-wrap gap-5">

            <Link
              href="/projects"
              className="rounded-full bg-amber-400 px-8 py-4 text-lg font-bold text-black transition hover:-translate-y-1 hover:bg-amber-300"
            >
              View My Projects →
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 text-lg font-bold transition hover:border-amber-400/40 hover:bg-amber-400/10"
            >
              Contact Me
            </Link>

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