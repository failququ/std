import classNames from 'classnames';

import type { FC, ReactNode } from 'react';
import { memo } from 'react';
import { useModal } from '@/shared/lib/hooks/useModal';
import { useTheme } from '../../lib/hooks/useTheme';
import { Overlay } from '../Overlay';
import { Portal } from '../Portal';
import styles from './Drawer.module.scss';

interface DrawerProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  isLazy?: boolean;
  onClose?: () => void;
}

const Drawer: FC<DrawerProps> = (props) => {
  const {
    className, children, isOpen, isLazy, onClose,
  } = props;

  const { theme } = useTheme();

  const { handleClose, isMounted } = useModal({ onClose, isVisible: isOpen });

  if (isLazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div className={classNames(styles.drawer, className, theme, {
        [styles.open]: isOpen,
      })}
      >
        <Overlay onClick={handleClose} />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </Portal>
  );
};

export default memo(Drawer);
