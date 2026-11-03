import { ArrowRight, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../components/BrandIcons'

export default function Home() {
  const { t } = useTranslation()

  const socials = [
    {
      icon: GithubIcon,
      href: 'https://github.com/AndreasKuncoro11788',
      label: 'GitHub',
    },
    {
      icon: LinkedinIcon,
      href: 'https://www.linkedin.com/in/andreas-kuncoro-adi-nugroho-6022552a2',
      label: 'LinkedIn',
    },
    {
      icon: WhatsappIcon,
      href: 'https://wa.me/621384752007',
      label: 'WhatsApp',
    },
    { icon: Mail, href: 'mailto:andreaskuncoroadinugroho@gmail.com', label: 'Email' },
  ]

  return (
    <section id="home" className="relative scroll-mt-24 overflow-hidden">
      <div className="shell">
        <div className="grid grid-cols-1 gap-14 pb-[clamp(4rem,7vw,7rem)] pt-[clamp(3rem,6vw,6rem)] lg:grid-cols-12 lg:items-end lg:gap-0">
          <div className="lg:col-span-7 lg:pr-14">
            <p className="eyebrow flex items-center gap-3">
              <span className="text-accent">01</span>
              <span aria-hidden="true" className="h-px w-6 bg-line" />
              <span>{t('hero.greeting')}</span>
            </p>

            <h1 className="display-hero mt-7 text-ink" aria-label={t('hero.name')}>
              <span className="block">Andreas</span>{' '}
              <span className="block">Kuncoro</span>{' '}
              <span className="mt-4 block font-serif text-[clamp(1.75rem,3.2vw,3rem)] font-normal italic leading-none tracking-[-0.01em] text-muted">
                Adi Nugroho
              </span>
            </h1>

            <p className="mt-9 text-[11px] font-medium uppercase tracking-[0.24em] text-accent">
              {t('hero.role')}
            </p>

            <p className="body-copy mt-5 max-w-[46ch] text-muted">
              {t('hero.description')}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex h-12 items-center gap-3 border border-ink px-7 text-[11px] font-medium uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-white"
              >
                {t('hero.ctaProjects')}
                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex h-12 items-center border border-line px-7 text-[11px] font-medium uppercase tracking-[0.18em] text-muted transition-colors duration-300 hover:border-ink hover:text-ink"
              >
                {t('hero.ctaContact')}
              </a>
            </div>

            <div className="mt-14 flex items-center justify-between gap-6 border-t border-line pt-5">
              <div className="flex items-center gap-6">
                {socials.map((social) => (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted transition-colors duration-300 hover:text-accent"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
              <span className="eyebrow hidden text-[10px] sm:block">
                Portofolio — {new Date().getFullYear()}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 lg:border-l lg:border-line lg:pl-14">
            <figure className="relative mx-auto w-full max-w-[28rem] lg:mx-0 lg:max-w-none">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-line bg-surface">
                <img
                  src="/photo.jpg"
                  alt="Andreas Kuncoro Adi Nugroho"
                  className="h-full w-full object-cover object-top"
                />
                <span
                  aria-hidden="true"
                  className="absolute left-4 top-4 h-2 w-2 bg-accent"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-4">
                <span className="eyebrow text-[10px]">{t('hero.imageLabel')}</span>
                <span className="eyebrow text-[10px]">2026</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  )
}
