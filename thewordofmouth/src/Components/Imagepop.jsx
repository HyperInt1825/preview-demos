import React, { useState } from 'react';
import { X, MapPin, Calendar } from 'lucide-react';


const PerfumeReviewPopup = () => {
    const [selectedReview, setSelectedReview] = useState(null);

    const reviews = [
        {
            id: 1,
            name: "Arjun Sharma",
            rating: 5,
            date: "Nov 15, 2024",
            location: "Mumbai, India",
            title: "Elegant Jhumka Showcase",
            content: "The craftsmanship on these jhumkas is outstanding. Lightweight, secure clasps, and perfect for festive wear.",
            image: "https://soluv.in/cdn/shop/files/IMG_6947.jpg?v=1757447784&width=1946",
            size: "One Size",
            customerType: "Verified Purchase"
        },
        {
            id: 2,
            name: "Priya Patel",
            rating: 5,
            date: "Oct 28, 2024",
            location: "Delhi, India",
            title: "Timeless Pendant Piece",
            content: "A classic pendant with a premium finish. Sits beautifully on the neckline and pairs with daily wear.",
            image: "https://soluv.in/cdn/shop/files/46_97e2bbf2-1e1a-48eb-8215-6b98755a8852.jpg?v=1757447784&width=1646",
            size: "One Size",
            customerType: "First Purchase"
        },
        {
            id: 3,
            name: "Rohit Gupta",
            rating: 4,
            date: "Dec 02, 2024",
            location: "Bangalore, India",
            title: "Statement Ring Details",
            content: "Striking emerald look with smooth edges. Comfortable for all-day wear.",
            image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80",
            size: "Adjustable",
            customerType: "Repeat Customer"
        },
        {
            id: 4,
            name: "Kavya Reddy",
            rating: 5,
            date: "Jan 18, 2025",
            location: "Hyderabad, India",
            title: "Festive Jewelry Edit",
            content: "Beautiful finish and stone setting. Perfect for weddings and celebrations.",
            image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
            size: "One Size",
            customerType: "Premium Member"
        },
        {
            id: 5,
            name: "Vikram Singh",
            rating: 5,
            date: "Feb 05, 2025",
            location: "Chennai, India",
            title: "Elegant Craftsmanship",
            content: "Excellent shine and polish. The piece feels sturdy yet refined.",
            image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80",
            size: "One Size",
            customerType: "Collector"
        }
    ];

    const openModal = (review) => {
        setSelectedReview(review);
    };

    const closeModal = () => {
        setSelectedReview(null);
    };

    const renderStars = (rating, isDark = false) => {
        return [...Array(5)].map((_, i) => (
            <i
                key={i}
                className="fa-solid fa-star text-sm"
                style={{ color: i < rating ? (isDark ? '#ffffff' : '#A82E61') : (isDark ? '#6b7280' : '#d1d5db') }}
            />
        ));
    };

    return (
        <div className="bg-gray-50 p-4 sm:p-6 md:p-8">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-1.5 sm:mb-2 text-gray-800">thewordofmouth Jewelry Collection</h1>
                <p className="text-center text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 md:mb-8">Premium handcrafted jewelry made with love and attention to detail</p>

                <div className="flex justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-2">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="w-[100px] sm:w-[120px] flex-shrink-0 relative rounded-md overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 group"
                            onClick={() => openModal(review)}
                        >
                            <img
                                src={review.image}
                                alt={`${review.name}'s review`}
                                className="w-full h-20 sm:h-24 object-cover"
                            />

                            {/* Hover overlay with content */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-2 sm:p-3" style={{ backgroundColor: '#fbdb8d' }}>
                                <div className="flex justify-center mb-1 sm:mb-2">
                                    {renderStars(review.rating, false)}
                                </div>
                                <h3 className="text-xs sm:text-sm font-semibold text-center mb-0.5 sm:mb-1" style={{ color: '#A82E61' }}>{review.name}</h3>
                                <p className="text-[10px] sm:text-xs text-center mb-0.5 sm:mb-1" style={{ color: '#A82E61' }}>{review.location}</p>

                            </div>
                        </div>
                    ))}
                </div>

                {selectedReview && (
                    <div className="fixed inset-0 backdrop-blur-sm bg-transparent flex items-center justify-center p-3 sm:p-4 z-50">
                        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[85vh] sm:max-h-[80vh] overflow-y-auto">
                            {/* Header */}
                            <div className="text-white p-2.5 sm:p-3 flex justify-between items-center" style={{ backgroundColor: '#A82E61' }}>
                                <h2 className="text-base sm:text-lg font-semibold">Customer Showcase</h2>
                                <button
                                    onClick={closeModal}
                                    className="p-1 rounded"
                                >
                                    <X size={20} className="sm:hidden" />
                                    <X size={24} className="hidden sm:block" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="p-3 sm:p-4">
                                <div className="flex flex-col md:flex-row gap-3 sm:gap-4">
                                    {/* Image */}
                                    <div className="md:w-1/3">
                                        <img
                                            src={selectedReview.image}
                                            alt={`${selectedReview.name}'s perfume`}
                                            className="w-full h-20 sm:h-24 object-cover rounded-lg shadow-md"
                                        />
                                        <div className="text-center mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-gray-600">
                                            <p>Size: {selectedReview.size}</p>
                                            <p>Customer: {selectedReview.customerType}</p>
                                        </div>
                                    </div>

                                    {/* Review Content */}
                                    <div className="md:w-2/3">
                                        <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1.5 sm:mb-2">{selectedReview.name}</h3>

                                        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                                            <div className="flex">
                                                {renderStars(selectedReview.rating)}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3 text-[10px] sm:text-xs text-gray-600">
                                            <div className="flex items-center gap-0.5 sm:gap-1">
                                                <Calendar size={12} className="text-red-500 sm:w-3.5 sm:h-3.5" />
                                                <span>{selectedReview.date}</span>
                                            </div>
                                            <div className="flex items-center gap-0.5 sm:gap-1">
                                                <MapPin size={12} className="text-red-500 sm:w-3.5 sm:h-3.5" />
                                                <span>{selectedReview.location}</span>
                                            </div>
                                        </div>

                                        <h4 className="text-xs sm:text-sm font-semibold text-gray-800 mb-1.5 sm:mb-2">
                                            "{selectedReview.title}"
                                        </h4>

                                        <div className="bg-pink-50 border-l-4 border-pink-300 p-2 sm:p-3 rounded">
                                            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                                                At thewordofmouth, we design timeless jewelry pieces that celebrate everyday elegance.
                                                Each piece is thoughtfully crafted for comfort, durability, and a beautiful finish.
                                            </p>
                                        </div>

                                        <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-gray-50 rounded-lg">
                                            <h5 className="text-xs sm:text-sm font-semibold text-gray-800 mb-0.5 sm:mb-1">About thewordofmouth</h5>
                                            <p className="text-[10px] sm:text-xs text-gray-600">
                                                We are an independent jewelry brand focused on quality materials, ethical sourcing,
                                                and meticulous craftsmanship. From festive edits to daily wear, thewordofmouth aims to bring
                                                a little sparkle to your story.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Footer */}
                            <div className="border-t p-2 sm:p-3 bg-gray-50 text-center">
                                <p className="text-[10px] sm:text-xs text-gray-600">
                                    Thank you for choosing thewordofmouth — Crafted with love
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PerfumeReviewPopup;