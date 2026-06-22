import { useEffect, useRef, useState } from 'react'
import { FaArrowUp, FaBriefcase, FaChevronDown, FaCode, FaCopy, FaExternalLinkAlt, FaLanguage, FaLinkedinIn, FaMoon, FaPaperPlane, FaSearch, FaStar, FaSun, FaUser } from 'react-icons/fa'
import { getProjects, projectThemes } from './data/portfolioData'
import { content as englishContent } from './data/en'
import { content as frenchContent } from './data/fr'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import PhotoGallerySection from './components/PhotoGallerySection'
import ProjectsSection from './components/ProjectsSection'
import SkillsSection from './components/SkillsSection'
import './App.css'

function App() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [selectedProjectName, setSelectedProjectName] = useState('EWOWDAY')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [locale, setLocale] = useState('en')
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false)
  const [isLightMode, setIsLightMode] = useState(false)
  const projectSectionRef = useRef(null)
  const cursorGlowRef = useRef(null)
  const content = locale === 'fr' ? frenchContent : englishContent
  const projects = getProjects(content)
  const selectedProject = projects.find((project) => project.name === selectedProjectName) ?? projects[0]
  const selectedTheme = projectThemes[selectedProject.accent] ?? projectThemes.violet

  useEffect(() => {
    const updateProgress = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0)
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)
    return () => {
      window.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [])

  const selectProjectFromExperience = (projectName) => {
    setSelectedProjectName(projectName)
    projectSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const moveCursorGlow = (event) => {
    cursorGlowRef.current?.style.setProperty('--cursor-x', `${event.clientX}px`)
    cursorGlowRef.current?.style.setProperty('--cursor-y', `${event.clientY}px`)
  }

  const copyEmail = async () => {
    await navigator.clipboard?.writeText(content.site.email)
    setCopiedEmail(true)
    window.setTimeout(() => setCopiedEmail(false), 1800)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setIsLanguageMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen((isOpen) => {
      if (isOpen) setIsLanguageMenuOpen(false)
      return !isOpen
    })
  }

  const selectLanguage = (nextLocale) => {
    setLocale(nextLocale)
    setIsLanguageMenuOpen(false)
  }

  return (
    <main
      className={`resume-page ${isMenuOpen ? 'menu-is-open' : ''}${isLightMode ? ' light-mode' : ''}`}
      onPointerMove={moveCursorGlow}
      style={{
        '--top-primary': selectedTheme.topPrimary,
        '--top-secondary': selectedTheme.topSecondary,
        '--cursor-primary': selectedTheme.cursorPrimary,
        '--cursor-secondary': selectedTheme.cursorSecondary,
        '--project-highlight': selectedTheme.highlight,
        '--project-highlight-soft': selectedTheme.highlightSoft,
      }}
    >
      <div className="cursor-glow" ref={cursorGlowRef} aria-hidden="true" />
      <header className="site-header">
        <a className="site-identity" href="#about"><span className="site-name">{content.site.identity}</span><span className="identity-separator" aria-hidden="true">&#8226;</span><span className="site-role">{content.site.role}</span></a>
        <nav className="site-navigation" aria-label={content.navigation.label}>
          <a href="#about">{content.navigation.about}</a>
          <a href="#projects">{content.navigation.projects}</a>
          <a href="#experience">{content.navigation.experience}</a>
          <a href="#skills">{content.navigation.skills}</a>
        </nav>
        <div className="header-actions">
          <span className="header-separator" aria-hidden="true" />
          <button className={`header-menu-trigger ${isMenuOpen ? 'is-open' : ''}`} type="button" aria-label={isMenuOpen ? content.menu.close : content.menu.open} aria-expanded={isMenuOpen} onClick={toggleMenu}><FaSearch /></button>
        </div>
      </header>

      <>
        <button className={`menu-backdrop ${isMenuOpen ? 'is-open' : ''}`} type="button" aria-label={content.menu.close} tabIndex={isMenuOpen ? 0 : -1} onClick={closeMenu} />
        <aside className={`header-menu ${isMenuOpen ? 'is-open' : ''}`} aria-label={content.menu.quickActions} aria-hidden={!isMenuOpen}>
          <section>
            <p>{content.menu.actions}</p>
            <button type="button" onClick={() => setIsLightMode((isLight) => !isLight)}>{isLightMode ? <FaMoon /> : <FaSun />} {isLightMode ? content.menu.darkMode : content.menu.lightMode}</button>
            <button className="language-trigger" type="button" aria-expanded={isLanguageMenuOpen} aria-controls="language-options" onClick={() => setIsLanguageMenuOpen((isOpen) => !isOpen)}><FaLanguage /> {content.menu.changeLanguage}<FaChevronDown className={`language-caret${isLanguageMenuOpen ? ' is-open' : ''}`} /></button>
            <div className={`language-options${isLanguageMenuOpen ? ' is-open' : ''}`} id="language-options">
              <button className={`language-option${locale === 'en' ? ' is-current' : ''}`} type="button" aria-pressed={locale === 'en'} onClick={() => selectLanguage('en')}>{content.menu.languageEnglish}</button>
              <button className={`language-option${locale === 'fr' ? ' is-current' : ''}`} type="button" aria-pressed={locale === 'fr'} onClick={() => selectLanguage('fr')}>{content.menu.languageFrench}</button>
            </div>
            <button type="button" onClick={copyEmail}><FaCopy /> {copiedEmail ? content.menu.emailCopied : content.menu.copyEmail}</button>
            <a href={`mailto:${content.site.email}`}><FaPaperPlane /> {content.menu.sendEmail}</a>
          </section>
          <section>
            <p>{content.menu.navigation}</p>
            <a href={content.site.linkedinUrl} target="_blank" rel="noreferrer"><FaLinkedinIn /> {content.menu.linkedIn} <FaExternalLinkAlt className="external-link-icon" /></a>
            <a href="#about" onClick={closeMenu}><FaUser /> {content.navigation.about}</a>
            <a href="#projects" onClick={closeMenu}><FaStar /> {content.navigation.projects}</a>
            <a href="#experience" onClick={closeMenu}><FaBriefcase /> {content.navigation.experience}</a>
            <a href="#skills" onClick={closeMenu}><FaCode /> {content.navigation.skills}</a>
          </section>
        </aside>
      </>

      <AboutSection content={content} />
      <ProjectsSection content={content} selectedProjectName={selectedProjectName} onSelectProject={setSelectedProjectName} sectionRef={projectSectionRef} />
      <ExperienceSection content={content} scrollProgress={scrollProgress} onProjectSelect={selectProjectFromExperience} />
      <SkillsSection content={content} />
      <PhotoGallerySection content={content} />

      <footer className="page-footer">
        <p>{content.footer.thanks}</p>
        <a className="footer-top-button" href="#about"><FaArrowUp /> {content.footer.moveToTop}</a>
      </footer>
    </main>
  )
}

export default App
