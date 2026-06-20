import { useLayoutEffect, useRef, useState } from 'react'
import { FaStar } from 'react-icons/fa'
import { getProjects } from '../data/portfolioData'
import ProjectHeaderImage from './ProjectHeaderImage'

export default function ProjectsSection({ content, selectedProjectName, onSelectProject, sectionRef }) {
  const [detailPanelHeight, setDetailPanelHeight] = useState(null)
  const projectDetailRef = useRef(null)
  const previousDetailHeight = useRef(0)
  const projects = getProjects(content)
  const selectedProject = projects.find((project) => project.name === selectedProjectName) ?? projects[0]

  useLayoutEffect(() => {
    const nextHeight = projectDetailRef.current?.getBoundingClientRect().height
    if (!nextHeight) return undefined

    if (!previousDetailHeight.current) {
      previousDetailHeight.current = nextHeight
      return undefined
    }

    setDetailPanelHeight(previousDetailHeight.current)
    const frame = requestAnimationFrame(() => {
      setDetailPanelHeight(nextHeight)
      previousDetailHeight.current = nextHeight
    })

    return () => cancelAnimationFrame(frame)
  }, [selectedProjectName])

  return (
    <section className="projects-section" id="projects" ref={sectionRef} aria-labelledby="projects-heading">
      <h1 className="section-title" id="projects-heading"><FaStar /> {content.sectionTitles.featuredProjects}</h1>
      <div className="project-gallery">
        <div className="project-list" role="tablist" aria-label={content.projectsUi.listLabel}>
          {projects.map((project, index) => (
            <button
              key={project.name}
              type="button"
              role="tab"
              aria-selected={selectedProject.name === project.name}
              className={`project-choice accent-${project.accent}${selectedProject.name === project.name ? ' is-selected' : ''}`}
              onClick={() => onSelectProject(project.name)}
            >
              <ProjectHeaderImage project={project} content={content} compact />
              <span className="project-choice-row">
                <span className="project-number">0{index + 1}</span>
                <span className="project-choice-copy">
                  <strong>{project.name}</strong>
                  <small>{project.type}</small>
                </span>
                <span className="project-arrow" aria-hidden="true">&#8599;</span>
              </span>
            </button>
          ))}
        </div>

        <div className="project-detail-frame" style={detailPanelHeight ? { height: detailPanelHeight } : undefined} onTransitionEnd={(event) => {
          if (event.propertyName === 'height') setDetailPanelHeight(null)
        }}>
          <article className="project-detail" ref={projectDetailRef} role="tabpanel">
            <div className={`project-detail-media ${selectedProject.accent}`}>
              {selectedProject.media ? (
                <video autoPlay loop muted playsInline aria-label={`${selectedProject.name} ${content.projectsUi.projectPreview}`} key={selectedProject.media}>
                  <source src={selectedProject.media} type="video/mp4" />
                </video>
              ) : <span>{content.projectsUi.mediaPlaceholder}</span>}
            </div>
            <div className="project-detail-body">
              <p className="project-type">{selectedProject.type}</p>
              <h2>{selectedProject.name}</h2>
              <p className="description">{selectedProject.detail}</p>
              <ul className="tag-list" aria-label={`${selectedProject.name} ${content.accessibility.technologies}`}>
                {selectedProject.tags.map((tag) => <li key={tag}>{tag}</li>)}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
