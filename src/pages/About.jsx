import { Download, Mail } from 'lucide-react'
import { GithubIcon, GitlabIcon } from '../components/BrandIcons'

export default function About() {
  const skills = [
    { name: 'React', level: '90%' },
    { name: 'JavaScript', level: '85%' },
    { name: 'TypeScript', level: '75%' },
    { name: 'Tailwind CSS', level: '90%' },
    { name: 'Node.js', level: '70%' },
    { name: 'UI/UX Design', level: '80%' },
  ]

  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
      <div className="mb-12 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Tentang <span className="text-blue-600 dark:text-blue-400">Saya</span>
        </h1>
        <div className="mx-auto mt-4 h-1 w-20 rounded bg-blue-600" />
      </div>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Frontend Developer
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
            Saya adalah pengembang frontend yang bersemangat dalam membangun web
            yang bersih dan fungsional. Dengan pengalaman membangun berbagai
            aplikasi web, saya selalu berusaha menggabungkan estetika dan
            fungsionalitas.
          </p>
          <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-300">
            Saya percaya bahwa desain yang baik dan kode yang terstruktur adalah
            kunci dari produk digital yang sukses. Saya selalu siap belajar hal
            baru dan menghadapi tantangan.
          </p>

          <h3 className="mt-8 text-xl font-bold text-gray-900 dark:text-white">
            Pengalaman
          </h3>
          <div className="mt-4 space-y-4">
            <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Frontend Developer — Freelance
              </h4>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Membangun website responsif untuk berbagai klien.
              </p>
            </div>
            <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Web Design — Personal Project
              </h4>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                Merancang UI/UX yang modern dan user-friendly.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
              onClick={() =>
                window.open('/CV-AndreasKuncoro.pdf', '_blank')
              }
            >
              <Download className="h-4 w-4" />
              Unduh CV
            </button>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="rounded-lg p-2 text-gray-500 transition hover:text-blue-600 dark:text-gray-400"
              >
                <GithubIcon className="h-6 w-6" />
              </a>
              <a
                href="https://gitlab.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitLab"
                className="rounded-lg p-2 text-gray-500 transition hover:text-blue-600 dark:text-gray-400"
              >
                <GitlabIcon className="h-6 w-6" />
              </a>
              <a
                href="mailto:andreas@email.com"
                aria-label="Email"
                className="rounded-lg p-2 text-gray-500 transition hover:text-blue-600 dark:text-gray-400"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Keterampilan & Teknologi
          </h3>
          <div className="mt-6 space-y-5">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-1 flex justify-between text-sm font-medium">
                  <span className="text-gray-700 dark:text-gray-200">
                    {skill.name}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400">
                    {skill.level}
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
                    style={{ width: skill.level }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
