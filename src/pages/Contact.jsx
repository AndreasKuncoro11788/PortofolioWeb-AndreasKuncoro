import { ArrowUpRight, ExternalLink, FileText, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../components/BrandIcons'
import SectionHeader from '../components/SectionHeader'
import { CV_URL } from '../constants'

export default function Contact() {
  const { t } = useTranslation()

  const contactInfo = [
    {
      icon: Mail,
      label: t('contact.email'),
      value: 'andreaskuncoroadinugroho@gmail.com',
      href: 'mailto:andreaskuncoroadinugroho@gmail.com',
    },
    {
      icon: WhatsappIcon,
      label: t('contact.whatsapp'),
      value: '+62 138 4752 007',
      href: 'https://wa.me/621384752007',
      external: true,
    },
    {
      icon: LinkedinIcon,
      label: t('contact.linkedin'),
      value: 'linkedin.com/in/andreas-kuncoro-adi-nugroho-6022552a2',
      href: 'https://www.linkedin.com/in/andreas-kuncoro-adi-nugroho-6022552a2',
      external: true,
    },
    {
      icon: GithubIcon,
      label: t('contact.github'),
      value: 'github.com/AndreasKuncoro11788',
      href: 'https://github.com/AndreasKuncoro11788',
      external: true,
    },
  ]

  return (
    <section id="contact" className="relative scroll-mt-24">
      <div className="shell section">
        <SectionHeader
          index="06"
          overline={t('nav.contact')}
          title={t('contact.title')}
        />

        <div className="mt-[clamp(3rem,5vw,5rem)] grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 lg:col-span-4">
            <p className="display-sub max-w-sm text-ink">{t('contact.subtitle')}</p>
            <div className="mt-8 flex flex-col items-start gap-4">
              <a
                href="mailto:andreaskuncoroadinugroho@gmail.com"
                className="group inline-flex items-center gap-2 border-b border-ink pb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                {t('contact.sendEmail')}
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={CV_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('contact.viewCvLabel')}
                className="group inline-flex items-center gap-2 border-b border-line pb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted transition-colors duration-300 hover:border-accent hover:text-accent"
              >
                {t('contact.viewCv')}
                <FileText className="h-3.5 w-3.5" />
                <span className="text-[10px] tracking-[0.18em]">PDF</span>
              </a>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7 lg:col-start-6">
            <div className="border-b border-line">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer' : undefined}
                  className="group flex min-w-0 items-start gap-5 border-t border-line py-6 transition-colors duration-300 hover:text-accent"
                >
                  <item.icon className="mt-1 h-4 w-4 flex-shrink-0 text-muted transition-colors duration-300 group-hover:text-accent" />
                  <div className="min-w-0 flex-1">
                    <p className="eyebrow text-[10px]">{item.label}</p>
                    <p className="mt-1.5 break-words text-[15px] leading-relaxed text-ink transition-colors duration-300 group-hover:text-accent">
                      {item.value}
                    </p>
                  </div>
                  {item.external && (
                    <ExternalLink className="mt-1 h-3.5 w-3.5 flex-shrink-0 text-muted transition-colors duration-300 group-hover:text-accent" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
