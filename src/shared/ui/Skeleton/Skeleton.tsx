import classNames from 'classnames';

import type { CSSProperties, FC } from 'react';
import { memo } from 'react';
import styles from './Skeleton.module.scss';

interface SkeletonProps {
  className?: string;
  height?: number | string;
  width?: number | string;
  border?: string;
}

const Skeleton: FC<SkeletonProps> = (props) => {
  const {
    className, height, width, border,
  } = props;

  const style: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return (
    <div className={classNames(styles.skeleton, className)} style={style} />
  );
};

export default memo(Skeleton);
