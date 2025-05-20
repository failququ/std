import { Popover as HPopover, PopoverButton, PopoverPanel } from '@headlessui/react';
import type { FC, ReactNode } from 'react';
import { memo } from 'react';

import classNames from 'classnames';
import { DropdownDirection } from '../../../types/ui';
import { mapDirectionClass } from '../../const/const';
import popupStyles from '../../styles/popups.module.scss';
import styles from './Popover.module.scss';

interface PopoverProps {
  className?: string;
  direction?: DropdownDirection;
  trigger: ReactNode;
  children: ReactNode;
}

const Popover: FC<PopoverProps> = (props) => {
  const {
    className, direction = 'bottomRight', trigger, children,
  } = props;

  const directionClass = mapDirectionClass[direction];

  return (
    <HPopover className={classNames(popupStyles.wrapper, className)}>
      <PopoverButton className={popupStyles.trigger}>
        {trigger}
      </PopoverButton>
      <PopoverPanel className={classNames(styles.panel, directionClass)}>
        {children}
      </PopoverPanel>
    </HPopover>
  );
};

export default memo(Popover);
