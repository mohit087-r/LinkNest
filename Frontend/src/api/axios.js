// src/api/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000/api', // backend server base url
  headers: {
    'Content-Type': 'application/json'
  }
});

export default axiosInstance;
