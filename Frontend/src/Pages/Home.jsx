import React, { useState } from 'react'
import AddLink from '../Components/AddLink'
import CategoryFilter from '../Components/CategoryFilter'
import BookMark from '../Components/BookMark';
import AddBookmarkForm from '../Components/AddBookmarkForm';
import { getAllBookmarks } from '../api/bookmarkApi';
import { useEffect } from 'react';
import Loader from '../Components/Loader';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [addBookMarkFormOpen, setAddBookMarkFormOpen] = useState(false);
    const [bookmarks, setBookmarks] = useState([]);
    const [loader, setLoader] = useState(false);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };


    const fetchData = async () => {
        setLoader(true);
        try {
            const data = await getAllBookmarks();
            console.log(data.data)
            setBookmarks(data.data);
        } catch (err) {
            console.error("Failed to fetch bookmarks", err);
        }
        finally {
            setLoader(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='bg-transparent p-2'>
            <div className=' flex justify-between items-center gap-5 rounded px-15 sm:px-35 lg:px-50 xl:px-80'>
                <CategoryFilter
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                />
                <div className='absolute top-28.5 sm:top-33 md:top-22 right-3 sm:right-10 lg:right-20'>
                    <AddLink setAddBookMarkFormOpen={setAddBookMarkFormOpen}

                    />
                </div>
            </div>

            {
                loader ?
                    <div className='mt-60'>
                        <Loader />
                    </div> : (
                        <div className='grid gap-2 mt-10 sm:mt-20 mx-5 sm:mx-10 md:mx-20 lg:mx-30 xl:mx-50'>
                            {bookmarks.length > 1 && bookmarks.map((b) => (
                                <BookMark
                                    fetchData={() => fetchData()}
                                    key={b._id} // Use a unique key here (e.g., MongoDB _id)
                                    bookmarkData={b}
                                />
                            ))}
                        </div>
                    )
            }

            {
                addBookMarkFormOpen &&
                <AddBookmarkForm
                    close={() => setAddBookMarkFormOpen(false)}
                    fetchData={fetchData}
                />
            }
        </div>
    )
}

export default Home
