import classNames from 'classnames';

import type { FC } from 'react';
import { memo } from 'react';
import styles from './Text.module.scss';

type TextTheme = 'primary' | 'error';
type AlignOptions = 'center' | 'left' | 'right';

export const enum TextSize {
  S = 'size_s',
  M = 'size_m',
  L = 'size_l',
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.S]: 'h3',
  [TextSize.M]: 'h2',
  [TextSize.L]: 'h1',
};

interface TextProps {
  className?: string;
  descriptionCn?: string;
  titleCn?: string;
  title?: string;
  description?: string
  theme?: TextTheme;
  align?: AlignOptions;
  size?: TextSize;

  'data-testid'?: string
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
    'data-testid': dataTestId = 'Text',
  } = props;

  const HeaderTag = mapSizeToHeaderTag[size];

  return (
    <div
      className={classNames(
        styles.text,
        className,
        styles[theme],
        styles[align],
        styles[size],
      )}
      data-testid={dataTestId}
    >
      {title && (
      <HeaderTag
        className={classNames(styles.title, titleCn)}
        data-testid={`${dataTestId}-title`}
      >
        {title}
      </HeaderTag>
      )}
      {description && (
      <p
        className={classNames(styles.description, descriptionCn)}
        data-testid={`${dataTestId}-description`}
      >
        {description}
      </p>
      )}
    </div>
  );
};

export default memo(Text);
