import { useTranslation } from 'react-i18next'
import SectionHeader from '../components/SectionHeader'

export default function Education() {
  const { t } = useTranslation()

  const focus = t('education.focus', { returnObjects: true })

  return (
    <section id="education" className="relative scroll-mt-24">
      <div className="shell section">
        <SectionHeader
          index="03"
          overline={t('education.subtitle')}
          title={t('education.title')}
        />

        <div className="mt-[clamp(3rem,5vw,5rem)] grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-accent">
              {t('education.degree')}
            </p>
            <h3 className="display-sub mt-4 max-w-xl text-ink">
              {t('education.university')}
            </h3>
            <div className="mt-8 flex flex-wrap items-baseline gap-x-8 gap-y-2 border-t border-line pt-4">
              <span className="eyebrow">{t('education.period')}</span>
              <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-accent">
                {t('education.gpa')}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <p className="eyebrow">{t('education.focusTitle')}</p>
            <ol className="mt-5">
              {focus.map((item, index) => (
                <li
                  key={item}
                  className="flex items-baseline gap-5 border-t border-line py-5"
                >
                  <span className="font-serif text-sm text-accent">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[15px] leading-relaxed text-ink">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
