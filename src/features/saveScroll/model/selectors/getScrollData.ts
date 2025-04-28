import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const getScrollData = (state: StateSchema) => state.scroll.scroll || {};
export const getScrollDataByPath = createSelector(
  getScrollData,
  (state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,
);
