import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticlesPageInited } from '../../selectors/getArticlesPageData';
import { articlesPageActions } from '../../slice/articlesPageSlice';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<void, undefined, ThunkConfig<string>>(
  'articlesPage/initArticlesPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const isInited = getArticlesPageInited(getState());

    if (!isInited) {
      dispatch(articlesPageActions.initState());
      // @ts-ignore
      dispatch(fetchArticlesList({ page: 1 }));
    }
  },
);
