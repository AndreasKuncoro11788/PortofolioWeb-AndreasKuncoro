import { ArrowRight, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'

export default function Home() {
  const { t } = useTranslation()

  const socials = [
    { icon: GithubIcon, href: 'https://github.com/' },
    { icon: LinkedinIcon, href: 'https://linkedin.com/' },
    { icon: Mail, href: 'mailto:andreas@email.com' },
  ]

  return (
    <section id="home" className="relative scroll-mt-20 overflow-hidden">
      <div className="mx-auto grid min-h-[80vh] max-w-[1600px] grid-cols-1 items-end gap-12 px-8 py-24 md:grid-cols-12 md:px-16 md:py-32">
        <div className="flex flex-col justify-end md:col-span-7">
          <div className="mb-6 h-px w-12 bg-[#1A1A1A]" />

          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[#6C6863]">
            {t('hero.greeting')}
          </p>

          <h1 className="font-serif text-6xl font-bold leading-[0.9] tracking-tight text-[#1A1A1A] md:text-8xl lg:text-9xl">
            Andreas
            <br />
            Kuncoro
          </h1>

          <p className="mt-6 max-w-md text-lg leading-relaxed text-[#6C6863]">
            {t('hero.description')}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group relative inline-flex h-12 items-center overflow-hidden bg-[#1A1A1A] px-8 text-xs font-medium uppercase tracking-[0.2em] text-[#F9F8F6] transition-shadow duration-500 hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-[#D4AF37] transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:translate-x-0" />
              <span className="relative z-10 inline-flex items-center gap-2">
                {t('hero.ctaProjects')}
                <ArrowRight className="h-4 w-4" />
              </span>
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center border border-[#1A1A1A] px-8 text-xs font-medium uppercase tracking-[0.2em] text-[#1A1A1A] transition-all duration-500 hover:bg-[#1A1A1A] hover:text-[#F9F8F6]"
            >
              <Mail className="mr-2 h-4 w-4" />
              {t('hero.ctaContact')}
            </a>
          </div>

          <div className="mt-12 flex items-center gap-4">
            {socials.map((s) => (
              <a
                key={s.href}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-[#6C6863] transition-colors duration-500 hover:text-[#D4AF37]"
                aria-label={s.href}
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-end justify-start md:col-span-5 md:col-start-8">
          <div className="relative flex aspect-square w-full max-w-sm items-center justify-center bg-[#1A1A1A] shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <span className="select-none font-serif text-6xl font-bold text-[#F9F8F6]/10 md:text-8xl">
              AK
            </span>
            <div className="absolute -left-3 top-8 hidden border-l border-[#D4AF37]/40 py-8 text-[10px] uppercase tracking-[0.3em] text-[#6C6863] md:block" style={{ writingMode: 'vertical-rl' }}>
              Editorial / Vol. 01
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
