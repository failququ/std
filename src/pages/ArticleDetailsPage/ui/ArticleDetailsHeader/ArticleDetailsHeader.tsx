import classNames from 'classnames';

import type { FC } from 'react';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import { getRouteArticleEdit, getRouteArticles } from '@/shared/constants/router';
import { getArticleDetailsData, getArticleDetailsError } from '@/entities/Article';
import { getCanUserEditArticle } from '../../model/selectors/article';
import styles from './ArticleDetailsHeader.module.scss';

interface Props {
  className?: string;
}

const ArticleDetailsHeader: FC<Props> = (props) => {
  const { className } = props;

  const { t } = useTranslation('articles-page');

  const navigate = useNavigate();

  const article = useSelector(getArticleDetailsData);
  const canEdit = useSelector(getCanUserEditArticle);
  const error = useSelector(getArticleDetailsError);

  const handleBackToList = useCallback(() => {
    navigate(getRouteArticles());
  }, [navigate]);

  const handleEditArticle = useCallback(() => {
    navigate(getRouteArticleEdit(article?._id || ''));
  }, [navigate, article?._id]);

  if (error) return null;

  return (
    <div className={classNames(styles.header, className)}>
      <Button theme="outline" onClick={handleBackToList}>
        {t('details-page.header.back-to-articles')}
      </Button>
      {canEdit && (
      <Button
        className={styles.editBtn}
        theme="outline"
        onClick={handleEditArticle}
      >
        {t('details-page.header.edit-article')}
      </Button>
      )}
    </div>
  );
};

export default memo(ArticleDetailsHeader);
