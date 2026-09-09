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
  { value: 'all', label: 'Semua' },
  { value: 'web', label: 'Web' },
  { value: 'mobile', label: 'Mobile' },
  { value: 'design', label: 'Design' },
]

export default function Projects() {
  const { t } = useTranslation()
  const [active, setActive] = useState('all')

  const filtered =
    active === 'all'
      ? projects
      : projects.filter((p) => p.category === active)

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Proyek <span className="text-blue-600 dark:text-blue-400">Saya</span>
        </h1>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          {t('projects.subtitle')}
        </p>
      </div>

      <div className="mb-10 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className={`rounded-full px-5 py-2 text-sm font-medium transition ${
              active === cat.value
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}
