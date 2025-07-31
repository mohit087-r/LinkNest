import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { updateBookmark } from "../api/bookmarkApi";
import Loader from "./Loader";
import { RxCross2 } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

const EditBookmarkForm = ({ onClose, fetchData, bookmarkData }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    url: "",
    category: "",
  });

  const [initialData, setInitialData] = useState({});
  const [isChanged, setIsChanged] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setFormData(bookmarkData);
    setInitialData(bookmarkData);
  }, [bookmarkData]);

  useEffect(() => {
    const isEqual = JSON.stringify(formData) === JSON.stringify(initialData);
    setIsChanged(!isEqual); // true if changed
  }, [formData, initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.url || !formData.description || !formData.category) {
      toast.error("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);
      const res = await updateBookmark(bookmarkData._id, formData);

      if (res.success) {
        toast.success(res.message);
        fetchData();
        onClose();
      } else {
        toast.error(res.message || "Update failed");
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed z-10 top-23 left-0 right-0 bottom-0 md:inset-0 bg-black/50 bg-opacity-40 flex justify-center items-center">
      <div className="w-[90%] sm:w-[450px] bg-white rounded-xl p-6 animate-fadeIn relative">

        <div className="flex items-center justify-between border-b pb-4">
          <h2 className="text-xl font-semibold text-gray-800">Edit Bookmark</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-500 transition">
            <IoClose size={26} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col mt-6 space-y-6">
          {/* Title */}
          <div className="flex flex-col space-y-1 md:space-y-2">
            <label htmlFor="title" className="text-md text-gray-700 font-medium">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Enter bookmark title"
              value={formData.title}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-1.5 md:p-2.5 bg-gray-50 focus:outline-none focus:border-[#f57d06e3]"
            />
          </div>

          {/* URL */}
          <div className="flex flex-col space-y-1 md:space-y-2">
            <label htmlFor="url" className="text-md text-gray-700 font-medium">URL</label>
            <input
              type="text"
              id="url"
              name="url"
              placeholder="Enter bookmark URL"
              value={formData.url}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-1.5 md:p-2.5 bg-gray-50 focus:outline-none  focus:border-[#f57d06e3]"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col space-y-1 md:space-y-2">
            <label htmlFor="description" className="text-md text-gray-700 font-medium">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Enter bookmark description"
              value={formData.description}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-1.5 md:p-2.5 bg-gray-50 focus:outline-none focus:border-[#f57d06e3]"
            />
          </div>

          {/* Category */}
          <div className="flex flex-col space-y-1 md:space-y-2">
            <label htmlFor="category" className="text-md text-gray-700 font-medium">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              placeholder="Enter category"
              value={formData.category}
              onChange={handleChange}
              className="border border-gray-300 rounded-md p-1.5 md:p-2.5 bg-gray-50 focus:outline-none  focus:border-[#f57d06e3]"
            />
          </div>

          {/* Submit Button */}
          {
            loading ? <Loader /> :
              <button
                type="submit"
                disabled={!isChanged}
                className={`py-2 rounded-md font-medium transition-all ${isChanged ? "bg-[#E57d06e3] hover:bg-[#f57d06e3] text-white" : "bg-gray-200"} 
        `}
              >
                {loading ? 'Updating...' : 'Update'}
              </button>
          }

        </form>
      </div>
    </div>
  );
};

export default EditBookmarkForm;
