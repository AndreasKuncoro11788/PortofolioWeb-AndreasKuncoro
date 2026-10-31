import { useTranslation } from 'react-i18next'

export default function Education() {
  const { t } = useTranslation()

  const coursework = t('education.coursework', { returnObjects: true })

  return (
    <section id="education" className="relative scroll-mt-20">
      <div className="mx-auto max-w-[1600px] px-8 py-24 md:px-16 md:py-32">
        <div className="mb-16 border-t border-black pt-8">
          <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-[#6B7280]">
            {t('education.subtitle')}
          </p>
          <h2 className="font-serif text-5xl font-bold leading-[0.9] tracking-tight text-black md:text-7xl">
            {t('education.title')}
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="mb-2 h-px w-8 bg-[#004BBC]" />
            <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em] text-[#004BBC]">
              {t('education.degree')}
            </p>
            <h3 className="font-serif text-3xl font-bold leading-tight tracking-tight text-black md:text-4xl">
              {t('education.university')}
            </h3>
            <div className="mt-6 flex flex-wrap gap-x-10 gap-y-2 text-xs uppercase tracking-[0.2em] text-[#6B7280]">
              <span>{t('education.period')}</span>
              <span className="text-black">{t('education.gpa')}</span>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="mb-2 h-px w-8 bg-[#004BBC]" />
            <h3 className="mb-8 text-xs uppercase tracking-[0.25em] text-[#6B7280]">
              {t('education.courseworkTitle')}
            </h3>
            <div className="flex flex-wrap gap-x-5 gap-y-3">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="text-[11px] uppercase tracking-[0.15em] text-black"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}