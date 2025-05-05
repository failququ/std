import axios from 'axios';
import { getToken } from 'shared/lib/helpers/localStorage/tokenHelper';

export const api = axios.create({
  baseURL: __API__,
});

api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = `Bearer ${getToken()}`;
  }

  return config;
});
