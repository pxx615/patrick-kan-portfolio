import { FaImages } from 'react-icons/fa'
import { catImages } from '../data/portfolioData'

export default function PhotoGallerySection({ content }) {
  const galleryImages = catImages.length > 3 ? [...catImages, ...catImages] : catImages

  return (
    <section className="gallery-section" aria-labelledby="gallery-heading">
      <h1 className="section-title" id="gallery-heading"><FaImages /> {content.sectionTitles.photoGallery}</h1>
      <div className="cat-gallery-viewport">
        <div className={catImages.length > 3 ? 'cat-gallery-track is-scrolling' : 'cat-gallery-track'} style={{ '--cat-count': galleryImages.length }}>
          {galleryImages.map((source, index) => (
            <figure className="cat-gallery-item" key={`${source}-${index}`}>
              <img src={source} alt={`${content.gallery.imageAlt} ${(index % catImages.length) + 1}`} />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
