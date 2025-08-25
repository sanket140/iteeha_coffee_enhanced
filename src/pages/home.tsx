import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Coffee, Bean, Croissant, Leaf, Smile, Heart } from "lucide-react";

export default function Home() {
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
    <div className="doodle-bg">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="doodle-icon absolute -top-6 -left-6 wiggle">
              <Bean className="text-espresso w-6 h-6" />
            </div>
            <h1 className="font-display text-6xl md:text-7xl text-espresso mb-4">
              Sip, Smile, <br />
              <span className="text-caramel">Repeat</span>
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
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform rotate-2">
              <img 
                src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg" 
                alt="Coffee art" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-espresso/20 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-blush rounded-full p-4 shadow-lg bounce">
              <Smile className="text-espresso w-8 h-8" />
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
                className="coffee-card hover:border-caramel group relative coffee-stain"
              >
                <div className="doodle-icon mb-4 group-hover:bg-caramel group-hover:text-cream transition-colors">
                  {item.icon}
                </div>
                <h3 className="font-display text-2xl text-espresso mb-2">{item.name}</h3>
                <p className="text-espresso/80 mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="font-heading text-xl text-caramel">{item.price}</span>
                  <button className="text-espresso hover:text-caramel transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a href="/menu" className="btn-primary inline-flex items-center">
              See Full Menu <Bean className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-24 px-4 md:px-8 relative">
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
            
            <div className="absolute -top-6 -left-6 bg-sage rounded-full p-4 shadow-lg wiggle">
              <Leaf className="text-cream w-8 h-8" />
            </div>
          </div>
          
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-espresso mb-6">
              Our <span className="text-caramel">Story</span>
            </h2>
            <p className="text-lg text-espresso/80 mb-6">
              Brewtiful began as a dream between two friends who believed coffee should be an experience, 
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
      <section className="py-20 px-4 md:px-8 bg-caramel text-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">
            Come Sip With Us
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            We're brewing daily from 7am to 8pm. Find us in the heart of downtown or order online for pickup.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="btn-secondary bg-espresso hover:bg-cream hover:text-espresso">
              Visit Us
            </a>
            <a href="/order-landing" className="btn-primary bg-cream text-espresso hover:bg-espresso hover:text-cream">
              Order Online
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Floating Order Button */}
      <a 
        href="/order-landing" 
        className="fixed bottom-6 right-6 bg-caramel text-cream p-4 rounded-full shadow-lg hover:bg-espresso transition-all duration-300 transform hover:scale-110 z-40 animate-float flex items-center"
      >
        <Coffee className="w-6 h-6" />
        <span className="ml-2 font-medium hidden sm:inline">Order Now</span>
      </a>
    </div>
  );
}
