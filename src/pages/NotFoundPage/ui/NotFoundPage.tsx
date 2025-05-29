import classNames from 'classnames';

import type { FC } from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { UILink } from '@/shared/ui/UILink';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage: FC<NotFoundPageProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation('not-found-page');
  return (
    <Page className={classNames(styles.page, className)} data-testid="NotFoundPage">
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
      <UILink to="/">{t('link')}</UILink>
    </Page>
  );
};

export default memo(NotFoundPage);
