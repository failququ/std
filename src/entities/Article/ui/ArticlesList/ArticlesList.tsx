import classNames from 'classnames';

import type { FC } from 'react';
import { memo } from 'react';
import { Article, ArticlesView } from '../../model/types/article';
import ArticleListItemSkeleton from '../ArticlesListItem/ArticleListItemSkeleton';
import ArticlesListItem from '../ArticlesListItem/ArticlesListItem';
import styles from './ArticlesList.module.scss';

interface ArticlesListProps {
  className?: string;
  articles: Article[];
  view?: ArticlesView;
  isLoading?: boolean;
}

const ArticlesList: FC<ArticlesListProps> = (props) => {
  const {
    className, articles, view = ArticlesView.SMALL, isLoading,
  } = props;

  const getSkeletons = () => new Array(view === ArticlesView.SMALL ? 9 : 3)
    .fill(0).map((item, index) => (
      <ArticleListItemSkeleton
        className={styles.card}
        key={index}
        view={view}
      />
    ));

  if (isLoading) {
    return (
      <div className={classNames(styles.list, className, [styles[view]])}>
        {getSkeletons()}
      </div>
    );
  }

  const renderArticle = (article: Article) => (
    <ArticlesListItem
      className={styles.card}
      key={article.id}
      article={article}
      view={view}
    />
  );

  return (
    <div className={classNames(styles.list, className, [styles[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
    </div>
  );
};

export default memo(ArticlesList);
