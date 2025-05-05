import { getArticleDetailsData, getArticleDetailsError } from './model/selectors/articleDetails';
import { articleDetailsReducer } from './model/slice/articleDetailsSlice';
import {
  ArticleSortField, ArticlesView, ArticleType, type Article,
} from './model/types/article';
import ArticleDetails from './ui/ArticleDetails/ArticleDetails';
import ArticlesList from './ui/ArticlesList/ArticlesList';
import ArticlesSortSelector from './ui/ArticlesSortSelector/ArticlesSortSelector';
import ArticlesViewSelector from './ui/ArticlesViewSelector/ArticlesViewSelector';
import ArticleTypesTabs from './ui/ArticleTypesTabs/ArticleTypesTabs';

export {
  Article,
  ArticleDetails,
  articleDetailsReducer,
  ArticlesList,
  ArticleSortField,
  ArticlesSortSelector,
  ArticlesView,
  ArticlesViewSelector,
  ArticleType,
  ArticleTypesTabs,
  getArticleDetailsData,
  getArticleDetailsError,
};
