import classNames from 'classnames';

import type { FC, HTMLAttributes } from 'react';
import { memo } from 'react';
import styles from './Card.module.scss';

export enum CardTheme {
  NORMAL = 'normal',
  OUTLINED = 'outlined'
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode
  theme?: CardTheme;
}

const Card: FC<CardProps> = (props) => {
  const {
    className, children, theme = CardTheme.NORMAL, ...restProps
  } = props;

  return (
    <div className={classNames(styles.card, className, styles[theme])} {...restProps}>
      {children}
    </div>
  );
};

export default memo(Card);
