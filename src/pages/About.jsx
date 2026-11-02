import { Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { GithubIcon } from '../components/BrandIcons'

export default function About() {
  const { t } = useTranslation()

  const skillCategories = [
    {
      key: 'languages',
      label: t('about.skillCategories.languages'),
      items: t('skills.languages', { returnObjects: true }),
    },
    {
      key: 'frameworks',
      label: t('about.skillCategories.frameworks'),
      items: t('skills.frameworks', { returnObjects: true }),
    },
    {
      key: 'api',
      label: t('about.skillCategories.api'),
      items: t('skills.api', { returnObjects: true }),
    },
    {
      key: 'tools',
      label: t('about.skillCategories.tools'),
      items: t('skills.tools', { returnObjects: true }),
    },
  ]

  const experiences = t('about.experiences', { returnObjects: true })

  return (
    <section id="about" className="relative scroll-mt-20">
      <div className="mx-auto max-w-[1600px] px-8 py-24 md:px-16 md:py-32">
        <div className="mb-16 border-t border-black pt-8">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#6B7280]">
            {t('about.overline')}
          </p>
          <h2 className="font-serif text-5xl font-bold leading-[0.9] tracking-tight text-black md:text-7xl">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h3 className="mb-6 font-serif text-2xl font-bold text-black">
              {t('about.subHeading')}
            </h3>

            <div className="space-y-6 text-base leading-relaxed text-[#6B7280]">
              <p>
                <span className="float-left mr-3 mt-1 font-serif text-7xl font-bold leading-[0.8] text-black">
                  {t('about.p1').charAt(0)}
                </span>
                {t('about.p1').slice(1)}
              </p>
              <p>{t('about.p2')}</p>
            </div>

            <div className="mt-12">
              <div className="mb-2 h-px w-8 bg-[#004BBC]" />
              <h3 className="mb-6 text-xs uppercase tracking-[0.25em] text-[#6B7280]">
                {t('about.expTitle')}
              </h3>
              <div className="space-y-0">
                {experiences.map((exp) => (
                  <div
                    key={exp.title}
                    className="border-t border-black/10 py-6"
                  >
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <h4 className="font-serif text-lg font-bold text-black">
                        {exp.title}
                      </h4>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B7280]">
                        {exp.period}
                      </span>
                    </div>
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.25em] text-[#004BBC]">
                      {exp.role}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {exp.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-relaxed text-[#6B7280]"
                        >
                          <span className="mt-2 h-1 w-1 flex-shrink-0 bg-[#004BBC]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 flex items-center gap-4">
              <a
                href="https://github.com/AndreasKuncoro11788"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-[#6B7280] transition-colors duration-500 hover:text-[#004BBC]"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="mailto:andreaskuncoroadinugroho@gmail.com"
                aria-label="Email"
                className="text-[#6B7280] transition-colors duration-500 hover:text-[#004BBC]"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="mb-2 h-px w-8 bg-[#004BBC]" />
            <h3 className="mb-10 text-xs uppercase tracking-[0.25em] text-[#6B7280]">
              {t('about.skillsTitle')}
            </h3>
            <div className="space-y-9">
              {skillCategories.map((cat) => (
                <div key={cat.key}>
                  <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em] text-[#004BBC]">
                    {cat.label}
                  </p>
                  <div className="flex flex-wrap gap-x-5 gap-y-2">
                    {cat.items.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] uppercase tracking-[0.15em] text-black"
                      >
                        {item}
                      </span>
                    ))}
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