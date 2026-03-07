import React from 'react';
import Imagepop from './Imagepop';

const Reviews = ({
    rating = 4.8,
    totalReviews = 147,
    breakdown = { 5: 110, 4: 25, 3: 8, 2: 3, 1: 1 },
    starColor = '#A82E61',
    accentColor = '#FF6B82'
}) => {
    const percent = (count) => Math.round((count / totalReviews) * 100);
    const placeholderImages = [
        "https://soluv.in/cdn/shop/files/IMG_6947.jpg?v=1757447784&width=1946",
        "https://soluv.in/cdn/shop/files/46_97e2bbf2-1e1a-48eb-8215-6b98755a8852.jpg?v=1757447784&width=1646",
        'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80',
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&q=80'
    ];
    const palette = {
        star: starColor,
        barDark: accentColor,
        border: '#E5E7EB'
    };

    return (
        <section className="mt-8 sm:mt-10 md:mt-12">
            <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-gray-900">Customer Reviews</h2>

            {/* Summary */}
            <div className="flex flex-col items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex items-center space-x-0.5 sm:space-x-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <i
                                key={i}
                                className="fa-solid fa-star"
                                style={{ color: palette.star, fontSize: '16px' }}
                            />
                        ))}
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-lg sm:text-xl font-semibold text-gray-900">{rating} out of 5</div>
                    <div className="text-xs sm:text-sm text-gray-500">Based on {totalReviews} reviews</div>
                </div>

                {/* Breakdown */}
                <div className="w-full max-w-md mx-auto grid grid-cols-1 gap-1.5 sm:gap-2">
                    {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center gap-2 sm:gap-3">
                            <div className="w-10 sm:w-12 text-xs sm:text-sm font-medium text-gray-700">{stars} star</div>
                            <div className="flex-1 h-1.5 sm:h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full rounded-full"
                                    style={{
                                        width: `${percent(breakdown[stars] || 0)}%`,
                                        background: `linear-gradient(90deg, ${palette.star}, ${palette.barDark})`
                                    }}
                                />
                            </div>
                            <div className="w-10 sm:w-12 text-right text-xs sm:text-sm text-gray-600">{percent(breakdown[stars] || 0)}%</div>
                        </div>
                    ))}
                </div>
                <div className="mt-6 w-full">
                    <Imagepop />
                </div>
            </div>

            {/* Reviews List */}
            <div className="grid grid-cols-1 gap-3 sm:gap-4 md:gap-6">
                {[
                    {
                        name: 'Aisha',
                        date: '2 weeks ago',
                        location: 'Jaipur, India',
                        title: 'Lovely Jhumka for Festive Wear',
                        item: 'Ruby Jhumka Earrings',
                        image: 'https://images.unsplash.com/photo-1603574670812-d24560880210?w=600&q=80',
                        text: 'Beautiful craftsmanship and very comfortable to wear. Got so many compliments!'
                    },
                    {
                        name: 'Meera',
                        date: '1 month ago',
                        location: 'Delhi, India',
                        title: 'Elegant Daily Pendant',
                        item: 'Kundan Pendant Necklace',
                        image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80',
                        text: 'The detailing is exquisite. Packaging was lovely too.'
                    },
                    {
                        name: 'Ritika',
                        date: '3 weeks ago',
                        location: 'Mumbai, India',
                        title: 'Sparkling Emerald Ring',
                        item: 'Emerald Statement Ring',
                        image: 'https://images.unsplash.com/photo-1581783898377-1c85bf937427?w=600&q=80',
                        text: 'Ring fits perfectly and sparkles beautifully in sunlight.'
                    },
                    {
                        name: 'Neha',
                        date: '5 days ago',
                        location: 'Bengaluru, India',
                        title: 'Perfect Bridal Set',
                        item: 'Pearl Bridal Set',
                        image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&q=80',
                        text: 'Perfect for my sister’s wedding, elegant and timeless.'
                    },
                    {
                        name: 'Simran',
                        date: '2 days ago',
                        location: 'Chandigarh, India',
                        title: 'Vibrant Traditional Bangles',
                        item: 'Meenakari Bangles',
                        image: 'https://images.unsplash.com/photo-1603574670772-d8efc3f801ce?w=600&q=80',
                        text: 'Colors are vibrant and finish is premium. Love the set!'
                    },
                    {
                        name: 'Anita',
                        date: '1 week ago',
                        location: 'Pune, India',
                        title: 'Oxidized Beauty',
                        item: 'Silver Oxidized Bracelet',
                        image: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?w=600&q=80',
                        text: 'Looks great with ethnic and western outfits alike.'
                    },
                    {
                        name: 'Pallavi',
                        date: '4 days ago',
                        location: 'Hyderabad, India',
                        title: 'Royal Polki Choker',
                        item: 'Polki Choker Necklace',
                        image: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80',
                        text: 'Stunning piece, sits beautifully on the neck and feels premium.'
                    },
                    {
                        name: 'Ishita',
                        date: '2 weeks ago',
                        location: 'Kolkata, India',
                        title: 'Temple Classic',
                        item: 'Temple Jewelry Earrings',
                        image: 'https://images.unsplash.com/photo-1620012253295-28fdd1a59ffa?w=600&q=80',
                        text: 'Traditional design with a modern touch. Exactly what I wanted.'
                    },
                    {
                        name: 'Zoya',
                        date: '3 days ago',
                        location: 'Lucknow, India',
                        title: 'Festive Maang Tikka',
                        item: 'Gold Plated Maang Tikka',
                        image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80',
                        text: 'Lightweight and gorgeous. Completed my festive look.'
                    },
                    {
                        name: 'Sara',
                        date: '6 days ago',
                        location: 'Ahmedabad, India',
                        title: 'Sparkly Tennis Bracelet',
                        item: 'Cubic Zirconia Tennis Bracelet',
                        image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80',
                        text: 'Shines like real diamonds and feels sturdy.'
                    },
                    {
                        name: 'Anushka',
                        date: '1 day ago',
                        location: 'Noida, India',
                        title: 'Cute Adjustable Ring',
                        item: 'Enamel Adjustable Ring',
                        image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80',
                        text: 'Adjustable fit is perfect. Colors are exactly as shown.'
                    },
                    {
                        name: 'Rhea',
                        date: '2 days ago',
                        location: 'Gurugram, India',
                        title: 'Chic Layered Set',
                        item: 'Layered Pendant Set',
                        image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&q=80',
                        text: 'Great value for money and looks very chic.'
                    }
                ].map((rev, idx) => (
                    <div key={idx} className="relative overflow-hidden border border-gray-100 rounded-none p-2.5 sm:p-3 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md hover:border-pink-300">
                        <div
                            className="pointer-events-none absolute inset-0 opacity-15"
                            style={{
                                background:
                                    'radial-gradient(circle at 0% 0%, rgba(255, 204, 230, 0.7) 18%, transparent 40%), radial-gradient(circle at 100% 100%, rgba(255, 217, 238, 0.7) 18%, transparent 42%)'
                            }}
                        />
                        {/* Header */}
                        <div className="flex items-center justify-between flex-wrap sm:flex-nowrap gap-2">
                            <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 text-gray-700 flex items-center justify-center text-[10px] sm:text-xs font-semibold uppercase">
                                    {rev.name.slice(0, 2)}
                                </div>
                                <div className="truncate">
                                    <div className="text-sm sm:text-base font-semibold truncate">{rev.name}</div>
                                    <div className="text-[10px] sm:text-[11px] text-gray-500 truncate">{rev.location}</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-1.5 sm:gap-2">
                                <span className="text-[9px] sm:text-[10px] px-1.5 sm:px-2 py-0.5 border border-green-300 text-green-700">Verified</span>
                                <div className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">{rev.date}</div>
                            </div>
                        </div>

                        <div className="border-t mt-1.5 sm:mt-2" style={{ borderColor: palette.border }} />

                        <div className="flex items-center gap-1.5 sm:gap-2 mt-2 sm:mt-3 mb-1.5 sm:mb-2">
                            <div className="flex items-center space-x-0.5 sm:space-x-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <i key={i} className="fa-solid fa-star" style={{ color: palette.star, fontSize: '12px' }} />
                                ))}
                            </div>
                        </div>
                        {rev.title && (
                            <div className="text-xs sm:text-sm font-semibold text-gray-800 mb-1">{rev.title}</div>
                        )}
                        <ReviewText text={rev.text} />

                        {/* Small thumbnails below description */}
                        <div className="mt-2 sm:mt-3">
                            {(() => {
                                const countsPattern = [0, 1, 2, 0, 3, 1, 2, 0, 1, 3, 2, 0];
                                const count = countsPattern[idx % countsPattern.length];
                                if (count === 0) {
                                    return null;
                                }
                                const start = idx % placeholderImages.length;
                                const images = Array.from({ length: count }).map((_, i) => placeholderImages[(start + i) % placeholderImages.length]);
                                return (
                                    <>
                                        <div className="flex items-center gap-1.5 sm:gap-2">
                                            {images.map((src, i) => (
                                                <img
                                                    key={i}
                                                    src={src}
                                                    alt="Jewelry"
                                                    className="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-none border border-gray-200 shadow-sm opacity-90 hover:opacity-100 hover:scale-[1.02] transition"
                                                    style={{ filter: 'grayscale(15%)' }}
                                                />
                                            ))}
                                        </div>

                                    </>
                                );
                            })()}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Reviews;

// Support component: clamp review text with Read more/less
function ReviewText({ text }) {
    const [expanded, setExpanded] = React.useState(false);
    const MAX_CHARS = 180;
    const isLong = text.length > MAX_CHARS;
    const visible = expanded || !isLong ? text : text.slice(0, MAX_CHARS) + '…';

    return (
        <div className="text-xs sm:text-sm text-gray-700 leading-relaxed">
            <p>{visible}</p>
            {isLong && (
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="mt-1 text-[10px] sm:text-xs underline text-pink-600 hover:text-pink-700"
                >
                    {expanded ? 'Read less' : 'Read more'}
                </button>
            )}
        </div>
    );
}


