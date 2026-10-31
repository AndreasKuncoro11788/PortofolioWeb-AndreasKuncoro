import { ExternalLink, Folder } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { GithubIcon } from './BrandIcons'

export default function ProjectCard({ project }) {
  const { t } = useTranslation()

  return (
    <div className="group flex flex-col border-t border-black">
      <div className="relative flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-[#E5E7EB] to-white grayscale transition-all duration-[1500ms] group-hover:grayscale-0">
        <Folder className="h-16 w-16 text-black/20 transition-all duration-[1500ms] group-hover:text-[#004BBC]/40" />
        {project.links.demo && (
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

        <div className="mt-5 flex items-center gap-3">
          {project.links.code && (
            <a
              href={project.links.code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-black/20 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-black transition-all duration-500 hover:border-black hover:bg-black hover:text-white"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              {t('projects.viewCode')}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}