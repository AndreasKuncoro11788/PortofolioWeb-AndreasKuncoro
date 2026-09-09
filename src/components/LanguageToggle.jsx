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
      className="flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-1.5 text-sm font-medium text-gray-700 transition hover:border-gray-500 dark:border-gray-600 dark:text-gray-200 dark:hover:border-gray-400"
      aria-label="Toggle language"
      title={current === 'id' ? 'Switch to English' : 'Ganti ke Bahasa Indonesia'}
    >
      <Globe className="h-4 w-4" />
      <span className="uppercase">{current}</span>
    </button>
  )
}
