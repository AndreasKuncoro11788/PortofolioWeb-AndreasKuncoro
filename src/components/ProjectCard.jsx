import { ExternalLink, Folder } from 'lucide-react'
import { GithubIcon } from './BrandIcons'

export default function ProjectCard({ project }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900">
      <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-400/20">
        <Folder className="h-16 w-16 text-blue-600/60 dark:text-blue-400/60" />
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noreferrer"
            className="absolute top-3 right-3 rounded-lg bg-white/90 p-2 text-gray-700 shadow transition hover:text-blue-600 dark:bg-gray-800 dark:text-gray-200"
            aria-label="Demo"
          >
            <ExternalLink className="h-5 w-5" />
          </a>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <p className="mt-2 flex-1 text-sm text-gray-600 dark:text-gray-300">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-2">
          <a
            href={project.links.code || '#'}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition ${
              project.links.code
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
                : 'cursor-not-allowed bg-gray-50 text-gray-400 dark:bg-gray-800/50 dark:text-gray-500'
            }`}
          >
            <GithubIcon className="h-4 w-4" />
            Code
          </a>
        </div>
      </div>
    </div>
  )
}
