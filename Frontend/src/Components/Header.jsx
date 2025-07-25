import React from 'react'
import SearchBar from './SearchBar'
import userPng from '../../public/images/user-1.png'
import Logo from '../../public/images/LinkNest_logo_1.jpg'
import { MdOutlineLightMode } from "react-icons/md";

const Header = () => {
    return (
        <div  className='border-[#e5e7eb] border-b py-3'>
            <div className='flex transition-all duration-300 justify-between items-center px-2 sm:px-10 lg:px-20'>
                <div>
                    <img
                        src={Logo}
                        alt="logo"
                        className='sm:h-10 h-8'
                    />
                </div>

                <div className='md:block hidden'>
                    <SearchBar />
                </div>

                <div className='flex gap-4'>
                    <button className='lg:flex hidden  justify-center active:scale-95 hover:scale-104 items-center h-10 w-10 bg-[#f3f4f6] rounded-full cursor-pointer'>
                        <MdOutlineLightMode size={25} className='text-neutral-700' />
                    </button>
                    <button
                        className="cursor-pointer active:scale-90 transition-transform duration-100"
                    >
                        <img
                            src={userPng}
                            alt="userpng"
                            className="sm:h-10 h-8 hover:scale-103 border-2 border-gray-300 rounded-full"
                        />
                    </button>
                </div>
            </div>
            <div className='block md:hidden px-2 sm:px-10 lg:px-20 mt-2'>
                    <SearchBar />
                </div>
        </div>

    )
}

export default Header
