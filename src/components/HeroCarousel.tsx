import { useHeroSlider } from "@/hooks/use-hero-slider";

export default function HeroCarousel() {
  const { currentSlide, setCurrentSlide } = useHeroSlider();

  const slides = [
    {
      id: 0,
      image: "https://iteeha.coffee/images/vfx.png",
      title: "Coffee. Craft. Conversations.",
      subtitle: "Where every sip tells a story",
      isLogo: true,
    },
    {
      id: 1,
      image: "https://iteeha.coffee/images/urmi.jpg",
      title: "Step in, relax,",
      subtitle: "Your cozy corner awaits",
      isLogo: false,
    },
    {
      id: 2,
      image: "https://iteeha.coffee/images/e6.jpg",
      title: "And",
      subtitle: "Take a moment to breathe",
      isLogo: false,
    },
    {
      id: 3,
      image: "https://iteeha.coffee/images/e2.jpg",
      title: "let us take care of the rest.",
      subtitle: "Your perfect brew awaits",
      isLogo: false,
    },
    {
      id: 4,
      image: "/attached_assets/generated_images/Cozy_coffee_shop_interior_6aa64c84.png",
      title: "Where comfort meets coffee",
      subtitle: "Your home away from home",
      isLogo: false,
    },
    {
      id: 5,
      image: "/attached_assets/generated_images/Barista_creating_latte_art_552d5eda.png",
      title: "Crafted with passion",
      subtitle: "Every cup tells our story",
      isLogo: false,
    },
    {
      id: 6,
      image: "/attached_assets/generated_images/Coffee_roasting_process_2c088205.png",
      title: "From bean to bliss",
      subtitle: "Freshly roasted perfection",
      isLogo: false,
    },
    {
      id: 7,
      image: "/attached_assets/generated_images/Outdoor_coffee_patio_96e88291.png",
      title: "Nature's embrace",
      subtitle: "Coffee under the open sky",
      isLogo: false,
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center coffee-texture overflow-hidden"
      data-testid="hero-carousel"
    >
      <div className="absolute inset-0 hero-gradient opacity-50"></div>

      {/* Hero Slides */}
      <div className="w-full h-screen relative overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex items-center transition-all duration-1000 ${
              currentSlide === index
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
            data-testid={`hero-slide-${index}`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-10000 hover:scale-105"
              style={{ backgroundImage: `url('${slide.image}')` }}
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              {slide.isLogo ? (
                <div className="flex flex-col items-center space-y-6">
                  <img
                    src={slide.image}
                    alt="Iteeha Coffee Logo"
                    className="h-32 md:h-48 w-auto animate-bounce"
                  />
                  <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-4 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="font-sans text-xl md:text-2xl text-mint-green/90 animate-slide-up">
                    {slide.subtitle}
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <h1 className="font-display font-bold text-5xl md:text-7xl text-white mb-4 animate-fade-in">
                    {slide.title}
                  </h1>
                  <p className="font-sans text-xl md:text-2xl text-mint-green/90 animate-slide-up">
                    {slide.subtitle}
                  </p>
                </div>
              )}
              <a
                href="/order-landing"
                className="inline-block mt-8 bg-warm-peach text-white px-10 py-5 rounded-full font-display font-semibold text-xl hover:bg-soft-rose transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-warm-peach/20 animate-float"
                data-testid="hero-order-button"
              >
                Order Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Hero Navigation Dots */}
      <div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4"
        data-testid="hero-dots"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-warm-peach scale-125"
                : "bg-white/50 hover:bg-warm-peach/75 hover:scale-110"
            }`}
            data-testid={`hero-dot-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
