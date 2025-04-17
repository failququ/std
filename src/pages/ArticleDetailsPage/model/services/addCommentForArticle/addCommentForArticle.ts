import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getArticleDetailsData } from 'entities/Article';
import { Comment } from 'entities/Comment';
import { getUserData } from 'entities/User';
import { fetchCommentByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, thunkAPI) => {
    const {
      extra, rejectWithValue, getState, dispatch,
    } = thunkAPI;

    const user = getUserData(getState());
    const article = getArticleDetailsData(getState());

    if (!user?.id || !text || !article) return rejectWithValue('error');

    try {
      const response = await extra.api.post<Comment>('/comment', {
        articleId: article.id,
        userId: user.id,
        text,
      });
      if (!response.data) throw new Error();

      dispatch(fetchCommentByArticleId(article.id));

      return response.data;
    } catch (error) {
      return rejectWithValue('error');
    }
  },
);
