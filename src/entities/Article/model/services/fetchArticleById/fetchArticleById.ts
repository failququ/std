import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'profile/fetchArticleById',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<Article>(
        `/article/${articleId}`,
      );
      if (!response.data) throw new Error();
      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
