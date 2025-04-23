/* eslint max-len: 0 */
import classNames from 'classnames';

import { ArticlesView, ArticlesViewSelector } from 'entities/Article';
import ArticlesList from 'entities/Article/ui/ArticlesList/ArticlesList';
import type { FC } from 'react';
import { memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import DynamicModuleLoader, { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect';
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from '../model/selectors/getArticlesPageData';
import { fetchArticlesList } from '../model/services/fetchArticlesList/fetchArticlesList';
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

  const dispatch = useAppDispatch();

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const error = useSelector(getArticlesPageError);
  const view = useSelector(getArticlesPageView);

  useInitialEffect(() => {
    // @ts-ignore
    dispatch(fetchArticlesList());
    dispatch(articlesPageActions.initState());
  });

  const handleChangeView = useCallback((newView: ArticlesView) => {
    dispatch(articlesPageActions.setView(newView));
  }, [dispatch]);

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(styles.page, className)}>
        <ArticlesViewSelector view={view} onViewChange={handleChangeView} />
        <ArticlesList
          isLoading={isLoading}
          view={view}
          articles={articles}
        />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage);
