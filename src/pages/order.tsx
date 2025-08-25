import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X, Plus, Minus, MapPin, ShoppingCart } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  isVeg: boolean;
  category: string;
  image: string;
  customizable?: boolean;
  milkOptions?: { name: string; price: number }[];
}

interface CartItem extends MenuItem {
  quantity: number;
  selectedMilk?: string;
  milkPrice?: number;
  totalPrice: number;
}

export default function Order() {
  const [selectedCategory, setSelectedCategory] = useState("Matcha Specials");
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isItemModalOpen, setIsItemModalOpen] = useState(false);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [vegOnly, setVegOnly] = useState(false);
  const [deliveryLocation, setDeliveryLocation] = useState("Mahalaxmi Temple, 26/A, Mahalaxmi West, Central West");
  const [quantity, setQuantity] = useState(1);
  const [selectedMilk, setSelectedMilk] = useState("Regular Milk");

  const categories = [
    "Matcha Specials",
    "Sandwiches", 
    "Iteeha Signatures",
    "Desserts & Bakes",
    "Hot Beverages",
    "Cold Beverages",
    "Cold Pressed Juices (Sugar Free)",
    "Salads",
    "Pasta"
  ];

  const menuItems: MenuItem[] = [
    // Matcha Specials
    {
      id: "matcha-1",
      name: "Classic Hot Matcha Latte",
      price: 320,
      description: "A Smooth Blend Of Matcha And Steamed Milk",
      isVeg: true,
      category: "Matcha Specials",
      image: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=300&h=200&fit=crop&crop=center",
      customizable: true,
      milkOptions: [
        { name: "Regular Milk", price: 0 },
        { name: "Oat Milk", price: 80 },
        { name: "Almond Milk", price: 80 }
      ]
    },
    {
      id: "matcha-2", 
      name: "Spiced Ginger Matcha Latte",
      price: 340,
      description: "Matcha And Steamed Milk With House Made Ginger Syrup",
      isVeg: true,
      category: "Matcha Specials",
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=300&h=200&fit=crop&crop=center",
      customizable: true,
      milkOptions: [
        { name: "Regular Milk", price: 0 },
        { name: "Oat Milk", price: 80 },
        { name: "Almond Milk", price: 80 }
      ]
    },
    {
      id: "matcha-3",
      name: "Blueberry Matcha Latte", 
      price: 380,
      description: "Matcha And Milk With Blueberry Compote",
      isVeg: true,
      category: "Matcha Specials",
      image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=200&fit=crop&crop=center",
      customizable: true,
      milkOptions: [
        { name: "Regular Milk", price: 0 },
        { name: "Oat Milk", price: 80 },
        { name: "Almond Milk", price: 80 }
      ]
    },
    {
      id: "matcha-4",
      name: "Signature Iced Matcha",
      price: 350,
      description: "Classic Matcha And Milk Over Ice",
      isVeg: true,
      category: "Matcha Specials",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop&crop=center",
      customizable: true,
      milkOptions: [
        { name: "Regular Milk", price: 0 },
        { name: "Oat Milk", price: 80 },
        { name: "Almond Milk", price: 80 }
      ]
    },
    {
      id: "matcha-5",
      name: "Golden Glow Matcha Latte",
      price: 370,
      description: "Matcha with turmeric and steamed milk",
      isVeg: true,
      category: "Matcha Specials",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&h=200&fit=crop&crop=center",
      customizable: true,
      milkOptions: [
        { name: "Regular Milk", price: 0 },
        { name: "Oat Milk", price: 80 },
        { name: "Almond Milk", price: 80 }
      ]
    },
    {
      id: "matcha-6",
      name: "Vanilla Matcha Latte",
      price: 360,
      description: "Matcha with vanilla syrup and steamed milk",
      isVeg: true,
      category: "Matcha Specials",
      image: "https://gratefulgrazer.com/wp-content/uploads/2022/01/Vanilla-Matcha-Latte-60.jpg",
      customizable: true,
      milkOptions: [
        { name: "Regular Milk", price: 0 },
        { name: "Oat Milk", price: 80 },
        { name: "Almond Milk", price: 80 }
      ]
    },
    // Hot Beverages
    {
      id: "coffee-1",
      name: "Espresso",
      price: 160,
      description: "Rich, bold, and concentrated coffee shot",
      isVeg: true,
      category: "Hot Beverages",
      image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=300&h=200&fit=crop&crop=center"
    },
    {
      id: "coffee-2",
      name: "Americano",
      price: 180,
      description: "Espresso diluted with hot water",
      isVeg: true,
      category: "Hot Beverages",
      image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop&crop=center"
    },
    {
      id: "coffee-3",
      name: "Latte",
      price: 200,
      description: "Smooth espresso with steamed milk",
      isVeg: true,
      category: "Hot Beverages",
      image: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=300&h=200&fit=crop&crop=center",
      customizable: true,
      milkOptions: [
        { name: "Regular Milk", price: 0 },
        { name: "Oat Milk", price: 80 },
        { name: "Almond Milk", price: 80 }
      ]
    },
    // Sandwiches
    {
      id: "sandwich-1",
      name: "Classic Spiced Chicken Sandwich",
      price: 330,
      description: "Tender spiced chicken with fresh vegetables",
      isVeg: false,
      category: "Sandwiches",
      image: "https://www.sugarspicenmore.com/wp-content/uploads/2023/03/Chicken-Sandwiches-2-rotated.jpg"
    },
    {
      id: "sandwich-2",
      name: "Grilled Veg Pesto Sandwich",
      price: 350,
      description: "Grilled vegetables with house-made pesto",
      isVeg: true,
      category: "Sandwiches",
      image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?w=300&h=200&fit=crop&crop=center"
    }
  ];

  const filteredItems = menuItems.filter(item => {
    const categoryMatch = item.category === selectedCategory;
    const vegMatch = !vegOnly || item.isVeg;
    return categoryMatch && vegMatch;
  });

  const openItemModal = (item: MenuItem) => {
    setSelectedItem(item);
    setQuantity(1);
    setSelectedMilk("Regular Milk");
    setIsItemModalOpen(true);
  };

  const closeItemModal = () => {
    setIsItemModalOpen(false);
    setSelectedItem(null);
  };

  const addToCart = () => {
    if (!selectedItem) return;

    const milkOption = selectedItem.milkOptions?.find(m => m.name === selectedMilk);
    const milkPrice = milkOption?.price || 0;
    const totalPrice = (selectedItem.price + milkPrice) * quantity;

    const cartItem: CartItem = {
      ...selectedItem,
      quantity,
      selectedMilk: selectedItem.customizable ? selectedMilk : undefined,
      milkPrice: selectedItem.customizable ? milkPrice : undefined,
      totalPrice
    };

    setCart(prev => [...prev, cartItem]);
    closeItemModal();
  };

  const getTotalCart = () => {
    return cart.reduce((total, item) => total + item.totalPrice, 0);
  };

  return (
    <>
      <title>Order Online - Iteeha Coffee | Fresh Coffee & Food Delivery</title>
      <meta name="description" content="Order fresh coffee, food, and beverages online from Iteeha Coffee. Delivery available across Mumbai. Experience our matcha specials and signature items." />
      
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-6 bg-white border-b" data-testid="order-header">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="https://iteeha.coffee/images/vfx.png" 
                alt="Iteeha Coffee" 
                className="h-8 w-auto"
              />
              <div>
                <h1 className="font-inter font-bold text-2xl text-coffee-brown">Iteeha Coffee</h1>
                <p className="text-sm text-gray-600">Iteeha Coffee • Mahalaxmi</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Label htmlFor="veg-only" className="text-sm font-medium">Veg only</Label>
                <Switch
                  id="veg-only"
                  checked={vegOnly}
                  onCheckedChange={setVegOnly}
                  data-testid="veg-toggle"
                />
              </div>
              
              {cart.length > 0 && (
                <Button className="bg-coffee-brown hover:bg-coffee-dark text-white" data-testid="cart-button">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  {cart.length} items - ₹{getTotalCart()}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-4 bg-coffee-light" data-testid="delivery-info">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-coffee-brown">Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-gray-600" />
              <span className="text-sm">Delivery to: {deliveryLocation}</span>
              <Button variant="ghost" size="sm" className="text-coffee-brown hover:text-coffee-dark">
                Change
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8" data-testid="order-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            
            {/* Sidebar Menu */}
            <div className="lg:col-span-1" data-testid="menu-sidebar">
              <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-24">
                <h2 className="font-inter font-bold text-xl text-coffee-brown mb-6">Menu</h2>
                <nav className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedCategory === category
                          ? "bg-coffee-brown text-white"
                          : "text-gray-700 hover:bg-coffee-light"
                      }`}
                      data-testid={`category-${category.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {category}
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Menu Items */}
            <div className="lg:col-span-3" data-testid="menu-items">
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="font-inter font-bold text-2xl text-coffee-brown mb-8" data-testid="category-title">
                  {selectedCategory}
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredItems.map((item) => (
                    <div key={item.id} className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 overflow-hidden group" data-testid={`menu-item-${item.id}`}>
                      <div className="relative h-48 overflow-hidden">
                        <img 
                          src={item.image} 
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          {item.isVeg && <Badge variant="secondary" className="bg-green-100 text-green-800 border-2 border-white">●</Badge>}
                        </div>
                        <div className="absolute top-4 right-4 bg-caramel text-white px-3 py-1 rounded-full font-bold text-lg">
                          ₹{item.price}
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="font-heading font-semibold text-xl text-espresso mb-2 group-hover:text-caramel transition-colors">
                          {item.name}
                        </h3>
                        <p className="text-charcoal text-sm mb-4 leading-relaxed">{item.description}</p>
                        <Button 
                          onClick={() => item.customizable ? openItemModal(item) : addToCart()}
                          className="w-full bg-gradient-to-r from-caramel to-espresso hover:from-espresso hover:to-caramel text-white font-medium py-3 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                          data-testid={`add-${item.id}`}
                        >
                          ADD TO CART
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Item Customization Modal */}
      <Dialog open={isItemModalOpen} onOpenChange={setIsItemModalOpen}>
        <DialogContent className="sm:max-w-md" data-testid="item-modal">
          <DialogHeader>
            <DialogTitle className="font-inter text-xl text-coffee-brown">
              {selectedItem?.name}
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              onClick={closeItemModal}
              data-testid="modal-close"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogHeader>
          
          {selectedItem && (
            <div className="space-y-6" data-testid="modal-content">
              <div>
                <h4 className="font-medium text-coffee-brown mb-3">Quantity</h4>
                <div className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                  <span className="text-sm text-gray-600">1/1 selected</span>
                </div>
              </div>
              
              {selectedItem.customizable && selectedItem.milkOptions && (
                <div>
                  <h4 className="font-medium text-coffee-brown mb-3">Milk Options</h4>
                  <div className="space-y-2">
                    {selectedItem.milkOptions.map((milk) => (
                      <label key={milk.name} className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="milk"
                            value={milk.name}
                            checked={selectedMilk === milk.name}
                            onChange={(e) => setSelectedMilk(e.target.value)}
                            className="mr-3"
                            data-testid={`milk-${milk.name.toLowerCase().replace(/\s+/g, '-')}`}
                          />
                          <span>{milk.name}</span>
                        </div>
                        {milk.price > 0 && (
                          <span className="text-coffee-brown font-medium">+₹{milk.price}</span>
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="flex items-center justify-between bg-coffee-brown text-white p-4 rounded-lg">
                <span className="font-bold text-lg">
                  ₹{selectedItem.price + (selectedItem.milkOptions?.find(m => m.name === selectedMilk)?.price || 0)}
                </span>
                <Button 
                  onClick={addToCart}
                  className="bg-coffee-gold hover:bg-coffee-cream hover:text-coffee-brown text-white"
                  data-testid="add-to-cart-button"
                >
                  ADD TO CART
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
}
