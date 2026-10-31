import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="relative z-10 border-t border-black/10 bg-[#F3F4F6]">
      <div className="mx-auto max-w-[1600px] px-8 py-10 md:px-16">
        <p className="text-center text-[10px] uppercase tracking-[0.25em] text-[#6B7280]">
          &copy; {new Date().getFullYear()} Andreas Kuncoro. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
