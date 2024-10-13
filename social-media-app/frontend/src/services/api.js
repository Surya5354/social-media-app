import axios from 'axios';

const API_URL = process.env.VUE_APP_API_URL || 'http://localhost:5000/api';

const token = localStorage.getItem('token');
const config = {
  headers: {
    Authorization: `Bearer ${token}`,
  },
};

// Auth
export const loginUser = (credentials) => axios.post(`${API_URL}/auth/login`, credentials);
export const getUserProfile = () => axios.get(`${API_URL}/users/profile`, config);
export const updateUserProfile = (formData) => axios.put(`${API_URL}/users/profile`, formData, config);

// Posts
export const createPost = (postContent) => axios.post(`${API_URL}/posts`, postContent, config);
export const getPosts = () => axios.get(`${API_URL}/posts`);

// Notifications
export const getNotifications = () => axios.get(`${API_URL}/notifications`, config);
