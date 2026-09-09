import { ExternalLink, Mail, Phone } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { InstagramIcon, LinkedinIcon } from '../components/BrandIcons'

export default function Contact() {
  const { t } = useTranslation()

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'andreas@email.com',
      href: 'mailto:andreas@email.com',
    },
    {
      icon: Phone,
      label: t('contact.whatsapp'),
      value: '+62 812 3456 7890',
      href: 'https://wa.me/6281234567890',
      external: true,
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/andreas',
      href: 'https://linkedin.com/in/andreas',
      external: true,
    },
    {
      icon: InstagramIcon,
      label: 'Instagram',
      value: '@andreas',
      href: 'https://instagram.com/andreas',
      external: true,
    },
  ]

  return (
    <section id="contact" className="relative scroll-mt-20">
      <div className="mx-auto max-w-[1600px] px-8 py-24 md:px-16 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-16 border-t border-[#1A1A1A] pt-8">
              <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#6C6863]">
                {t('contact.subtitle')}
              </p>
              <h2 className="font-serif text-5xl font-bold leading-[0.9] tracking-tight text-[#1A1A1A] md:text-7xl">
                {t('contact.title')}
              </h2>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="space-y-0">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-6 border-t border-[#1A1A1A]/10 py-8 transition-all duration-500 hover:border-[#D4AF37] hover:pl-4"
                >
                  <item.icon className="h-5 w-5 flex-shrink-0 text-[#6C6863]" />
                  <div>
                    <p className="mb-1 text-[10px] uppercase tracking-[0.3em] text-[#6C6863]">
                      {item.label}
                    </p>
                    <a
                      href={item.href}
                      target={item.external ? '_blank' : undefined}
                      rel={item.external ? 'noreferrer' : undefined}
                      className="inline-flex items-center gap-2 font-serif text-lg text-[#1A1A1A] transition-colors duration-500 hover:text-[#D4AF37]"
                    >
                      {item.value}
                      {item.external && <ExternalLink className="h-3.5 w-3.5" />}
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
