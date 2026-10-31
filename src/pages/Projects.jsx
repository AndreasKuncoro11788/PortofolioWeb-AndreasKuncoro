import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Integrated Waste Bank Information System',
    meta: 'Thesis Project · 2026 · System Developer',
    description:
      'Web-based information system for waste bank management in Yogyakarta City, covering waste transaction management, pickup scheduling, reporting, user management, and monitoring.',
    tags: ['Laravel', 'React', 'Tailwind CSS', 'MySQL'],
    category: 'web',
    links: { demo: '#', code: 'https://github.com/' },
  },
  {
    id: 2,
    title: 'Company Profile Website — Briquette Company',
    meta: 'Personal Project · 2026 · Web Developer',
    description:
      'Responsive company profile website built to showcase the company\'s products, business information, and professional digital presence.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    links: { demo: '#', code: 'https://github.com/' },
  },
  {
    id: 3,
    title: 'ReuseMart — E-Commerce Platform',
    meta: 'Academic Project · 2025 · Software Development Team',
    description:
      'E-commerce platform with website and mobile application. Developed the merchandise transaction feature end-to-end using Dart and Flutter.',
    tags: ['Dart', 'Flutter'],
    category: 'mobile',
    links: { demo: '#', code: 'https://github.com/' },
  },
  {
    id: 4,
    title: 'Episentrum — Design Thinking Project',
    meta: 'Academic Project · 2023 · UI/UX Designer',
    description:
      'High-fidelity prototype for the Episentrum application, designed with a user-oriented approach grounded in UI/UX principles.',
    tags: ['UI/UX Design'],
    category: 'design',
    links: { demo: '#', code: 'https://github.com/' },
  },
]

const categories = [
  { value: 'all', labelKey: 'projects.all' },
  { value: 'web', labelKey: 'projects.web' },
  { value: 'mobile', labelKey: 'projects.mobile' },
  { value: 'design', labelKey: 'projects.design' },
]

export default function Projects() {
  const { t } = useTranslation()
  const [active, setActive] = useState('all')

  const filtered =
    active === 'all'
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="relative scroll-mt-20">
      <div className="mx-auto max-w-[1600px] px-8 py-24 md:px-16 md:py-32">
        <div className="mb-16 border-t border-black pt-8">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#6B7280]">
            {t('projects.subtitle')}
          </p>
          <h2 className="font-serif text-5xl font-bold leading-[0.9] tracking-tight text-black md:text-7xl">
            {t('projects.title')}
          </h2>
        </div>

        <div className="mb-16 flex flex-wrap gap-6">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActive(cat.value)}
              className={`text-xs font-medium uppercase tracking-[0.25em] transition-colors duration-500 ${
                active === cat.value
                  ? 'text-[#004BBC]'
                  : 'text-[#6B7280] hover:text-black'
              }`}
            >
              {t(cat.labelKey)}
              {active === cat.value && (
                <div className="mt-1 h-px bg-[#004BBC]" />
              )}
            </button>
          ))}
        </div>

        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
