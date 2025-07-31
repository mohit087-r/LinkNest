import React, {useState} from 'react';
import { Pencil, Trash2 } from 'lucide-react';
import { RiLinksFill } from 'react-icons/ri';
import { deleteBookmark } from '../api/bookmarkApi';
import { toast } from 'react-toastify';
import ConfirmPopup from "./ConfirmPopup"; 
import EditBookmarkForm from './EditBookMarkForm';

const BookMark = ({onEdit, fetchData, bookmarkData }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleDelete = async (id) => {
    try {
      const res = await deleteBookmark(id);

      if(res.success){
        toast.success(res.message);
        fetchData();
        return;
      }

      if(res.error){
        toast.error(res.message);
      }
    } catch (err) {
      toast.error(err.message || 'Delete failed');
    }
  };

  return (
    <div>
    <div className="bg-white border-2 border-gray-200 rounded-xl px-4 sm:px-6 py-4">

      {/* First Row: Title and Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{bookmarkData.title}</h2>
          <p className="text-sm text-gray-600 mt-1">{bookmarkData.description}</p>
        </div>

        <div className="flex items-center gap-2 mt-2 sm:mt-0">
          <a
            href={bookmarkData.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm px-3 py-1.5 border border-gray-200 hover:border-orange-300 text-gray-400 hover:text-orange-500 rounded hover:bg-orange-100 flex items-center gap-1"
          >
            <RiLinksFill size={17} />
          </a>
          <button 
          onClick={() => setShowEditForm(true)}
          className="text-sm px-3 py-1.5 border border-gray-200 hover:border-blue-300 text-gray-400 hover:text-blue-600 rounded hover:bg-blue-100 flex items-center gap-1">
            <Pencil size={16} />
          </button>
          <button
            onClick={() => setShowPopup(true)}
            className="text-sm px-3 py-1.5 border border-gray-200 hover:border-red-300 text-gray-400 hover:text-red-600 rounded hover:bg-red-100 flex items-center gap-1">
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* Second Row: Category and Date */}
      <div className="flex justify-between items-center mt-3 flex-wrap gap-y-2">
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
          #{bookmarkData.category}
        </span>
        <span className="text-xs text-gray-400">Added on: {bookmarkData.addedOn}</span>
      </div>
    </div>

    { showPopup && 
      
        <ConfirmPopup
          onClose={() => setShowPopup(false)}
          onConfirm={() => handleDelete(bookmarkData._id)}
          message="Do you really want to delete this bookmark?"
        />
      
    }

    {
      showEditForm && 
        <EditBookmarkForm
          onClose={() => setShowEditForm(false)}
          fetchData={fetchData}
          bookmarkData={bookmarkData}
        />
    }
    
    </div>
  );
};

export default BookMark;
