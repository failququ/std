import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getToken } from 'shared/lib/helpers/localStorage/tokenHelper';

// Define a service using a base URL and expected endpoints
export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: fetchBaseQuery({
    baseUrl: __API__,
    prepareHeaders: (headers) => {
      const token = getToken() || '';
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
