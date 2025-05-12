import classNames from 'classnames';

import {
  Menu, MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import type { FC, ReactNode } from 'react';
import { Fragment, memo } from 'react';
import { DropdownDirection } from '../types/ui';
import UILink from '../UILink/UILink';
import styles from './Dropdown.module.scss';

interface DropdownItem {
  content: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

const mapDirectionClass: Record<DropdownDirection, string> = {
  bottomLeft: styles.bottomLeft,
  bottomRight: styles.bottomRight,
  topLeft: styles.topLeft,
  topRight: styles.topRight,
};

const Dropdown: FC<DropdownProps> = (props) => {
  const {
    className, items, trigger, direction = 'bottomLeft',
  } = props;

  const directionClass = mapDirectionClass[direction];

  return (
    <Menu as="div" className={classNames(styles.dropdown, className)}>
      <MenuButton className={styles.btn}>
        {trigger}
      </MenuButton>
      <MenuItems className={classNames(styles.items, directionClass)}>
        {items.map((item, idx) => {
          const content = ({ focus }: { focus: boolean }) => (
            <button
              className={classNames(styles.item, {
                [styles.active]: focus,
              })}
              onClick={item.onClick}
              disabled={item.disabled}
              type="button"
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <MenuItem
                as={UILink}
                key={idx}
                disabled={item.disabled}
                to={item.href}
                theme="clean"
              >
                {content}
              </MenuItem>
            );
          }
          return (
            <MenuItem
              as={Fragment}
              key={idx}
              disabled={item.disabled}
            >
              {content}
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
};

export default memo(Dropdown);
