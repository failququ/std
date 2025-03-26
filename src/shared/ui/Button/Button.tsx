import classNames from 'classnames';

import type { ButtonHTMLAttributes, FC } from 'react';
import { memo } from 'react';
import styles from './Button.module.scss';

export type ButtonTheme = 'primary' | 'clean' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme = 'primary', ...restProps
  } = props;
  return (
    <button
      className={classNames(
        styles.button,
        className,
        styles[theme],
      )}
      type="button"
      {...restProps}
    >
      {children}
    </button>
  );
};

export default memo(Button);
