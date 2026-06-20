export default function ProjectHeaderImage({ content, project, compact = false }) {
  if (project.headerImage) {
    return <img src={project.headerImage} alt={`${project.name} ${content.accessibility.projectHeader}`} className={`project-header-image ${compact ? 'is-compact' : ''}`} />
  }

  return (
    <div className={`project-header-placeholder ${project.accent} ${compact ? 'is-compact' : ''}`}>
      <span>{compact ? content.projectsUi.headerImageComingSoon : `${project.name} ${content.projectsUi.headerImageComingSoon.toLowerCase()}`}</span>
    </div>
  )
}
