import axios from 'axios';
import { BACKEND_URL } from './config';

const API = axios.create({
  baseURL: BACKEND_URL,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
