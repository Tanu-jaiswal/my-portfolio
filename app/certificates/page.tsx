const certificates = [
  {
    title: "AI-ML Virtual Internship",
    issuer: "EduSkills",
    file: "/certificates/AI-ML Virtual Internship tanu.pdf",
  },
  {
    title: "Introduction to Artificial Intelligence",
    issuer: "LinkedIn Learning",
    file: "public/certificates/Artificial Intelligence.pdf",
  },
  {
    title: "Learning Data Analytics: Foundations",
    issuer: "LinkedIn Learning",
    file: "/certificates/Data Analytics.pdf",
  },
  {
    title: "Data Science Virtual Internship",
    issuer: "EduSkills",
    file: "/certificates/Data Science.pdf",
  },
  {
    title: "Getting Started with Artificial Intelligence",
    issuer: "IBM",
    file: "public/certificates/IBM Cerificate.pdf",
  },
  {
    title: "Research Paper",
    issuer: "Research Paper",
    file: "public/certificates/Research paper.pdf",
  },
  {
    title: "LLM for Young Developers",
    issuer: "IndiaAI / Meta",
    file: "/certificates/LLM_.pdf",
  },
  {
    title: "Machine Learning Professional Certification",
    issuer: "Professional Certification",
    file: "/certificates/Machine Learning Professional Certification.pdf",
  },
  {
    title: "MERN Full Stack Development",
    issuer: "EduSkills",
    file: "/certificates/MERN full Stack Development With Project Virtual Internship.pdf",
  },
  {
    title: "Python Object-Oriented Programming",
    issuer: "LinkedIn Learning",
    file: "/certificates/Python Object-Oriented Programming.pdf",
  },
];

export default function Certificates() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">

        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Achievements
        </p>

        <h1 className="text-4xl font-bold md:text-6xl">
          Certificates
        </h1>

        <p className="mt-5 max-w-2xl text-gray-400">
          A collection of certifications, internships and professional
          achievements from my learning journey.
        </p>

        <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="group rounded-2xl border border-white/10
                         bg-white/[0.04] p-6 backdrop-blur-xl
                         transition-all duration-300
                         hover:-translate-y-2
                         hover:border-cyan-400/50
                         hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]"
            >

              <div
                className="mb-6 flex h-20 w-20 items-center justify-center
                           rounded-2xl bg-gradient-to-br from-cyan-400
                           to-purple-500 text-3xl shadow-lg"
              >
                📜
              </div>

              <p className="text-sm font-medium text-cyan-400">
                {certificate.issuer}
              </p>

              <h2 className="mt-2 text-xl font-bold leading-tight">
                {certificate.title}
              </h2>

              <div className="mt-6 flex gap-3">

                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-5 py-2.5
                             text-sm font-semibold text-black
                             transition hover:scale-105"
                >
                  View Certificate ↗
                </a>

                <a
                  href={certificate.file}
                  download
                  className="rounded-full border border-white/20
                             px-5 py-2.5 text-sm font-semibold
                             transition hover:bg-white hover:text-black"
                >
                  Download
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </main>
  );
}