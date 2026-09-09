import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/contact', label: t('nav.contact') },
  ]

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition ${
      isActive
        ? 'text-blue-600 dark:text-blue-400'
        : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <NavLink to="/" className="text-xl font-bold text-gray-900 dark:text-white">
          <span className="text-blue-600 dark:text-blue-400">A</span>ndreas<span className="text-blue-600 dark:text-blue-400">.</span>
        </NavLink>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageToggle />
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-950 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={() => setOpen(false)}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
