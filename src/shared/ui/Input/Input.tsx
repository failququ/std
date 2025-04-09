import classNames from 'classnames';

import type { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import { memo, useEffect, useRef } from 'react';
import styles from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'readOnly'>

export type InputVariant = 'default' | 'clean';
interface InputProps extends HTMLInputProps {
  className?: string;
  label?: string;
  value?: string | number;
  autoFocus?: boolean;
  variant?: InputVariant;
  readonly?: boolean;
  onChange?: (value: string) => void;
}

const Input: FC<InputProps > = (props) => {
  const {
    className,
    label,
    value,
    onChange,
    type = 'text',
    variant = 'default',
    autoFocus,
    readonly,
    ...restProps
  } = props;

  const ref = useRef<HTMLInputElement>(null);
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value);

  useEffect(() => {
    if (autoFocus) {
      ref.current?.focus();
    }
  }, [autoFocus]);

  return (
    <div className={classNames(styles.inputWrapper, className, styles[variant])}>
      <div data-testid="input-label" className={styles.label}>{label}</div>
      <input
        readOnly={readonly}
        data-testid="input"
        ref={ref}
        className={styles.input}
        type={type}
        value={value}
        onChange={handleOnChange}
        {...restProps}
      />
    </div>
  );
};

export default memo(Input);
