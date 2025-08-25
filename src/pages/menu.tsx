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

  const MenuSection = ({ title, items, testId }: { title: string; items: typeof coffeeItems; testId: string }) => (
    <div className="mb-16" data-testid={testId}>
      <h2 className="font-inter font-bold text-3xl text-coffee-brown mb-8 text-center">
        {title}
      </h2>
      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow" data-testid={`menu-item-${index}`}>
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-inter font-semibold text-xl text-coffee-brown pr-4">
                {item.name}
              </h3>
              <span className="text-2xl font-bold text-coffee-gold flex-shrink-0">
                ₹{item.price}
              </span>
            </div>
            <p className="text-charcoal leading-relaxed">
              {item.description}
            </p>
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
      <section className="pt-24 pb-16 bg-coffee-light" data-testid="menu-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-inter font-bold text-5xl md:text-6xl text-coffee-brown mb-6" data-testid="menu-hero-title">
              Our Menu
            </h1>
            <p className="text-xl text-charcoal max-w-3xl mx-auto mb-8" data-testid="menu-hero-subtitle">
              Thoughtfully curated coffee, bakes, artisanal teas, and premium sandwiches - Basic but Beautiful
            </p>
            <div className="flex justify-center items-center space-x-8 text-coffee-brown">
              <div className="text-center">
                <div className="text-2xl font-bold">₹500-1050</div>
                <div className="text-sm">Cost for Two</div>
              </div>
              <div className="w-px h-12 bg-coffee-brown/30"></div>
              <div className="text-center">
                <div className="text-2xl font-bold">7:30 AM - 11:30 PM</div>
                <div className="text-sm">All Days</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-20 bg-coffee-light" data-testid="menu-sections">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <MenuSection title="Coffee & Espresso" items={coffeeItems} testId="menu-coffee" />
          
          <MenuSection title="Food & Bakes" items={foodItems} testId="menu-food" />
          
          <MenuSection title="Artisanal Teas" items={teaItems} testId="menu-tea" />
          
          <MenuSection title="Other Beverages" items={beverageItems} testId="menu-beverages" />

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
