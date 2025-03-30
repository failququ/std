import classNames from 'classnames';

import type { FC } from 'react';
import { memo } from 'react';
import styles from './Text.module.scss';

type TextTheme = 'primary' | 'error';

interface TextProps {
  className?: string;
  title?: string;
  description?: string
  theme?: TextTheme;
}

const Text: FC<TextProps> = (props) => {
  const {
    className, title, description, theme = 'primary',
  } = props;
  return (
    <div className={classNames(styles.text, className, styles[theme])}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default memo(Text);
