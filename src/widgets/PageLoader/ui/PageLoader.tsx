import classNames from 'classnames';

import type { FC } from 'react';
import { memo } from 'react';
import { Spinner } from '@/shared/ui/Spinner';
import styles from './PageLoader.module.scss';

interface Props {
  className?: string;
}

const PageLoader: FC<Props> = (props) => {
  const { className } = props;
  return (
    <div className={classNames(styles.loader, className)}>
      <Spinner />
    </div>
  );
};

export default memo(PageLoader);
