import classNames from 'classnames';

import type { FC } from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { ArticleDetails } from '@/entities/Article';
import { ArticleRecommendationsList } from '@/features/articleRecommendationsList';
import DynamicModuleLoader, { ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { articleDetailsPageReducer } from '../../model/slice';

import { ArticleRating } from '@/features/ArticleRating';
import ArticleComments from '../ArticleComments/ArticleComments';
import ArticleDetailsHeader from '../ArticleDetailsHeader/ArticleDetailsHeader';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsProps {
  className?: string;
}

const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('articles-page');

  const { id } = useParams<{ id: string }>();

  if (!id) {
    return (
      <div className={classNames(styles.page, className)}>
        {t('details-page.article-not-found')}
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <Page className={classNames(styles.page, className)}>
        <ArticleDetailsHeader />
        <ArticleDetails id={id} />
        <ArticleRating className={styles.rating} articleId={id} />
        <ArticleRecommendationsList className={styles.recommendations} />
        <ArticleComments className={styles.comments} id={id} />
      </Page>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);
