import classNames from 'classnames';

import type { FC } from 'react';
import { memo } from 'react';
import styles from './Overlay.module.scss';

interface OverlayProps {
  className?: string;
  onClick?: () => void;
}

const Overlay: FC<OverlayProps> = (props) => {
  const { className, onClick } = props;
  return (
    <div className={classNames(styles.overlay, className)} onClick={onClick} />
  );
};

export default memo(Overlay);
