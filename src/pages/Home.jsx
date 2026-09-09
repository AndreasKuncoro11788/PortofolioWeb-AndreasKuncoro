import { ArrowRight, Code2, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'

export default function Home() {
  const { t } = useTranslation()

  const socials = [
    { icon: GithubIcon, href: 'https://github.com/' },
    { icon: LinkedinIcon, href: 'https://linkedin.com/' },
    { icon: Mail, href: 'mailto:andreas@email.com' },
  ]

  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-10 px-4 py-16 sm:px-6 md:flex-row md:py-24">
        <div className="flex-1 text-center md:text-left">
          <p className="mb-2 text-lg text-gray-600 dark:text-gray-300">
            {t('hero.greeting')}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            {t('hero.name')}
          </h1>
          <h2 className="mt-2 text-xl font-semibold text-blue-600 dark:text-blue-400 sm:text-2xl">
            {t('hero.role')}
          </h2>
          <p className="mt-4 max-w-lg text-gray-600 dark:text-gray-300">
            {t('hero.description')}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              {t('hero.ctaProjects')}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-6 py-3 font-medium text-gray-700 transition hover:border-gray-500 dark:border-gray-600 dark:text-gray-200"
            >
              <Mail className="h-4 w-4" />
              {t('hero.ctaContact')}
            </Link>
          </div>
          <div className="mt-8 flex justify-center gap-3 md:justify-start">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg p-2 text-gray-500 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
                aria-label={s.href}
              >
                <s.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="relative flex h-64 w-64 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 sm:h-72 sm:w-72">
            <Code2 className="h-24 w-24 text-white" />
            <div className="absolute -right-4 -top-4 rounded-2xl bg-white p-3 shadow-lg dark:bg-gray-900 dark:shadow-gray-800">
              <GithubIcon className="h-8 w-8 text-gray-800 dark:text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
