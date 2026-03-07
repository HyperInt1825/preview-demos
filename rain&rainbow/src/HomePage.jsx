import React, { useState, useEffect } from 'react';
import ShopifyHeader from './ShopifyHeader';
import ShopifyFooter from './ShopifyFooter';
import ProductCard from './ProductCard';
import AIBrandEngine from './AIBrandEngine';
import LiveUserCounter from './LiveUserCounter';
import './HomePage.css';

// Import hero images for desktop/laptop
import home1 from './assets/home_1.png';
import home2 from './assets/home_2.png';
import home3 from './assets/home_3.png';
import home4 from './assets/home_4.png';

// Import hero images for mobile
import homePhone1 from './assets/home_phone_1.png';
import homePhone2 from './assets/home_phone_2.png';
import homePhone3 from './assets/home_phone_3.png';

// Import category images
import cat1 from './assets/cat_1.png';
import cat2 from './assets/cat_2.png';
import cat3 from './assets/cat_3.png';
import cat4 from './assets/cat_4.png';
import cat5 from './assets/cat_5.png';

// Import bestseller images
import bs1 from './assets/bs_1.png';
import bs2 from './assets/bs_2.png';
import bs3 from './assets/bs_3.png';
import bs4 from './assets/bs_4.png';

// Import product images for social proof
import productImage1 from './assets/product/SPP_8830.jpg';
import productImage2 from './assets/product/SPP_8834.jpg';
import productImage3 from './assets/product/SPP_8844.jpg';

// Import Instagram images
import instaDesktop from './assets/insta.png';
import instaPhone from './assets/insta_phone.png';

// Import logo
import logo from './assets/logo.png';

// Import curated section images
import curated1 from './assets/curated_1.jpg';
import curated2 from './assets/curated_2.jpg';
import curated3 from './assets/curated_3.jpg';

// Import story section image
import story1 from './assets/story_1.png';

// Import brand review images from brand_review folder
import review002 from './assets/brand_review/review_002.jpg';
import review003 from './assets/brand_review/review_003.jpg';
import review005 from './assets/brand_review/review_005.jpg';
import review006 from './assets/brand_review/review_006.jpg';
import review007 from './assets/brand_review/review_007.jpg';
import review008 from './assets/brand_review/review_008.jpg';
import review010 from './assets/brand_review/review_010.jpg';
import review011 from './assets/brand_review/review_011.jpg';
import review012 from './assets/brand_review/review_012.jpg';
import review013 from './assets/brand_review/review_013.jpg';
import review016 from './assets/brand_review/review_016.jpg';
import review017 from './assets/brand_review/review_017.jpg';
import review018 from './assets/brand_review/review_018.jpg';
import review020 from './assets/brand_review/review_020.jpg';
import review021 from './assets/brand_review/review_021.jpg';
import review022 from './assets/brand_review/review_022.jpg';
import review023 from './assets/brand_review/review_023.jpg';
import review024 from './assets/brand_review/review_024.jpg';

// Local video URLs - will be populated when videos are added to src/assets/vdo/
const LOCAL_VIDEO_URLS = [];

// Fallback to external URLs if local videos are not available
const SHOPIFY_VIDEO_URLS = [
  'https://cdn.shopify.com/videos/c/o/v/c27407282b104005bd95cc67e61a7a3e.mp4',
  'https://cdn.shopify.com/videos/c/o/v/d8d2ee63e3764ee28a13c1a53e67badc.mp4',
  'https://cdn.shopify.com/videos/c/o/v/f39cfc30f80844df90f5f79c1654d982.mp4',
  'https://cdn.shopify.com/videos/c/o/v/cb884e56c01e4a21898d21ccf8f6de53.mp4',
  'https://cdn.shopify.com/videos/c/o/v/e993428685c544b8b12c14c23fd2aeb5.mp4',
  'https://cdn.shopify.com/videos/c/o/v/0f688b61846d47bda8f055818c0a3a83.mp4',
  'https://video.gumlet.io/64661d8e673536e1fe9044e2/676cedf45c466f600fed6649/main.mp4',
];

const BRAND_NAME = "wordofmouth";

// Brand Reviews data - Using images from brand_review folder
const brandReviews = [
  { id: 1, image: review002, alt: 'Customer Review - Product Feedback' },
  { id: 2, image: review003, alt: 'Customer Review - Product Quality' },
  { id: 3, image: review005, alt: 'Customer Review - Shopping Experience' },
  { id: 4, image: review006, alt: 'Customer Review - Product Satisfaction' },
  { id: 5, image: review007, alt: 'Customer Review - Style Feedback' },
  { id: 6, image: review008, alt: 'Customer Review - Product Rating' },
  { id: 7, image: review010, alt: 'Customer Review - Quality Praise' },
  { id: 8, image: review011, alt: 'Customer Review - Comfort Feedback' },
  { id: 9, image: review012, alt: 'Customer Review - Design Appreciation' },
  { id: 10, image: review013, alt: 'Customer Review - Value Feedback' },
  { id: 11, image: review016, alt: 'Customer Review - Fit and Style' },
  { id: 12, image: review017, alt: 'Customer Review - Service Quality' },
  { id: 13, image: review018, alt: 'Customer Review - Product Excellence' },
  { id: 14, image: review020, alt: 'Customer Review - Brand Experience' },
  { id: 15, image: review021, alt: 'Customer Review - Customer Satisfaction' },
  { id: 16, image: review022, alt: 'Customer Review - Product Recommendation' },
  { id: 17, image: review023, alt: 'Customer Review - Quality Assurance' },
  { id: 18, image: review024, alt: 'Customer Review - Shopping Satisfaction' },
];

