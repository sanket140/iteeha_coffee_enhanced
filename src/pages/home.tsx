import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CoffeeVerseEffects from "@/components/CoffeeVerseEffects";
import { Coffee, Bean, Croissant, Leaf, Smile, Heart } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEasterEgg = () => {
    setClickCount(prev => prev + 1);
    if (clickCount >= 4) {
      setShowEasterEgg(true);
      setTimeout(() => setShowEasterEgg(false), 3000);
      setClickCount(0);
    }
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
            <h1 className="font-display text-6xl md:text-7xl text-espresso mb-4">
              <span className="text-gradient animate-shimmer">Sip</span>, <span className="text-gradient">Smile</span>, <br />
              <span className="text-caramel animate-pulse-glow">Repeat</span>
            </h1>
            <p className="text-lg text-espresso/80 mb-8 max-w-lg">
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
            <h2 className="font-display text-4xl md:text-5xl text-espresso mb-4">
              Our <span className="text-caramel">Favorites</span>
            </h2>
            <p className="text-lg text-espresso/80 max-w-2xl mx-auto">
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
                <h3 className="font-display text-2xl text-espresso mb-2 group-hover:text-gradient transition-all duration-300">{item.name}</h3>
                <p className="text-espresso/80 mb-4">{item.description}</p>
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
      <section className="py-24 px-4 md:px-8 relative parallax-section" style={{transform: `translateY(${scrollY * 0.05}px)`}}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden shadow-lg transform -rotate-3">
                <img 
                  src="https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg" 
                  alt="Cafe interior" 
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg transform rotate-2 mt-8">
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
            <h2 className="font-display text-4xl md:text-5xl text-espresso mb-6">
              Our <span className="text-caramel">Story</span>
            </h2>
            <p className="text-lg text-espresso/80 mb-6">
              Iteeha began as a dream between two friends who believed coffee should be an experience, 
              not just a caffeine fix. We source ethically, roast locally, and pour passionately.
            </p>
            <p className="text-lg text-espresso/80 mb-8">
              Our cozy space is designed for connection - whether you're catching up with friends, 
              diving into a good book, or finding inspiration for your next project.
            </p>
            <a href="/about" className="btn-primary inline-flex items-center">
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
          <h2 className="font-display text-4xl md:text-5xl mb-6 text-gradient animate-shimmer">
            Come Sip With Us
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
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
      
      <Footer />
      
      {/* Enhanced Floating Order Button */}
      <a 
        href="/order-landing" 
        className="fixed bottom-6 right-6 bg-gradient-to-r from-caramel to-golden-brew text-cream p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-40 animate-float flex items-center group coffee-steam animate-pulse-glow"
        onClick={() => console.log('☕ Order button clicked! Welcome to the Coffee Verse! ✨')}
      >
        <Coffee className="w-6 h-6 group-hover:animate-spin" />
        <span className="ml-2 font-medium hidden sm:inline group-hover:text-gradient">Order Now</span>
      </a>
      
      {/* Hidden Easter Egg - Coffee Bean Rain */}
      <div className="fixed top-0 left-1/2 transform -translate-x-1/2 text-2xl animate-bounce opacity-20 pointer-events-none" style={{animationDelay: '2s'}}>
        ☕✨☕
      </div>
    </div>
  );
}
