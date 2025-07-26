import React, { useRef, useState, useEffect } from 'react';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';

const categories = [
  'All', 'Tutorial', 'Tools', 'Inspiration', 'Articles',
  'Videos', 'YouTube', 'Blogs', 'Books', 'Frontend', 'Backend'
];

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
  const scrollRef = useRef();
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollButtons = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
  };

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 200;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const container = scrollRef.current;
    updateScrollButtons();
    container.addEventListener('scroll', updateScrollButtons);
    window.addEventListener('resize', updateScrollButtons);
    return () => {
      container.removeEventListener('scroll', updateScrollButtons);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  return (
    <div className='w-full mt-2 sm:mt-6'>
      <div className='relative'>
        {/* Left Scroll Button */}
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-[#e5e7eb] rounded-l-md h-9 sm:h-12 sm:px-2'
          >
            <MdChevronLeft size={24} />
          </button>
        )}

        {/* Scrollable Category List */}
        <div
          ref={scrollRef}
          className='flex items-center gap-2 px-2 sm:px-4 md:px-6 h-9 sm:h-12 bg-white border-2 border-[#e5e7eb] rounded-lg overflow-x-auto scroll-smooth no-scrollbar'
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={`whitespace-nowrap px-2 sm:py-1 border-2 border-[#e5e7eb] rounded text-[14px] text-sm font-medium transition-colors
                ${
                  selectedCategory === category
                    ? 'bg-[#f57c06] text-white border-[#f57c06]'
                    : 'bg-white text-gray-700 hover:bg-[#f57c06]/50 hover:border-[#f57c06]/10'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Right Scroll Button */}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white border-2 border-[#e5e7eb] rounded-r-md h-9 sm:h-12 sm:px-2'
          >
            <MdChevronRight size={24} />
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
