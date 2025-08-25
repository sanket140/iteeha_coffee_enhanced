export default function StorySection() {
  return (
    <section id="story" className="py-24 bg-cream coffee-texture relative overflow-hidden" data-testid="story-section">
      <div className="absolute inset-0 hero-gradient opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-10">
            <div className="flex items-center space-x-6">
              <img 
                src="https://iteeha.coffee/images/aboutiteeha.png" 
                alt="About Iteeha" 
                className="h-20 w-auto transform hover:rotate-12 transition-transform duration-300"
                data-testid="story-logo"
              />
              <h2 
                className="font-display font-bold text-5xl md:text-6xl bg-gradient-to-r from-warm-peach to-soft-rose bg-clip-text text-transparent animate-fade-in" 
                data-testid="story-title"
              >
                Our Story
              </h2>
            </div>
            
            <div className="prose prose-lg max-w-none animate-slide-up" data-testid="story-content">
              <p className="font-sans text-xl text-coffee-dark/80 leading-relaxed mb-10">
                <span className="font-display font-bold text-2xl text-warm-peach">"Iteeha"</span> roughly translates to <em className="text-soft-rose font-medium">as per tradition</em>, and keeping that in mind, we adopted the virtue of doing <strong className="font-display text-mint-green">Basic but Beautiful</strong>. We offer light and simple products, but beautifully done. We understand the importance of a well-made cup of coffee, and hence focus immensely on sourcing just the right beans, training our staff continually, and equipping our cafes with the best machines. Tie that in with our warm service and you've got yourself an experience that will keep you coming back for more. Iteeha Coffee is a sanctuary for all those that are seeking a comforting cuppa and a moment to pause and reflect.
              </p>
            </div>
            
            <a 
              href="/about" 
              className="inline-flex items-center bg-warm-peach text-white px-10 py-4 rounded-full font-display text-xl hover:bg-soft-rose transition-all duration-300 transform hover:scale-110 hover:shadow-xl hover:shadow-warm-peach/20 group"
              data-testid="story-learn-more"
            >
              Learn More About Us
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
          
          <div className="relative">
            <div className="relative rounded-[2.5rem] overflow-hidden transform hover:scale-105 transition-transform duration-500 shadow-2xl">
              <img 
                src="https://picsum.photos/800/600?random=5" 
                alt="Cozy coffee shop interior" 
                className="w-full h-auto"
                data-testid="story-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/30 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div 
              className="absolute -top-8 -right-8 bg-white rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer" 
              style={{animation: 'float 4s ease-in-out infinite'}} 
              data-testid="story-feature-quality"
            >
              <div className="flex items-center space-x-4">
                <svg className="w-10 h-10 text-mint-green" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.5 3H6c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2v9c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM16 17H8V9h8v8zm2-10H6V5h12v2z"/>
                </svg>
                <div>
                  <p className="font-display font-bold text-lg text-coffee-dark">Premium Quality</p>
                  <p className="font-sans text-soft-rose">Carefully sourced beans</p>
                </div>
              </div>
            </div>
            
            <div 
              className="absolute -bottom-8 -left-8 bg-warm-peach rounded-3xl p-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer text-white" 
              style={{animation: 'float 4s ease-in-out infinite 1s'}} 
              data-testid="story-feature-service"
            >
              <div className="flex items-center space-x-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                <div>
                  <p className="font-display font-bold text-lg">Warm Service</p>
                  <p className="font-sans text-white/80">From our heart to yours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
