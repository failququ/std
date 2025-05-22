/* eslint max-len: 0 */
import classNames from 'classnames';

import type { FC } from 'react';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import DynamicModuleLoader, { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Page } from '@/widgets/Page';

import { getArticlesPageError } from '../model/selectors/getArticlesPageData';
import { fetchNextArticles } from '../model/services/fetchNextArticles/fetchNextArticles';
import { initArticlesPage } from '../model/services/initArtriclesPage/initArticlesPage';
import { articlesPageReducer } from '../model/slice/articlesPageSlice';
import ArticleInfiniteList from './ArticleInfiniteList/ArticleInfiniteList';
import styles from './ArticlesPage.module.scss';
import ArticlesPageFilters from './ArticlesPageFilters/ArticlesPageFilters';

interface ArticlesPageProps {
  className?: string;
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
};

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation('articles-page');

  const dispatch = useAppDispatch();

  const error = useSelector(getArticlesPageError);

  const [searchParams] = useSearchParams();

  const onLoadNextArticles = useCallback(() => {
    // @ts-ignore
    dispatch(fetchNextArticles());
  }, [dispatch]);

  useInitialEffect(() => {
    // @ts-ignore
    dispatch(initArticlesPage(searchParams));
  });

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        className={classNames(styles.page, className)}
        onIntersection={onLoadNextArticles}
        error={error && t('articles-page.error')}
      >
        <ArticlesPageFilters />
        <ArticleInfiniteList />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
