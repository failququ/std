import classNames from 'classnames';

import type { FC } from 'react';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  ArticleSortField,
  ArticlesView,
  ArticleType,
} from '@/entities/Article';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticlesViewSelector } from '@/features/ArticlesViewSelector';
import { ArticleTypesTabs } from '@/features/ArticleTypesTabs';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useDebounce } from '@/shared/lib/hooks/useDebounce';
import { SortOrder } from '@/shared/types/sort';
import Input from '@/shared/ui/Input/Input';
import { TabItem } from '@/shared/ui/Tabs/Tabs';
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSelectedArticleType,
  getArticlesPageSort,
  getArticlesPageView,
} from '../../model/selectors/getArticlesPageData';
import { fetchArticlesList } from '../../model/services/fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import styles from './ArticlesPageFilters.module.scss';

interface Props {
  className?: string;
}

const ArticlesPageFilters: FC<Props> = (props) => {
  const { className } = props;

  const { t } = useTranslation('articles-page');

  const dispatch = useAppDispatch();

  const view = useSelector(getArticlesPageView);
  const order = useSelector(getArticlesPageOrder);
  const sort = useSelector(getArticlesPageSort);
  const search = useSelector(getArticlesPageSearch);
  const selectedArticleType = useSelector(getArticlesPageSelectedArticleType);

  const fetchData = useCallback(() => {
    // @ts-ignore
    dispatch(fetchArticlesList({ replace: true }));
  }, [dispatch]);

  const fetchDebouncedData = useDebounce(fetchData, 700);

  const handleChangeView = useCallback((newView: ArticlesView) => {
    dispatch(articlesPageActions.setView(newView));
  }, [dispatch]);

  const handleChangeSort = useCallback((newSort: ArticleSortField) => {
    dispatch(articlesPageActions.setSort(newSort));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const handleChangeOrder = useCallback((newOrder: SortOrder) => {
    dispatch(articlesPageActions.setOrder(newOrder));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  const handleChangeSearch = useCallback((newSearch: string) => {
    dispatch(articlesPageActions.setSearch(newSearch));
    dispatch(articlesPageActions.setPage(1));
    fetchDebouncedData();
  }, [dispatch, fetchDebouncedData]);

  const handleChangeArticleType = useCallback((tab: TabItem) => {
    dispatch(articlesPageActions.setType(tab.value as ArticleType));
    dispatch(articlesPageActions.setPage(1));
    fetchData();
  }, [dispatch, fetchData]);

  return (
    <div className={classNames(styles.filters, className)}>
      <div className={styles.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={handleChangeOrder}
          onChangeSort={handleChangeSort}
        />
        <ArticlesViewSelector view={view} onViewChange={handleChangeView} />
      </div>
      <Input
        className={styles.search}
        placeholder={t('articles-page.filters.search')}
        value={search}
        onChange={handleChangeSearch}
      />
      <ArticleTypesTabs
        className={styles.tabs}
        value={selectedArticleType}
        onTabChange={handleChangeArticleType}
      />
    </div>
  );
};

export default memo(ArticlesPageFilters);
