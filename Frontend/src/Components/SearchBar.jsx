import React from 'react'
import { HiSearch } from "react-icons/hi";

const SearchBar = () => {
    return (
        <div
            className='w-full h-9 sm:h-11 flex items-center
            border border-gray-300 bg-[#f3f4f6] rounded-lg overflow-hidden
            group focus-within:border-[#ffca9e] focus-within:bg-[#fff4ec] sm:text-lg
            xl:min-w-[500px] xl:w-[400px] xl:focus-within:w-[750px] 
            md:min-w-[400px] md:w-[300px] lg:focus-within:w-[530px]
            transition-all duration-300'
        >
            
      <HiSearch size={25} className='mx-3 text-neutral-500 group-focus-within:text-[#ff943c]'/>
            
                
                    {/* <div className='w-full h-full'> */}
                        <input
                            type='text'
                            placeholder='Search using title'
                            className='bg-transparent w-full h-full outline-none'
                        />
                    {/* </div> */}
           
            
        </div>
    )
}

export default SearchBar
