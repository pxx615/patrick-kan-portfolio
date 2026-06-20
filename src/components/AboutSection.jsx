import { FaEnvelope, FaGlobe, FaLinkedinIn, FaUser } from 'react-icons/fa'

export default function AboutSection({ content }) {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <p className="section-kicker"><FaUser /> {content.about.label}</p>
      <h1 id="about-heading">{content.about.heading}</h1>
      <p>{content.about.description}</p>
      <nav className="about-links" aria-label={content.about.linksLabel}>
        <a href={content.site.linkedinUrl} target="_blank" rel="noreferrer" aria-label={content.menu.linkedIn} title={content.menu.linkedIn}><FaLinkedinIn /></a>
        <a href={`mailto:${content.site.email}`} aria-label={content.about.emailLabel} title={content.accessibility.email}><FaEnvelope /></a>
        <a href={content.site.portfolioUrl} target="_blank" rel="noreferrer" aria-label={content.about.portfolioLabel} title={content.accessibility.portfolio}><FaGlobe /></a>
      </nav>
    </section>
  )
}
