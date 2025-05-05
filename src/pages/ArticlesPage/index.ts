import { getArticlesPageError } from './model/selectors/getArticlesPageData';
import type { ArticlesPageSchema } from './model/types/articlesPageSchema';
import { ArticlesPageLazy } from './ui/ArticlesPage.lazy';

export { ArticlesPageLazy as ArticlesPage, ArticlesPageSchema, getArticlesPageError };
