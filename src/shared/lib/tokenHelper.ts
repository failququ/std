import { LS_TOKEN_KEY } from 'shared/constants/localStorage';

export const setToken = (token: string) => {
  localStorage.setItem(LS_TOKEN_KEY, token);
};

export const getToken = () => localStorage.getItem(LS_TOKEN_KEY);

export const removeToken = () => localStorage.removeItem(LS_TOKEN_KEY);
