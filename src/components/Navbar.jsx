import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const NAV_IDS = ['home', 'about', 'education', 'projects', 'organization', 'contact']

export default function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  const links = [
    { id: 'home', label: t('nav.home') },
    { id: 'about', label: t('nav.about') },
    { id: 'education', label: t('nav.education') },
    { id: 'projects', label: t('nav.projects') },
    { id: 'organization', label: t('nav.organization') },
    { id: 'contact', label: t('nav.contact') },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY + 120
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

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth >= 1024) setOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('keydown', handleKey)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleClick = (event, id) => {
    event.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      const header = document.querySelector('header')
      const offset = header ? header.offsetHeight : 72
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      window.scrollTo({ top, behavior: reduceMotion ? 'auto' : 'smooth' })
    }
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <nav
        className="shell flex h-[72px] items-center justify-between"
        aria-label="Navigasi utama"
      >
        <a
          href="#home"
          onClick={(event) => handleClick(event, 'home')}
          className="flex items-center gap-2.5"
          aria-label="Andreas Kuncoro — Beranda"
        >
          <img src="/logo.png" alt="" className="h-7 w-7 object-contain" />
          <span className="font-serif text-[17px] font-medium tracking-[-0.01em] text-ink">
            Andreas Kuncoro<span className="text-accent">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(event) => handleClick(event, link.id)}
              aria-current={active === link.id ? 'true' : undefined}
              className={`relative py-1 text-[12px] font-medium uppercase tracking-[0.18em] transition-colors duration-300 ${
                active === link.id ? 'text-accent' : 'text-muted hover:text-ink'
              }`}
            >
              {link.label}
              <span
                aria-hidden="true"
                className={`absolute -bottom-0.5 left-0 h-px w-full origin-left bg-accent transition-transform duration-300 ${
                  active === link.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center text-ink transition-colors duration-300 hover:text-accent lg:hidden"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="animate-fade-in border-t border-line bg-paper lg:hidden"
        >
          <div className="shell py-1">
            {links.map((link, index) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(event) => handleClick(event, link.id)}
                aria-current={active === link.id ? 'true' : undefined}
                className={`flex items-center justify-between border-b border-line py-4 text-[12px] uppercase tracking-[0.2em] transition-colors last:border-b-0 ${
                  active === link.id ? 'text-accent' : 'text-ink hover:text-accent'
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className="font-serif text-[11px] tracking-normal text-muted"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
