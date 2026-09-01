import Link from "next/link";

export default function Contact() {
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
              className="text-gray-300 transition hover:text-amber-400"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className="text-amber-400"
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


      {/* ================= CONTACT SECTION ================= */}
      <section className="relative overflow-hidden">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-[-180px] top-[20%] h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[160px]" />

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">

          {/* ================= HEADING ================= */}
          <div className="max-w-4xl">

            <div className="mb-7 inline-flex rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2.5 text-base font-semibold text-amber-300">
              Get In Touch
            </div>

            <h1 className="text-6xl font-black leading-tight tracking-tight sm:text-7xl lg:text-8xl">
              Let&apos;s
              <span className="text-amber-400"> Connect.</span>
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-400 sm:text-2xl">
              I&apos;m always open to discussing internship opportunities,
              projects, collaborations and interesting ideas.
            </p>

          </div>


          {/* ================= CONTENT ================= */}
          <div className="mt-20 grid gap-8 lg:grid-cols-2">

            {/* LEFT INFO */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-10">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                Contact Information
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Let&apos;s talk about your idea.
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                Whether you have an opportunity, project idea or
                simply want to connect professionally, feel free
                to reach out.
              </p>


              {/* Email */}
              <a
                href="mailto:tanujaiswal676@gmail.com"
                className="mt-10 flex items-center gap-5 rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-amber-400/40 hover:bg-amber-400/5"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-xl text-amber-400">
                  @
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Email
                  </p>

                  <p className="mt-1 text-base font-semibold text-gray-200 sm:text-lg">
                    tanujaiswal676@gmail.com
                  </p>
                </div>

              </a>


              {/* Location */}
              <div className="mt-4 flex items-center gap-5 rounded-2xl border border-white/10 bg-black/30 p-5">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-xl text-amber-400">
                  ●
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Location
                  </p>

                  <p className="mt-1 text-base font-semibold text-gray-200 sm:text-lg">
                    Lakhimpur Kheri, Uttar Pradesh
                  </p>
                </div>

              </div>


              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/tanu-jaiswal-59a16b348/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-5 rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-amber-400/40 hover:bg-amber-400/5"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-lg font-bold text-amber-400">
                  in
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    LinkedIn
                  </p>

                  <p className="mt-1 text-base font-semibold text-gray-200 sm:text-lg">
                    Connect with me
                  </p>
                </div>

              </a>


              {/* GitHub */}
              <a
                href="https://github.com/Tanu-jaiswal"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-5 rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:border-amber-400/40 hover:bg-amber-400/5"
              >

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 text-lg font-bold text-amber-400">
                  &lt;/&gt;
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    GitHub
                  </p>

                  <p className="mt-1 text-base font-semibold text-gray-200 sm:text-lg">
                    View my projects
                  </p>
                </div>

              </a>

            </div>


            {/* RIGHT MESSAGE */}
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl sm:p-10">

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-400">
                Send a Message
              </p>

              <h2 className="mt-4 text-3xl font-black sm:text-4xl">
                Have something in mind?
              </h2>

              <p className="mt-5 text-lg leading-8 text-gray-400">
                You can contact me directly through email. I&apos;ll
                get back to you as soon as possible.
              </p>


              {/* Name */}
              <div className="mt-8">

                <label className="mb-3 block text-sm font-semibold text-gray-300">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-base text-white outline-none placeholder:text-gray-600 transition focus:border-amber-400/50"
                />

              </div>


              {/* Email */}
              <div className="mt-6">

                <label className="mb-3 block text-sm font-semibold text-gray-300">
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-base text-white outline-none placeholder:text-gray-600 transition focus:border-amber-400/50"
                />

              </div>


              {/* Message */}
              <div className="mt-6">

                <label className="mb-3 block text-sm font-semibold text-gray-300">
                  Message
                </label>

                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-base text-white outline-none placeholder:text-gray-600 transition focus:border-amber-400/50"
                />

              </div>


              {/* Email Button */}
              <a
                href="mailto:tanujaiswal676@gmail.com"
                className="mt-7 block w-full rounded-xl bg-amber-400 px-8 py-4 text-center text-lg font-bold text-black transition hover:-translate-y-1 hover:bg-amber-300"
              >
                Send Message →
              </a>

            </div>

          </div>


          {/* ================= AVAILABILITY ================= */}
          <div className="mt-10 rounded-3xl border border-amber-400/20 bg-amber-400/[0.05] p-8 sm:p-10">

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

              <div>

                <div className="flex items-center gap-3">

                  <span className="h-3 w-3 animate-pulse rounded-full bg-green-500" />

                  <p className="text-lg font-bold text-white">
                    Currently open to opportunities
                  </p>

                </div>

                <p className="mt-3 max-w-2xl text-base leading-7 text-gray-400">
                  Open to internships, web development opportunities,
                  collaborations and learning experiences.
                </p>

              </div>

              <a
                href="mailto:tanujaiswal676@gmail.com"
                className="w-fit rounded-full border border-amber-400/30 px-7 py-3.5 text-base font-bold text-amber-300 transition hover:bg-amber-400/10"
              >
                Email Me
              </a>

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