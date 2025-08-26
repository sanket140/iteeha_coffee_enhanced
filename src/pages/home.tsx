import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CoffeeVerseEffects from "@/components/CoffeeVerseEffects";
import { Coffee, Bean, Croissant, Leaf, Smile, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [currentBanner, setCurrentBanner] = useState(0);

  const bannerImages = [
    {
      url: "https://iteeha.coffee/images/vfx.png",
      title: "Coffee. Craft. Conversations.",
      subtitle: "Where every cup tells a story"
    },
    {
      url: "https://iteeha.coffee/images/urmi.jpg",
      title: "Step in, relax,",
      subtitle: "Find your perfect coffee moment"
    },
    {
      url: "https://iteeha.coffee/images/e2.jpg",
      title: "Handcrafted Excellence",
      subtitle: "Every brew made with passion"
    }
  ];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleEasterEgg = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 4) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 3000);
      setClickCount(0);
    }
  };

  const nextBanner = () => {
    setCurrentBanner((prev) => (prev + 1) % bannerImages.length);
  };

  const prevBanner = () => {
    setCurrentBanner((prev) => (prev - 1 + bannerImages.length) % bannerImages.length);
  };

  const menuItems = [
    { 
      name: "Caramel Macchiato", 
      description: "Espresso with steamed milk and vanilla, topped with caramel", 
      price: "$5.25",
      icon: <Coffee className="text-espresso w-6 h-6" />
    },
    { 
      name: "Avocado Toast", 
      description: "Sourdough toast with mashed avocado, cherry tomatoes, and microgreens", 
      price: "$8.50",
      icon: <Croissant className="text-espresso w-6 h-6" />
    },
    { 
      name: "Matcha Latte", 
      description: "Premium matcha powder with steamed oat milk", 
      price: "$5.75",
      icon: <Leaf className="text-espresso w-6 h-6" />
    }
  ];

  return (
    <div className="doodle-bg smooth-scroll">
      <CoffeeVerseEffects />
      <Navigation />
      
      {/* Banner Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {bannerImages.map((banner, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentBanner ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={banner.url}
                alt={`Iteeha Coffee Banner ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
          ))}
        </div>
        
           <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              {bannerImages[currentBanner].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in opacity-90">
              {bannerImages[currentBanner].subtitle}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => window.location.href = '/order-landing'}
                className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                ORDER NOW
              </button>
              <button 
                onClick={() => window.location.href = '/menu'}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                Explore Menu
              </button>
            </div>
          </div>
        </div>
        
        {/* Banner Navigation */}
        <button
          onClick={prevBanner}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextBanner}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
        
        {/* Banner Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {bannerImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBanner ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="doodle-icon absolute -top-6 -left-6 wiggle easter-egg" onClick={handleEasterEgg}>
              <Bean className="text-espresso w-6 h-6" />
            </div>
            {showEasterEgg && (
              <div className="absolute -top-20 -left-10 text-2xl animate-bounce">
                🎉 You found the coffee bean secret! ☕✨
              </div>
            )}
            <h1 className="font-heading font-bold text-6xl md:text-7xl text-deep-coffee-brown mb-4">
              <span className="text-gradient animate-shimmer">Coffee</span>, <span className="text-gradient">Craft</span>, <br />
              <span className="text-cherry-red animate-pulse-glow font-playful">Conversations</span>
            </h1>
            <p className="font-subheading text-xl text-deep-coffee-brown/80 mb-8 max-w-lg">
              Handcrafted coffee, cozy vibes, and the perfect brew to start your day. 
              Our baristas pour love into every cup.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/menu" className="btn-primary">
                Explore Menu
              </a>
              <a href="/order-landing" className="btn-secondary">
                Order Online
              </a>
            </div>
          </div>
          
          <div className="relative parallax-section" style={{transform: `translateY(${scrollY * 0.1}px)`}}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-500 hover:scale-105">
              <img 
                src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" 
                alt="Coffee art" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-espresso/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-blush rounded-full p-4 shadow-lg bounce hover:animate-pulse-glow cursor-pointer" onClick={() => alert('☕ Welcome to the Coffee Verse! ✨')}>
              <Smile className="text-espresso w-8 h-8" />
            </div>
            <div className="absolute top-4 left-4 coffee-steam">
              <Coffee className="text-white w-6 h-6" />
            </div>
          </div>
        </div>
        
        <div className="wavy-divider mt-24"></div>
      </section>
      
      {/* Menu Preview */}
      <section className="py-16 px-4 md:px-8 bg-foam">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-deep-coffee-brown mb-4">
              Our <span className="text-caramel font-playful">Favorites</span>
            </h2>
            <p className="font-subheading text-xl text-deep-coffee-brown/80 max-w-2xl mx-auto">
              Handcrafted with premium ingredients and a dash of love
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div 
                key={index} 
                className="coffee-card hover:border-caramel group relative coffee-stain menu-item-hover card-hover-effect"
              >
                <div className="doodle-icon mb-4 group-hover:bg-caramel group-hover:text-cream transition-colors coffee-steam">
                  {item.icon}
                </div>
                <h3 className="font-subheading text-2xl text-deep-coffee-brown mb-2 group-hover:text-gradient transition-all duration-300">{item.name}</h3>
                <p className="font-sans text-deep-coffee-brown/80 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-heading text-xl text-caramel">{item.price}</span>
                  <button className="text-espresso hover:text-caramel transition-all duration-300 hover:scale-125 hover:rotate-12 easter-egg" onClick={() => alert(`❤️ Added ${item.name} to favorites! ✨`)}>
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/menu" className="btn-primary inline-flex items-center group">
              See Full Menu <Bean className="ml-2 w-4 h-4 group-hover:animate-spin" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-cream to-foam relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, #8B4513 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg transform -rotate-3 hover:rotate-0 transition-all duration-500">
                <img 
                  src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg" 
                  alt="Cafe interior" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg transform rotate-2 mt-8 hover:rotate-0 transition-all duration-500">
                <img 
                  src="https://images.pexels.com/photos/2067638/pexels-photo-2067638.jpeg" 
                  alt="Barista making coffee" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
            
            <div className="absolute -top-6 -left-6 bg-sage rounded-full p-4 shadow-lg wiggle easter-egg" onClick={() => alert('🌿 Eco-friendly coffee! We care about our planet! 🌍')}>
              <Leaf className="text-cream w-8 h-8" />
            </div>
            <div className="absolute -bottom-8 -right-8 text-4xl animate-bounce opacity-50">
              ✨
            </div>
          </div>
          
          <div>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-deep-coffee-brown mb-6">
              Our <span className="text-caramel font-playful">Story</span>
            </h2>
            <p className="font-subheading text-xl text-deep-coffee-brown/80 mb-6 leading-relaxed">
              Iteeha began as a dream between two friends who believed coffee should be an experience, 
              not just a caffeine fix. We source ethically, roast locally, and pour passionately.
            </p>
            <p className="font-sans text-lg text-deep-coffee-brown/80 mb-8 leading-relaxed">
              Our cozy space is designed for connection - whether you're catching up with friends, 
              diving into a good book, or finding inspiration for your next project.
            </p>
            <a href="/about" className="btn-primary inline-flex items-center transform hover:scale-105 transition-all duration-300">
              Learn More <Bean className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 px-4 md:px-8 bg-caramel text-cream relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-caramel via-golden-brew to-sunset-orange opacity-90"></div>
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">☕</div>
        <div className="absolute bottom-10 right-10 text-4xl opacity-30 animate-bounce">✨</div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-heading font-bold text-4xl md:text-5xl mb-6 text-gradient animate-shimmer">
            Come Sip With Us
          </h2>
          <p className="font-subheading text-2xl mb-10 max-w-2xl mx-auto">
            We're brewing daily from 7am to 8pm. Find us in the heart of downtown or order online for pickup.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn-secondary bg-espresso hover:bg-cream hover:text-espresso transform hover:scale-105 hover:rotate-1 transition-all duration-300">
              Visit Us
            </a>
            <a href="/order-landing" className="btn-primary bg-cream text-espresso hover:bg-espresso hover:text-cream transform hover:scale-105 hover:-rotate-1 transition-all duration-300">
              Order Online
            </a>
          </div>
        </div>
      </section>
      {/* Customer Testimonials with Coffee Verse Magic */}
      <section className="py-24 px-4 md:px-8 coffee-verse-hero">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-gradient mb-6 animate-shimmer">
              Coffee Stories <span className="font-playful">☕✨</span>
            </h2>
            <p className="text-white/90 font-subheading text-xl max-w-2xl mx-auto playful-text">
              What our coffee verse visitors say about their magical experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="magical-card p-8 text-center group cursor-pointer magical-hover" >
              <div className="text-6xl mb-4 animate-bounce coffee-bean-bounce">🙋‍♀️</div>
              <blockquote className="text-deep-coffee-brown font-subheading italic mb-4 playful-text text-lg">
                "This place feels like stepping into a coffee wonderland! Every sip is pure magic."
              </blockquote>
              <div className="text-caramel font-heading font-bold">- Sarah M.</div>
              <div className="text-sm text-mint-green font-playful">Coffee Enthusiast ✨</div>
            </div>
            
            <div className="magical-card p-8 text-center group cursor-pointer magical-hover" >
              <div className="text-6xl mb-4 animate-bounce coffee-bean-bounce" style={{animationDelay: '0.5s'}}>🧙‍♂️</div>
              <blockquote className="text-deep-coffee-brown font-subheading italic mb-4 playful-text text-lg">
                "The atmosphere here is absolutely enchanting. It's my daily dose of happiness!"
              </blockquote>
              <div className="text-caramel font-heading font-bold">- Rahul K.</div>
              <div className="text-sm text-mint-green font-playful">Regular Visitor ⭐</div>
            </div>
            
            <div className="magical-card p-8 text-center group cursor-pointer magical-hover" >
              <div className="text-6xl mb-4 animate-bounce coffee-bean-bounce" style={{animationDelay: '1s'}}>👩‍💼</div>
              <blockquote className="text-deep-coffee-brown font-subheading italic mb-4 playful-text text-lg">
                "Perfect blend of tradition and innovation. Every visit feels like discovering something new!"
              </blockquote>
              <div className="text-caramel font-heading font-bold">- Priya S.</div>
              <div className="text-sm text-mint-green font-playful">Business Professional 💼</div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}