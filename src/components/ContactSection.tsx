export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-cream coffee-texture relative overflow-hidden" data-testid="contact-section">
      <div className="absolute inset-0 hero-gradient opacity-30"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 
            className="font-display font-bold text-5xl md:text-6xl bg-gradient-to-r from-warm-peach to-soft-rose bg-clip-text text-transparent mb-6 animate-fade-in" 
            data-testid="contact-title"
          >
            Visit Us
          </h2>
          <p 
            className="font-sans text-xl text-coffee-dark/80 max-w-2xl mx-auto animate-slide-up" 
            data-testid="contact-subtitle"
          >
            Come experience the warmth of Iteeha Coffee. We're here to serve you the perfect cup.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Location */}
          <div 
            className="text-center group transform hover:scale-105 transition-all duration-300" 
            data-testid="contact-location"
          >
            <div className="bg-warm-peach text-white w-20 h-20 rounded-3xl rotate-12 group-hover:rotate-0 flex items-center justify-center mx-auto mb-8 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-warm-peach/20">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-2xl text-coffee-dark mb-4">Locations</h3>
            <p className="font-sans text-lg text-coffee-dark/80">
              Mahalaxmi • Lower Parel • Bandra West<br />
              <a href="/contact" className="inline-flex items-center text-warm-peach hover:text-soft-rose transition-colors mt-2 group-hover:translate-x-2 transition-transform duration-300">
                View all locations
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </p>
          </div>
          
          {/* Hours */}
          <div 
            className="text-center group transform hover:scale-105 transition-all duration-300" 
            data-testid="contact-hours"
          >
            <div className="bg-mint-green text-white w-20 h-20 rounded-3xl -rotate-12 group-hover:rotate-0 flex items-center justify-center mx-auto mb-8 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-mint-green/20">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-2xl text-coffee-dark mb-4">Hours</h3>
            <p className="font-sans text-lg text-coffee-dark/80">
              7:30 AM - 11:30 PM<br />
              All Days<br />
              <span className="font-display text-mint-green mt-2 block">Basic but Beautiful</span>
            </p>
          </div>
          
          {/* Contact */}
          <div 
            className="text-center group transform hover:scale-105 transition-all duration-300" 
            data-testid="contact-info"
          >
            <div className="bg-soft-rose text-white w-20 h-20 rounded-3xl rotate-12 group-hover:rotate-0 flex items-center justify-center mx-auto mb-8 transition-all duration-500 shadow-lg hover:shadow-xl hover:shadow-soft-rose/20">
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-2xl text-coffee-dark mb-4">Contact</h3>
            <p className="font-sans text-lg text-coffee-dark/80">
              connect@iteeha.coffee<br />
              <a href="/contact" className="inline-flex items-center text-soft-rose hover:text-warm-peach transition-colors mt-2 group-hover:translate-x-2 transition-transform duration-300">
                Send us a message
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
