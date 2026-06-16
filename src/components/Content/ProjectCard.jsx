function ProjectCard({ title, image, url }) {
  const Component = url ? 'a' : 'div'
  const linkProps = url ? { href: url, target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <Component
      {...linkProps}
      className="group relative bg-secondary rounded-lg overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 block"
    >
      <div className="aspect-video bg-bg-site flex items-center justify-center overflow-hidden">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
        ) : (
          <span className="text-text-muted/20 text-5xl font-heading">?</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-heading-6 font-heading text-text-muted group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>
    </Component>
  )
}

export default ProjectCard
