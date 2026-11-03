export default function SectionHeader({ index, overline, title, description }) {
  return (
    <div className="border-t border-ink/15 pt-5 md:pt-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-3">
          <p className="eyebrow flex items-center gap-3">
            <span className="text-accent">{index}</span>
            <span aria-hidden="true" className="h-px w-6 bg-line" />
            <span>{overline}</span>
          </p>
        </div>
        <div className="md:col-span-9">
          <h2 className="display-section text-ink">{title}</h2>
          {description ? (
            <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
              {description}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  )
}
