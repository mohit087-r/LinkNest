import React, { useState } from 'react'
import AddLink from '../Components/AddLink'
import CategoryFilter from '../Components/CategoryFilter'
import BookMark from '../Components/BookMark';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    return (
        <div className='bg-gray-100 h-screen p-2'>
            <div className=' flex justify-between items-center gap-5 rounded px-15 sm:px-35 lg:px-50 xl:px-80'>
                <CategoryFilter
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                />
                <div className='absolute top-28.5 sm:top-33 md:top-22 right-3 sm:right-10 lg:right-20'>
                    <AddLink/>
                </div>
            </div>

            <div className='grid gap-2 mt-20 mx-5 sm:mx-10 md:mx-20 lg:mx-30 xl:mx-50'>
                <BookMark/>
                <BookMark/>
            </div>
        </div>
    )
}

export default Home
