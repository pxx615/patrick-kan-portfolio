import { FaBriefcase } from 'react-icons/fa'
import { getExperience, getProjects } from '../data/portfolioData'
import ExperienceCard from './ExperienceCard'

export default function ExperienceSection({ content, scrollProgress, onProjectSelect }) {
  const experience = getExperience(content)
  const projects = getProjects(content)
  return (
    <section className="timeline-section" id="experience" aria-labelledby="experience-heading">
      <h1 className="section-title" id="experience-heading"><FaBriefcase /> {content.sectionTitles.experience}</h1>
      <div className="timeline">
        {experience.map((item) => (
          <ExperienceCard
            key={`${item.company}-${item.role}`}
            item={item}
            linkedProject={item.projectName ? projects.find((project) => project.name === item.projectName) : null}
            onProjectSelect={onProjectSelect}
            content={content}
          />
        ))}
        <div className="timeline-rail" aria-hidden="true">
          <div className="timeline-progress" style={{ transform: `scaleY(${scrollProgress})` }} />
        </div>
      </div>
    </section>
  )
}
