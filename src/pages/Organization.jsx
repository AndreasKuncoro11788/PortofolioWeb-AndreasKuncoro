import { useTranslation } from 'react-i18next'

export default function Organization() {
  const { t } = useTranslation()

  const entries = t('organization.entries', { returnObjects: true })

  return (
    <section id="organization" className="relative scroll-mt-20">
      <div className="mx-auto max-w-[1600px] px-8 py-24 md:px-16 md:py-32">
        <div className="mb-16 border-t border-[#1A1A1A] pt-8">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#6C6863]">
            {t('organization.subtitle')}
          </p>
          <h2 className="font-serif text-5xl font-bold leading-[0.9] tracking-tight text-[#1A1A1A] md:text-7xl">
            {t('organization.title')}
          </h2>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="space-y-0">
            {entries.map((entry) => (
              <div
                key={entry.name}
                className="border-t border-[#1A1A1A]/10 py-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-1">
                  <h4 className="font-serif text-xl font-bold text-[#1A1A1A]">
                    {entry.name}
                  </h4>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#6C6863]">
                    {entry.period}
                  </span>
                </div>
                <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.25em] text-[#D4AF37]">
                  {entry.role}
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#6C6863]">
                  {entry.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}