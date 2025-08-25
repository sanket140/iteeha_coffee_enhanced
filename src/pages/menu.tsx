import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Menu() {
  const coffeeItems = [
    { name: "Espresso", price: 160, description: "Rich, bold, and concentrated coffee shot" },
    { name: "Doppio (Double Espresso)", price: 160, description: "Double shot of our signature espresso" },
    { name: "Americano", price: 180, description: "Espresso diluted with hot water for a classic coffee experience" },
    { name: "Latte", price: 200, description: "Smooth espresso with steamed milk and light foam" },
    { name: "Cortado", price: 190, description: "Equal parts espresso and warm milk" },
    { name: "Cappuccino", price: 190, description: "Perfect balance of espresso, steamed milk, and foam" },
    { name: "Mocha", price: 220, description: "Espresso with chocolate and steamed milk" },
    { name: "Vietnamese Cold Brew", price: 220, description: "Smooth, refreshing cold coffee with a unique brewing method" },
    { name: "House Cold Coffee", price: 250, description: "Our signature cold coffee blend" },
    { name: "Coffee Lemonade", price: 250, description: "Refreshing combination of coffee and citrus" },
    { name: "Pallonji's Cold Brew (300ml)", price: 450, description: "Premium cold brew in our signature bottle" },
  ];

  const foodItems = [
    { name: "Classic Spiced Chicken Sandwich", price: 330, description: "Tender spiced chicken with fresh vegetables" },
    { name: "Chicken Ham & Cheese Sandwich", price: 380, description: "Premium ham and cheese with crisp vegetables" },
    { name: "Tomato Cream Cheese Sandwich", price: 300, description: "Fresh tomatoes with creamy cheese spread" },
    { name: "Grilled Veg Pesto Sandwich", price: 350, description: "Grilled vegetables with house-made pesto" },
    { name: "White Chocolate & Hazelnut Cookie", price: 150, description: "Soft cookie with white chocolate and hazelnuts" },
    { name: "Caramel & Chocolate Croissant", price: 520, description: "Buttery croissant with caramel and chocolate" },
    { name: "Chocolate Cake", price: 280, description: "Rich, moist chocolate cake slice" },
  ];

  const teaItems = [
    { name: "Green Tea Pure Joy", price: 150, description: "Pure green tea leaves for a refreshing experience" },
    { name: "Black Tea Orange Blossom", price: 160, description: "Black tea infused with orange blossom notes" },
    { name: "Oolong Rose", price: 170, description: "Delicate oolong tea with rose petals" },
    { name: "Black Tea Fleur Lemon", price: 160, description: "Black tea with lemon and floral notes" },
  ];

  const beverageItems = [
    { name: "Hot Chocolate", price: 200, description: "House-made 54% dark chocolate ganache with steamed milk" },
    { name: "Fresh Cold-Pressed Juice", price: 180, description: "Daily selection of fresh fruit and vegetable juices" },
    { name: "Artisanal Lemonade", price: 150, description: "Fresh lemon with a hint of herbs" },
  ];

  const MenuSection = ({ title, items, testId, bgImage }: { title: string; items: typeof coffeeItems; testId: string; bgImage: string }) => (
    <div className="mb-16" data-testid={testId}>
      <div className="flex items-center justify-center mb-8">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-caramel to-espresso flex items-center justify-center mr-4 animate-float">
          <img src={bgImage} alt={title} className="w-10 h-10 object-contain filter brightness-0 invert" />
        </div>
        <h2 className="font-display font-bold text-4xl text-espresso">
          {title}
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div key={index} className="coffee-card hover:shadow-xl hover:scale-[1.02] transition-all duration-300 group" data-testid={`menu-item-${index}`}>
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-heading font-semibold text-xl text-espresso pr-4 group-hover:text-caramel transition-colors">
                {item.name}
              </h3>
              <span className="text-2xl font-bold text-caramel flex-shrink-0 animate-pulse">
                ₹{item.price}
              </span>
            </div>
            <p className="text-charcoal leading-relaxed group-hover:text-espresso transition-colors">
              {item.description}
            </p>
            <div className="mt-4 pt-4 border-t border-latte">
              <div className="flex justify-between items-center">
                <span className="text-sm text-sage font-medium">Fresh • Made to Order</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-caramel" fill="currentColor" viewBox="0 0 20 20">
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
      <title>Menu - Iteeha Coffee | Coffee, Food & Artisanal Teas in Mumbai</title>
      <meta name="description" content="Explore Iteeha Coffee's menu featuring specialty coffee, artisanal teas, fresh sandwiches, and baked goods. Cost for two: ₹500-1050. Basic but Beautiful." />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-latte via-cream to-foam relative overflow-hidden" data-testid="menu-hero">
        <div className="absolute inset-0 doodle-bg opacity-20"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-caramel rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-sage rounded-full opacity-10 animate-float"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=120&h=120&fit=crop&crop=center" 
                alt="Coffee beans" 
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-caramel animate-wiggle"
              />
            </div>
            <h1 className="font-display font-bold text-6xl md:text-7xl text-espresso mb-6 text-shadow" data-testid="menu-hero-title">
              Our Menu
            </h1>
            <p className="text-xl text-espresso max-w-3xl mx-auto mb-8 font-heading" data-testid="menu-hero-subtitle">
              Thoughtfully curated coffee, bakes, artisanal teas, and premium sandwiches - Basic but Beautiful
            </p>
            <div className="flex justify-center items-center space-x-8 text-espresso bg-white/70 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-caramel">₹500-1050</div>
                <div className="text-sm font-medium">Cost for Two</div>
              </div>
              <div className="w-px h-12 bg-espresso/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-caramel">7:30 AM - 11:30 PM</div>
                <div className="text-sm font-medium">All Days</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-20 bg-coffee-light" data-testid="menu-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <MenuSection 
            title="Coffee & Espresso" 
            items={coffeeItems} 
            testId="menu-coffee" 
            bgImage="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=64&h=64&fit=crop&crop=center"
          />
          
          <MenuSection 
            title="Food & Bakes" 
            items={foodItems} 
            testId="menu-food" 
            bgImage="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=64&h=64&fit=crop&crop=center"
          />
          
          <MenuSection 
            title="Artisanal Teas" 
            items={teaItems} 
            testId="menu-tea" 
            bgImage="https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=64&h=64&fit=crop&crop=center"
          />
          
          <MenuSection 
            title="Other Beverages" 
            items={beverageItems} 
            testId="menu-beverages" 
            bgImage="https://images.unsplash.com/photo-1544145945-f90425340c7e?w=64&h=64&fit=crop&crop=center"
          />

        </div>
      </section>

      {/* Payment & Info Section */}
      <section className="py-16 bg-white" data-testid="menu-info">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-coffee-brown rounded-2xl p-8 text-white text-center">
            <h2 className="font-inter font-bold text-3xl mb-6" data-testid="menu-info-title">
              Good to Know
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div data-testid="menu-info-payment">
                <div className="bg-coffee-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                </div>
                <h3 className="font-inter font-semibold text-xl mb-2">Payment Options</h3>
                <p className="text-coffee-cream">We accept card payments via PayEazy for your convenience</p>
              </div>
              
              <div data-testid="menu-info-dietary">
                <div className="bg-coffee-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-inter font-semibold text-xl mb-2">Dietary Options</h3>
                <p className="text-coffee-cream">Vegetarian and non-vegetarian options available. No alcohol served.</p>
              </div>
              
              <div data-testid="menu-info-ordering">
                <div className="bg-coffee-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-inter font-semibold text-xl mb-2">Order Online</h3>
                <p className="text-coffee-cream">Skip the wait and order online for pickup or delivery</p>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="https://order.iteeha.coffee/" 
                className="inline-flex items-center bg-coffee-gold text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-coffee-cream hover:text-coffee-brown transition-all duration-300 transform hover:scale-105"
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
