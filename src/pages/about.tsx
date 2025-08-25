import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <title>About Us - Iteeha Coffee | Our Story & Tradition</title>
      <meta name="description" content="Learn about Iteeha Coffee's journey - 'as per tradition' we believe in doing 'Basic but Beautiful'. Discover our philosophy, sourcing practices, and commitment to quality coffee." />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-coffee-light" data-testid="about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <img 
              src="https://iteeha.coffee/images/aboutiteeha.png" 
              alt="About Iteeha" 
              className="h-20 w-auto mx-auto mb-8"
              data-testid="about-hero-logo"
            />
            <h1 className="font-inter font-bold text-5xl md:text-6xl text-coffee-brown mb-6" data-testid="about-hero-title">
              Our Story
            </h1>
            <p className="text-xl text-charcoal max-w-3xl mx-auto" data-testid="about-hero-subtitle">
              Where tradition meets innovation in every carefully crafted cup
            </p>
          </div>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="py-20 bg-white" data-testid="about-story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="font-inter font-bold text-4xl text-coffee-brown" data-testid="about-who-we-are">
                Who We Are
              </h2>
              
              <div className="prose prose-lg max-w-none" data-testid="about-story-content">
                <p className="text-charcoal text-lg leading-relaxed mb-6">
                  As a cozy café in the heart of Mumbai, we are a quiet spot for you amidst the city's turmoil. 
                  With our thoughtfully curated range of coffees, bakes, artisanal teas, freshly cold-pressed 
                  juices and premium sandwiches, Iteeha Coffee is your space to unwind.
                </p>
                
                <p className="text-charcoal text-lg leading-relaxed mb-6">
                  The fact that we are an articulation of Iteeha Corporation, an art studio where creativity 
                  and traditions are celebrated, shows in our minimal and elegant ambience.
                </p>
                
                <p className="text-charcoal text-lg leading-relaxed mb-6">
                  <span className="font-semibold text-coffee-brown">"Iteeha"</span> roughly translates to 
                  <em> 'as per tradition'</em>, and keeping that in mind, we adopted the virtue of doing 
                  <strong> 'Basic but Beautiful'</strong>. We offer light and simple products, but beautifully done.
                </p>
                
                <p className="text-charcoal text-lg leading-relaxed mb-6">
                  We understand the importance of a well-made cup of coffee, and hence focus immensely on 
                  sourcing just the right beans, training our staff continually, and equipping our cafes 
                  with the best machines.
                </p>
                
                <p className="text-charcoal text-lg leading-relaxed mb-8">
                  Tie that in with our warm service and you've got yourself an experience that will keep 
                  you coming back for more. Iteeha Coffee is a sanctuary for all those that are seeking 
                  a comforting cuppa and a moment to pause and reflect.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://iteeha.coffee/images/aboutimg.png" 
                alt="Iteeha Coffee Story" 
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="about-story-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-coffee-light" data-testid="about-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl md:text-5xl text-coffee-brown mb-6" data-testid="about-values-title">
              Our Values
            </h2>
            <p className="text-charcoal text-lg max-w-2xl mx-auto" data-testid="about-values-subtitle">
              The principles that guide us in creating exceptional coffee experiences
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center" data-testid="value-tradition">
              <div className="bg-coffee-brown text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="font-inter font-semibold text-2xl text-coffee-brown mb-4">Tradition</h3>
              <p className="text-charcoal leading-relaxed">
                'As per tradition' - we honor time-tested methods while embracing innovation in our craft.
              </p>
            </div>
            
            <div className="text-center" data-testid="value-quality">
              <div className="bg-coffee-brown text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.5 3H6c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2v9c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V9c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM16 17H8V9h8v8zm2-10H6V5h12v2z"/>
                </svg>
              </div>
              <h3 className="font-inter font-semibold text-2xl text-coffee-brown mb-4">Quality</h3>
              <p className="text-charcoal leading-relaxed">
                From sourcing the finest beans to training our staff - excellence in every detail.
              </p>
            </div>
            
            <div className="text-center" data-testid="value-simplicity">
              <div className="bg-coffee-brown text-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3 className="font-inter font-semibold text-2xl text-coffee-brown mb-4">Simplicity</h3>
              <p className="text-charcoal leading-relaxed">
                'Basic but Beautiful' - we believe in elegant simplicity that speaks to the heart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-coffee-brown text-white" data-testid="about-cta">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-inter font-bold text-4xl mb-6" data-testid="about-cta-title">
            Follow Our Journey
          </h2>
          <p className="text-coffee-cream text-lg mb-8 max-w-2xl mx-auto" data-testid="about-cta-subtitle">
            Stay connected with us and be part of our coffee community
          </p>
          <a 
            href="https://www.instagram.com/iteeha.coffee/" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-coffee-gold text-white px-8 py-4 rounded-full font-inter font-semibold text-lg hover:bg-coffee-cream hover:text-coffee-brown transition-all duration-300 transform hover:scale-105"
            data-testid="about-follow-button"
          >
            Follow Us on Instagram
            <svg className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.448 16.988c-1.297 0-2.448-1.207-2.448-2.448s1.151-2.448 2.448-2.448c1.297 0 2.448 1.207 2.448 2.448s-1.151 2.448-2.448 2.448z"/>
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
