import classNames from 'classnames';

import { ChangeEvent, useMemo, type FC } from 'react';
import styles from './Select.module.scss';

interface SelectOption {
  value: string;
  content: string;
  readonly?: boolean;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  readonly?: boolean;
  onChange?: (value: string) => void;
}

const Select: FC<SelectProps> = (props) => {
  const {
    className, label, options, value, readonly, onChange,
  } = props;

  const optionsList = useMemo(() => options?.map((option) => (
    <option key={option.value} value={option.value}>
      {option.content}
    </option>
  )), [options]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
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
