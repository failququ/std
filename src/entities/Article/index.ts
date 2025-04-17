import { getArticleDetailsData } from './model/selectors/articleDetails';
import { articleDetailsReducer } from './model/slice/articleDetailsSlice';
import type { Article } from './model/types/article';
import ArticleDetails from './ui/ArticleDetails/ArticleDetails';

export {
  Article, ArticleDetails, articleDetailsReducer, getArticleDetailsData,
};
