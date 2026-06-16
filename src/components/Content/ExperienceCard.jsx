function ExperienceCard({ role, company, companyUrl, location, highlights, tags }) {
  return (
    <div className="bg-secondary rounded-xl p-6 border border-white/5 shadow-lg transition-all duration-300 hover:shadow-primary/5 hover:border-primary/20 hover:scale-[1.01]">
      <h3 className="text-heading-3 font-heading font-bold text-white">{role}</h3>

      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
        {companyUrl ? (
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center gap-1 text-sm"
          >
            {company}
            <svg className="w-3.5 h-3.5">
              <use href="/icons.svg#external-link-icon" />
            </svg>
          </a>
        ) : (
          <span className="text-primary text-sm">{company}</span>
        )}
        <span className="text-text-muted/20">·</span>
        <span className="text-xs text-text-muted/50">{location}</span>
      </div>

      <ul className="mt-4 space-y-2">
        {highlights.map((item, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-text-muted/80 leading-relaxed">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-[7px] flex-shrink-0" />
            {item}
          </li>
        ))}
      </ul>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default ExperienceCard
