import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    description:
      'Aplikasi e-commerce lengkap dengan keranjang belanja, pembayaran, dan dashboard admin.',
    tags: ['React', 'Node.js', 'Tailwind'],
    category: 'web',
    links: { demo: '#', code: 'https://github.com/' },
  },
  {
    id: 2,
    title: 'Weather App',
    description:
      'Aplikasi cuaca real-time dengan tampilan yang bersih dan responsif.',
    tags: ['React', 'API', 'CSS'],
    category: 'web',
    links: { demo: '#', code: 'https://github.com/' },
  },
  {
    id: 3,
    title: 'Portfolio Template',
    description:
      'Template portofolio modern dan dapat disesuaikan sesuai kebutuhan.',
    tags: ['React', 'Tailwind', 'Vite'],
    category: 'web',
    links: { demo: '#', code: 'https://github.com/' },
  },
  {
    id: 4,
    title: 'Task Manager Mobile',
    description:
      'Aplikasi manajemen tugas untuk mobile dengan sinkronisasi cloud.',
    tags: ['React Native', 'Firebase'],
    category: 'mobile',
    links: { demo: '#', code: 'https://github.com/' },
  },
  {
    id: 5,
    title: 'Landing Page',
    description:
      'Landing page high-converting untuk produk digital dengan animasi halus.',
    tags: ['React', 'Framer Motion', 'Tailwind'],
    category: 'web',
    links: { demo: '#', code: 'https://github.com/' },
  },
  {
    id: 6,
    title: 'Design System',
    description:
      'Sistem desain komponen UI yang reusable dan konsisten untuk tim.',
    tags: ['Figma', 'React', 'Storybook'],
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
        <div className="mb-16 border-t border-[#1A1A1A] pt-8">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#6C6863]">
            {t('projects.subtitle')}
          </p>
          <h2 className="font-serif text-5xl font-bold leading-[0.9] tracking-tight text-[#1A1A1A] md:text-7xl">
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
                  ? 'text-[#D4AF37]'
                  : 'text-[#6C6863] hover:text-[#1A1A1A]'
              }`}
            >
              {t(cat.labelKey)}
              {active === cat.value && (
                <div className="mt-1 h-px bg-[#D4AF37]" />
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
