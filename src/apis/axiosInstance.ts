import axios from "axios";

export const req = axios.create({
  baseURL: import.meta.env.API_URL,
  withCredentials: true,
});

req.interceptors.request.use((config) => {
  const token = localStorage.getItem("access_token");
  
  if (token) config.headers.Authorization = `Bearer ${token}`;
  
  if (config.data && !(config.data instanceof FormData)) {
    config.headers["Content-Type"] = "application/json";
  }
  
  return config;
});