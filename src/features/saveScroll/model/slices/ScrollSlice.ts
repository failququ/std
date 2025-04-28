import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SaveScrollSchema } from '../types/saveScrollSchema';

const initialState: SaveScrollSchema = {
  scroll: {},
};

const ScrollSlice = createSlice({
  name: 'scroll',
  initialState,
  reducers: {
    setScrollPosition: (state, { payload }: PayloadAction<{path: string, position: number}>) => {
      state.scroll[payload.path] = payload.position;
    },
  },
});

export const { actions: scrollActions, reducer: scrollReducer } = ScrollSlice;
