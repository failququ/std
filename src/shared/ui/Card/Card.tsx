import classNames from 'classnames';

import type { FC, HTMLAttributes } from 'react';
import { memo } from 'react';
import styles from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode
}

const Card: FC<CardProps> = (props) => {
  const { className, children, ...restProps } = props;

  return (
    <div className={classNames(styles.card, className)} {...restProps}>
      {children}
    </div>
  );
};

export default memo(Card);
