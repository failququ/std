import classNames from 'classnames';

import type { FC } from 'react';
import { memo } from 'react';
import styles from './Text.module.scss';

type TextTheme = 'primary' | 'error';
type AlignOptions = 'center' | 'left' | 'right';

export const enum TextSize {
  M = 'size_m',
  L = 'size_l',
}

interface TextProps {
  className?: string;
  descriptionCn?: string;
  titleCn?: string;
  title?: string;
  description?: string
  theme?: TextTheme;
  align?: AlignOptions;
  size?: TextSize;
}

const Text: FC<TextProps> = (props) => {
  const {
    className,
    descriptionCn,
    titleCn,
    title,
    description,
    theme = 'primary',
    align = 'left',
    size = 'size_m',
  } = props;

  return (
    <div className={classNames(
      styles.text,
      className,
      styles[theme],
      styles[align],
      styles[size],
    )}
    >
      <div className={classNames(styles.title, titleCn)}>{title}</div>
      <div className={classNames(styles.description, descriptionCn)}>{description}</div>
    </div>
  );
};

export default memo(Text);
