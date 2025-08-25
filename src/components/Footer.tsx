export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-espresso py-24 relative overflow-hidden" data-testid="footer">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4=')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-4 gap-16">
          <div className="md:col-span-2">
            <div className="flex items-center mb-6 group">
              <img 
                src="https://iteeha.coffee/images/vfx.png" 
                alt="Iteeha Coffee Logo" 
                className="h-12 w-auto transform group-hover:rotate-12 transition-transform duration-300"
                data-testid="footer-logo"
              />
              <span className="ml-3 font-display font-bold text-2xl bg-gradient-to-r from-warm-peach to-soft-rose bg-clip-text text-transparent">Iteeha Coffee</span>
            </div>
            <p className="font-sans text-lg text-white/80 mb-8 max-w-md" data-testid="footer-description">
              A sanctuary for coffee lovers seeking comfort, quality, and community. Basic but beautiful, as per tradition.
            </p>
            <div className="flex space-x-6" data-testid="footer-social">
              <a href="#" className="text-white/60 hover:text-warm-peach transform hover:scale-110 transition-all duration-300" data-testid="social-facebook">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/iteeha.coffee/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white/60 hover:text-soft-rose transform hover:scale-110 transition-all duration-300" 
                data-testid="social-instagram"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.448 16.988c-1.297 0-2.448-1.207-2.448-2.448s1.151-2.448 2.448-2.448c1.297 0 2.448 1.207 2.448 2.448s-1.151 2.448-2.448 2.448z"/>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-mint-green transform hover:scale-110 transition-all duration-300" data-testid="social-twitter">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div data-testid="footer-quick-links">
            <h4 className="font-display font-bold text-xl text-warm-peach mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="font-sans text-white/80 hover:text-soft-rose transition-all duration-300 transform hover:translate-x-2 inline-flex items-center group"
                  data-testid="footer-link-home"
                >
                  <span className="transform group-hover:scale-110 transition-transform duration-300">Home</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('story')}
                  className="font-sans text-white/80 hover:text-soft-rose transition-all duration-300 transform hover:translate-x-2 inline-flex items-center group"
                  data-testid="footer-link-story"
                >
                  <span className="transform group-hover:scale-110 transition-transform duration-300">Our Story</span>
                </button>
              </li>
              <li>
                <a 
                  href="/gallery"
                  className="font-sans text-white/80 hover:text-soft-rose transition-all duration-300 transform hover:translate-x-2 inline-flex items-center group"
                  data-testid="footer-link-gallery"
                >
                  <span className="transform group-hover:scale-110 transition-transform duration-300">Gallery</span>
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="font-sans text-white/80 hover:text-soft-rose transition-all duration-300 transform hover:translate-x-2 inline-flex items-center group"
                  data-testid="footer-link-about"
                >
                  <span className="transform group-hover:scale-110 transition-transform duration-300">About Us</span>
                </a>
              </li>
              <li>
                <a 
                  href="/menu" 
                  className="font-sans text-white/80 hover:text-soft-rose transition-all duration-300 transform hover:translate-x-2 inline-flex items-center group"
                  data-testid="footer-link-menu"
                >
                  <span className="transform group-hover:scale-110 transition-transform duration-300">Menu</span>
                </a>
              </li>
              <li>
                <a 
                  href="/privacy" 
                  className="font-sans text-white/80 hover:text-soft-rose transition-all duration-300 transform hover:translate-x-2 inline-flex items-center group"
                  data-testid="footer-link-privacy"
                >
                  <span className="transform group-hover:scale-110 transition-transform duration-300">Privacy Policy</span>
                </a>
              </li>
            </ul>
          </div>
          
          <div data-testid="footer-order-links">
            <h4 className="font-display font-bold text-xl text-mint-green mb-6">Order</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="/order-landing" 
                  className="font-sans text-white/80 hover:text-mint-green transition-all duration-300 transform hover:translate-x-2 inline-flex items-center group"
                  data-testid="footer-link-order"
                >
                  <span className="transform group-hover:scale-110 transition-transform duration-300">Order Online</span>
                </a>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="font-sans text-white/80 hover:text-mint-green transition-all duration-300 transform hover:translate-x-2 inline-flex items-center group"
                  data-testid="footer-link-visit"
                >
                  <span className="transform group-hover:scale-110 transition-transform duration-300">Visit Us</span>
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 text-center" data-testid="footer-copyright">
          <p className="font-sans text-white/60 text-lg">
            &copy; 2024 Iteeha Coffee. All rights reserved. | Coffee. Craft. Conversations.
          </p>
        </div>
      </div>
    </footer>
  );
}
