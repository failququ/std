/* eslint max-len: 0 */
import classNames from 'classnames';

import { ArticlesView, ArticlesViewSelector } from 'entities/Article';
import ArticlesList from 'entities/Article/ui/ArticlesList/ArticlesList';
import type { FC } from 'react';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import Page from 'widgets/Page/Page';
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from '../model/selectors/getArticlesPageData';
import { fetchNextArticles } from '../model/services/fetchNextArticles/fetchNextArticles';
import { initArticlesPage } from '../model/services/initArtriclesPage/initArticlesPage';
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slice/articlesPageSlice';
import styles from './ArticlesPage.module.scss';

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

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  const onLoadNextArticles = useCallback(() => {
    // @ts-ignore
    dispatch(fetchNextArticles());
  }, [dispatch]);

  useInitialEffect(() => {
    // @ts-ignore
    dispatch(initArticlesPage());
  });

  const handleChangeView = useCallback((newView: ArticlesView) => {
    dispatch(articlesPageActions.setView(newView));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        className={classNames(styles.page, className)}
        onIntersection={onLoadNextArticles}
        error={error && t('articles-page.error')}
      >
        <ArticlesViewSelector view={view} onViewChange={handleChangeView} />
        <ArticlesList
          articles={articles}
          view={view}
          isLoading={isLoading}
        />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
