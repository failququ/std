import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';
import { ArticleDetailsSchema } from '../types/articleDetailsSchema';

const initialState: ArticleDetailsSchema = {
  data: undefined,
  isLoading: false,
  error: '',
};

const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = '';
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.isLoading = false;
        state.error = '';
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: articleDetailsActions, reducer: articleDetailsReducer } = articleDetailsSlice;
