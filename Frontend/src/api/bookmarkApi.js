import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/bookmarks"; // change if your backend URL is different

export const getAllBookmarks = async () => {
  const res = await axios.get(API_BASE_URL);
  return res.data;
};

export const addBookmark = async (bookmarkData) => {
  const res = await axios.post(API_BASE_URL, bookmarkData);
  return res.data;
};
