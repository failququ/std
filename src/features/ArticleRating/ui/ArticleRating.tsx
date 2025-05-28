import type { FC } from 'react';
import { memo, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Skeleton } from '@/shared/ui/Skeleton';
import { getUserData } from '@/entities/User';
import { RatingCard } from '@/entities/RatingCard';
import { useGetArticleRating, useRateArticle } from '../api/articleRatingApi';

interface ArticleRatingProps {
  className?: string;
  articleId: string;
}

const ArticleRating: FC<ArticleRatingProps> = (props) => {
  const { className, articleId } = props;

  const { t } = useTranslation('articles-page');

  const user = useSelector(getUserData);

  const userId = user?.id;

  const { data: articleRate, isLoading } = useGetArticleRating(articleId);

  const [rateArticle] = useRateArticle();

  const rate = useMemo(() => {
    if (!articleRate || !articleRate.length) return 0;
    const sum = articleRate.reduce((acc, item) => acc + item.rate, 0);
    return sum / articleRate.length;
  }, [articleRate]);

  const title = rate > 0 ? t('details-page.rating.withRatesTitle') : t('details-page.rating.noRatesTitle');

  const handleRateArticle = useCallback((rate: number) => {
    rateArticle({ articleId, rate, userId: userId || '' });
  }, [rateArticle, articleId, userId]);

  if (isLoading) return <Skeleton width="100%" height={60} border="16px" />;

  return (
    <RatingCard
      className={className}
      title={title}
      rate={rate}
      onRateArticle={handleRateArticle}
    />
  );
};

export default memo(ArticleRating);
