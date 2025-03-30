import axios from 'axios';
import { getToken } from 'shared/lib/helpers/tokenHelper';

export const api = axios.create({
  baseURL: __API__,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});
