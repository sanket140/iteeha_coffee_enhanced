import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { galleryImages } from "@/lib/gallery-data";

export default function Gallery() {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const openLightbox = (imageSrc: string) => {
    setCurrentImage(imageSrc);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setCurrentImage("");
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <title>Gallery - Iteeha Coffee | Coffee Shop Atmosphere & Experience</title>
      <meta name="description" content="Explore our coffee shop atmosphere, brewing process, and memorable moments at Iteeha Coffee. See what makes our Mumbai locations special." />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-coffee-light" data-testid="gallery-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-inter font-bold text-5xl md:text-6xl text-coffee-brown mb-6" data-testid="gallery-hero-title">
              Gallery
            </h1>
            <p className="text-xl text-charcoal max-w-3xl mx-auto" data-testid="gallery-hero-subtitle">
              Take a peek into our world of coffee craftsmanship, cozy atmosphere, and memorable moments
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-white" data-testid="gallery-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-testid="gallery-grid">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`gallery-item overflow-hidden rounded-xl cursor-pointer gallery-hover ${image.aspectRatio} bg-coffee-light`}
                onClick={() => openLightbox(image.src)}
                data-testid={`gallery-item-${index}`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-coffee-light" data-testid="gallery-categories">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl text-coffee-brown mb-6" data-testid="gallery-categories-title">
              Experience Iteeha
            </h2>
            <p className="text-charcoal text-lg max-w-2xl mx-auto" data-testid="gallery-categories-subtitle">
              From coffee craftsmanship to cozy moments - discover what makes Iteeha special
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="gallery-category-craft">
              <div className="bg-coffee-brown text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.5 3H6c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2v9c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM16 17H8V9h8v8zm2-10H6V5h12v2z"/>
                </svg>
              </div>
              <h3 className="font-inter font-semibold text-2xl text-coffee-brown mb-4">Coffee Craft</h3>
              <p className="text-charcoal leading-relaxed">
                Witness our baristas at work, from bean selection to the perfect pour
              </p>
            </div>
            
            <div className="text-center" data-testid="gallery-category-atmosphere">
              <div className="bg-coffee-brown text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3 className="font-inter font-semibold text-2xl text-coffee-brown mb-4">Cozy Atmosphere</h3>
              <p className="text-charcoal leading-relaxed">
                Explore our thoughtfully designed spaces that invite you to pause and reflect
              </p>
            </div>
            
            <div className="text-center" data-testid="gallery-category-moments">
              <div className="bg-coffee-brown text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 11H7v3h2v-3zm4 0h-2v3h2v-3zm4 0h-2v3h2v-3zm2-7h-1V2h-2v2H8V2H6v2H5a2 2 0 00-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                </svg>
              </div>
              <h3 className="font-inter font-semibold text-2xl text-coffee-brown mb-4">Special Moments</h3>
              <p className="text-charcoal leading-relaxed">
                Capturing the conversations, connections, and memories made over coffee
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-coffee-brown text-white" data-testid="gallery-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-inter font-bold text-4xl mb-6" data-testid="gallery-cta-title">
            Visit Us Today
          </h2>
          <p className="text-coffee-cream text-lg mb-8 max-w-2xl mx-auto" data-testid="gallery-cta-subtitle">
            Experience the atmosphere for yourself at any of our Mumbai locations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center bg-coffee-gold text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-coffee-cream hover:text-coffee-brown transition-all duration-300 transform hover:scale-105"
              data-testid="gallery-visit-button"
            >
              Find Our Locations
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </a>
            <a 
              href="/order-landing" 
              className="inline-flex items-center bg-transparent border-2 border-coffee-gold text-coffee-gold px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-coffee-gold hover:text-white transition-all duration-300 transform hover:scale-105"
              data-testid="gallery-order-button"
            >
              Order Now
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
          data-testid="lightbox-overlay"
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:text-coffee-gold z-10"
            onClick={closeLightbox}
            data-testid="lightbox-close"
          >
            <X className="h-8 w-8" />
          </Button>
          
          <img
            src={currentImage}
            alt="Gallery image"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
            data-testid="lightbox-image"
          />
        </div>
      )}

      <Footer />
    </>
  );
}
