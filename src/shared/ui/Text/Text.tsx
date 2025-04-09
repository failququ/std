import classNames from 'classnames';

import type { FC } from 'react';
import { memo } from 'react';
import styles from './Text.module.scss';

type TextTheme = 'primary' | 'error';
type AlignOptions = 'center' | 'left' | 'right';

interface TextProps {
  className?: string;
  title?: string;
  description?: string
  theme?: TextTheme;
  align?: AlignOptions
}

const Text: FC<TextProps> = (props) => {
  const {
    className,
    title,
    description,
    theme = 'primary',
    align = 'left',
  } = props;

  return (
    <div className={classNames(
      styles.text,
      className,
      styles[theme],
      styles[align],
    )}
    >
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default memo(Text);
