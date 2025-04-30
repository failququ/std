import classNames from 'classnames';

import { ChangeEvent, useMemo } from 'react';
import styles from './Select.module.scss';

export interface SelectOption<T extends string> {
  value: T;
  content: string;
  readonly?: boolean;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOption<T>[];
  value?: T;
  readonly?: boolean;
  onChange?: (value: T) => void;
}

const Select = <T extends string> (props: SelectProps<T>) => {
  const {
    className, label, options, value, readonly, onChange,
  } = props;

  const optionsList = useMemo(() => options?.map((option) => (
    <option key={option.value} value={option.value}>
      {option.content}
    </option>
  )), [options]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T);
  };

  return (
    <div className={classNames(styles.wrapper, className)}>
      {label && <span className={styles.label}>{label}</span>}
      <select
        className={styles.select}
        value={value}
        onChange={handleChange}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  );
};

export default Select;
