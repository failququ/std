import classNames from 'classnames';

import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import UILink from 'shared/ui/UILink/UILink';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('not-found-page');
  return (
    <div className={classNames(styles.page, className)}>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <UILink to="/">{t('Link')}</UILink>
    </div>
  );
};

export default NotFoundPage;
