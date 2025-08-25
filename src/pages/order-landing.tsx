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
        (position) => {
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
      <section className="pt-24 pb-12 bg-white" data-testid="order-landing-header">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img 
            src="https://iteeha.coffee/images/vfx.png" 
            alt="Iteeha Coffee" 
            className="h-16 w-auto mx-auto mb-8"
          />
          <h1 className="font-inter font-bold text-4xl md:text-5xl text-coffee-brown mb-4" data-testid="order-landing-title">
            Let's get ordering
          </h1>
          
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
      <section className="py-12 bg-coffee-light" data-testid="location-selection">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <Button
              onClick={handleCurrentLocation}
              variant="outline"
              className="w-full mb-4 py-6 text-left justify-start border-coffee-brown text-coffee-brown hover:bg-coffee-light"
              data-testid="current-location-button"
            >
              <MapPin className="w-5 h-5 mr-3" />
              Use my current location
            </Button>
            
            <div className="text-center text-gray-500 mb-4 font-medium">OR</div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search street, locality..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="pl-10 py-6 text-lg border-coffee-brown/20 focus:border-coffee-brown"
                data-testid="location-input"
                onKeyPress={(e) => e.key === 'Enter' && handleLocationSubmit()}
              />
            </div>
            
            {location && (
              <Button
                onClick={handleLocationSubmit}
                className="w-full mt-4 py-6 bg-coffee-brown hover:bg-coffee-dark text-white text-lg"
                data-testid="continue-button"
              >
                Continue to Menu
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 bg-white" data-testid="how-it-works">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Step 1 */}
            <div className="text-center" data-testid="step-location">
              <div className="bg-coffee-brown rounded-2xl p-8 mb-6 mx-auto w-32 h-32 flex items-center justify-center">
                <MapPin className="w-16 h-16 text-white" />
              </div>
              <h3 className="font-inter font-bold text-xl text-coffee-brown mb-4">
                Set your location
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Tell us where you want to get your items delivered
              </p>
            </div>
            
            {/* Step 2 */}
            <div className="text-center" data-testid="step-choose">
              <div className="bg-coffee-brown rounded-2xl p-8 mb-6 mx-auto w-32 h-32 flex items-center justify-center">
                <Package className="w-16 h-16 text-white" />
              </div>
              <h3 className="font-inter font-bold text-xl text-coffee-brown mb-4">
                Choose your items
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Add the items you want in your cart
              </p>
            </div>
            
            {/* Step 3 */}
            <div className="text-center" data-testid="step-delivery">
              <div className="bg-coffee-brown rounded-2xl p-8 mb-6 mx-auto w-32 h-32 flex items-center justify-center">
                <Truck className="w-16 h-16 text-white" />
              </div>
              <h3 className="font-inter font-bold text-xl text-coffee-brown mb-4">
                Have it delivered instantly
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our delivery partners will deliver your order at your doorstep
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
