import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product }) => {
  if (!product) return null;

  const {
    image,
    title,
    currentPrice,
    originalPrice,
    discount,
    emiAmount,
    sizes = [],
    unavailableSizes = [],
    rating = 0,
    reviewCount = 0
  } = product;

  const calculateDiscount = () => {
    if (originalPrice && currentPrice) {
      return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
    }
    return discount || 0;
  };

  const discountPercent = calculateDiscount();

  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
      {/* Product Image */}
      <div className="relative w-full pb-[125%] lg:pb-[160%] overflow-hidden bg-gray-50">
        <img
          src={image}
          alt={title}
          className="absolute top-0 left-0 w-full h-full object-cover"
          onError={(e) => {
            console.error('Image failed to load:', image);
            e.target.style.display = 'none';
          }}
          loading="lazy"
        />
        {discountPercent > 0 && (
          <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold">
            {discountPercent}% off
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-3 md:p-4 flex flex-col grow">
        {/* Product Title */}
        <h3 className="text-sm md:text-base font-medium text-gray-900 mb-2 line-clamp-1">
          {title}
        </h3>

        {/* Price Section */}
        <div className="mb-2">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="text-base md:text-lg font-bold text-gray-900">
              Rs. {currentPrice?.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
            {discountPercent > 0 && (
              <span className="text-xs text-green-600 font-medium">
                {discountPercent}% off
              </span>
            )}
          </div>
          {emiAmount && (
            <p className="text-xs text-gray-600">
              or ₹{emiAmount.toLocaleString('en-IN')}/Month Buy on EMI&gt;
            </p>
          )}
        </div>

        {/* Rating & Reviews Section */}
        {reviewCount > 0 && rating > 0 && (
          <div className="mb-2">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg">
              <span className="text-sm font-bold text-gray-800">{rating.toFixed(1)}</span>
              <FontAwesomeIcon 
                icon={faStar} 
                className="w-3 h-3 text-orange-400" 
              />
              <div className="w-px h-4 bg-[#7f2065]"></div>
              <span className="text-sm font-bold text-gray-800">{reviewCount} Reviews</span>
            </div>
          </div>
        )}

        {/* Sizes Section */}
        {sizes.length > 0 && (
          <div className="mb-3">
            <p className="text-xs text-gray-700">
              {sizes.join(' ')}
            </p>
          </div>
        )}

        {/* Add to Cart Button */}
        <button
          className="w-full bg-[#7f2065] text-white py-2.5 px-4 rounded-lg font-semibold text-sm uppercase tracking-wide transition-all duration-300 hover:bg-[#6a1a52] hover:shadow-md mt-auto"
          onClick={(e) => {
            e.stopPropagation();
            console.log('Add to cart:', product);
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
