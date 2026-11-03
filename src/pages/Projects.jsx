import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ProjectCard from '../components/ProjectCard'
import SectionHeader from '../components/SectionHeader'

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
      : projects.filter((project) => project.category === active)

  return (
    <section id="projects" className="relative scroll-mt-24">
      <div className="shell section">
        <SectionHeader
          index="04"
          overline={t('projects.subtitle')}
          title={t('projects.title')}
        />

        <div className="mt-[clamp(2.5rem,4vw,4rem)] flex flex-wrap items-center justify-between gap-4 border-b border-line pb-3">
          <div className="flex flex-wrap gap-7">
            {categories.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => setActive(category.value)}
                aria-pressed={active === category.value}
                className={`relative pb-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 ${
                  active === category.value
                    ? 'text-accent'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {t(category.labelKey)}
                <span
                  aria-hidden="true"
                  className={`absolute -bottom-3 left-0 h-px w-full origin-left bg-accent transition-transform duration-300 ${
                    active === category.value ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </button>
            ))}
          </div>

          <span className="eyebrow text-[10px]">
            {String(filtered.length).padStart(2, '0')} {t('nav.projects')}
          </span>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
