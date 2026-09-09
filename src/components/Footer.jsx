import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="relative z-10 border-t border-[#1A1A1A]/10 bg-[#EBE5DE]">
      <div className="mx-auto max-w-[1600px] px-8 py-10 md:px-16">
        <p className="text-center text-[10px] uppercase tracking-[0.25em] text-[#6C6863]">
          &copy; {new Date().getFullYear()} Andreas Kuncoro. {t('footer.rights')}
        </p>
      </div>
    </footer>
  )
}
