import axios from "axios";

export const req = axios.create({
  baseURL: import.meta.env.API_URL,
  withCredentials: true,
});
