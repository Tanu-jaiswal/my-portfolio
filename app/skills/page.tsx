import Link from "next/link";

const certificates = [
  {
    title: "AI-ML Virtual Internship",
    issuer: "EduSkills",
    file: "/certificates/AI-ML%20Virtual%20Internship%20tanu.pdf",
  },
  {
    title: "Artificial Intelligence",
    issuer: "Certification",
    file: "/certificates/Artificial%20Intelligence.pdf",
  },
  {
    title: "Data Analytics",
    issuer: "Certification",
    file: "/certificates/Data%20Analytics.pdf",
  },
  {
    title: "Data Science",
    issuer: "Certification",
    file: "/certificates/Data%20Science.pdf",
  },
  {
    title: "IBM Certificate",
    issuer: "IBM",
    file: "/certificates/IBM%20Cerificate.pdf",
  },
  {
    title: "Large Language Models (LLM)",
    issuer: "Certification",
    file: "/certificates/LLM%20.pdf",
  },
  {
    title: "Machine Learning Professional Certification",
    issuer: "Certification",
    file: "/certificates/Machine-learning.pdf",
  },
  {
    title: "MERN Full Stack Development With Project Virtual Internship",
    issuer: "Virtual Internship",
    file: "/certificates/MERN%20full%20Stack%20Development%20With%20Project%20Virtual%20Internship.pdf",
  },
  {
    title: "Python Object-Oriented Programming",
    issuer: "Python Certification",
    file: "/certificates/Python%20Object-Oriented%20Programming.pdf",
  },
];

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Python", "C", "Java"],
  },
  {
    title: "Frontend Development",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Core Computer Science",
    skills: [
      "Data Structures & Algorithms",
      "DBMS",
      "Operating Systems",
      "Software Engineering",
    ],
  },
  {
    title: "AI / ML & Data Science",
    skills: [
      "Machine Learning",
      "Data Preprocessing",
      "Data Analysis",
      "Analytical Thinking",
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      "GitHub",
      "VS Code",
      "Jupyter Notebook",
      "IntelliJ IDEA",
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      "Problem Solving",
      "Logical Thinking",
      "Team Collaboration",
      "Quick Learner",
      "Time Management",
    ],
  },
];

export default function Skills() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/85 backdrop-blur-xl">

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
              className="text-amber-400"
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


      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-[-180px] top-[15%] h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[160px]" />

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

          <div className="max-w-4xl">

            <div className="mb-7 inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2.5 text-base font-semibold text-amber-300">
              Skills & Certifications
            </div>

            <h1 className="text-6xl font-black leading-tight tracking-tight sm:text-7xl lg:text-8xl">
              What I
              <span className="text-amber-400"> Know.</span>
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-400 sm:text-2xl">
              A growing set of technical and professional skills developed
              through coursework, internships, certifications and practical
              projects.
            </p>

          </div>


          {/* ================= SKILLS ================= */}
          <div className="mt-20">

            <div className="mb-10">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                Technical Skills
              </p>

              <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                My Skill Set
              </h2>

            </div>


            <div className="grid gap-5 md:grid-cols-2">

              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-400/30"
                >

                  <h3 className="text-xl font-bold text-white">
                    {group.title}
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-3">

                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-white/10 bg-black/40 px-4 py-2.5 text-sm font-medium text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}

                  </div>

                </div>
              ))}

            </div>

          </div>


          {/* ================= CERTIFICATES ================= */}
          <div className="mt-24">

            <div className="mb-10">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                Certifications
              </p>

              <h2 className="mt-3 text-4xl font-black sm:text-5xl">
                Certificates & Learning
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-gray-400">
                Certifications and internship credentials that reflect
                my continuous learning and practical exposure.
              </p>

            </div>


            {/* Certificate Grid */}
            <div className="grid gap-5 md:grid-cols-2">

              {certificates.map((certificate, index) => (
                <div
                  key={certificate.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-amber-400/30"
                >

                  {/* Number */}
                  <div className="absolute right-6 top-5 text-5xl font-black text-white/[0.04]">
                    {String(index + 1).padStart(2, "0")}
                  </div>


                  <div className="relative">

                    {/* Certificate icon */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-amber-400/20 bg-amber-400/10 text-xl text-amber-400">
                      ✓
                    </div>


                    {/* Title */}
                    <h3 className="mt-6 max-w-xl text-xl font-bold leading-7 text-white">
                      {certificate.title}
                    </h3>


                    {/* Issuer */}
                    <p className="mt-2 text-base text-gray-500">
                      {certificate.issuer}
                    </p>


                    {/* PDF Button */}
                    <a
                      href={certificate.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2.5 text-sm font-semibold text-amber-300 transition hover:bg-amber-400/20"
                    >
                      View Certificate PDF →
                    </a>

                  </div>

                </div>
              ))}

            </div>

          </div>


          {/* ================= RESEARCH PAPER ================= */}
          <div className="mt-10 rounded-3xl border border-amber-400/20 bg-amber-400/[0.05] p-8 sm:p-10">

            <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                  Research
                </p>

                <h2 className="mt-3 text-3xl font-black sm:text-4xl">
                  Research Paper
                </h2>

                <p className="mt-3 max-w-2xl text-lg leading-8 text-gray-400">
                  View my research publication and explore the work
                  behind it.
                </p>

              </div>


              <a
                href="/certificates/Research%20paper.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit shrink-0 rounded-full bg-amber-400 px-7 py-3.5 text-base font-bold text-black transition hover:-translate-y-1 hover:bg-amber-300"
              >
                View Research Paper →
              </a>

            </div>

          </div>


          {/* ================= LEARNING ================= */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-3xl font-black text-amber-400">
                9.1
              </p>
              <p className="mt-2 text-gray-400">
                Current BCA CGPA
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-3xl font-black text-amber-400">
                84%
              </p>
              <p className="mt-2 text-gray-400">
                Class 10th
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <p className="text-3xl font-black text-amber-400">
                86%
              </p>
              <p className="mt-2 text-gray-400">
                Class 12th
              </p>
            </div>

          </div>


          {/* ================= CTA ================= */}
          <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
              Next Step
            </p>

            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Want to see what I can build?
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
              Explore my projects to see how I apply these skills
              to practical problems.
            </p>

            <Link
              href="/projects"
              className="mt-8 inline-flex rounded-full bg-amber-400 px-8 py-4 text-lg font-bold text-black transition hover:-translate-y-1 hover:bg-amber-300"
            >
              Explore Projects →
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