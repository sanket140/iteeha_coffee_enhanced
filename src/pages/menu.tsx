import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CoffeeVerseEffects from "@/components/CoffeeVerseEffects";
import { useState, useEffect } from "react";

export default function Menu() {
  const [scrollY, setScrollY] = useState(0);
  const [favoriteItems, setFavoriteItems] = useState<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFavorite = (index: number, itemName: string) => {
    const newFavorites = new Set(favoriteItems);
    if (newFavorites.has(index)) {
      newFavorites.delete(index);
      alert(`💔 Removed ${itemName} from favorites`);
    } else {
      newFavorites.add(index);
      alert(`❤️ Added ${itemName} to favorites! ✨`);
    }
    setFavoriteItems(newFavorites);
  };

  const coffeeItems = [
    { name: "Espresso", price: 160, description: "Rich, bold, and concentrated coffee shot", image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300&h=200&fit=crop&crop=center" },
    { name: "Doppio (Double Espresso)", price: 160, description: "Double shot of our signature espresso", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=200&fit=crop&crop=center" },
    { name: "Americano", price: 180, description: "Espresso diluted with hot water for a classic coffee experience", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop&crop=center" },
    { name: "Latte", price: 200, description: "Smooth espresso with steamed milk and light foam", image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=300&h=200&fit=crop&crop=center" },
    { name: "Cortado", price: 190, description: "Equal parts espresso and warm milk", image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop&crop=center" },
    { name: "Cappuccino", price: 190, description: "Perfect balance of espresso, steamed milk, and foam", image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=300&h=200&fit=crop&crop=center" },
    { name: "Mocha", price: 220, description: "Espresso with chocolate and steamed milk", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop&crop=center" },
    { name: "Vietnamese Cold Brew", price: 220, description: "Smooth, refreshing cold coffee with a unique brewing method", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop&crop=center" },
    { name: "House Cold Coffee", price: 250, description: "Our signature cold coffee blend", image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&h=200&fit=crop&crop=center" },
    { name: "Coffee Lemonade", price: 250, description: "Refreshing combination of coffee and citrus", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=200&fit=crop&crop=center" },
    { name: "Pallonji's Cold Brew (300ml)", price: 450, description: "Premium cold brew in our signature bottle", image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop&crop=center" },
  ];

  const foodItems = [
    { name: "Classic Spiced Chicken Sandwich", price: 330, description: "Tender spiced chicken with fresh vegetables", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300&h=200&fit=crop&crop=center" },
    { name: "Chicken Ham & Cheese Sandwich", price: 380, description: "Premium ham and cheese with crisp vegetables", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300&h=200&fit=crop&crop=center" },
    { name: "Tomato Cream Cheese Sandwich", price: 300, description: "Fresh tomatoes with creamy cheese spread", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&h=200&fit=crop&crop=center" },
    { name: "Grilled Veg Pesto Sandwich", price: 350, description: "Grilled vegetables with house-made pesto", image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=300&h=200&fit=crop&crop=center" },
    { name: "White Chocolate & Hazelnut Cookie", price: 150, description: "Soft cookie with white chocolate and hazelnuts", image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=300&h=200&fit=crop&crop=center" },
    { name: "Caramel & Chocolate Croissant", price: 520, description: "Buttery croissant with caramel and chocolate", image: "https://images.unsplash.com/photo-1555507036-ab794f1c8382?w=300&h=200&fit=crop&crop=center" },
    { name: "Chocolate Cake", price: 280, description: "Rich, moist chocolate cake slice", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=200&fit=crop&crop=center" },
  ];

  const teaItems = [
    { name: "Green Tea Pure Joy", price: 150, description: "Pure green tea leaves for a refreshing experience", image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=300&h=200&fit=crop&crop=center" },
    { name: "Black Tea Orange Blossom", price: 160, description: "Black tea infused with orange blossom notes", image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop&crop=center" },
    { name: "Oolong Rose", price: 170, description: "Delicate oolong tea with rose petals", image: "https://images.unsplash.com/photo-1597318181269-d6a2a65469c0?w=300&h=200&fit=crop&crop=center" },
    { name: "Black Tea Fleur Lemon", price: 160, description: "Black tea with lemon and floral notes", image: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=300&h=200&fit=crop&crop=center" },
  ];

  const beverageItems = [
    { name: "Hot Chocolate", price: 200, description: "House-made 54% dark chocolate ganache with steamed milk", image: "https://images.unsplash.com/photo-1542990253-0b8be77413eb?w=300&h=200&fit=crop&crop=center" },
    { name: "Fresh Cold-Pressed Juice", price: 180, description: "Daily selection of fresh fruit and vegetable juices", image: "https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=300&h=200&fit=crop&crop=center" },
    { name: "Artisanal Lemonade", price: 150, description: "Fresh lemon with a hint of herbs", image: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=300&h=200&fit=crop&crop=center" },
  ];

  const MenuSection = ({ title, items, testId }: { title: string; items: typeof coffeeItems; testId: string }) => (
    <div className="mb-16 parallax-section" data-testid={testId} style={{transform: `translateY(${scrollY * 0.02}px)`}}>
      <div className="flex items-center justify-center mb-8">
        <h2 className="font-bold text-4xl text-orange-900">
          {title}
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group overflow-hidden menu-item-hover card-hover-effect" data-testid={`menu-item-${index}`}>
            <div className="relative h-48 mb-4 overflow-hidden rounded-xl">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=300&h=200&fit=crop&crop=center";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-3 py-1 rounded-full font-bold text-lg animate-pulse-glow">
                ₹{item.price}
              </div>
              <div className="absolute top-4 left-4 text-2xl opacity-50 animate-steam">☕</div>
            </div>
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-xl text-orange-900 group-hover:text-gradient transition-colors">
                {item.name}
              </h3>
              <button 
                className={`p-1 rounded-full transition-all duration-300 hover:scale-125 ${
                  favoriteItems.has(index) ? 'text-red-500 animate-pulse' : 'text-gray-400 hover:text-red-500'
                }`}
                onClick={() => toggleFavorite(index, item.name)}
              >
                ❤️
              </button>
            </div>
            <p className="text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors mb-4">
              {item.description}
            </p>
            <div className="pt-4 border-t border-orange-100">
              <div className="flex justify-between items-center">
                <span className="text-sm text-green-600 font-medium">Fresh • Made to Order ✨</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-orange-400 hover:text-yellow-500 transition-colors cursor-pointer hover:animate-bounce" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <CoffeeVerseEffects />
      <title>Menu - Iteeha Coffee | Coffee, Food & Artisanal Teas in Mumbai</title>
      <meta name="description" content="Explore Iteeha Coffee's menu featuring specialty coffee, artisanal teas, fresh sandwiches, and baked goods. Cost for two: ₹500-1050. Basic but Beautiful." />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-200 relative overflow-hidden parallax-section" data-testid="menu-hero" style={{transform: `translateY(${scrollY * 0.1}px)`}}>
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-green-500 rounded-full opacity-10 animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl opacity-5 animate-spin" style={{animationDuration: '20s'}}>☕</div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=120&h=120&fit=crop&crop=center" 
                alt="Coffee beans" 
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-orange-400"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 24 24' fill='%23f97316'%3E%3Cpath d='M18.5 3H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12.5c.8 0 1.5-.7 1.5-1.5v-15c0-.8-.7-1.5-1.5-1.5zM6 19V5h12.5v14H6z'/%3E%3C/svg%3E";
                }}
              />
            </div>
            <h1 className="font-bold text-6xl md:text-7xl text-orange-900 mb-6 text-gradient animate-shimmer" data-testid="menu-hero-title">
              Our Menu
            </h1>
            <p className="text-xl text-orange-800 max-w-3xl mx-auto mb-8" data-testid="menu-hero-subtitle">
              Thoughtfully curated coffee, bakes, artisanal teas, and premium sandwiches - Basic but Beautiful
            </p>
            <div className="flex justify-center items-center space-x-8 text-orange-900 bg-white/70 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">₹500-1050</div>
                <div className="text-sm font-medium">Cost for Two</div>
              </div>
              <div className="w-px h-12 bg-orange-800/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">7:30 AM - 11:30 PM</div>
                <div className="text-sm font-medium">All Days</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-20 bg-orange-50" data-testid="menu-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <MenuSection 
            title="Coffee & Espresso" 
            items={coffeeItems} 
            testId="menu-coffee" 
          />
          
          <MenuSection 
            title="Food & Bakes" 
            items={foodItems} 
            testId="menu-food" 
          />
          
          <MenuSection 
            title="Artisanal Teas" 
            items={teaItems} 
            testId="menu-tea" 
          />
          
          <MenuSection 
            title="Other Beverages" 
            items={beverageItems} 
            testId="menu-beverages" 
          />

        </div>
      </section>

      {/* Payment & Info Section */}
      <section className="py-16 bg-white" data-testid="menu-info">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-orange-900 rounded-2xl p-8 text-white text-center">
            <h2 className="font-bold text-3xl mb-6" data-testid="menu-info-title">
              Good to Know
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div data-testid="menu-info-payment">
                <div className="bg-orange-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-2">Payment Options</h3>
                <p className="text-orange-200">We accept card payments via PayEazy for your convenience</p>
              </div>
              
              <div data-testid="menu-info-dietary">
                <div className="bg-orange-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-2">Dietary Options</h3>
                <p className="text-orange-200">Vegetarian and non-vegetarian options available. No alcohol served.</p>
              </div>
              
              <div data-testid="menu-info-ordering">
                <div className="bg-orange-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-xl mb-2">Order Online</h3>
                <p className="text-orange-200">Skip the wait and order online for pickup or delivery</p>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="/order" 
                className="inline-flex items-center bg-orange-400 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-300 hover:text-orange-900 transition-all duration-300 transform hover:scale-105"
                data-testid="menu-order-button"
              >
                Order Online Now
                <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}