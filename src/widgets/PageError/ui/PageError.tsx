import classNames from 'classnames';

import type { FC } from 'react';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '@/shared/ui/Button/Button';
import styles from './PageError.module.scss';

interface Props {
  className?: string;
}

const PageError: FC<Props> = (props) => {
  const { className } = props;
  const { t } = useTranslation();
  const handleReloadPage = () => window.location.reload();
  return (
    <div className={classNames(styles.page, className)}>
      <h1>{t('common.page-error.title')}</h1>
      <Button onClick={handleReloadPage}>
        {t('common.page-error.reload-button')}
      </Button>
    </div>
  );
};

export default memo(PageError);
