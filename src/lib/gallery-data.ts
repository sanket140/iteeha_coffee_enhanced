export interface GalleryImage {
  src: string;
  alt: string;
  aspectRatio: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "https://iteeha.coffee/images/g9.jpg",
    alt: "Coffee shop interior",
    aspectRatio: "aspect-square"
  },
  {
    src: "https://iteeha.coffee/images/g12.jpg",
    alt: "Coffee brewing process",
    aspectRatio: "aspect-[4/5]"
  },
  {
    src: "https://iteeha.coffee/images/g10.jpg",
    alt: "Coffee beans",
    aspectRatio: "aspect-square"
  },
  {
    src: "https://iteeha.coffee/images/1.png",
    alt: "Iteeha coffee experience",
    aspectRatio: "aspect-[3/4]"
  },
  {
    src: "https://iteeha.coffee/images/2.png",
    alt: "Coffee menu",
    aspectRatio: "aspect-square"
  },
  {
    src: "https://iteeha.coffee/images/3.png",
    alt: "Coffee culture",
    aspectRatio: "aspect-[4/5]"
  },
  {
    src: "https://iteeha.coffee/images/e7.jpg",
    alt: "Coffee shop atmosphere",
    aspectRatio: "aspect-square"
  },
  {
    src: "https://iteeha.coffee/images/e12.jpg",
    alt: "Coffee preparation",
    aspectRatio: "aspect-[3/4]"
  },
  {
    src: "https://iteeha.coffee/images/e8.jpg",
    alt: "Coffee serving",
    aspectRatio: "aspect-square"
  },
  {
    src: "https://iteeha.coffee/images/g1.jpg",
    alt: "Cozy coffee corner",
    aspectRatio: "aspect-[4/5]"
  },
  {
    src: "https://iteeha.coffee/images/g6.jpg",
    alt: "Coffee shop details",
    aspectRatio: "aspect-square"
  },
  {
    src: "https://iteeha.coffee/images/g2.jpg",
    alt: "Coffee craftsmanship",
    aspectRatio: "aspect-[3/4]"
  }
];

export const homeGalleryImages = galleryImages.slice(0, 6); // Show first 6 on homepage
