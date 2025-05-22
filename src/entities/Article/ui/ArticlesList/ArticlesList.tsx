import type { FC, HTMLAttributeAnchorTarget } from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { HStack } from '@/shared/ui/Stack';
import Text, { TextSize } from '@/shared/ui/Text/Text';
import { ArticlesView } from '../../model/const/const';
import { Article } from '../../model/types/article';
import ArticleListItemSkeleton from '../../ui/ArticlesListItem/ArticleListItemSkeleton';
import ArticlesListItem from '../../ui/ArticlesListItem/ArticlesListItem';

interface ArticlesListProps {
  articles: Article[];
  view?: ArticlesView;
  isLoading?: boolean;
  target?: HTMLAttributeAnchorTarget;
}

const ArticlesList: FC<ArticlesListProps> = (props) => {
  const {
    articles,
    view = ArticlesView.SMALL,
    isLoading,
    target,
  } = props;

  const { t } = useTranslation('articles-page');

  const getSkeletons = () => new Array(view === ArticlesView.SMALL ? 9 : 3)
    .fill(0).map((item, index) => (
      <ArticleListItemSkeleton
        key={index}
        view={view}
      />
    ));

  const renderArticle = (article: Article) => (
    <ArticlesListItem
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
    <HStack gap={view === ArticlesView.BIG ? '32' : '16'} wrap>
      {articles.length > 0
        ? articles.map(renderArticle)
        : null}
      {isLoading && getSkeletons()}
    </HStack>
  );
};

export default memo(ArticlesList);
