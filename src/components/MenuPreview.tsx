export default function MenuPreview() {
  const featuredItems = [
    {
      category: "Coffee",
      name: "House Cold Coffee",
      price: "₹250",
      description: "Our signature cold coffee blend - perfect for Mumbai weather",
      image: "https://picsum.photos/400/300?random=1"
    },
    {
      category: "Food", 
      name: "Classic Spiced Chicken Sandwich",
      price: "₹330",
      description: "Tender spiced chicken with fresh vegetables on artisan bread",
      image: "https://picsum.photos/400/300?random=2"
    },
    {
      category: "Tea",
      name: "Black Tea Orange Blossom", 
      price: "₹160",
      description: "Premium black tea infused with delicate orange blossom notes",
      image: "https://picsum.photos/400/300?random=3"
    },
    {
      category: "Dessert",
      name: "Caramel & Chocolate Croissant",
      price: "₹520", 
      description: "Buttery croissant filled with rich caramel and chocolate",
      image: "https://picsum.photos/400/300?random=4"
    }
  ];

  return (
    <section className="py-24 bg-cream coffee-texture relative overflow-hidden" data-testid="menu-preview">
      <div className="absolute inset-0 hero-gradient opacity-50"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-5xl md:text-6xl bg-gradient-to-r from-warm-peach to-soft-rose bg-clip-text text-transparent mb-6 animate-fade-in drop-shadow-lg" data-testid="menu-preview-title">
            Taste the Magic
          </h2>
          <p className="font-sans text-xl text-coffee-dark/80 max-w-2xl mx-auto mb-12 animate-slide-up text-shadow-sm" data-testid="menu-preview-subtitle">
            Discover our carefully crafted selection of drinks and delights - where every bite and sip tells a story
          </p>
          <div className="flex justify-center items-center space-x-12 text-coffee-dark">
            <div className="text-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-3xl font-bold font-display bg-gradient-to-r from-warm-peach to-soft-rose bg-clip-text text-transparent drop-shadow-md">₹500-1050</div>
              <div className="text-base mt-2 font-medium">Cost for Two</div>
            </div>
            <div className="w-px h-16 bg-mint-green/30"></div>
            <div className="text-center transform hover:scale-110 transition-transform duration-300 cursor-pointer">
              <div className="text-3xl font-bold font-display bg-gradient-to-r from-warm-peach to-soft-rose bg-clip-text text-transparent drop-shadow-md">7:30 AM - 11:30 PM</div>
              <div className="text-base mt-2 font-medium">All Days</div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {featuredItems.map((item, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-rotate-1" 
              data-testid={`menu-preview-item-${index}`}
            >
              <div 
                className="h-56 bg-cover bg-center transform transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2 relative overflow-hidden rounded-t-3xl" 
                style={{ backgroundImage: `url('${item.image}')` }} 
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-sm font-bold text-mint-green uppercase tracking-wider text-shadow-sm">{item.category}</span>
                    <h3 className="font-display font-semibold text-xl text-coffee-dark mt-2 leading-tight group-hover:text-soft-rose transition-colors duration-300">
                      {item.name}
                    </h3>
                  </div>
                  <span className="text-2xl font-bold font-display text-warm-peach flex-shrink-0 ml-2 group-hover:scale-110 transition-transform duration-300 drop-shadow-md">
                    {item.price}
                  </span>
                </div>
                <p className="text-coffee-dark/70 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <a 
            href="/menu" 
            className="inline-flex items-center bg-warm-peach text-white px-10 py-5 rounded-full font-display font-semibold text-xl hover:bg-soft-rose transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-warm-peach/20 group animate-bounce-slow"
            data-testid="menu-preview-view-all"
          >
            View Full Menu
            <svg 
              className="w-6 h-6 ml-3 transform transition-transform duration-300 group-hover:translate-x-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
