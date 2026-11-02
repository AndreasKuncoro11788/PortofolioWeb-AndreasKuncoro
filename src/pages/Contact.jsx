import { ExternalLink, Mail } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../components/BrandIcons'

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
    <section id="contact" className="relative scroll-mt-20">
      <div className="mx-auto max-w-[1600px] px-8 py-24 md:px-16 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-16 border-t border-black pt-8">
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#6B7280]">
                {t('contact.subtitle')}
              </p>
              <h2 className="font-serif text-5xl font-bold leading-[0.9] tracking-tight text-black md:text-7xl">
                {t('contact.title')}
              </h2>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-0">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-6 border-t border-black/10 py-8 transition-all duration-500 hover:border-[#004BBC] hover:pl-4"
                >
                  <item.icon className="h-5 w-5 flex-shrink-0 text-[#6B7280]" />
                  <div className="min-w-0">
                    <p className="mb-1 text-[10px] uppercase tracking-[0.3em] text-[#6B7280]">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noreferrer' : undefined}
                      className="inline-flex max-w-full items-center gap-2 font-serif text-lg text-black transition-colors duration-500 hover:text-[#004BBC]"
                    >
                      <span className="min-w-0 break-words">{item.value}</span>
                      {item.external && <ExternalLink className="h-3.5 w-3.5 flex-shrink-0" />}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
