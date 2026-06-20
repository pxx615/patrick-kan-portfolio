import { useState } from 'react'
import { FaCode } from 'react-icons/fa'
import { getSkillGroups, getTechnologyForSkill, technologyRows, technologySkillAliases } from '../data/portfolioData'

export default function SkillsSection({ content }) {
  const [hoveredTechnology, setHoveredTechnology] = useState(null)
  const mappedSkills = technologySkillAliases[hoveredTechnology] ?? hoveredTechnology
  const highlightedSkills = Array.isArray(mappedSkills) ? mappedSkills : [mappedSkills]
  const skillGroups = getSkillGroups(content)

  return (
    <section className="skills-section" id="skills" aria-labelledby="skills-heading">
      <h1 className="section-title" id="skills-heading"><FaCode /> {content.sectionTitles.technicalSkills}</h1>
      <div className="technology-showcase" aria-label="Technology icon showcase">
        <p>{content.skills.toolkit}</p>
        <div className="technology-rows">
          {technologyRows.map((row, rowIndex) => (
            <div className={`technology-row ${rowIndex === 1 ? 'is-reversed' : ''}`} key={rowIndex}>
              <div className="technology-track">
                {[0, 1].map((copyIndex) => (
                  <div className="technology-icon-set" aria-hidden={copyIndex === 1} key={copyIndex}>
                    {row.map(({ name, icon: Icon, color }) => (
                      <div className={`technology-icon-tile ${hoveredTechnology === name ? 'is-highlighted' : ''}`} key={`${copyIndex}-${name}`} title={name} onMouseEnter={() => setHoveredTechnology(name)} onMouseLeave={() => setHoveredTechnology(null)}>
                        <Icon style={{ color }} aria-hidden="true" />
                        <span>{name}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h2>{group.title}</h2>
            <ul className="tag-list" aria-label={`${group.title} ${content.accessibility.skills}`}>
              {group.skills.map((skill) => (
                <li className={highlightedSkills.includes(skill) ? 'is-highlighted' : ''} key={skill} onMouseEnter={() => setHoveredTechnology(getTechnologyForSkill(skill))} onMouseLeave={() => setHoveredTechnology(null)}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
