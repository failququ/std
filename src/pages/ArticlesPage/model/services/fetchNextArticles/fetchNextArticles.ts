import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import {
  getArticlesPageHasMore, getArticlesPageIsLoading,
  getArticlesPagePage,
} from '../../selectors/getArticlesPageData';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const fetchNextArticles = createAsyncThunk<void, undefined, ThunkConfig<string>>(
  'articlesPage/fetchNextArticles',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const page = getArticlesPagePage(getState()) + 1;
    const hasMore = getArticlesPageHasMore(getState());
    const isLoading = getArticlesPageIsLoading(getState());

    if (!hasMore || isLoading) return;
    dispatch(articlesPageActions.setPage(page));
    dispatch(fetchArticlesList({ page }));
  },
);
