import classNames from 'classnames';

import type { FC, HTMLAttributeAnchorTarget } from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Text, { TextSize } from 'shared/ui/Text/Text';
import { Article, ArticlesView } from '../../model/types/article';
import ArticleListItemSkeleton from '../ArticlesListItem/ArticleListItemSkeleton';
import ArticlesListItem from '../ArticlesListItem/ArticlesListItem';
import styles from './ArticlesList.module.scss';

interface ArticlesListProps {
  className?: string;
  articles: Article[];
  view?: ArticlesView;
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

const ArticlesList: FC<ArticlesListProps> = (props) => {
  const {
    className, articles, view = ArticlesView.SMALL, isLoading, target,
  } = props;

  const { t } = useTranslation('articles-page');

  const getSkeletons = () => new Array(view === ArticlesView.SMALL ? 9 : 3)
    .fill(0).map((item, index) => (
      <ArticleListItemSkeleton
        className={styles.card}
        key={index}
        view={view}
      />
    ));

  const renderArticle = (article: Article) => (
    <ArticlesListItem
      className={styles.card}
      key={article._id}
      article={article}
      view={view}
      target={target}
    />
  );

  if (!isLoading && !articles.length) {
    return (
      <Text
        size={TextSize.L}
        title={t('articles-page.no-articles')}
      />
    );
  }

  return (
    <div className={classNames(styles.list, className, [styles[view]])}>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}

      {isLoading && getSkeletons()}
    </div>
  );
};

export default memo(ArticlesList);
