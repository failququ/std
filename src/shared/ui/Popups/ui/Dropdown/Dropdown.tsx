import classNames from 'classnames';

import {
  Menu, MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import type { FC, ReactNode } from 'react';
import { Fragment, memo } from 'react';
import { DropdownDirection } from '../../../types/ui';
import UILink from '../../../UILink/UILink';
import { mapDirectionClass } from '../../const/const';
import popupStyles from '../../styles/popups.module.scss';
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

const Dropdown: FC<DropdownProps> = (props) => {
  const {
    className, items, trigger, direction = 'bottomLeft',
  } = props;

  const directionClass = mapDirectionClass[direction];

  return (
    <Menu as="div" className={classNames(popupStyles.wrapper, className)}>
      <MenuButton className={popupStyles.trigger}>
        {trigger}
      </MenuButton>
      <MenuItems className={classNames(styles.items, directionClass)}>
        {items.map((item, idx) => {
          const content = ({ focus }: { focus: boolean }) => (
            <button
              className={classNames(popupStyles.item, {
                [popupStyles.active]: focus,
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
