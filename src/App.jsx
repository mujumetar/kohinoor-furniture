import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Search, User, Heart, ArrowRight, Star, Check, MapPin, Phone, Mail, Trash2, Plus, Minus } from 'lucide-react';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const products = [
    { id: 1, name: 'Nordic Lounge Chair', price: 899, category: 'Living Room', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=600', rating: 4.8 },
    { id: 2, name: 'Minimalist Sofa', price: 1299, category: 'Living Room', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600', rating: 4.9 },
    { id: 3, name: 'Oak Dining Table', price: 1599, category: 'Dining', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600', rating: 4.7 },
    { id: 4, name: 'Velvet Accent Chair', price: 749, category: 'Living Room', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600', rating: 4.6 },
    { id: 5, name: 'Modern Bed Frame', price: 1899, category: 'Bedroom', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600', rating: 4.8 },
    { id: 6, name: 'Glass Coffee Table', price: 599, category: 'Living Room', image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600', rating: 4.5 },
    { id: 7, name: 'Leather Armchair', price: 999, category: 'Living Room', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600', rating: 4.9 },
    { id: 8, name: 'Wooden Bookshelf', price: 799, category: 'Office', image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600', rating: 4.7 },
  ];

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, change) => {
    setCart(cart.map(item => {
      if (item.id === productId) {
        const newQuantity = item.quantity + change;
        return newQuantity > 0 ? { ...item, quantity: newQuantity } : item;
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      alert(`Thank you ${formData.name}! Your message has been sent. We'll get back to you at ${formData.email} soon.`);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      alert('Please fill in all required fields.');
    }
  };

  const Navigation = () => (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent cursor-pointer" onClick={() => setCurrentPage('home')}>
            KOHINOOR FURNITURE
          </div>

          <div className="hidden md:flex space-x-8">
            {['home', 'shop', 'about', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`text-sm font-medium transition-colors ${currentPage === page ? 'text-amber-600' : 'text-gray-700 hover:text-amber-600'
                  }`}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-3 sm:space-x-4">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 cursor-pointer hover:text-amber-600 transition-colors hidden sm:block" />
            <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 cursor-pointer hover:text-amber-600 transition-colors hidden sm:block" />
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 cursor-pointer hover:text-amber-600 transition-colors hidden sm:block" />
            <div className="relative">
              <ShoppingCart
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700 cursor-pointer hover:text-amber-600 transition-colors"
                onClick={() => setShowCart(!showCart)}
              />
              {getTotalItems() > 0 && (
                <span className="absolute -top-2 -right-2 bg-amber-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </div>
            <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {['home', 'shop', 'about', 'contact'].map((page) => (
              <button
                key={page}
                onClick={() => {
                  setCurrentPage(page);
                  setMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-amber-50 rounded-lg"
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );

  const CartSidebar = () => (
    <>
      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setShowCart(false)} />
      )}
      <div className={`fixed right-0 top-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${showCart ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 sm:p-6 border-b">
            <h2 className="text-xl sm:text-2xl font-bold">Shopping Cart</h2>
            <button onClick={() => setShowCart(false)} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="flex-1 flex items-center justify-center flex-col p-6">
              <ShoppingCart className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mb-4" />
              <p className="text-gray-500 text-center text-sm sm:text-base">Your cart is empty</p>
              <button
                onClick={() => {
                  setShowCart(false);
                  setCurrentPage('shop');
                }}
                className="mt-4 bg-amber-600 text-white px-6 py-2 rounded-lg hover:bg-amber-700 transition-colors text-sm sm:text-base"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4 sm:p-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-3 sm:gap-4 mb-4 pb-4 border-b">
                    <img src={item.image} alt={item.name} className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm mb-1 truncate">{item.name}</h3>
                      <p className="text-amber-600 font-bold text-sm sm:text-base">${item.price}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <span className="w-6 sm:w-8 text-center font-medium text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:bg-gray-100 rounded"
                        >
                          <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto p-1 hover:bg-red-50 rounded text-red-600"
                        >
                          <Trash2 className="w-3 h-3 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t p-4 sm:p-6 bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-base sm:text-lg font-semibold">Total:</span>
                  <span className="text-xl sm:text-2xl font-bold text-amber-600">${getTotalPrice()}</span>
                </div>
                <button className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-medium text-sm sm:text-base">
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );

  const HomePage = () => (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-stone-50 pt-16 sm:pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-48 h-48 sm:w-72 sm:h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-48 h-48 sm:w-72 sm:h-72 bg-stone-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6">
            Elevate Your
            <span className="block bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              Living Space
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Discover premium furniture that combines timeless design with modern comfort
          </p>
          <button
            onClick={() => setCurrentPage('shop')}
            className="bg-amber-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-amber-700 transition-all transform hover:scale-105 shadow-lg inline-flex items-center space-x-2 text-sm sm:text-base"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Shop by Room</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {['Living Room', 'Bedroom', 'Dining'].map((category, idx) => (
              <div key={category} className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105">
                <img
                  src={`https://images.unsplash.com/photo-${idx === 0 ? '1555041469-a586c61ea9bc' : idx === 1 ? '1505693416388-ac5ce068fe85' : '1617806118233-18e1de247200'}?w=600&h=400&fit=crop`}
                  alt={category}
                  className="w-full h-60 sm:h-72 lg:h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6 sm:p-8">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{category}</h3>
                    <p className="text-sm sm:text-base text-white/90 flex items-center">
                      Shop Now <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2" />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-amber-50 to-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: '🚚', title: 'Free Shipping', desc: 'On orders over $500' },
              { icon: '💎', title: 'Premium Quality', desc: 'Handcrafted materials' },
              { icon: '🔄', title: 'Easy Returns', desc: '30-day return policy' },
              { icon: '🛡️', title: '5-Year Warranty', desc: 'Protected purchases' }
            ].map((feature) => (
              <div key={feature.title} className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.icon}</div>
                <h3 className="font-bold text-base sm:text-lg mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const ShopPage = () => (
    <div className="min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Our Collection</h1>
          <p className="text-sm sm:text-base text-gray-600">Discover our curated selection of premium furniture</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:bg-amber-50 transition-colors">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                </button>
              </div>
              <div className="p-4 sm:p-6">
                <p className="text-xs text-amber-600 font-medium mb-2">{product.category}</p>
                <h3 className="font-bold text-base sm:text-lg mb-2 line-clamp-1">{product.name}</h3>
                <div className="flex items-center mb-3">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <span className="text-xl sm:text-2xl font-bold text-gray-900">${product.price}</span>
                  <button
                    onClick={() => {
                      addToCart(product);
                      setShowCart(true);
                    }}
                    className="w-full sm:w-auto bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors text-sm font-medium whitespace-nowrap"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AboutPage = () => (
    <div className="min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16 lg:mb-20">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Our Story</h1>
            <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
              Founded in 2015, Kohinoor Furniture has been dedicated to bringing exceptional furniture design to modern homes. We believe that great design should be accessible to everyone, which is why we work directly with master craftsmen to create pieces that are both beautiful and affordable.
            </p>
            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Every piece in our collection is thoughtfully designed and sustainably sourced, ensuring that your furniture not only looks good but does good for the planet too.
            </p>
            <div className="grid grid-cols-3 gap-4 sm:gap-6">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1 sm:mb-2">10k+</div>
                <div className="text-xs sm:text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1 sm:mb-2">500+</div>
                <div className="text-xs sm:text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-1 sm:mb-2">15+</div>
                <div className="text-xs sm:text-sm text-gray-600">Showrooms</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=700&h=800&fit=crop"
              alt="About Us"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-stone-50 rounded-2xl p-6 sm:p-8 lg:p-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { title: 'Sustainability', desc: 'We source materials responsibly and minimize our environmental impact' },
              { title: 'Quality', desc: 'Every piece is crafted with attention to detail and built to last' },
              { title: 'Innovation', desc: 'We blend traditional craftsmanship with modern design techniques' }
            ].map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <Check className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-lg sm:text-xl mb-3">{value.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const ContactPage = () => (
    <div className="min-h-screen pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">Get in Touch</h1>
          <p className="text-sm sm:text-base text-gray-600">We'd love to hear from you</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {[
            { icon: MapPin, title: 'Visit Us', info: '123 Design Street, NY 10001' },
            { icon: Phone, title: 'Call Us', info: '+1 (555) 123-4567' },
            { icon: Mail, title: 'Email Us', info: 'hello@kohinoor.com' }
          ].map((contact) => (
            <div key={contact.title} className="bg-white p-6 sm:p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow">
              <contact.icon className="w-6 h-6 sm:w-8 sm:h-8 text-amber-600 mx-auto mb-3 sm:mb-4" />
              <h3 className="font-bold text-base sm:text-lg mb-2">{contact.title}</h3>
              <p className="text-sm sm:text-base text-gray-600">{contact.info}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-12 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send us a Message</h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-sm sm:text-base"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-sm sm:text-base"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleFormChange}
                placeholder="How can we help?"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-sm sm:text-base"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleFormChange}
                placeholder="Tell us more about your inquiry..."
                rows="6"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-amber-600 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-sm sm:text-base"
                required
              ></textarea>
            </div>
            <button
              onClick={handleFormSubmit}
              className="w-full bg-amber-600 text-white px-8 py-3 sm:py-4 rounded-lg hover:bg-amber-700 transition-colors font-medium text-sm sm:text-base"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const Footer = () => (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">KOHINOOR FURNITURE</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Premium furniture for modern living spaces.</p>
          </div>
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Shop</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li className="hover:text-amber-400 cursor-pointer transition-colors">Living Room</li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors">Bedroom</li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors">Dining</li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors">Office</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Company</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li className="hover:text-amber-400 cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors">Careers</li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors">Sustainability</li>
              <li className="hover:text-amber-400 cursor-pointer transition-colors">Press</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">Newsletter</h4>
            <p className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">Subscribe for updates and exclusive offers</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 sm:px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-amber-600 text-xs sm:text-sm"
              />
              <button className="bg-amber-600 px-3 sm:px-4 py-2 rounded-r-lg hover:bg-amber-700 transition-colors">
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-400">
          <p>&copy; 2025 Kohinoor Furniture. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <CartSidebar />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'shop' && <ShopPage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}
      <Footer />
    </div>
  );
};

export default App;