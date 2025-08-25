import { useState } from "react";
import { galleryImages } from "@/lib/gallery-data";

interface GalleryGridProps {
  onImageClick?: (imageSrc: string) => void;
}

export default function GalleryGrid({ onImageClick }: GalleryGridProps) {
  const handleImageClick = (imageSrc: string) => {
    if (onImageClick) {
      onImageClick(imageSrc);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-cream coffee-texture relative overflow-hidden" data-testid="gallery-section">
      <div className="absolute inset-0 hero-gradient opacity-40"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 
            className="font-display font-bold text-5xl md:text-6xl bg-gradient-to-r from-warm-peach to-soft-rose bg-clip-text text-transparent mb-6 animate-fade-in drop-shadow-lg" 
            data-testid="gallery-title"
          >
            Capture the Moments
          </h2>
          <p 
            className="font-sans text-xl text-coffee-dark/80 max-w-2xl mx-auto animate-slide-up text-shadow-sm" 
            data-testid="gallery-subtitle"
          >
            Step into our world where every cup tells a story and every corner holds a memory
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8" 
          data-testid="gallery-grid"
        >
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group gallery-item overflow-hidden rounded-3xl cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl hover:shadow-warm-peach/20 ${image.aspectRatio}`}
              onClick={() => handleImageClick(image.src)}
              data-testid={`gallery-item-${index}`}
            >
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-display text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
