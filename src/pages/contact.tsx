import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    person: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', person: '', message: '' });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <title>Contact Us - Iteeha Coffee | Mumbai Locations & Hours</title>
      <meta name="description" content="Visit Iteeha Coffee in Mumbai. Find our locations in Mahalaxmi, Lower Parel, and Bandra West. Open 7:30 AM to 11:30 PM daily. Contact us at connect@iteeha.coffee" />
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-coffee-light" data-testid="contact-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="font-inter font-bold text-5xl md:text-6xl text-coffee-brown mb-6" data-testid="contact-hero-title">
              Contact Us
            </h1>
            <p className="text-xl text-charcoal max-w-3xl mx-auto" data-testid="contact-hero-subtitle">
              Come experience the warmth of Iteeha Coffee. We're here to serve you the perfect cup.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white" data-testid="contact-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="bg-coffee-light rounded-2xl p-8" data-testid="contact-form-section">
              <h2 className="font-inter font-bold text-3xl text-coffee-brown mb-8" data-testid="contact-form-title">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-coffee-brown font-medium">Name *</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-2"
                      required
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-coffee-brown font-medium">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="mt-2"
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-coffee-brown font-medium">Phone</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="mt-2"
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <Label htmlFor="person" className="text-coffee-brown font-medium">Contact Person *</Label>
                    <Select value={formData.person} onValueChange={(value) => handleInputChange('person', value)} required>
                      <SelectTrigger className="mt-2" data-testid="select-person">
                        <SelectValue placeholder="Please Select Person" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="manager">Store Manager</SelectItem>
                        <SelectItem value="catering">Catering Services</SelectItem>
                        <SelectItem value="feedback">Feedback</SelectItem>
                        <SelectItem value="partnerships">Partnerships</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-coffee-brown font-medium">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="mt-2 min-h-[120px]"
                    placeholder="Tell us how we can help you..."
                    required
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-coffee-brown text-white hover:bg-coffee-dark py-3 text-lg font-semibold"
                  data-testid="button-send-message"
                >
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8" data-testid="contact-info-section">
              <div>
                <h2 className="font-inter font-bold text-3xl text-coffee-brown mb-8" data-testid="contact-info-title">
                  Get in Touch
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4" data-testid="contact-email">
                    <div className="bg-coffee-brown text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26c.67.36 1.45.36 2.12 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-xl text-coffee-brown mb-2">Email</h3>
                      <p className="text-charcoal">connect@iteeha.coffee</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4" data-testid="contact-hours">
                    <div className="bg-coffee-brown text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12,6 12,12 16,14" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-xl text-coffee-brown mb-2">Hours</h3>
                      <p className="text-charcoal">7:30 AM - 11:30 PM<br />All Days</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4" data-testid="contact-social">
                    <div className="bg-coffee-brown text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.448 16.988c-1.297 0-2.448-1.207-2.448-2.448s1.151-2.448 2.448-2.448c1.297 0 2.448 1.207 2.448 2.448s-1.151 2.448-2.448 2.448z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-inter font-semibold text-xl text-coffee-brown mb-2">Follow Us</h3>
                      <a 
                        href="https://www.instagram.com/iteeha.coffee/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-coffee-brown hover:text-coffee-gold transition-colors"
                        data-testid="social-instagram-link"
                      >
                        @iteeha.coffee
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="py-20 bg-coffee-light" data-testid="contact-locations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-inter font-bold text-4xl md:text-5xl text-coffee-brown mb-6" data-testid="locations-title">
              Our Locations
            </h2>
            <p className="text-charcoal text-lg max-w-2xl mx-auto" data-testid="locations-subtitle">
              Visit us at any of our cozy Mumbai locations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mahalaxmi Location */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow" data-testid="location-mahalaxmi">
              <div className="bg-coffee-brown text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-inter font-semibold text-2xl text-coffee-brown mb-4 text-center">Mahalaxmi</h3>
              <p className="text-charcoal text-center leading-relaxed">
                Ground Floor, Urmi Axis Building, West, behind Famous studio, opp. Doctor Elijah Moses Road, Mahalakshmi, Mumbai, Maharashtra 400011
              </p>
            </div>
            
            {/* Lower Parel Location */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow" data-testid="location-lower-parel">
              <div className="bg-coffee-brown text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-inter font-semibold text-2xl text-coffee-brown mb-4 text-center">Lower Parel</h3>
              <p className="text-charcoal text-center leading-relaxed">
                95, Ganpatrao Kadam Marg, Opposite Peninsula Business Park, Lower Parel West, Mumbai, Maharashtra 400013
              </p>
            </div>
            
            {/* Bandra West Location */}
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow" data-testid="location-bandra">
              <div className="bg-coffee-brown text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-inter font-semibold text-2xl text-coffee-brown mb-4 text-center">Bandra West</h3>
              <p className="text-charcoal text-center leading-relaxed">
                Shop 6, Shanti Vanam, Hill Road, Bandra West, Mumbai
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