// Categories data
const categories = [
  { id: 1, name: 'KURTA SETS', image: cat1 },
  { id: 2, name: 'KURTAS', image: cat2 },
  { id: 3, name: 'KURTIS', image: cat3 },
  { id: 4, name: 'DRESSES', image: cat4 },
  { id: 5, name: 'CO-ORD SETS', image: cat5 },
];

// Best Seller Products data
const bestSellerProducts = [
  {
    id: 1,
    image: bs1,
    title: 'Ethnic Motifs Printed Cotton Fit & Flare Midi Dress',
    currentPrice: 1856,
    originalPrice: 3695,
    emiAmount: 619,
    rating: 4.8,
    reviewCount: 342,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 2,
    image: bs2,
    title: 'Floral Printed Notch Neck Thread Work Pure Cotton Kurta',
    currentPrice: 1147,
    originalPrice: 2295,
    emiAmount: 382,
    rating: 4.5,
    reviewCount: 287,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 3,
    image: bs3,
    title: 'Floral Printed Regular Pure Cotton Kurta & Pants Set',
    currentPrice: 1969,
    originalPrice: 4475,
    emiAmount: 656,
    rating: 4.7,
    reviewCount: 315,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    unavailableSizes: ['XL', 'XXL'],
  },
  {
    id: 4,
    image: bs4,
    title: 'Floral Printed Thread Work Pure Cotton Kurta Set',
    currentPrice: 2468,
    originalPrice: 6495,
    emiAmount: 823,
    rating: 4.6,
    reviewCount: 298,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    unavailableSizes: ['XL', 'XXL'],
    showQuickView: true,
  },
  {
    id: 5,
    image: bs1,
    title: 'Ethnic Motifs Printed Cotton Fit & Flare Midi Dress',
    currentPrice: 1856,
    originalPrice: 3695,
    emiAmount: 619,
    rating: 4.8,
    reviewCount: 356,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 6,
    image: bs2,
    title: 'Floral Printed Notch Neck Thread Work Pure Cotton Kurta',
    currentPrice: 1147,
    originalPrice: 2295,
    emiAmount: 382,
    rating: 4.5,
    reviewCount: 301,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: 7,
    image: bs3,
    title: 'Floral Printed Regular Pure Cotton Kurta & Pants Set',
    currentPrice: 1969,
    originalPrice: 4475,
    emiAmount: 656,
    rating: 4.7,
    reviewCount: 328,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    unavailableSizes: ['XL', 'XXL'],
  },
  {
    id: 8,
    image: bs4,
    title: 'Floral Printed Thread Work Pure Cotton Kurta Set',
    currentPrice: 2468,
    originalPrice: 6495,
    emiAmount: 823,
    rating: 4.6,
    reviewCount: 312,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    unavailableSizes: ['XL', 'XXL'],
    showQuickView: true,
  },
];

const getRandomSoldThisWeek = (min = 180, max = 420) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Video Products data - using local videos for better audio support
const videoProducts = [
  {
    id: 1,
    video: LOCAL_VIDEO_URLS[0] || SHOPIFY_VIDEO_URLS[0],
    image: productImage1,
    views: '4.0K',
    title: 'Women Peach Tropical...',
    currentPrice: 1647,
    originalPrice: 3295,
    discount: 50,
    soldThisWeek: getRandomSoldThisWeek(),
  },
  {
    id: 2,
    video: LOCAL_VIDEO_URLS[1] || SHOPIFY_VIDEO_URLS[1],
    image: productImage2,
    views: '4.2K',
    title: 'Printed Pure Cotton Fit &...',
    currentPrice: 2995,
    overlay: 'Pov: An urge to do twinning in Udaipur',
    soldThisWeek: getRandomSoldThisWeek(),
  },
  {
    id: 3,
    video: LOCAL_VIDEO_URLS[2] || SHOPIFY_VIDEO_URLS[2],
    image: productImage3,
    views: '3.8K',
    title: 'Women Ikat Printed Pure...',
    currentPrice: 2997,
    originalPrice: 5995,
    discount: 50,
    soldThisWeek: getRandomSoldThisWeek(),
  },
  {
    id: 4,
    video: LOCAL_VIDEO_URLS[3] || SHOPIFY_VIDEO_URLS[3],
    image: bs1,
    views: '3.1K',
    title: 'Women Blue Anarkali...',
    currentPrice: 3247,
    originalPrice: 6495,
    discount: 50,
    overlay: 'Ft. wordofmouth ✨💫',
    soldThisWeek: getRandomSoldThisWeek(),
  },
  {
    id: 5,
    video: LOCAL_VIDEO_URLS[4] || SHOPIFY_VIDEO_URLS[4],
    image: bs2,
    views: '2.3K',
    title: 'Paisley Printed Thread...',
    currentPrice: 3247,
    originalPrice: 6495,
    discount: 50,
    soldThisWeek: getRandomSoldThisWeek(),
  },
  {
    id: 6,
    video: LOCAL_VIDEO_URLS[5] || SHOPIFY_VIDEO_URLS[5],
    image: bs3,
    views: '2.0K',
    title: 'Floral Printed Kurta Set...',
    currentPrice: 2895,
    originalPrice: 5790,
    discount: 50,
    soldThisWeek: getRandomSoldThisWeek(),
  },
  {
    id: 7,
    video: LOCAL_VIDEO_URLS[6] || SHOPIFY_VIDEO_URLS[6],
    image: bs4,
    views: '1.2K',
    title: 'Women Green Floral Printed Pu...',
    currentPrice: 1993,
    originalPrice: 5695,
    discount: 65,
    soldThisWeek: getRandomSoldThisWeek(),
  },
];

