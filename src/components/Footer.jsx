import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="relative z-10 border-t border-line bg-paper">
      <div className="shell flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-serif text-sm text-ink">
          Andreas Kuncoro<span className="text-accent">.</span>
        </p>
        <p className="text-[10px] uppercase tracking-[0.24em] text-muted">
          &copy; {new Date().getFullYear()} Andreas Kuncoro Adi Nugroho.{' '}
          {t('footer.rights')}
        </p>
        <a
          href="#home"
          className="text-[10px] uppercase tracking-[0.24em] text-muted transition-colors duration-300 hover:text-accent"
        >
          {t('footer.backToTop')}
        </a>
      </div>
    </footer>
  )
}
