import ProjectHeaderImage from './ProjectHeaderImage'

export default function ExperienceCard({ content, item, linkedProject, onProjectSelect }) {
  const openProject = () => linkedProject && onProjectSelect(linkedProject.name)

  return (
    <article
      className={`experience-card company-${item.color} ${item.type === 'education' ? 'education-entry' : ''} ${linkedProject ? `has-project accent-${linkedProject.accent}` : ''}`}
      onClick={linkedProject ? openProject : undefined}
      onKeyDown={linkedProject ? (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          openProject()
        }
      } : undefined}
      role={linkedProject ? 'link' : undefined}
      tabIndex={linkedProject ? 0 : undefined}
      aria-label={linkedProject ? `${content.projectsUi.viewProject}: ${linkedProject.name}` : undefined}
    >
      <div className={`company-mark ${item.color}`}>{item.mark}</div>
      <div className="experience-content">
        <h2>{item.role} <span aria-hidden="true">&#8226;</span> {item.company}</h2>
        <p className="dates">{item.dates}{item.type !== 'education' && <><span aria-hidden="true">&#8226;</span> {content.site.location}</>}</p>
        <p className="description">{item.description}</p>
        <ul className="tag-list" aria-label={`${item.company} ${content.accessibility.technologies}`}>
          {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
      </div>
      {linkedProject && (
        <div className={`experience-project-preview ${linkedProject.accent}`} aria-hidden="true">
          <ProjectHeaderImage project={linkedProject} content={content} compact />
          <div className="preview-label">{content.projectsUi.viewProject}</div>
        </div>
      )}
    </article>
  )
}
