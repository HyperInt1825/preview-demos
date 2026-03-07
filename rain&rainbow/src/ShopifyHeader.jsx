import React from 'react';

const ShopifyHeader = ({ brandName = "Your Brand" }) => {
  return (
    <header className="w-full bg-white">
      <div className="w-full h-auto flex items-center justify-center py-8 bg-white">
        <div className="text-center px-4">
          <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-2">powered by</p>
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-wide">
            {brandName}
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-2 max-w-xl mx-auto">
            Discover styles loved by real shoppers, curated through word of mouth.
          </p>
        </div>
      </div>
    </header>
  );
};

export default ShopifyHeader;

