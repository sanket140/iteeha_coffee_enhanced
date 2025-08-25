import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Coffee, Bean, Croissant, Leaf } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-cream/95 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center group">
            <div className="doodle-icon mr-3 bounce">
              <Coffee className="text-espresso w-6 h-6" />
            </div>
            <span className="font-display font-bold text-3xl text-espresso" 
                  style={{ textShadow: "2px 2px 0px rgba(155, 109, 80, 0.2)" }}>
              Brewtiful
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="/"
                className="font-heading font-medium text-espresso hover:text-caramel transition-all duration-300 hover:-translate-y-0.5 flex items-center"
              >
                <Bean className="mr-1 w-4 h-4" /> Home
              </a>
              <a 
                href="/about"
                className="font-heading font-medium text-espresso hover:text-caramel transition-all duration-300 hover:-translate-y-0.5 flex items-center"
              >
                <Leaf className="mr-1 w-4 h-4" /> About
              </a>
              <a 
                href="/menu"
                className="font-heading font-medium text-espresso hover:text-caramel transition-all duration-300 hover:-translate-y-0.5 flex items-center"
              >
                <Croissant className="mr-1 w-4 h-4" /> Menu
              </a>
              <a 
                href="/gallery"
                className="font-heading font-medium text-espresso hover:text-caramel transition-all duration-300 hover:-translate-y-0.5 flex items-center"
              >
                <svg className="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 4h7V2H4c-1.1 0-2 .9-2 2v7h2V4zm6 9l-4 5h12l-3-4-2.03 2.71L10 13zm7-4.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5zM20 2h-7v2h7v7h2V4c0-1.1-.9-2-2-2zm0 18h-7v2h7c1.1 0 2-.9 2-2v-7h-2v7zM4 13H2v7c0 1.1.9 2 2 2h7v-2H4v-7z"/>
                </svg>
                Gallery
              </a>
              <a 
                href="/contact"
                className="font-heading font-medium text-espresso hover:text-caramel transition-all duration-300 hover:-translate-y-0.5 flex items-center"
              >
                <svg className="mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                Contact
              </a>
              <a 
                href="/order-landing" 
                className="btn-primary flex items-center"
              >
                <Coffee className="mr-2 w-4 h-4" /> Order Now
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-espresso hover:text-caramel transition-colors duration-300" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-cream border-sage">
                <div className="flex flex-col space-y-4 mt-8">
                  <a 
                    href="/"
                    className="text-left px-3 py-2 text-espresso hover:text-caramel font-heading text-lg transition-all duration-300 hover:translate-x-2 flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Bean className="mr-2 w-4 h-4" /> Home
                  </a>
                  <a 
                    href="/about"
                    className="text-left px-3 py-2 text-espresso hover:text-caramel font-heading text-lg transition-all duration-300 hover:translate-x-2 flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Leaf className="mr-2 w-4 h-4" /> About
                  </a>
                  <a 
                    href="/menu"
                    className="text-left px-3 py-2 text-espresso hover:text-caramel font-heading text-lg transition-all duration-300 hover:translate-x-2 flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Croissant className="mr-2 w-4 h-4" /> Menu
                  </a>
                  <a 
                    href="/gallery"
                    className="text-left px-3 py-2 text-espresso hover:text-caramel font-heading text-lg transition-all duration-300 hover:translate-x-2 flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4 4h7V2H4c-1.1 0-2 .9-2 2v7h2V4zm6 9l-4 5h12l-3-4-2.03 2.71L10 13zm7-4.5c0-.83-.67-1.5-1.5-1.5S14 7.67 14 8.5s.67 1.5 1.5 1.5S17 9.33 17 8.5zM20 2h-7v2h7v7h2V4c0-1.1-.9-2-2-2zm0 18h-7v2h7c1.1 0 2-.9 2-2v-7h-2v7zM4 13H2v7c0 1.1.9 2 2 2h7v-2H4v-7z"/>
                    </svg>
                    Gallery
                  </a>
                  <a 
                    href="/contact"
                    className="text-left px-3 py-2 text-espresso hover:text-caramel font-heading text-lg transition-all duration-300 hover:translate-x-2 flex items-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg className="mr-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    Contact
                  </a>
                  <a 
                    href="/order-landing" 
                    className="btn-primary mx-3 mt-4 flex items-center justify-center"
                    onClick={() => setIsOpen(false)}
                  >
                    <Coffee className="mr-2 w-4 h-4" /> Order Now
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
