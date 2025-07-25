import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import userPng from '../../public/images/user-1.png'
import { TbUserScan } from "react-icons/tb";
import { CiLogin } from "react-icons/ci";
import { MdOutlineLightMode } from "react-icons/md";
const Menu = () => {
    const logoutHandler = async () => {
        
    }
    return (
        <nav className="grid gap-1 text-sm border rounded-md border-gray-200">
            <div className='text-center sm:p-4 p-2'>
                <img
                                            src={userPng}
                                            alt="userpng"
                                            className="sm:h-20 h-15 flex justify-self-center hover:scale-103 border-2 border-gray-300 rounded-full"
                                        />
                <p className='sm:text-xl text-md font-semibold'>Mohit</p>
                <p className='sm:text-md text-gray-500'>mohitraut087@gmail.com</p>
            </div>
            <div className='flex flex-col border-t-2  border-[#e5e7eb] text-[16px]'>
                <Link
                className='flex items-center gap-4 py-2 px-4 hover:bg-gray-200'
            >
              <TbUserScan size={20} className='text-gray-500' />  Profile
            </Link>

            <Link
                className='flex items-center gap-4 py-2 px-4 hover:bg-gray-200 lg:hidden'
            >
              <MdOutlineLightMode size={20} className='text-gray-500' />  Switch Theme
            </Link>

            <button
                onClick={logoutHandler}
                className="text-left flex items-center gap-4 py-2 px-4 text-red-400 pb-2 hover:bg-red-100"
            >
               <CiLogin size={20}/> Logout
            </button>
            </div>
        </nav>
    )
}

export default Menu