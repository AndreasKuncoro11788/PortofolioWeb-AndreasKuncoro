import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      setVisible(!nearBottom)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const handleClick = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollBy({
      top: window.innerHeight * 0.85,
      behavior: reduceMotion ? 'auto' : 'smooth',
    })
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Gulir ke bawah"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 left-1/2 z-30 -translate-x-1/2 border border-line bg-paper px-4 py-2.5 transition-all duration-500 hover:border-accent hover:text-accent md:bottom-8 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0'
      }`}
    >
      <span className="flex items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.24em] text-muted">
          Gulir ke Bawah
        </span>
        <ArrowDown className="animate-scroll-cue h-3.5 w-3.5 text-accent" />
      </span>
    </button>
  )
}
