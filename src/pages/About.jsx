import { Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { GithubIcon } from '../components/BrandIcons'
import SectionHeader from '../components/SectionHeader'

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
    <section id="about" className="relative scroll-mt-24">
      <div className="shell section">
        <SectionHeader
          index="02"
          overline={t('about.overline')}
          title={t('about.title')}
        />

        <div className="mt-[clamp(3rem,5vw,5rem)] grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <h3 className="display-sub text-ink">{t('about.subHeading')}</h3>

            <div className="body-copy mt-6 max-w-[62ch] space-y-5 text-muted">
              <p>
                <span className="float-left mr-3 mt-1 font-serif text-[4.5rem] font-medium leading-[0.75] text-ink">
                  {t('about.p1').charAt(0)}
                </span>
                {t('about.p1').slice(1)}
              </p>
              <p>{t('about.p2')}</p>
            </div>

            <div className="mt-14">
              <p className="eyebrow">{t('about.expTitle')}</p>
              <div className="mt-4">
                {experiences.map((exp) => (
                  <article key={exp.title} className="border-t border-line py-7">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-12">
                      <div className="sm:col-span-3">
                        <p className="text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted">
                          {exp.period}
                        </p>
                      </div>
                      <div className="sm:col-span-9">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                          <h4 className="font-serif text-[1.35rem] font-medium leading-tight text-ink">
                            {exp.title}
                          </h4>
                          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
                            {exp.role}
                          </span>
                        </div>
                        <ul className="mt-4 space-y-2.5">
                          {exp.points.map((point) => (
                            <li
                              key={point}
                              className="flex gap-3 text-[14px] leading-relaxed text-muted"
                            >
                              <span
                                aria-hidden="true"
                                className="mt-[0.7em] h-px w-4 flex-none bg-accent"
                              />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-10 flex items-center gap-6 border-t border-line pt-6">
              <a
                href="https://github.com/AndreasKuncoro11788"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-muted transition-colors duration-300 hover:text-accent"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
              <a
                href="mailto:andreaskuncoroadinugroho@gmail.com"
                aria-label="Email"
                className="text-muted transition-colors duration-300 hover:text-accent"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <aside className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">{t('about.skillsTitle')}</p>
              <div className="mt-5">
                {skillCategories.map((category) => (
                  <div key={category.key} className="border-t border-line py-5">
                    <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink">
                      {category.label}
                    </p>
                    <p className="mt-3 text-[13px] leading-relaxed text-muted">
                      {category.items.join(' · ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
