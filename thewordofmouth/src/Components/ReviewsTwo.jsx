import React from 'react';

const ReviewTwo = ({ review }) => {
  // Render star rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? 'text-amber-400' : 'text-gray-300'} fill-current`}
        viewBox="0 0 20 20"
      >
        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
      </svg>
    ));
  };

  return (
    <div className="bg-gradient-to-br from-white via-[#faf7f4] to-[#C39C73]/10 hover:from-white hover:via-[#f5ece4] hover:to-[#C39C73]/20 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 break-inside-avoid mb-2 sm:mb-3">
      {/* Review Content */}
      <div className="p-2.5 sm:p-3">
        {/* Reviewer Name */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
          <h3 className="text-sm sm:text-base font-semibold text-gray-900">{review.name}</h3>
          {review.verified && (
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          )}
        </div>

        {/* Location and Time */}
        <p className="text-[10px] sm:text-xs text-gray-500 mb-1.5 sm:mb-2">
          {review.location && <span>{review.location} • </span>}
          {review.timeAgo}
        </p>

        {/* Star Rating */}
        <div className="flex items-center gap-0.5 sm:gap-1 mb-2 sm:mb-3">
          {renderStars(review.rating)}
        </div>

        {/* Review Text - No line clamp to allow natural height */}
        <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
          {review.content}
        </p>
      </div>
    </div>
  );
};

// Example usage component showing multiple reviews in GIVA style grid
const ReviewSection = () => {
  const sampleReviews = [
    {
      id: 1,
      name: "Aryan",
      rating: 5,
      location: "Mumbai",
      timeAgo: "2 days ago",
      verified: true,
      content:
        "I have Giva coupons each of Rs500 and Rs1000 off applicable on all gold and silver jewelleries. If anybody interested then we can exchange on some sort of money. Contact me on telegram- Giva44",
      image: null,
      couponBrand: "giva",
      couponText: "Flat ₹500 off",
      couponDescription: "on fine Silver Jewellery from GIVA",
    },
    {
      id: 2,
      name: "Akansha",
      rating: 4,
      location: "Delhi",
      timeAgo: "5 days ago",
      verified: false,
      content: "Very nice",
      image: null,
    },
    {
      id: 3,
      name: "Aishwarya",
      rating: 5,
      location: "Bangalore",
      timeAgo: "1 week ago",
      verified: true,
      content: "Elegant and well-crafted, perfect for gifting.",
      image: null,
    },
    {
      id: 4,
      name: "Priya Mehta",
      rating: 5,
      location: "Pune",
      timeAgo: "3 days ago",
      verified: false,
      content:
        "Absolutely love these earrings! The rose gold finish is stunning and they're so lightweight. I can wear them all day without any discomfort. Highly recommend!",
      image: null,
    },
    {
      id: 5,
      name: "Sneha Reddy",
      rating: 5,
      location: "Hyderabad",
      timeAgo: "4 days ago",
      verified: false,
      content:
        "Beautiful design and excellent quality. The packaging was also very premium. Worth every penny!",
      image: null,
    },
    {
      id: 6,
      name: "Kavya Singh",
      rating: 4,
      location: "Chennai",
      timeAgo: "1 week ago",
      verified: false,
      content:
        "Gorgeous earrings! Only giving 4 stars because they're slightly smaller than I expected, but the quality is top-notch.",
      image: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-3 sm:p-4 md:p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
            <div className="flex items-center gap-0.5 sm:gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 sm:w-6 sm:h-6 text-amber-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900">288 Reviews</span>
          </div>
          <button className="px-6 sm:px-8 py-2 sm:py-2.5 bg-white border-2 border-gray-900 text-gray-900 text-sm sm:text-base font-medium rounded-md hover:bg-gray-900 hover:text-white transition-colors">
            Write a review
          </button>
        </div>

        {/* Reviews Grid - Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 sm:gap-3">
          {sampleReviews.map((review) => (
            <ReviewTwo key={review.id} review={review} />
          ))}
        </div>

        {/* More Reviews Button */}
        <div className="text-center mt-6 sm:mt-8">
          <button className="px-6 sm:px-8 py-2 sm:py-2.5 bg-white border-2 border-gray-900 text-gray-900 text-sm sm:text-base font-medium rounded-md hover:bg-gray-900 hover:text-white transition-colors">
            More reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;