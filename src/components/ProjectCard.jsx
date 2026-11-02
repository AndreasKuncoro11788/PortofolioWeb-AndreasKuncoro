import { ExternalLink, Folder } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { GithubIcon } from './BrandIcons'

export default function ProjectCard({ project }) {
  const { t } = useTranslation()

  return (
    <div className="group flex h-full flex-col border border-black/10 bg-white transition-all duration-500 hover:border-[#004BBC]/50 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
      <div className="relative flex aspect-[4/5] items-center justify-center border-b border-black/10 bg-gradient-to-br from-[#E5E7EB] to-white grayscale transition-all duration-[1500ms] group-hover:grayscale-0">
        <Folder className="h-16 w-16 text-black/20 transition-all duration-[1500ms] group-hover:text-[#004BBC]/40" />
        {project.featured && (
          <span className="absolute left-4 top-4 bg-[#004BBC] px-3 py-1 text-[9px] font-medium uppercase tracking-[0.2em] text-white">
            {t('projects.featured')}
          </span>
        )}
        {project.links?.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="absolute right-4 top-4 border border-black/10 bg-white/90 p-2 text-black transition-all duration-500 hover:border-[#004BBC] hover:text-[#004BBC]"
            aria-label={t('projects.viewDemo')}
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>

      <div className="flex flex-1 flex-col p-8">
        {project.meta && (
          <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-[#004BBC]">
            {project.meta}
          </p>
        )}
        <h3 className="font-serif text-xl font-bold text-black">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#6B7280]">
          {project.description}
        </p>

        {project.features?.length > 0 && (
          <div className="mt-5">
            <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.25em] text-[#6B7280]">
              {t('projects.features')}
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-1.5">
              {project.features.map((feature) => (
                <span
                  key={feature}
                  className="flex items-center gap-2 text-[11px] leading-relaxed text-[#6B7280]"
                >
                  <span className="h-1 w-1 flex-shrink-0 bg-[#004BBC]" />
                  {feature}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.contributions?.length > 0 && (
          <div className="mt-5">
            <p className="mb-2 text-[9px] font-medium uppercase tracking-[0.25em] text-[#6B7280]">
              {t('projects.contributions')}
            </p>
            <ul className="space-y-1.5">
              {project.contributions.map((item) => (
                <li
                  key={item}
                  className="flex gap-2 text-[11px] leading-relaxed text-[#6B7280]"
                >
                  <span className="mt-1.5 h-1 w-1 flex-shrink-0 bg-[#004BBC]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.achievements?.length > 0 && (
          <div className="mt-5 border-t border-black/10 pt-4">
            <p className="mb-3 text-[9px] font-medium uppercase tracking-[0.25em] text-[#004BBC]">
              {t('projects.achievements')}
            </p>
            <div className="grid grid-cols-3 gap-3">
              {project.achievements.map((item) => (
                <div key={item.label}>
                  <p className="font-serif text-xl font-bold leading-none text-black">
                    {item.value}
                  </p>
                  <p className="mt-1 text-[9px] uppercase leading-tight tracking-[0.12em] text-[#6B7280]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-5 flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B7280]"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.links?.code && (
          <div className="mt-5 flex items-center gap-3">
            <a
              href={project.links.code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-black/20 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-black transition-all duration-500 hover:border-black hover:bg-black hover:text-white"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              {t('projects.viewCode')}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
