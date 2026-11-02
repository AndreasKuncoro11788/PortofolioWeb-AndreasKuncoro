import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ProjectCard from '../components/ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Sistem Informasi Bank Sampah Terintegrasi',
    meta: 'Tugas Akhir · 2026',
    description:
      'Sistem informasi berbasis web terintegrasi untuk pengelolaan bank sampah di Kota Yogyakarta.',
    tags: ['Laravel', 'React', 'Tailwind CSS', 'MySQL'],
    category: 'web',
    featured: true,
    achievements: [
      { value: '104', label: 'Skenario pengujian berhasil' },
      { value: '27', label: 'Responden usability' },
      { value: '76,4', label: 'Skor SUS' },
    ],
    features: [
      'Transaksi Sampah',
      'Penjadwalan Pengambilan',
      'Pelaporan',
      'Manajemen Pengguna',
      'Monitoring',
    ],
    links: { demo: null, code: null },
  },
  {
    id: 2,
    title: 'ReuseMart – Platform E-Commerce',
    meta: 'Proyek Akademik · 2025',
    description:
      'Platform e-commerce berbasis web dan aplikasi mobile. Dikerjakan secara tim.',
    tags: ['Dart', 'Flutter'],
    category: 'mobile',
    featured: false,
    contributions: [
      'Mengembangkan fitur transaksi merchandise pada aplikasi mobile.',
      'Mengintegrasikan aplikasi mobile dengan layanan backend bersama tim pengembangan.',
      'Bekerja menggunakan pendekatan Agile.',
    ],
    links: { demo: null, code: null },
  },
  {
    id: 3,
    title: 'Website Profil Perusahaan – Perusahaan Briket',
    meta: 'Proyek Pribadi · 2026',
    description:
      'Mengembangkan website profil perusahaan yang responsif untuk menampilkan produk dan informasi bisnis perusahaan briket.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'web',
    featured: false,
    links: { demo: null, code: null },
  },
]

const categories = [
  { value: 'all', labelKey: 'projects.all' },
  { value: 'web', labelKey: 'projects.web' },
  { value: 'mobile', labelKey: 'projects.mobile' },
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
