import { getArticleDetailsData } from './model/selectors/articleDetails';
import { articleDetailsReducer } from './model/slice/articleDetailsSlice';
import { ArticlesView, type Article } from './model/types/article';
import ArticleDetails from './ui/ArticleDetails/ArticleDetails';
import ArticlesViewSelector from './ui/ArticlesViewSelector/ArticlesViewSelector';

export {
  Article, ArticleDetails, articleDetailsReducer, ArticlesView, ArticlesViewSelector, getArticleDetailsData,
};