const HomePage = ({ onProductClick }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const videoRefs = React.useRef({});
  const modalVideoRef = React.useRef(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [videoMuted, setVideoMuted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const instagramCarouselRef = React.useRef(null);
  
  // Social proof carousel data
  const [socialProofIndex, setSocialProofIndex] = useState(0);
  const [showCarousel, setShowCarousel] = useState(true);
  const socialProofItems = [
    {
      type: 'bought',
      name: 'Pooja',
      action: 'bought this dress',
      time: 'Just now',
      image: productImage1
    },
    {
      type: 'review',
      name: 'Neha',
      action: 'gave the review',
      time: '30 min ago',
      image: productImage2
    },
    {
      type: 'viewed',
      name: 'Priya',
      action: 'recently viewed',
      time: '1 hour ago',
      image: productImage3
    }
  ];

  // Auto-rotate social proof carousel
  useEffect(() => {
    if (!showCarousel) return;
    
    const interval = setInterval(() => {
      setSocialProofIndex((prev) => {
        const nextIndex = (prev + 1) % socialProofItems.length;
        // If we've shown the last item and are about to cycle back to first, hide carousel
        if (prev === socialProofItems.length - 1) {
          setShowCarousel(false);
          // Show again after 3 seconds
          setTimeout(() => {
            setShowCarousel(true);
            setSocialProofIndex(0);
          }, 3000);
          return prev; // Keep showing last item until hidden
        }
        return nextIndex;
      });
    }, 4000);
    return () => clearInterval(interval);
  }, [showCarousel, socialProofItems.length]);
  
  // Instagram Section - Fresh Implementation
  const [showInstagramModal, setShowInstagramModal] = useState(false);
  const [instagramLoading, setInstagramLoading] = useState(true);
  
  // Instagram post URLs
  const instagramPosts = [
    'https://www.instagram.com/p/ByZqv9hgzbw/',
    'https://www.instagram.com/p/DT0I894jynw/',
    'https://www.instagram.com/p/DTM3kYbiMhs/',
    'https://www.instagram.com/p/DSRulIPCf9Q/',
    'https://www.instagram.com/p/DClxMIpv66N/',
    'https://www.instagram.com/p/DE76XPBT5A3/',
    'https://www.instagram.com/p/DGN8qIASu2N/',
    'https://www.instagram.com/p/DG0XbvUhI1W/',
    'https://www.instagram.com/p/DH57ThjNmQ4/',
    'https://www.instagram.com/p/DG2nmJESCTU/',
    'https://www.instagram.com/p/DNYUsvQzkjt/',
    'https://www.instagram.com/p/DCMOIvroGy4/',
    'https://www.instagram.com/p/C9SDAX5SYTL/',
    'https://www.instagram.com/p/C92OxPBp-9n/',
    'https://www.instagram.com/p/C4sEgKOrG07/',
    'https://www.instagram.com/p/C2Rsig2vp6E/',
    'https://www.instagram.com/p/CzqYb1INkLM/'
  ];

  // Load Instagram embed script
  useEffect(() => {
    const scriptId = 'instagram-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Process embeds when modal opens and for carousel
  useEffect(() => {
    const processEmbeds = () => {
      if (window.instgrm && window.instgrm.Embeds) {
        window.instgrm.Embeds.process();
      }
    };

    let modalTimers = [];
    let fallbackTimer = null;

    if (showInstagramModal) {
      setInstagramLoading(true);
      
      // Process embeds with delays to ensure DOM is ready
      modalTimers = [
        setTimeout(processEmbeds, 500),
        setTimeout(processEmbeds, 1500),
        setTimeout(processEmbeds, 2500)
      ];

      // Hide loading after embeds are processed
      setTimeout(() => {
        setInstagramLoading(false);
      }, 2000);

      // Fallback: hide loading after max wait time
      fallbackTimer = setTimeout(() => {
        setInstagramLoading(false);
      }, 5000);
    } else {
      setInstagramLoading(true);
    }

    // Process embeds for carousel on mount and when Instagram script loads
    const carouselTimers = [
      setTimeout(processEmbeds, 1000),
      setTimeout(processEmbeds, 2000),
      setTimeout(processEmbeds, 3000),
    ];

    return () => {
      modalTimers.forEach(timer => clearTimeout(timer));
      if (fallbackTimer) clearTimeout(fallbackTimer);
      carouselTimers.forEach(timer => clearTimeout(timer));
    };
  }, [showInstagramModal]);

  // Auto-scroll Instagram carousel
  useEffect(() => {
    const carousel = instagramCarouselRef.current;
    if (!carousel) return;

    let scrollAmount = 0;
    const scrollSpeed = 1; // pixels per frame
    const scrollInterval = 16; // ~60fps
    let intervalId = null;
    let isPaused = false;

    const scroll = () => {
      if (isPaused) return;
      scrollAmount += scrollSpeed;
      carousel.scrollLeft = scrollAmount;

      // Reset scroll position when reaching the end (seamless loop)
      if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;
      }
    };

    const startScrolling = () => {
      if (!intervalId) {
        intervalId = setInterval(scroll, scrollInterval);
      }
      isPaused = false;
    };

    const stopScrolling = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
      isPaused = true;
    };

    startScrolling();

    // Pause on hover
    carousel.addEventListener('mouseenter', stopScrolling);
    carousel.addEventListener('mouseleave', startScrolling);

    return () => {
      stopScrolling();
      carousel.removeEventListener('mouseenter', stopScrolling);
      carousel.removeEventListener('mouseleave', startScrolling);
    };
  }, [instagramPosts.length]);

  // Scroll detection for live counter
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroImagesDesktop = [home1, home2, home3, home4];
  const heroImagesMobile = [homePhone1, homePhone2, homePhone3];
  
  // Use mobile images array length for mobile, desktop for larger screens
  const heroImages = isMobile ? heroImagesMobile : heroImagesDesktop;
  const maxSlides = isMobile ? heroImagesMobile.length : heroImagesDesktop.length;

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      const nowMobile = window.innerWidth <= 768;
      setIsMobile(nowMobile);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset slide index when switching between mobile/desktop
  useEffect(() => {
    if (currentSlide >= maxSlides) {
      setCurrentSlide(0);
    }
  }, [maxSlides, currentSlide]);

  // Auto-play all videos
  useEffect(() => {
    videoProducts.forEach((product) => {
      const video = videoRefs.current[product.id];
      if (video) {
        video.play().catch(() => {});
      }
    });
  }, []);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % maxSlides);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxSlides]);

  // Handle modal video audio when opened
  useEffect(() => {
    if (selectedVideo) {
      // Always start muted to respect autoplay policies
      setVideoMuted(true);
      
      // Use setTimeout to ensure video element is rendered
      setTimeout(() => {
        if (modalVideoRef.current) {
          const video = modalVideoRef.current;
          // Start muted to ensure autoplay works
          video.muted = true;
          video.volume = 1.0;
          video.play().catch((err) => {
            console.log('Play error:', err);
          });
        }
      }, 100);
    }
  }, [selectedVideo]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + maxSlides) % maxSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % maxSlides);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <ShopifyHeader brandName={BRAND_NAME} />
      
      {/* Live User Counter */}
      <LiveUserCounter className={`fixed left-4 z-50 transition-all duration-300 ${isScrolled ? 'top-4' : 'top-[46px]'}`} />
      
      {/* Trusted Customers Widget - Sticky on right side */}
      <div 
        className="fixed right-4 rounded-lg px-3 md:px-6 py-2 md:py-3 shadow-lg z-[99999] bg-white" 
        style={{
          visibility: 'visible',
          display: 'block',
          zIndex: 99999,
          top: '226px',
          transform: 'rotate(270deg)',
          transformOrigin: 'right',
          minWidth: '200px'
        }}
      >
        <div className="flex items-center gap-2 md:gap-3 whitespace-nowrap">
          <div className="flex items-center gap-0.5 md:gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                className="w-3 h-3 md:w-5 md:h-5"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8 0L10.06 5.51L16 6.18L12 10.15L12.94 16L8 13.18L3.06 16L4 10.15L0 6.18L5.94 5.51L8 0Z"
                  fill="#FF9500"
                />
              </svg>
            ))}
          </div>
          <span className="text-xs md:text-sm font-bold text-gray-900 font-['Space_Grotesk']">Trusted by 10,000+ customers</span>
        </div>
      </div>
      
      {/* Hero Carousel Section - Full Width */}
      <section className="w-full relative overflow-hidden bg-white">
        <div className="relative w-full">
          <div className="relative w-full bg-white">
            {(isMobile ? heroImagesMobile : heroImagesDesktop).map((image, index) => (
              <div
                key={index}
                className={`w-full transition-opacity duration-[800ms] ease-in-out bg-white ${
                  index === currentSlide ? 'opacity-100 relative z-10' : 'opacity-0 absolute top-0 left-0 z-0'
                }`}
              >
                <picture>
                  {/* Mobile images */}
                  <source 
                    media="(max-width: 768px)" 
                    srcSet={heroImagesMobile[Math.min(index, heroImagesMobile.length - 1)]} 
                  />
                  {/* Desktop images */}
                  <source 
                    media="(min-width: 769px)" 
                    srcSet={heroImagesDesktop[Math.min(index, heroImagesDesktop.length - 1)]} 
                  />
                  {/* Fallback image */}
                  <img
                    src={image}
                    alt={`Hero slide ${index + 1}`}
                    className="w-full h-auto object-contain object-center"
                  />
                </picture>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute top-1/2 left-5 md:left-5 z-20 bg-white/90 hover:bg-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center cursor-pointer transition-all duration-300 text-gray-800 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 -translate-y-1/2"
            onClick={goToPrevious}
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            className="absolute top-1/2 right-5 md:right-5 z-20 bg-white/90 hover:bg-white rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center cursor-pointer transition-all duration-300 text-gray-800 shadow-lg hover:shadow-xl hover:scale-110 active:scale-95 -translate-y-1/2"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-3 items-center justify-center">
            {(isMobile ? heroImagesMobile : heroImagesDesktop).map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-300 rounded-full border-2 border-white/80 outline-none focus:outline-2 focus:outline-blue-500 focus:outline-offset-2 ${
                  index === currentSlide 
                    ? 'w-8 h-3 bg-white border-white rounded-md' 
                    : 'w-3 h-3 bg-white/40 hover:bg-white/70 hover:scale-125'
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="overflow-x-auto md:overflow-x-visible -mx-4 md:mx-0 px-4 md:px-0">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-[#8B4513] mb-3 tracking-wide">
              Categories
            </h2>
            <p className="text-sm md:text-base text-gray-600 font-normal">
              Browse our favourites, handpicked by You
            </p>
          </div>
            <div className="flex md:grid md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5 scrollbar-hide">
              {categories.map((category) => (
                <div 
                  key={category.id} 
                  className="cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-lg rounded-lg overflow-hidden flex-shrink-0 w-[45vw] md:w-auto md:flex-shrink"
                  onClick={() => onProductClick && onProductClick()}
                >
                  <div className="relative w-full pb-[133.33%] overflow-hidden rounded-lg">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="absolute top-0 left-0 w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Best Seller Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-[#8B4513] mb-3 tracking-wide">
              Best Sellers
            </h2>
          </div>
          <div className="overflow-x-auto -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-4 md:gap-6 min-w-max">
              {bestSellerProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="w-[90vw] md:w-[380px] lg:w-[280px] flex-shrink-0 cursor-pointer"
                  onClick={() => onProductClick && onProductClick()}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curated Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-[#8B4513] mb-2 tracking-wide">
              Curated for Your Elegance
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light">
              Tailored to Your Taste
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {/* Panel 1: Ethnic Wear Under 1000 */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                {curated1 ? (
                  <img
                    src={curated1}
                    alt="Ethnic Wear Under 1000"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">curated_1.png</span>
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 md:p-6">
                <div className="flex items-center justify-between text-white">
                  <span className="text-base md:text-lg font-medium">Ethnic Wear Under 1000</span>
                  <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Panel 2: The Vacation Edit */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                {curated2 ? (
                  <img
                    src={curated2}
                    alt="The Vacation Edit"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">curated_2.png</span>
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 md:p-6">
                <div className="flex items-center justify-between text-white">
                  <span className="text-base md:text-lg font-medium">The Vacation Edit</span>
                  <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Panel 3: The 9-to-5 Life */}
            <div className="relative group cursor-pointer overflow-hidden rounded-lg">
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                {curated3 ? (
                  <img
                    src={curated3}
                    alt="The 9-to-5 Life"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">curated_3.png</span>
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent p-4 md:p-6">
                <div className="flex items-center justify-between text-white">
                  <span className="text-base md:text-lg font-medium">The 9-to-5 Life</span>
                  <svg className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="w-full">
            <picture className="w-full block">
              <source media="(min-width: 769px)" srcSet={story1} />
              <img 
                src={story1} 
                alt="Festive Hues & Style Soiree"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-[#8B4513] mb-3 tracking-wide">
              SHOP OUR BEST SELLERS
            </h2>
          </div>
          <div className="overflow-x-auto -mx-4 px-4 scrollbar-hide">
            <div className="flex gap-4 md:gap-6 min-w-max">
              {videoProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="w-[200px] md:w-[240px] flex-shrink-0"
                  style={{ minHeight: '330px', boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 8px', borderRadius: '8px' }}
                >
                  <div className="bg-white rounded-lg overflow-hidden h-full flex flex-col">
                    {/* Video Container */}
                    <div 
                      className="relative w-full h-[360px] md:h-[440px]"
                    >
                      <div 
                        className="w-full h-full"
                        style={{ backgroundColor: 'rgb(242, 242, 242)', borderRadius: '8px 8px 0px 0px' }}
                      >
                        <video
                          src={product.video}
                          className="w-full h-full object-cover"
                          style={{ borderRadius: '8px 8px 0px 0px' }}
                          loop
                          muted
                          autoPlay
                          playsInline
                          preload="none"
                          ref={(el) => {
                            videoRefs.current[product.id] = el;
                          }}
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            setSelectedVideo(product);
                          }}
                        />
                      </div>
                      
                      {/* Views Container - Bottom Left */}
                      <div 
                        className="absolute bottom-[10px] left-[10px] text-white text-sm font-medium px-2 py-1 rounded"
                        style={{ background: 'rgba(255, 255, 255, 0.2)' }}
                      >
                        {product.views} Views
                      </div>
                      
                      {/* Like/Share Container - Bottom Right */}
                      <div 
                        className="absolute bottom-[10px] right-[10px] flex items-center gap-3"
                      >
                        {/* Like Icon */}
                        <div className="flex items-center justify-center">
                          <svg 
                            width="15" 
                            height="16" 
                            viewBox="0 0 15 16" 
                            fill="none" 
                            stroke="#fff" 
                            strokeWidth="1" 
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ transform: 'scale(1.3)', filter: 'drop-shadow(0 0 0.4rem rgba(0, 0, 0, 0.5))' }}
                          >
                            <path d="M10.3128 2.31787C9.11857 2.31787 8.07301 2.8314 7.42127 3.69942C6.76953 2.8314 5.72396 2.31787 4.52978 2.31787C3.57919 2.31894 2.66784 2.69704 1.99567 3.36921C1.3235 4.04138 0.945407 4.95272 0.944336 5.90331C0.944336 9.9514 6.94648 13.228 7.20209 13.3634C7.26946 13.3996 7.34477 13.4186 7.42127 13.4186C7.49777 13.4186 7.57307 13.3996 7.64044 13.3634C7.89605 13.228 13.8982 9.9514 13.8982 5.90331C13.8971 4.95272 13.519 4.04138 12.8469 3.36921C12.1747 2.69704 11.2633 2.31894 10.3128 2.31787ZM7.42127 12.4265C6.3653 11.8112 1.86961 9.00819 1.86961 5.90331C1.87053 5.19808 2.15109 4.52199 2.64977 4.02331C3.14845 3.52463 3.82454 3.24406 4.52978 3.24315C5.65457 3.24315 6.59893 3.84226 6.99333 4.80455C7.02818 4.8894 7.08748 4.96198 7.16367 5.01305C7.23987 5.06413 7.32953 5.0914 7.42127 5.0914C7.513 5.0914 7.60266 5.06413 7.67886 5.01305C7.75506 4.96198 7.81435 4.8894 7.84921 4.80455C8.24361 3.84053 9.18797 3.24315 10.3128 3.24315C11.018 3.24406 11.6941 3.52463 12.1928 4.02331C12.6914 4.52199 12.972 5.19808 12.9729 5.90331C12.9729 9.00357 8.47608 11.8106 7.42127 12.4265Z" fill="white"></path>
                          </svg>
                        </div>
                        
                        {/* Share Icon */}
                        <div className="flex items-center justify-center">
                          <svg 
                            width="16" 
                            height="16" 
                            viewBox="0 0 16 16" 
                            fill="none" 
                            stroke="#fff" 
                            strokeWidth="1" 
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ transform: 'scale(1.3)', filter: 'drop-shadow(0 0 0.4rem rgba(0, 0, 0, 0.5))' }}
                          >
                            <path d="M14.0074 2.12578C13.8911 2.0095 13.7458 1.92634 13.5866 1.88487C13.4274 1.8434 13.2601 1.84511 13.1018 1.88983H13.0931L1.99328 5.25784C1.81259 5.3098 1.65202 5.41557 1.53295 5.56107C1.41388 5.70656 1.34196 5.88488 1.32676 6.07228C1.31156 6.25967 1.35381 6.44725 1.44788 6.61003C1.54195 6.77281 1.68338 6.90308 1.85333 6.98348L6.80471 9.32847L9.14971 14.2799C9.22374 14.4384 9.3416 14.5725 9.48936 14.6663C9.63712 14.76 9.80862 14.8095 9.98361 14.809C10.0102 14.809 10.0368 14.8078 10.0634 14.8055C10.2501 14.7904 10.4278 14.7185 10.5725 14.5996C10.7172 14.4806 10.8221 14.3202 10.873 14.1399L14.2387 3.04007C14.2387 3.03717 14.2387 3.03428 14.2387 3.03139C14.284 2.87349 14.2865 2.70638 14.2458 2.54723C14.2052 2.38807 14.1229 2.24261 14.0074 2.12578ZM9.98882 13.875L9.98592 13.8831L7.70975 9.07807L10.4416 6.34561C10.5247 6.25815 10.5704 6.14168 10.5688 6.02104C10.5673 5.9004 10.5187 5.78514 10.4334 5.69983C10.348 5.61452 10.2328 5.56591 10.1121 5.56436C9.9915 5.56282 9.87504 5.60846 9.78757 5.69156L7.05511 8.42344L2.24946 6.14726H2.25756L13.3528 2.78041L9.98882 13.875Z" fill="white"></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Product Info Section */}
                    <div className="p-3 flex-1 flex flex-col">
                      <div className="flex items-start gap-3">
                        {/* Product Image Thumbnail */}
                        <div 
                          className="flex-shrink-0 rounded-full overflow-hidden"
                          style={{ height: '32px', width: '32px', borderRadius: '2rem' }}
                        >
                          <img 
                            src={product.image || product.video} 
                            alt={product.title}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="32" height="32"%3E%3Crect width="32" height="32" fill="%23f2f2f2"/%3E%3C/svg%3E';
                            }}
                          />
                        </div>
                        
                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          {/* Product Name */}
                          <div 
                            className="text-black font-normal text-[13px] mb-1 line-clamp-2"
                            style={{ color: 'rgb(0, 0, 0)', fontWeight: 400, fontSize: '13px' }}
                          >
                            {product.title}
                          </div>
                          
                          {/* Prices */}
                          <div className="flex items-center gap-2 flex-wrap">
                            {product.currentPrice && (
                              <div 
                                className="text-black font-normal"
                                style={{ color: '#000000', fontStyle: 'normal' }}
                              >
                                ₹ {product.currentPrice.toLocaleString('en-IN')}
                              </div>
                            )}
                            {product.originalPrice && (
                              <div 
                                className="text-gray-500 line-through font-normal"
                                style={{ color: '#84848d', fontStyle: 'normal', textDecoration: 'line-through' }}
                              >
                                ₹ {product.originalPrice.toLocaleString('en-IN')}
                              </div>
                            )}
                          </div>
                          
                          {/* Offer Percentage */}
                          {product.discount && (
                            <div 
                              className="text-sm font-normal mt-1"
                              style={{ color: 'rgb(21, 106, 5)', fontWeight: 400 }}
                            >
                              {product.discount}% Off
                            </div>
                          )}
                          
                          {/* Social Proof - Sold This Week */}
                          <div 
                            className="text-xs font-normal mt-1.5"
                            style={{ color: '#7f2065', fontWeight: 400 }}
                          >
                            {(product.soldThisWeek ?? 235)} sold this week
                          </div>
                        </div>
                      </div>
                      
                      {/* Add to Cart Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log('Add to cart:', product);
                        }}
                        className="w-full bg-[#7f2065] text-white py-2.5 px-4 rounded-lg font-semibold text-xs uppercase tracking-wide transition-all duration-300 hover:bg-[#6a1a52] hover:shadow-md mt-3"
                        style={{ marginTop: '12px' }}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

 

      {/* Instagram Profile Info Section */}
      <section className="w-full py-6 md:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            {/* Profile Picture */}
            <div className="flex-shrink-0">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 shadow-lg bg-white" style={{ borderColor: '#7f2065' }}>
                <img 
                  src="https://dummyimage.com/320x320/e5e7eb/6b7280.png&text=Profile+Image"
                  alt="Dummy Profile" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Profile Info - Flex layout on desktop with justify-between */}
            <div className="flex-1 w-full">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between md:gap-8">
                {/* Username and Stats */}
                <div className="text-center md:text-left mb-4 md:mb-0">
                  <a 
                    href="https://www.instagram.com/wordofmouth/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 hover:text-[#7f2065] transition-colors inline-block"
                  >
                 @wordofmouth
                  </a>
                  
                  {/* Stats */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
                    <div>
                      <span className="font-semibold text-gray-900">787</span>
                      <span className="text-gray-600 ml-1">posts</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">20.8K</span>
                      <span className="text-gray-600 ml-1">followers</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">3</span>
                      <span className="text-gray-600 ml-1">following</span>
                    </div>
                  </div>
                </div>
                
                {/* Bio/About - Smaller font */}
                <div className="flex-1 text-center md:text-left space-y-1.5 max-w-md">
                  <p className="text-base md:text-sm font-semibold text-gray-900">wordofmouth</p>
                  <p className="text-xs text-gray-600">Clothing (brand)</p>
                  <p className="text-sm text-gray-800">
                    A fusion of prints & tradition ✨🌈
                  </p>
                  <p className="text-sm text-gray-800">
                    Kurta Sets | Kurti | Kurta | Co-ord Set | Dresses
                  </p>
                  <p className="text-sm text-gray-800">
                    Available on @myntra, @nykaafashion... more
                  </p>
                  <a 
                    href="https://linktr.ee/wordofmouth" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-[#7f2065] hover:underline inline-flex items-center gap-1"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    linktr.ee/wordofmouth
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Reels Carousel Section */}
      <section className="w-full py-8 md:py-12 bg-white overflow-hidden">
        <div className="w-full">
          <div 
            ref={instagramCarouselRef}
            className="overflow-x-auto scrollbar-hide" 
            style={{ scrollBehavior: 'auto', overflowX: 'auto' }}
          >
            <div className="flex gap-8 md:gap-10 px-4 md:px-6" style={{ width: 'max-content' }}>
              {instagramPosts.map((url, index) => (
                <div
                  key={`instagram-reel-${index}`}
                  className="flex-shrink-0"
                  style={{ width: '300px', minWidth: '300px' }}
                >
                  <blockquote 
                    className="instagram-media" 
                    data-instgrm-permalink={url}
                    data-instgrm-version="14"
                    style={{ 
                      background: '#FFF', 
                      border: '0', 
                      borderRadius: '3px', 
                      boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                      margin: '1px',
                      maxWidth: '100%',
                      minWidth: '300px',
                      padding: '0',
                      width: '100%'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-white/10 backdrop-blur-md z-50 flex items-center justify-center"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => {
              e.stopPropagation();
              // Unmute video when user clicks anywhere on modal
              if (modalVideoRef.current && videoMuted) {
                modalVideoRef.current.muted = false;
                setVideoMuted(false);
              }
            }}
          >
            {/* Video with Sound - Full Screen */}
            <video
              key={`video-${selectedVideo.id}`}
              ref={modalVideoRef}
              src={selectedVideo.video}
              className="w-full h-full object-contain"
              autoPlay
              playsInline
              loop
              muted={videoMuted}
              onLoadedMetadata={(e) => {
                e.target.volume = 1.0;
              }}
              onCanPlay={(e) => {
                e.target.volume = 1.0;
              }}
            >
              Your browser does not support the video tag.
            </video>
            
            {/* Mobile Layout */}
            <div className="md:hidden absolute inset-0 z-20">
              {/* Top Right - Close */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-black hover:text-gray-700 transition-colors"
                aria-label="Close modal"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Bottom - Product Info and Buy Now */}
              <div className="absolute bottom-0 left-0 right-0">
                {/* Product Info Bar */}
                <div className="bg-black/60 backdrop-blur-sm px-4 py-3 flex items-center gap-3">
                  {/* Product Thumbnail */}
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                    <img 
                      src={selectedVideo.image || selectedVideo.video} 
                      alt={selectedVideo.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-white text-sm font-medium truncate">
                        {selectedVideo.title}
                      </h3>
                      <svg className="w-4 h-4 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 19H5V5h7V3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                      </svg>
                    </div>
                    {selectedVideo.currentPrice && (
                      <div className="flex items-center gap-2">
                        <p className="text-white text-base font-semibold">
                          ₹ {selectedVideo.currentPrice.toLocaleString('en-IN')}
                        </p>
                        {selectedVideo.originalPrice && (
                          <>
                            <p className="text-gray-300 text-sm line-through">
                              ₹ {selectedVideo.originalPrice.toLocaleString('en-IN')}
                            </p>
                            {selectedVideo.discount && (
                              <p className="text-green-500 text-sm font-semibold">
                                {selectedVideo.discount}% Off
                              </p>
                            )}
                          </>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Buy Now Button */}
                <button 
                  className="w-full bg-black text-white py-4 px-4 font-semibold text-base hover:bg-gray-900 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Buy Now
                </button>
              </div>
            </div>

            {/* Laptop Layout */}
            <div className="hidden md:block absolute inset-0 z-20">
              {/* Top Bar - Mute/Unmute and Close */}
              <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between">
                {/* Mute/Unmute Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (modalVideoRef.current) {
                      const newMutedState = !videoMuted;
                      modalVideoRef.current.muted = newMutedState;
                      setVideoMuted(newMutedState);
                    }
                  }}
                  className="w-10 h-10 flex items-center justify-center text-white hover:text-gray-300 transition-colors"
                  aria-label="Toggle mute"
                >
                  {videoMuted ? (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                    </svg>
                  )}
                </button>
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="w-10 h-10 flex items-center justify-center text-black hover:text-gray-700 transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Right Side - Engagement Metrics */}
              <div className="absolute top-20 right-4 z-30 flex flex-col gap-4">
                <div className="text-white text-sm font-semibold">
                  {selectedVideo.views} Views
                </div>
                <div className="flex flex-col gap-4">
                  {/* Heart Icon with Likes */}
                  <div className="flex flex-col items-center gap-1 text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    <span className="text-xs">2</span>
                  </div>
                  
                  {/* Share Icon */}
                  <div className="flex flex-col items-center gap-1 text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  
                  {/* Bookmark Icon with Saves */}
                  <div className="flex flex-col items-center gap-1 text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                    </svg>
                    <span className="text-xs">4</span>
                  </div>
                  
                  {/* Shopping Cart Icon */}
                  <div className="flex flex-col items-center gap-1 text-white">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Bottom Center - Product Info Card */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 max-w-md w-full px-4">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl">
                  <div className="flex items-center gap-3 mb-3">
                    {/* Product Thumbnail */}
                    <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                      <img 
                        src={selectedVideo.image || selectedVideo.video} 
                        alt={selectedVideo.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Product Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-gray-900 text-sm font-medium truncate">
                          {selectedVideo.title}
                        </h3>
                        <svg className="w-4 h-4 text-gray-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 19H5V5h7V3H5c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"/>
                        </svg>
                      </div>
                      {selectedVideo.currentPrice && (
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-gray-900 text-base font-semibold">
                            ₹ {selectedVideo.currentPrice.toLocaleString('en-IN')}
                          </p>
                          {selectedVideo.originalPrice && (
                            <>
                              <p className="text-gray-500 text-sm line-through">
                                ₹ {selectedVideo.originalPrice.toLocaleString('en-IN')}
                              </p>
                              {selectedVideo.discount && (
                                <p className="text-green-600 text-sm font-semibold">
                                  {selectedVideo.discount}% Off
                                </p>
                              )}
                            </>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Buy Now Button */}
                  <button 
                    className="w-full bg-black text-white py-3 px-4 font-semibold text-base hover:bg-gray-900 transition-colors rounded"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Social Proof Carousel - Above Instagram Button */}
      {showCarousel && (
        <div className="fixed bottom-20 left-0 md:bottom-20 md:left-5 w-full md:w-auto px-4 md:px-0 z-[999]">
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-3 flex items-center gap-3 mb-2 max-w-md mx-auto md:mx-0 relative">
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowCarousel(false);
            }}
            className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700"
            aria-label="Close"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
            <img 
              src={socialProofItems[socialProofIndex].image} 
              alt="Product" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900">
              <span className="font-semibold text-[#7f2065]">{socialProofItems[socialProofIndex].name}</span> {socialProofItems[socialProofIndex].action}
            </p>
            <p className="text-xs text-gray-500 mt-0.5">{socialProofItems[socialProofIndex].time}</p>
          </div>
        </div>
      </div>
      )}

      {/* Floating Instagram Button */}
      <button 
        className="fixed bottom-0 left-0 md:bottom-5 md:left-5 w-full md:w-auto md:rounded-full rounded-none flex items-center justify-center gap-2.5 px-5 py-3 md:px-5 md:py-3 text-sm md:text-sm font-semibold text-white cursor-pointer shadow-lg z-[1000] transition-all duration-300 hover:-translate-y-0.5"
        style={{
          background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
          boxShadow: '0 4px 15px rgba(188, 24, 136, 0.4)'
        }}
        onClick={() => setShowInstagramModal(true)}
        aria-label="See Our Instagram"
      >
        <svg className="w-6 h-6 md:w-6 md:h-6 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" fill="currentColor"/>
        </svg>
        <span className="whitespace-nowrap">See Our Instagram</span>
      </button>

      {/* Instagram Modal */}
      {showInstagramModal && (
        <div 
          className="fixed inset-0 bg-black/30 backdrop-blur-md flex items-center justify-center z-[10000] p-4 overflow-y-auto"
          onClick={() => setShowInstagramModal(false)}
        >
          <div 
            className="relative w-full md:w-2/5 max-w-4xl h-full md:h-[90vh] bg-gray-50 rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 bg-black bg-opacity-60 border-none rounded-full w-10 h-10 flex items-center justify-center cursor-pointer transition-all duration-200 z-[10001] hover:bg-opacity-80"
              onClick={() => setShowInstagramModal(false)}
              aria-label="Close Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6L18 18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="h-full flex flex-col overflow-hidden">
              <div className="text-center border-b border-gray-200 flex-shrink-0 py-4 px-4">
                <h2 className="text-3xl font-bold text-gray-800 mb-2 m-0">Our Instagram</h2>
                <p className="text-base text-gray-600 m-0">Check out our latest posts and reels</p>
              </div>
              <div className="flex-1 overflow-y-auto py-4 px-4">
                <div className="max-w-2xl mx-auto w-full">
                  {/* Loading Skeleton */}
                  {instagramLoading && (
                    <div className="space-y-6">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={`skeleton-${i}`}
                          className="w-full bg-gray-200 rounded-lg overflow-hidden animate-pulse"
                          style={{ height: '600px' }}
                        >
                          <div className="h-full bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200"></div>
                        </div>
                      ))}
                      <div className="flex items-center justify-center py-4">
                        <div className="flex items-center gap-2 text-gray-500">
                          <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          <span>Loading Instagram posts...</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Instagram Posts */}
                  <div style={{ display: instagramLoading ? 'none' : 'block' }}>
                    {instagramPosts.map((url, index) => (
                      <div
                        key={`instagram-post-${index}`}
                        className="w-full flex justify-center mb-6 last:mb-0"
                      >
                        <blockquote 
                          className="instagram-media" 
                          data-instgrm-permalink={url}
                          data-instgrm-version="14"
                          style={{ maxWidth: '100%', width: '100%' }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <ShopifyFooter brandName={BRAND_NAME} />
      <AIBrandEngine />
    </div>
  );
};

export default HomePage;

