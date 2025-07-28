// src/api/bookmarkApi.js
import axios from './axios';

export const addBookmark = async (bookmarkData) => {
  try {
    const response = await axios.post('/bookmarks', bookmarkData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Something went wrong!' };
  }
};
