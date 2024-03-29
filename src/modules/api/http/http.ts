import axios from 'axios';
import { AuthResponse } from './AuthResponse.ts';
const API_URL = 'https://siriusprojectback.onrender.com'

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config;
})

$api.interceptors.response.use((config) => {
  return config;
}, async (error) => {
  const originalRequest = error.config;
  if (error.response_status == 401 && error.config && !error.config._isRetry) {//h
    originalRequest._isRetry = true;
    try {
      const response = await axios.get<AuthResponse>(`${API_URL}/token/refresh`)
      localStorage.setItem('token', response.data.accessToken)
      return $api.request(originalRequest)
    } catch (e) {
      console.log('Сессия завершилась')
    }
  }
  throw error
})
export default $api;