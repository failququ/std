import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticlesView, ArticleType } from '@/entities/Article';

export const getArticlesPageIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error || undefined;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticlesView.SMALL;
export const getArticlesPagePage = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore || false;
export const getArticlesPageInited = (state: StateSchema) => state.articlesPage?._inited || false;
export const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort || ArticleSortField.CREATED;
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order || 'asc';
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search || '';
export const getArticlesPageSelectedArticleType = (state: StateSchema) => state.articlesPage?.selectedArticleType || ArticleType.ALL;
