import { Download, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { GithubIcon, GitlabIcon } from '../components/BrandIcons'

export default function About() {
  const { t } = useTranslation()

  const skills = [
    { name: 'React', level: '90%' },
    { name: 'JavaScript', level: '85%' },
    { name: 'TypeScript', level: '75%' },
    { name: 'Tailwind CSS', level: '90%' },
    { name: 'Node.js', level: '70%' },
    { name: 'UI/UX Design', level: '80%' },
  ]

  const experiences = [
    { title: t('about.exp1'), desc: t('about.exp1desc') },
    { title: t('about.exp2'), desc: t('about.exp2desc') },
  ]

  return (
    <section id="about" className="relative scroll-mt-20">
      <div className="mx-auto max-w-[1600px] px-8 py-24 md:px-16 md:py-32">
        <div className="mb-16 border-t border-[#1A1A1A] pt-8">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#6C6863]">
            {t('about.title')}
          </p>
          <h2 className="font-serif text-5xl font-bold leading-[0.9] tracking-tight text-[#1A1A1A] md:text-7xl">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="mb-6 font-serif text-2xl font-bold text-[#1A1A1A]">
              Frontend Developer
            </h3>

            <div className="space-y-6 text-base leading-relaxed text-[#6C6863]">
              <p>
                <span className="float-left mr-3 mt-1 font-serif text-7xl font-bold leading-[0.8] text-[#1A1A1A]">
                  {t('about.p1').charAt(0)}
                </span>
                {t('about.p1').slice(1)}
              </p>
              <p>{t('about.p2')}</p>
            </div>

            <div className="mt-12">
              <div className="mb-2 h-px w-8 bg-[#D4AF37]" />
              <h3 className="mb-6 text-xs uppercase tracking-[0.25em] text-[#6C6863]">
                {t('about.expTitle')}
              </h3>
              <div className="space-y-0">
                {experiences.map((exp) => (
                  <div
                    key={exp.title}
                    className="border-t border-[#1A1A1A]/10 py-6"
                  >
                    <h4 className="font-serif text-lg font-bold text-[#1A1A1A]">
                      {exp.title}
                    </h4>
                    <p className="mt-1 text-sm leading-relaxed text-[#6C6863]">
                      {exp.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6">
              <button
                type="button"
                className="group relative inline-flex h-12 items-center overflow-hidden bg-[#1A1A1A] px-8 text-xs font-medium uppercase tracking-[0.2em] text-[#F9F8F6] transition-shadow duration-500 hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
                onClick={() =>
                  window.open('/CV-AndreasKuncoro.pdf', '_blank')
                }
              >
                <span className="absolute inset-0 -translate-x-full bg-[#D4AF37] transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-x-0" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  {t('about.downloadCV')}
                </span>
              </button>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="text-[#6C6863] transition-colors duration-500 hover:text-[#D4AF37]"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
                <a
                  href="https://gitlab.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitLab"
                  className="text-[#6C6863] transition-colors duration-500 hover:text-[#D4AF37]"
                >
                  <GitlabIcon className="h-5 w-5" />
                </a>
                <a
                  href="mailto:andreas@email.com"
                  aria-label="Email"
                  className="text-[#6C6863] transition-colors duration-500 hover:text-[#D4AF37]"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="mb-2 h-px w-8 bg-[#D4AF37]" />
            <h3 className="mb-8 text-xs uppercase tracking-[0.25em] text-[#6C6863]">
              {t('about.skillsTitle')}
            </h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="mb-2 flex items-baseline justify-between">
                    <span className="text-xs uppercase tracking-[0.2em] text-[#1A1A1A]">
                      {skill.name}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#6C6863]">
                      {skill.level}
                    </span>
                  </div>
                  <div className="h-px w-full bg-[#1A1A1A]/10">
                    <div
                      className="h-px bg-[#D4AF37]"
                      style={{ width: skill.level }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
