import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Package, Truck } from "lucide-react";

export default function OrderLanding() {
  const [selectedMethod, setSelectedMethod] = useState<"delivery" | "pickup">("delivery");
  const [location, setLocation] = useState("");

  const handleLocationSubmit = () => {
    if (location.trim()) {
      // Navigate to actual order page with location
      window.location.href = `/order?location=${encodeURIComponent(location)}`;
    }
  };

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          // For demo purposes, set a Mumbai location
          setLocation("Mahalaxmi Temple, 26/A, Mahalaxmi West, Central West");
          setTimeout(() => {
            window.location.href = "/order?location=current";
          }, 1000);
        },
        () => {
          // Fallback to manual input
          alert("Unable to access location. Please enter manually.");
        }
      );
    }
  };

  return (
    <>
      <title>Order - Iteeha Coffee | Fresh Coffee & Food Delivery</title>
      <meta name="description" content="Order fresh coffee and food from Iteeha Coffee. Set your delivery location and browse our menu of specialty coffee, matcha, and delicious food items." />
      
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-cream via-latte to-foam relative overflow-hidden" data-testid="order-landing-header">
        <div className="absolute inset-0 doodle-bg opacity-30"></div>
        <div className="absolute top-20 left-20 w-20 h-20 bg-blush rounded-full opacity-20 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-32 right-32 w-16 h-16 bg-sage rounded-full opacity-20 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 bg-caramel rounded-full opacity-20 animate-wiggle"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="mb-8">
            <div className="relative inline-block">
              <img 
                src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=120&h=120&fit=crop&crop=center" 
                alt="Coffee cup" 
                className="h-20 w-20 rounded-full mx-auto mb-4 border-4 border-caramel animate-float shadow-lg"
              />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-caramel rounded-full flex items-center justify-center animate-bounce">
                <span className="text-white text-xs font-bold">☕</span>
              </div>
            </div>
            <img 
              src="https://iteeha.coffee/images/vfx.png" 
              alt="Iteeha Coffee" 
              className="h-16 w-auto mx-auto"
            />
          </div>
          <h1 className="font-display font-bold text-5xl md:text-6xl text-espresso mb-4 text-shadow" data-testid="order-landing-title">
            Let's get ordering
          </h1>
          <p className="text-lg text-espresso/80 mb-8 font-sans max-w-2xl mx-auto">
            Craving something delicious? Let us bring the finest coffee and treats right to your doorstep.
          </p>
          
          {/* Delivery/Pickup Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-coffee-light rounded-full p-1 flex">
              <button
                onClick={() => setSelectedMethod("delivery")}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedMethod === "delivery"
                    ? "bg-coffee-brown text-white"
                    : "text-coffee-brown hover:bg-coffee-cream"
                }`}
                data-testid="delivery-tab"
              >
                Delivery
              </button>
              <button
                onClick={() => setSelectedMethod("pickup")}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedMethod === "pickup"
                    ? "bg-coffee-brown text-white"
                    : "text-coffee-brown hover:bg-coffee-cream"
                }`}
                data-testid="pickup-tab"
              >
                Pickup
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Location Selection */}
      <section className="py-12 bg-gradient-to-b from-latte to-cream relative" data-testid="location-selection">
        <div className="absolute inset-0 doodle-bg opacity-30"></div>
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-caramel/20 hover:shadow-2xl transition-all duration-300">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-caramel to-espresso rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-display text-2xl text-espresso mb-2">Where would you like your order?</h2>
              <p className="text-sm text-espresso/70">We'll deliver fresh and hot to your location</p>
            </div>
            
            <Button
              onClick={handleCurrentLocation}
              variant="outline"
              className="w-full mb-4 py-6 text-left justify-start border-caramel text-espresso hover:bg-caramel/10 hover:border-espresso transition-all duration-300 group"
              data-testid="current-location-button"
            >
              <MapPin className="w-5 h-5 mr-3 group-hover:animate-bounce" />
              <span className="font-medium">Use my current location</span>
            </Button>
            
            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-espresso/20"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-espresso/60 font-medium">or enter manually</span>
              </div>
            </div>
            
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-espresso/40 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search street, locality, area..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-12 py-6 text-lg border-caramel/30 focus:border-caramel rounded-xl bg-white/70 backdrop-blur-sm"
                data-testid="location-input"
                onKeyPress={(e) => e.key === 'Enter' && handleLocationSubmit()}
              />
            </div>
            
            {location && (
              <Button
                onClick={handleLocationSubmit}
                className="w-full mt-6 py-6 bg-gradient-to-r from-caramel to-espresso hover:from-espresso hover:to-caramel text-white text-lg font-medium rounded-xl transform hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl"
                data-testid="continue-button"
              >
                Continue to Menu →
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-gradient-to-br from-foam via-cream to-latte relative overflow-hidden" data-testid="how-it-works">
        <div className="absolute inset-0 doodle-bg opacity-20"></div>
        <div className="absolute top-10 right-10 w-40 h-40 bg-sage rounded-full opacity-10 animate-float"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-blush rounded-full opacity-10 animate-bounce"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl font-bold text-espresso mb-4">How it works</h2>
            <p className="text-xl text-espresso/70 font-sans">Simple steps to satisfy your cravings</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Step 1 */}
            <div className="text-center group" data-testid="step-location">
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-caramel to-espresso rounded-3xl p-8 mx-auto w-36 h-36 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-3">
                  <MapPin className="w-16 h-16 text-white group-hover:animate-bounce" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blush rounded-full flex items-center justify-center text-espresso font-bold text-sm animate-pulse">
                  1
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1524850011238-e3d235c7d4c9?w=80&h=80&fit=crop&crop=center" 
                  alt="Location pin" 
                  className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full border-4 border-white shadow-lg opacity-80"
                />
              </div>
              <h3 className="font-heading font-bold text-2xl text-espresso mb-4 group-hover:text-caramel transition-colors">
                Set your location
              </h3>
              <p className="text-espresso/70 leading-relaxed text-lg">
                Tell us where you want to get your items delivered with precision
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center group" data-testid="step-choose">
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-sage to-espresso rounded-3xl p-8 mx-auto w-36 h-36 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                  <Package className="w-16 h-16 text-white group-hover:animate-wiggle" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blush rounded-full flex items-center justify-center text-espresso font-bold text-sm animate-pulse" style={{animationDelay: '0.3s'}}>
                  2
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?w=80&h=80&fit=crop&crop=center" 
                  alt="Coffee selection" 
                  className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full border-4 border-white shadow-lg opacity-80"
                />
              </div>
              <h3 className="font-heading font-bold text-2xl text-espresso mb-4 group-hover:text-sage transition-colors">
                Choose your items
              </h3>
              <p className="text-espresso/70 leading-relaxed text-lg">
                Browse our curated menu and add your favorite treats to cart
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center group" data-testid="step-delivery">
              <div className="relative mb-8">
                <div className="bg-gradient-to-br from-blush to-espresso rounded-3xl p-8 mx-auto w-36 h-36 flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-3">
                  <Truck className="w-16 h-16 text-white group-hover:animate-bounce" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blush rounded-full flex items-center justify-center text-espresso font-bold text-sm animate-pulse" style={{animationDelay: '0.6s'}}>
                  3
                </div>
                <img 
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=80&h=80&fit=crop&crop=center" 
                  alt="Delivery" 
                  className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full border-4 border-white shadow-lg opacity-80"
                />
              </div>
              <h3 className="font-heading font-bold text-2xl text-espresso mb-4 group-hover:text-blush transition-colors">
                Enjoy fresh delivery
              </h3>
              <p className="text-espresso/70 leading-relaxed text-lg">
                Sit back and relax while we deliver hot, fresh items to your doorstep
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
