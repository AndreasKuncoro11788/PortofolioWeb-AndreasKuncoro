import { ExternalLink } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { GithubIcon } from './BrandIcons'

export default function ProjectCard({ project, index = 0 }) {
  const { t } = useTranslation()

  return (
    <article className="group flex h-full flex-col border border-line bg-paper p-5 transition-colors duration-300 hover:border-ink/30">
      <div className="relative flex aspect-[4/3] items-end justify-between overflow-hidden bg-surface p-5">
        <span
          aria-hidden="true"
          className="font-serif text-[clamp(3rem,5vw,4.5rem)] font-medium leading-none text-ink/10"
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="eyebrow text-[10px]">
          {t(`projects.${project.category}`)}
        </span>

        {project.featured && (
          <span className="absolute left-5 top-4 flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
            <span aria-hidden="true" className="h-1.5 w-1.5 bg-accent" />
            {t('projects.featured')}
          </span>
        )}

        {project.links?.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="absolute right-5 top-4 border border-line bg-paper p-2 text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
            aria-label={t('projects.viewDemo')}
          >
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </div>

      <div className="flex flex-1 flex-col pt-5">
        {project.meta && <p className="eyebrow text-[10px]">{project.meta}</p>}

        <h3 className="mt-3 font-serif text-[1.4rem] font-medium leading-[1.15] tracking-[-0.01em] text-ink">
          {project.title}
        </h3>

        <p className="mt-3 text-[14px] leading-relaxed text-muted">
          {project.description}
        </p>

        {project.features?.length > 0 && (
          <div className="mt-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
              {t('projects.features')}
            </p>
            <div className="mt-2 grid gap-1.5">
              {project.features.map((feature) => (
                <span
                  key={feature}
                  className="flex gap-2.5 text-[11px] leading-relaxed text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.65em] h-px w-3 flex-none bg-accent"
                  />
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.contributions?.length > 0 && (
          <div className="mt-5">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
              {t('projects.contributions')}
            </p>
            <ul className="mt-2 space-y-1.5">
              {project.contributions.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 text-[11px] leading-relaxed text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.65em] h-px w-3 flex-none bg-accent"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.achievements?.length > 0 && (
          <div className="mt-5 border-t border-line pt-4">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
              {t('projects.achievements')}
            </p>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {project.achievements.map((item) => (
                <div key={item.label}>
                  <p className="font-serif text-[1.4rem] font-medium leading-none text-ink">
                    {item.value}
                  </p>
                  <p className="mt-1.5 text-[10px] uppercase leading-tight tracking-[0.1em] text-muted">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto pt-6">
          <div className="flex flex-wrap gap-x-4 gap-y-2 border-t border-line pt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.links?.code && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 border border-line px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              {t('projects.viewCode')}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
