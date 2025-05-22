import type { FC } from 'react';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { ArticlesList } from '@/entities/Article';
import { getArticlesPageIsLoading, getArticlesPageView } from '../../model/selectors/getArticlesPageData';
import { getArticles } from '../../model/slice/articlesPageSlice';

interface ArticleInfiniteListProps {
  className?: string;
}

const ArticleInfiniteList: FC<ArticleInfiniteListProps> = (props) => {
  const { className } = props;

  const articles = useSelector(getArticles.selectAll);
  const isLoading = useSelector(getArticlesPageIsLoading);
  const view = useSelector(getArticlesPageView);

  return (
    <ArticlesList
      articles={articles}
      view={view}
      isLoading={isLoading}
    />
  );
};

export default memo(ArticleInfiniteList);
