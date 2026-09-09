import { Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from './BrandIcons'

export default function Footer() {
  const { t } = useTranslation()

  const socials = [
    { icon: GithubIcon, href: 'https://github.com/', label: 'GitHub' },
    { icon: LinkedinIcon, href: 'https://linkedin.com/', label: 'LinkedIn' },
    { icon: InstagramIcon, href: 'https://instagram.com/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:andreas@email.com', label: 'Email' },
  ]

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 sm:px-6 md:flex-row md:justify-between">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Andreas Kuncoro. {t('footer.rights')}
        </p>
        <div className="flex items-center gap-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="rounded-lg p-2 text-gray-500 transition hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400"
            >
              <s.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
