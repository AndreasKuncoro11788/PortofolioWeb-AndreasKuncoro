import { Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export default function LanguageToggle() {
  const { i18n } = useTranslation()
  const current = i18n.language?.startsWith('en') ? 'en' : 'id'

  const toggle = () => {
    i18n.changeLanguage(current === 'id' ? 'en' : 'id')
  }

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-2 border border-[#1A1A1A]/20 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-[#1A1A1A] transition-all duration-500 hover:border-[#D4AF37] hover:text-[#D4AF37]"
      aria-label="Toggle language"
      title={current === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
    >
      <Globe className="h-3.5 w-3.5" />
      <span>{current}</span>
    </button>
  )
}
