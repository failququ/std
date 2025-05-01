import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';
import {
  getArticlesPageLimit,
  getArticlesPageOrder,
  getArticlesPagePage,
  getArticlesPageSearch,
  getArticlesPageSelectedArticleType,
  getArticlesPageSort,
} from '../../selectors/getArticlesPageData';

interface FetchArticlesListArgs {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListArgs, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (args, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const limit = getArticlesPageLimit(getState());
    const sort = getArticlesPageSort(getState());
    const order = getArticlesPageOrder(getState());
    const page = getArticlesPagePage(getState());
    const search = getArticlesPageSearch(getState());
    const type = getArticlesPageSelectedArticleType(getState());

    try {
      addQueryParams({
        sort, order, search, type,
      });

      const response = await extra.api.get<Article[]>('/article', {
        params: {
          page,
          limit,
          sort,
          order,
          search,
          type: type === ArticleType.ALL ? undefined : type,
        },
      });
      if (!response.data) throw new Error();
      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
