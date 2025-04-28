import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from '../../selectors/getArticlesPageData';

interface FetchArticlesListArgs{
  page?: number;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListArgs, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (args, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const { page = 1 } = args;
    const limit = getArticlesPageLimit(getState());

    try {
      const response = await extra.api.get<Article[]>('/article', {
        params: {
          page,
          limit,
        },
      });
      if (!response.data) throw new Error();
      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
