import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* ================= BACKGROUND PHOTO ================= */}
      <div
        className="fixed inset-0 z-0 bg-no-repeat"
        style={{
          backgroundImage: "url('/image.jpeg')",
          backgroundSize: "120% auto",
          backgroundPosition: "0% 50%",
        }}
      />

      {/* ================= DARK OVERLAY ================= */}
      <div className="fixed inset-0 z-[1] bg-black/40" />

      {/* ================= LEFT DARK GRADIENT ================= */}
      <div
        className="fixed inset-0 z-[2]"
        style={{
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.94) 22%, rgba(0,0,0,0.78) 43%, rgba(0,0,0,0.40) 68%, rgba(0,0,0,0.08) 100%)",
        }}
      />

      {/* ================= BOTTOM OVERLAY ================= */}
      <div
        className="fixed bottom-0 left-0 right-0 z-[2] h-48"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85), transparent)",
        }}
      />

      {/* ================= NAVBAR ================= */}
      <nav className="relative z-20 border-b border-white/10 bg-black/25 backdrop-blur-md">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">

          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-white"
          >
            TJ<span className="text-[#D6B36A]">.</span>
          </Link>

          {/* Navigation */}
          <div className="hidden items-center gap-8 text-sm font-medium md:flex">

            <Link
              href="/"
              className="text-[#D6B36A] transition hover:text-[#E3C47C]"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-gray-300 transition hover:text-[#D6B36A]"
            >
              About
            </Link>

            <Link
              href="/skills"
              className="text-gray-300 transition hover:text-[#D6B36A]"
            >
              Skills
            </Link>

            <Link
              href="/projects"
              className="text-gray-300 transition hover:text-[#D6B36A]"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="text-gray-300 transition hover:text-[#D6B36A]"
            >
              Contact
            </Link>

          </div>

          {/* Resume */}
          <a
            href="/Resume%20Tanu.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[#D6B36A]/40 bg-[#D6B36A]/10 px-5 py-2.5 text-sm font-medium text-[#E3C47C] backdrop-blur-md transition hover:bg-[#D6B36A]/20"
          >
            Resume
          </a>

        </div>

      </nav>


      {/* ================= HERO ================= */}
      <section className="relative z-10 min-h-[calc(100vh-80px)]">

        <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-6 py-16 lg:px-10">

          {/* ================= LEFT CONTENT ================= */}
          <div className="relative w-full max-w-2xl lg:-left-5">

            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D6B36A]/30 bg-black/60 px-5 py-2.5 text-sm font-medium text-gray-200 backdrop-blur-md">

              <span className="h-2 w-2 rounded-full bg-[#D6B36A]" />

              Welcome to my portfolio

            </div>


            {/* ================= MAIN HEADING ================= */}
            <h1 className="whitespace-nowrap text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-[40px]">

              Hi, I&apos;m{" "}

              <span className="text-[#D6B36A]">
                Tanu Jaiswal
              </span>

            </h1>


            {/* ================= JOB TITLE ================= */}
            <h2 className="mt-5 text-xl font-bold leading-8 text-white sm:text-2xl">

              Software Developer

              <span className="mx-2 text-[#D6B36A]">
                |
              </span>

              <span className="text-gray-300">
                Web & AI/ML Enthusiast
              </span>

            </h2>


            {/* ================= DESCRIPTION ================= */}
            <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg">
              I enjoy building practical web applications and turning
              ideas into simple, useful digital experiences.
            </p>

              <p className="mt-3 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
              I&apos;m currently pursuing BCA and exploring web development,
              AI/ML and data science through projects, internships and
              continuous learning.
            </p>

            {/* ================= SKILLS ================= */}
            <div className="mt-6 flex max-w-xl flex-wrap gap-2.5">

              <span className="rounded-full border border-white/15 bg-black/50 px-4 py-2 text-sm font-medium text-gray-200 backdrop-blur-md transition hover:border-[#D6B36A]/50">
                React
              </span>

              <span className="rounded-full border border-white/15 bg-black/50 px-4 py-2 text-sm font-medium text-gray-200 backdrop-blur-md transition hover:border-[#D6B36A]/50">
                Next.js
              </span>

              <span className="rounded-full border border-white/15 bg-black/50 px-4 py-2 text-sm font-medium text-gray-200 backdrop-blur-md transition hover:border-[#D6B36A]/50">
                Python
              </span>

              <span className="rounded-full border border-white/15 bg-black/50 px-4 py-2 text-sm font-medium text-gray-200 backdrop-blur-md transition hover:border-[#D6B36A]/50">
                AI / ML
              </span>

              <span className="rounded-full border border-white/15 bg-black/50 px-4 py-2 text-sm font-medium text-gray-200 backdrop-blur-md transition hover:border-[#D6B36A]/50">
                Data Science
              </span>

            </div>


            {/* ================= BUTTONS ================= */}
            <div className="mt-8 flex flex-wrap gap-3">

              <Link
                href="/projects"
                className="rounded-full bg-[#D6B36A] px-7 py-3.5 text-base font-bold text-black shadow-lg shadow-[#D6B36A]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#E3C47C]"
              >
                View My Work →
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-white/20 bg-black/50 px-7 py-3.5 text-base font-bold text-white backdrop-blur-md transition duration-300 hover:border-[#D6B36A]/50 hover:bg-[#D6B36A]/10"
              >
                Contact Me
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* ================= STATS ================= */}
      <section className="relative z-20 mx-auto max-w-7xl px-6 pb-12 lg:px-10">

        <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-black/60 backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">

          {/* Internships */}
          <div className="border-b border-white/10 p-6 text-center sm:border-r lg:border-b-0">

            <h3 className="text-3xl font-black text-[#D6B36A]">
              3+
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Internships
            </p>

          </div>


          {/* Certifications */}
          <div className="border-b border-white/10 p-6 text-center lg:border-b-0 lg:border-r">

            <h3 className="text-3xl font-black text-[#D6B36A]">
              5+
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Certifications
            </p>

          </div>


          {/* Research */}
          <div className="border-b border-white/10 p-6 text-center sm:border-r sm:border-b-0">

            <h3 className="text-3xl font-black text-[#D6B36A]">
              1
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Research Publication
            </p>

          </div>


          {/* Percentage */}
          <div className="p-6 text-center">

            <h3 className="text-3xl font-black text-[#D6B36A]">
              85.91%
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              BCA Percentage
            </p>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}
      <footer className="relative z-20 border-t border-white/10 bg-black/50 px-6 py-7 text-center backdrop-blur-xl">

        <p className="text-sm text-gray-400">
          © 2026 Tanu Jaiswal. All rights reserved.
        </p>

      </footer>

    </main>
  );
}