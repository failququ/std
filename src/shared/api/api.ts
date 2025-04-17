import axios from 'axios';
import { getToken } from 'shared/lib/helpers/localStorage/tokenHelper';

export const api = axios.create({
  baseURL: __API__,
  headers: {
    Authorization: `Bearer ${getToken()}`,
  },
});
