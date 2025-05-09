import {
  Listbox as HListbox, ListboxButton, ListboxOption, ListboxOptions,
} from '@headlessui/react';

import type { FC, ReactNode } from 'react';
import { Fragment, memo } from 'react';

import classNames from 'classnames';
import Button from '../Button/Button';
import { VStack } from '../Stack';
import Text from '../Text/Text';
import styles from './ListBox.module.scss';

interface ListBoxItem {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

interface ListBoxProps {
  className?: string;
  items?: ListBoxItem[];
  label?: string;
  value?: string;
  defaultValue?: string;
  readonly?: boolean;
  onChange: <T extends string>(value: T) => void;
}

const ListBox: FC<ListBoxProps> = (props) => {
  const {
    className, items, value, label, defaultValue, readonly, onChange,
  } = props;

  return (
    <VStack gap="8">
      {label && <Text description={label} />}
      <HListbox
        disabled={readonly}
        as="div"
        className={classNames(styles.listBox, className)}
        value={value}
        onChange={onChange}
      >
        <ListboxButton as={Fragment}>
          <Button theme="outline" className={styles.button}>
            {value ?? defaultValue}
          </Button>
        </ListboxButton>
        <ListboxOptions className={styles.optionsList} portal={false}>
          {items?.map((item) => (
            <ListboxOption
              as={Fragment}
              key={item.value}
              value={item.value}
              disabled={item.disabled}
            >
              {({ focus, selected }) => (
                <li className={classNames(styles.optionItem, {
                  [styles.active]: focus,
                  [styles.disabled]: item.disabled,
                })}
                >
                  {selected && '> '}
                  {item.content}
                </li>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </HListbox>
    </VStack>
  );
};

export default memo(ListBox);
