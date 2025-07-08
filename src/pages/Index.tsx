import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star, Leaf, Heart, Zap } from "lucide-react";

const Index = () => {
  const smoothies = [
    {
      name: "Tropical Paradise",
      description: "Mango, pineapple, coconut milk, and lime",
      price: "$8.99",
      image: "🥭",
      color: "from-sunset-400 to-coral-400"
    },
    {
      name: "Ocean Breeze", 
      description: "Blueberry, banana, coconut water, and mint",
      price: "$7.99",
      image: "🫐",
      color: "from-ocean-400 to-blue-400"
    },
    {
      name: "Miami Sunrise",
      description: "Strawberry, peach, orange juice, and ginger",
      price: "$8.49", 
      image: "🍓",
      color: "from-coral-400 to-sunset-400"
    },
    {
      name: "Green Goddess",
      description: "Spinach, avocado, apple, lime, and coconut milk",
      price: "$9.99",
      image: "🥬",
      color: "from-green-400 to-ocean-400"
    }
  ];

  const handleCallNow = () => {
    window.open("tel:+13051237666684", "_self");
  };

  const handleExploreMenu = () => {
    document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFindLocation = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-coral-50 via-white to-ocean-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-coral-400 to-sunset-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-coral-600 to-ocean-600 bg-clip-text text-transparent">
              SmoothieMiami
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-coral-500 transition-colors">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-coral-500 transition-colors">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-coral-500 transition-colors">About</a>
            <a href="#contact" className="text-gray-700 hover:text-coral-500 transition-colors">Contact</a>
          </nav>
          <Button 
            onClick={handleCallNow}
            className="bg-gradient-to-r from-coral-500 to-sunset-500 hover:from-coral-600 hover:to-sunset-600 text-white"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-coral-600 via-sunset-500 to-ocean-500 bg-clip-text text-transparent">
              Fresh Vibes
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-gray-800">
              Tropical Smoothies
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Experience the taste of Miami with our premium smoothies made from fresh tropical fruits. 
              Every sip is a vacation! 🏝️
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleExploreMenu}
                size="lg" 
                className="bg-gradient-to-r from-coral-500 to-sunset-500 hover:from-coral-600 hover:to-sunset-600 text-white text-lg px-8 py-3"
              >
                Explore Menu
              </Button>
              <Button 
                onClick={handleFindLocation}
                size="lg" 
                variant="outline" 
                className="border-ocean-400 text-ocean-600 hover:bg-ocean-50 text-lg px-8 py-3"
              >
                Find Location
              </Button>
            </div>
          </div>
          
          {/* Floating elements */}
          <div className="mt-12 relative">
            <div className="animate-float absolute top-0 left-1/4 text-6xl">🥭</div>
            <div className="animate-float absolute top-10 right-1/4 text-5xl" style={{ animationDelay: '1s' }}>🍍</div>
            <div className="animate-float absolute top-5 left-3/4 text-4xl" style={{ animationDelay: '2s' }}>🥥</div>
          </div>
        </div>
      </section>

      {/* Featured Smoothies */}
      <section id="menu" className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-coral-600 to-ocean-600 bg-clip-text text-transparent">
              Signature Smoothies
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Handcrafted with love using the freshest ingredients from local Miami markets
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {smoothies.map((smoothie, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${smoothie.color} flex items-center justify-center text-4xl shadow-lg`}>
                    {smoothie.image}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{smoothie.name}</h3>
                  <p className="text-gray-600 mb-4">{smoothie.description}</p>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-coral-600">{smoothie.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-coral-600 to-sunset-600 bg-clip-text text-transparent">
                Why Choose SmoothieMiami?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Born in the heart of Miami, we bring you the authentic taste of tropical paradise. 
                Our smoothies are crafted with passion, using only the finest ingredients sourced 
                from local farms and tropical groves.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-ocean-400 rounded-full flex items-center justify-center">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">100% Natural</h3>
                    <p className="text-gray-600">No artificial flavors or preservatives</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-coral-400 to-sunset-400 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Made with Love</h3>
                    <p className="text-gray-600">Each smoothie is crafted to perfection</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-ocean-400 to-blue-400 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Energy Boost</h3>
                    <p className="text-gray-600">Packed with vitamins and nutrients</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-coral-100 to-ocean-100 rounded-3xl p-8 text-center">
              <div className="text-8xl mb-4">🌴</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Miami's #1 Smoothie Shop</h3>
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-sunset-400 text-sunset-400" />
                ))}
              </div>
              <p className="text-gray-600">
                "The best smoothies in Miami! Fresh, delicious, and the perfect tropical escape." 
                - Local Food Blog
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-ocean-50 to-coral-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-ocean-600 to-coral-600 bg-clip-text text-transparent">
              Visit Us Today
            </h2>
            <p className="text-gray-600 text-lg">
              Come experience the Miami vibe at our tropical smoothie paradise
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-coral-400 to-sunset-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Location</h3>
              <p className="text-gray-600">
                123 Ocean Drive<br />
                Miami Beach, FL 33139
              </p>
            </Card>
            
            <Card className="text-center p-8 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-ocean-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Phone</h3>
              <p className="text-gray-600">
                (305) 123-SMOOTH<br />
                Call for orders & catering
              </p>
            </Card>
            
            <Card className="text-center p-8 bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-ocean-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Hours</h3>
              <p className="text-gray-600">
                Mon-Sun: 7AM - 9PM<br />
                Fresh smoothies all day!
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-coral-400 to-sunset-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">S</span>
            </div>
            <span className="text-xl font-bold">SmoothieMiami</span>
          </div>
          <p className="text-gray-400 mb-4">
            Bringing tropical paradise to every sip since 2020
          </p>
          <p className="text-gray-500">
            © 2024 SmoothieMiami. All rights reserved. Made with 💛 in Miami
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
