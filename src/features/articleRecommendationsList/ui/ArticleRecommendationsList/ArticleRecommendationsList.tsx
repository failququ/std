import classNames from 'classnames';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { ArticlesList, ArticlesView } from '@/entities/Article';
import { VStack } from '@/shared/ui/Stack';
import Text from '@/shared/ui/Text/Text';
import { useGetArticleRecommendations } from '../../api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = (props: ArticleRecommendationsListProps) => {
  const { className } = props;
  const { t } = useTranslation('articles-page');

  const { data: recommendations, isLoading } = useGetArticleRecommendations(4);

  return (
    <VStack gap="8" className={classNames(className, [className])}>
      <Text title={t('details-page.recommends.title')} />
      <ArticlesList
        articles={recommendations || []}
        isLoading={isLoading}
        view={ArticlesView.SMALL}
        target="_blank"
      />
    </VStack>
  );
};

export default memo(ArticleRecommendationsList);
