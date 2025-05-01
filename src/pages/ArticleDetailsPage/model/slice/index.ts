import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetailsPageSchema } from '../types/ArticleDetailsPageSchema';
import { articleDetailsCommentsReducer } from './articleDetailsCommentsSlice';
import { articleDetailsRecommendationsReducer } from './articleDetailsRecommendationsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchema>({
  // @ts-ignore
  recommendations: articleDetailsRecommendationsReducer,
  // @ts-ignore
  comments: articleDetailsCommentsReducer,
});
