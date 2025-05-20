import classNames from 'classnames';

import { useTheme } from 'app/providers/ThemeProvider';
import type { FC, ReactNode } from 'react';
import { memo } from 'react';
import Overlay from '../Overlay/Overlay';
import Portal from '../Portal/Portal';
import styles from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const Drawer: FC<DrawerProps> = (props) => {
  const {
    className, children, isOpen, onClose,
  } = props;

  const { theme } = useTheme();
  return (
    <Portal>
      <div className={classNames(styles.drawer, className, theme, {
        [styles.open]: isOpen,
      })}
      >
        <Overlay onClick={onClose} />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default memo(Drawer);
