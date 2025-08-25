export default function Footer() {
  return (
    <footer className="bg-espresso py-16 relative overflow-hidden immersive-background" data-testid="footer">
      {/* Magical Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-espresso via-coffee-bean to-mocha-dream opacity-90"></div>
      <div className="absolute top-10 left-10 text-6xl opacity-10 animate-float">☕</div>
      <div className="absolute bottom-20 right-20 text-4xl opacity-20 animate-bounce">✨</div>
      
      {/* Coffee Particles */}
      <div className="coffee-particle" style={{top: '20%', left: '10%', animationDelay: '0s'}}></div>
      <div className="coffee-particle" style={{top: '60%', right: '15%', animationDelay: '2s'}}></div>
      <div className="coffee-particle" style={{bottom: '30%', left: '70%', animationDelay: '4s'}}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          
          {/* ABOUT US */}
          <div className="md:col-span-1" data-testid="footer-about">
            <h4 className="font-display font-bold text-xl text-gradient mb-6 playful-text">ABOUT US</h4>
            <p className="font-sans text-white/80 mb-6 text-sm leading-relaxed">
              "Iteeha" roughly translates to 'as per tradition', and keeping that in mind, we 
              adopted the virtue of doing 'Basic but Beautiful'. We offer light and simple 
              products, but beautifully done.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6" data-testid="footer-social">
              <a href="#" className="text-white/60 hover:text-caramel transform hover:scale-125 hover:rotate-12 transition-all duration-300 magical-hover" data-testid="social-facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/iteeha.coffee/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-golden-brew transform hover:scale-125 hover:rotate-12 transition-all duration-300 magical-hover" data-testid="social-instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.448 16.988c-1.297 0-2.448-1.207-2.448-2.448s1.151-2.448 2.448-2.448c1.297 0 2.448 1.207 2.448 2.448s-1.151 2.448-2.448 2.448z"/>
                </svg>
              </a>
              <a href="#" className="text-white/60 hover:text-forest-green transform hover:scale-125 hover:rotate-12 transition-all duration-300 magical-hover" data-testid="social-whatsapp">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div data-testid="footer-links">
            <h4 className="font-display font-bold text-xl text-gradient mb-6 playful-text">LINKS</h4>
            <ul className="space-y-3">
              <li>
                <a href="/terms" className="font-sans text-white/80 hover:text-caramel transition-all duration-300 transform hover:translate-x-2 inline-flex items-center group text-sm" data-testid="footer-link-terms">
                  <span className="transform group-hover:scale-110 transition-transform duration-300">Terms and Conditions</span>
                </a>
              </li>
              <li>
                <a href="/privacy" className="font-sans text-white/80 hover:text-caramel transition-all duration-300 transform hover:translate-x-2 inline-flex items-center group text-sm" data-testid="footer-link-privacy">
                  <span className="transform group-hover:scale-110 transition-transform duration-300">Privacy Policy</span>
                </a>
              </li>
            </ul>
          </div>

          {/* OPENING HOURS */}
          <div data-testid="footer-hours">
            <h4 className="font-display font-bold text-xl text-gradient mb-6 playful-text">OPENING HOURS</h4>
            <div className="space-y-4 text-sm">
              <div className="magical-hover p-3 rounded-lg">
                <p className="text-golden-brew font-medium">VFS Mahalaxmi:</p>
                <p className="text-white/80">7:30 AM to 11:30 PM</p>
                <p className="text-white/60 text-xs">(open everyday)</p>
              </div>
              <div className="magical-hover p-3 rounded-lg">
                <p className="text-golden-brew font-medium">Urmi:</p>
                <p className="text-white/80">Monday to Friday: 8:00 AM to 10 PM</p>
                <p className="text-white/80">Saturday: 10am to 7:30pm</p>
                <p className="text-white/60 text-xs">(closed on Sundays)</p>
              </div>
            </div>
          </div>

          {/* CONTACT INFORMATION */}
          <div data-testid="footer-contact">
            <h4 className="font-display font-bold text-xl text-gradient mb-6 playful-text">CONTACT INFORMATION</h4>
            <div className="space-y-4 text-sm">
              <div className="magical-hover p-3 rounded-lg">
                <p className="text-golden-brew font-medium mb-2">Official Address:</p>
                <p className="text-white/80 leading-relaxed">
                  11th Floor, Urmi Estate, Nagin Nagar,<br/>
                  Ganapatro Kadam Marg, Opp. Peninsula<br/>
                  Business Park,<br/>
                  Lower Parel, Mumbai, Maharashtra<br/>
                  400013
                </p>
              </div>
              <div className="magical-hover p-3 rounded-lg">
                <p className="text-white/80">📞 +91 9819820205</p>
                <p className="text-white/80">✉️ connect@iteeha.coffee</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-white/20 mt-12 pt-8 text-center" data-testid="footer-copyright">
          <div className="space-y-2">
            <p className="font-sans text-white/80 text-sm">
              All Rights Reserved. © 2023 & 2024 Iteeha coffee
            </p>
            <p className="font-sans text-white/60 text-xs">
              Iteeha Hospitality & Entertainment Pvt Ltd GST - 27AAHCI3079B1ZO
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}