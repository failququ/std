import classNames from "classnames";

import styles from "./Button.module.scss";

import type { ButtonHTMLAttributes, FC } from "react";

export type ButtonTheme = "primary" | "clean";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme: ButtonTheme;
}

  const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme = "primary", ...restProps } = props;
    return (
      <button 
        className={classNames(styles.button, className, styles[theme])}
        {...restProps}
      >
          {children}
      </button>
    );
  };

export default Button;