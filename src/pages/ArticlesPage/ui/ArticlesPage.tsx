import classNames from 'classnames';

import type { FC } from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('articles-page');
  return (
    <div className={classNames(styles.page, className)}>
      {t('articles-page.title')}
    </div>
  );
};

export default memo(ArticlesPage);
