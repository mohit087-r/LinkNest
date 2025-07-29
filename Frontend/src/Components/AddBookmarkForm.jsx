import React, { useState } from 'react';
import { addBookmark } from '../api/bookmarkApi';
import { IoClose } from 'react-icons/io5';
import { toast } from 'react-toastify';
import Loader from './Loader';

const AddBookmarkForm = ({close, fetchData}) => {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    description: '',
    category: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.url || !formData.description || !formData.category) {
      toast.error("All fields are required!")
      return
    }

    setLoading(true);
    try {
      const res = await addBookmark(formData);
      if(res.success){
        toast.success(res.message);
        fetchData();
        close()
      }

      if(res.error){
        toast.error(res.message);
      }
      
      setFormData({ title: '', url: '', description: '', category: '' });
    } catch (err) {
      toast.error(err || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="fixed inset-0  bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
            <div className="relative bg-white w-full max-w-md rounded-xl p-6 shadow-lg transition-all animate-fadeIn">
                {/* Header */}
                <div className="flex items-center justify-between border-b pb-4">
                    <h2 className="text-xl font-semibold text-gray-800">Add Bookmark</h2>
                    <button onClick={close} className="text-gray-500 hover:text-red-500 transition">
                        <IoClose size={26} />
                    </button>
                </div>

    <form onSubmit={handleSubmit} className="flex flex-col mt-6 space-y-6">
      {/* Title */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="title" className="text-md text-gray-700 font-medium">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter bookmark title"
          value={formData.title}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2.5 bg-gray-50 focus:outline-none focus:border-[#f57d06e3]"
        />
      </div>

      {/* URL */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="url" className="text-md text-gray-700 font-medium">URL</label>
        <input
          type="text"
          id="url"
          name="url"
          placeholder="Enter bookmark URL"
          value={formData.url}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2.5 bg-gray-50 focus:outline-none  focus:border-[#f57d06e3]"
        />
      </div>

      {/* Description */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="description" className="text-md text-gray-700 font-medium">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="Enter bookmark description"
          value={formData.description}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2.5 bg-gray-50 focus:outline-none focus:border-[#f57d06e3]"
        />
      </div>

      {/* Category */}
      <div className="flex flex-col space-y-2">
        <label htmlFor="category" className="text-md text-gray-700 font-medium">Category</label>
        <input
          type="text"
          id="category"
          name="category"
          placeholder="Enter category"
          value={formData.category}
          onChange={handleChange}
          className="border border-gray-300 rounded-md p-2.5 bg-gray-50 focus:outline-none  focus:border-[#f57d06e3]"
        />
      </div>

      {/* Submit Button */}
      {
        loading ? <Loader/> :
<button
        type="submit"
        disabled={loading}
        className={`py-2 rounded-md text-white font-medium transition-all bg-[#E57d06e3] hover:bg-[#f57d06e3]
        }`}
      >
        {loading ? 'Adding...' : 'Add Bookmark'}
      </button>
      }
      
    </form>
    </div>
    </section>
  );
};

export default AddBookmarkForm;
