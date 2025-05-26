import { articleDetailsPageReducer } from './model/slice';
import {
  articleDetailsRecommendationsActions,
  articleDetailsRecommendationsReducer,
} from './model/slice/articleDetailsRecommendationsSlice';
import type { ArticleDetailsCommentsSchema } from './model/types/ArticleDetailsCommentsSchema';
import type { ArticleDetailsPageSchema } from './model/types/ArticleDetailsPageSchema';
import type { ArticleDetailsRecommendationsSchema } from './model/types/ArticleDetailsRecommendationsSchema';
import { ArticleDetailsPageLazy } from './ui/ArticleDetailsPage/ArticleDetailsPageLazy';

export {
  ArticleDetailsCommentsSchema,
  ArticleDetailsPageLazy as ArticleDetailsPage,
  articleDetailsPageReducer,
  ArticleDetailsPageSchema,
  articleDetailsRecommendationsActions,
  articleDetailsRecommendationsReducer,
  ArticleDetailsRecommendationsSchema,
};
