import classNames from 'classnames';

import { ArticleDetails } from 'entities/Article';
import type { FC } from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsProps {
  className?: string;
}

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
    <div className={classNames(styles.page, className)}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
