import { EntityState } from '@reduxjs/toolkit';
import {
  Article, ArticleSortField, ArticlesView, ArticleType,
} from 'entities/Article';
import { SortOrder } from 'shared/types/sort';

export interface ArticlesPageSchema extends EntityState<Article, string> {
  isLoading?: boolean;
  error?: string;
  page: number;
  limit: number;
  hasMore: boolean;
  _inited: boolean;

  // filters
  view: ArticlesView;
  order: SortOrder;
  search: string;
  sort: ArticleSortField;
  selectedArticleType: ArticleType;
}
