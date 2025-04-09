import classNames from 'classnames';

import type { ButtonHTMLAttributes, FC } from 'react';
import { memo } from 'react';
import styles from './Button.module.scss';

export type ButtonTheme = 'primary' | 'clean' | 'outline' | 'outline_red';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    className, children, theme = 'primary', disabled, ...restProps
  } = props;

  return (
    <button
      className={classNames(
        styles.button,
        className,
        styles[theme],
        { [styles.disabled]: disabled },
      )}
      type="button"
      disabled={disabled}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default memo(Button);
