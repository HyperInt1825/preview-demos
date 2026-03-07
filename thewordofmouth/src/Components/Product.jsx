import React, { useState } from 'react';
import { ShoppingCart, User, Search, ChevronDown, Truck, Heart, Shield, MessageCircle } from 'lucide-react';
import Banner from "./Banner"
import Reviews from "./Reviews"

export default function BegumJhumkaPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "https://soluv.in/cdn/shop/files/IMG_6947.jpg?v=1757447784&width=1946",
    "https://soluv.in/cdn/shop/files/46_97e2bbf2-1e1a-48eb-8215-6b98755a8852.jpg?v=1757447784&width=1646",
    'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
    'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80'
  ];

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 cursor-pointer" />
            <div className="text-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-pink-600" style={{ fontFamily: 'cursive' }}>thewordofmouth</h1>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <User className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 cursor-pointer" />
              <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 cursor-pointer" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm overflow-x-auto pb-2 sm:pb-0 scrollbar-hide">
            <div className="flex items-center gap-1 cursor-pointer whitespace-nowrap">
              <span>Earrings</span>
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer whitespace-nowrap">
              <span>Pendants</span>
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
            <span className="cursor-pointer whitespace-nowrap">Ear Pins</span>
            <span className="cursor-pointer whitespace-nowrap">Bracelets</span>
            <a
              href="https://soluv.in/collections/jewellery"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-pink-600 hover:text-pink-700 whitespace-nowrap"
            >
              Jewelry
            </a>



          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6 md:py-8">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          {/* Image Gallery - Sticky */}
          <div className="md:sticky md:top-4 md:self-start">
            <div className="mb-3 sm:mb-4">
              <img
                src={images[selectedImage]}
                alt="Begum Jhumka"
                className="w-full rounded-lg"
              />
            </div>
            <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className={`w-full aspect-square object-cover rounded cursor-pointer border-2 ${selectedImage === idx ? 'border-pink-600' : 'border-gray-200'}`}
                  onClick={() => setSelectedImage(idx)}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4" style={{ color: '#6b1942' }}>Begum Jhumka</h1>
            <Banner />

            <div className="mb-4 sm:mb-6">
              <p className="text-xl sm:text-2xl font-semibold text-gray-900">Rs. 1,700.00</p>
              <p className="text-xs sm:text-sm text-pink-600 mt-1">
                <span className="underline cursor-pointer">Shipping</span> calculated at checkout.
              </p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-xs sm:text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center gap-3 sm:gap-4">
                <button
                  onClick={decreaseQuantity}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-sm sm:text-base"
                >
                  −
                </button>
                <span className="text-base sm:text-lg font-medium w-10 sm:w-12 text-center">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 text-sm sm:text-base"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              <button className="w-full py-2.5 sm:py-3 border-2 border-pink-600 text-pink-600 rounded-full font-medium hover:bg-pink-50 transition text-sm sm:text-base">
                Add to cart
              </button>
              <button className="w-full py-2.5 sm:py-3 bg-pink-600 text-white rounded-full font-medium hover:bg-pink-700 transition text-sm sm:text-base">
                Buy it now
              </button>
            </div>

            {/* Jewelry Collection Link */}
            <div className="mb-6 sm:mb-8">
              <a
                href="https://soluv.in/collections/jewellery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-pink-600 underline hover:text-pink-700 text-sm sm:text-base"
              >
                Browse Jewelry Collection
              </a>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b">
              <div className="text-center">
                <Truck className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2" />
                <p className="font-semibold text-xs sm:text-sm">Free Shpping</p>
                <p className="text-[10px] sm:text-xs text-pink-600">No Extra Costs</p>
              </div>
              <div className="text-center">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2" />
                <p className="font-semibold text-xs sm:text-sm">Crafted</p>
                <p className="text-[10px] sm:text-xs text-pink-600">With Love</p>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-1 sm:mb-2" />
                <p className="font-semibold text-xs sm:text-sm">Secure</p>
                <p className="text-[10px] sm:text-xs text-pink-600">Checkout</p>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3 sm:space-y-4">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Our Begum jhumka is a dream come true for all the jhumka lovers out there! It features a multi-tiered classic bell shaped design, featuring pink and white stones, complete with a pearl fringe. This statement jhumka is ideal for weddings and special occasions!
              </p>
              <p className="text-sm sm:text-base text-gray-700">
                <span className="font-semibold">Material Used:</span> Gold plated brass
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
          <Reviews />
        </div>
      </main>

      {/* WhatsApp Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <button className="bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition flex items-center gap-1.5 sm:gap-2">
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
          <span className="pr-1.5 sm:pr-2 text-sm sm:text-base hidden sm:inline">Contact Us</span>
        </button>
      </div>

      {/* Get 15% OFF Banner */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 bg-yellow-400 text-black px-1.5 sm:px-2 py-6 sm:py-8 text-[10px] sm:text-xs font-bold transform -rotate-90 origin-left cursor-pointer z-40">
        Get 15% OFF
      </div>
    </div>
  );
}