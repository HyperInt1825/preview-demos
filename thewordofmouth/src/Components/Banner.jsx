import React from 'react';

const ReviewsBanner = ({
  rating = 4.8,
  totalReviews = 147,
  monthlySales = 240,
  starColor = "#A82E61",
  textColor = "#1a1a1a",
  lightTextColor = "#666666",
  accentColor = "#A82E61"
}) => {
  return (
    <div
      className="flex items-center py-2 sm:py-3 px-2 sm:px-4 md:px-6 mb-4 sm:mb-6 border-b relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 248, 240, 0.98) 100%)",
        borderColor: "rgba(212, 175, 116, 0.15)",
        fontFamily: "'Cormorant Garamond', 'Playfair Display', serif",
        boxShadow: "0 2px 8px rgba(212, 175, 116, 0.08)"
      }}
    >
      {/* Subtle diamond pattern background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, ${starColor}20 2px, transparent 2px), radial-gradient(circle at 80% 20%, ${accentColor}20 1px, transparent 1px)`
        }}
      />

      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-6 relative z-10 overflow-x-auto scrollbar-hide w-full"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
        <div className="flex items-center gap-1 sm:gap-1.5 whitespace-nowrap flex-shrink-0">
          <div className="flex items-center space-x-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <i
                key={star}
                className="fa-solid fa-star transition-all duration-200 hover:scale-110"
                style={{
                  color: starColor,
                  textShadow: "0 1px 1px rgba(0, 0, 0, 0.1)",
                  filter: "brightness(1.1)",
                  fontSize: "11px"
                }}
              />
            ))}
          </div>
          <span
            className="font-semibold text-xs sm:text-sm md:text-base ml-0.5 sm:ml-1 tracking-tight"
            style={{
              color: textColor,
              textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)"
            }}
          >
            {rating}
          </span>
        </div>

        <div
          className="relative flex-shrink-0"
        >
          <div
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full"
            style={{
              background: `radial-gradient(circle, ${accentColor} 0%, ${accentColor}80 70%, transparent 100%)`,
              boxShadow: `0 0 6px ${accentColor}60, inset 0 1px 0 rgba(255, 255, 255, 0.3)`
            }}
          />
        </div>

        <span
          className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wider uppercase whitespace-nowrap flex-shrink-0"
          style={{
            color: lightTextColor,
            fontFamily: "'Jost', sans-serif",
            letterSpacing: "0.3px"
          }}
        >
          {totalReviews.toLocaleString()} reviews
        </span>

        <div
          className="relative hidden md:block flex-shrink-0"
        >
          <div
            className="w-2 h-2 rounded-full"
            style={{
              background: `radial-gradient(circle, ${starColor} 0%, ${starColor}80 70%, transparent 100%)`,
              boxShadow: `0 0 6px ${starColor}60, inset 0 1px 0 rgba(255, 255, 255, 0.3)`
            }}
          />
        </div>

        <span
          className="text-[10px] sm:text-xs md:text-sm font-medium tracking-wider uppercase whitespace-nowrap flex-shrink-0"
          style={{
            color: accentColor,
            fontFamily: "'Jost', sans-serif",
            letterSpacing: "0.3px",
            textShadow: "0 1px 2px rgba(255, 107, 130, 0.2)"
          }}
        >
          💎 {monthlySales} pieces crafted
        </span>
      </div>

      {/* Elegant border accent */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent 0%, ${starColor}40 20%, ${accentColor}60 50%, ${starColor}40 80%, transparent 100%)`
        }}
      />

      {/* Corner diamonds */}
      <div className="absolute top-1 left-2 sm:left-4 w-1 h-1 transform rotate-45" style={{ backgroundColor: starColor, opacity: 0.3 }} />
      <div className="absolute top-1 right-2 sm:right-4 w-1 h-1 transform rotate-45" style={{ backgroundColor: accentColor, opacity: 0.3 }} />
    </div>
  );
};

export default ReviewsBanner;