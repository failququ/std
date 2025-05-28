import classNames from 'classnames';

import type { FC, ReactNode } from 'react';
import { useModal } from '@/shared/lib/hooks/useModal';
import styles from './Modal.module.scss';

import { useTheme } from '../../lib/hooks/useTheme';
import Button from '../Button/Button';
import Overlay from '../Overlay/Overlay';
import Portal from '../Portal/Portal';
import Text from '../Text/Text';

interface ModalProps {
  className?: string;
  children: ReactNode;
  title: string;
  isVisible?: boolean;
  isLazy?: boolean;
  onClose?: () => void;
}

const Modal: FC<ModalProps> = (props) => {
  const {
    className, children, title, isVisible, onClose, isLazy,
  } = props;

  const { theme } = useTheme();

  const { isMounted, handleClose } = useModal({ onClose, isVisible });

  if (isLazy && !isMounted) {
    return null;
  }

  return (
    <Portal>
      <div
        className={classNames(
          styles.modal,
          className,
          theme,
          { [styles.visible]: isVisible },
        )}
        data-testid="modal"
      >
        <Overlay onClick={handleClose} />
        <div className={styles.content}>
          <div className={styles.heading}>
            <Text title={title} className={styles.title} />
            {/* eslint-disable-next-line */}
              <Button theme="clean" onClick={handleClose}>X</Button>
          </div>
          <div className={styles.children}>{children}</div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
