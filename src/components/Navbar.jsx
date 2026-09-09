import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageToggle from './LanguageToggle'

const NAV_IDS = ['home', 'about', 'projects', 'contact']

export default function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  const links = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'contact', label: t('nav.contact') },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + 100
      let current = NAV_IDS[0]
      for (const id of NAV_IDS) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= offset) {
          current = id
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const linkClass = (id) =>
    `px-3 py-2 text-xs uppercase tracking-[0.25em] font-medium transition-colors duration-500 ${
      active === id
        ? 'text-[#D4AF37]'
        : 'text-[#1A1A1A] hover:text-[#D4AF37]'
    }`

  const handleClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-[#1A1A1A]/10 bg-[#F9F8F6]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-4 md:px-16">
        <a
          href="#home"
          onClick={(e) => handleClick(e, 'home')}
          className="font-serif text-xl font-bold text-[#1A1A1A]"
        >
          <span className="text-[#D4AF37]">A</span>ndreas
          <span className="text-[#D4AF37]">.</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleClick(e, link.id)}
              className={linkClass(link.id)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-[#1A1A1A] transition-colors duration-500 hover:text-[#D4AF37]"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-[#1A1A1A]/10 bg-[#F9F8F6] px-8 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleClick(e, link.id)}
                className={linkClass(link.id)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
