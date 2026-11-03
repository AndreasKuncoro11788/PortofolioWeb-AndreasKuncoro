import { useTranslation } from 'react-i18next'
import SectionHeader from '../components/SectionHeader'

export default function Organization() {
  const { t } = useTranslation()

  const entries = t('organization.entries', { returnObjects: true })

  return (
    <section id="organization" className="relative scroll-mt-24">
      <div className="shell section">
        <SectionHeader
          index="05"
          overline={t('organization.subtitle')}
          title={t('organization.title')}
        />

        <div className="mt-[clamp(3rem,5vw,5rem)] border-b border-line">
          {entries.map((entry, index) => (
            <article
              key={entry.name}
              className="group grid grid-cols-1 gap-4 border-t border-line py-8 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-1">
                <span className="font-serif text-sm text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="md:col-span-5">
                <h3 className="font-serif text-[1.5rem] font-medium leading-tight text-ink transition-colors duration-300 group-hover:text-accent">
                  {entry.name}
                </h3>
                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.2em] text-muted">
                  {entry.role}
                </p>
              </div>

              <div className="md:col-span-2">
                <p className="eyebrow">{entry.period}</p>
              </div>

              <div className="md:col-span-4">
                <p className="text-[14px] leading-relaxed text-muted">
                  {entry.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
