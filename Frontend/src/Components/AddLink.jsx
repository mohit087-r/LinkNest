import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
const AddLink = ({setAddBookMarkFormOpen}) => {
    return (
        <button
        onClick={() =>  setAddBookMarkFormOpen(true)}
  className="text-white hover:bg-[#f57d06e3] bg-[#f57c06] active:scale-95 transition-all duration-150 
             p-3 flex items-center gap-2 font-medium 
            rounded-full shadow-sm cursor-pointer text-md sm:text-5xl"
>
  <FaPlus />
</button>


    )
}

export default AddLink
