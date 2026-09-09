import { ExternalLink, Folder } from 'lucide-react'
import { GithubIcon } from './BrandIcons'

export default function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col border-t border-[#1A1A1A]">
      <div className="relative flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-[#EBE5DE] to-[#F9F8F6] grayscale transition-all duration-[1500ms] group-hover:grayscale-0">
        <Folder className="h-16 w-16 text-[#1A1A1A]/20 transition-all duration-[1500ms] group-hover:text-[#D4AF37]/40" />
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="absolute right-4 top-4 border border-[#1A1A1A]/10 bg-[#F9F8F6]/90 p-2 text-[#1A1A1A] transition-all duration-500 hover:border-[#D4AF37] hover:text-[#D4AF37]"
            aria-label="Demo"
          >
            <ExternalLink className="h-4 w-4" />
          </a>
        )}
      </div>

      <div className="flex flex-1 flex-col p-8">
        <h3 className="font-serif text-xl font-bold text-[#1A1A1A]">
          {project.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#6C6863]">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#6C6863]"
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
              className="inline-flex items-center gap-2 border border-[#1A1A1A]/20 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-[#1A1A1A] transition-all duration-500 hover:border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#F9F8F6]"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
