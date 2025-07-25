import React from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaLink } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
const AddLink = () => {
    return (
        <button
  className="text-white hover:bg-[#f57d06e3] bg-[#f57c06] active:scale-95 transition-all duration-150 
             px-4 py-2 flex items-center gap-2 font-medium 
            rounded-md shadow-sm cursor-pointer"
>
  <FaPlus size={19} />
  Add Link
</button>


    )
}

export default AddLink
