import classNames from 'classnames';

import { useTheme } from 'app/providers/ThemeProvider';
import type { FC, MouseEvent, ReactNode } from 'react';
import { useEffect, useState } from 'react';
import styles from './Modal.module.scss';

import Button from '../Button/Button';
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setIsMounted(true);
    }
  }, [isVisible]);
  const handleCloseModal = () => {
    onClose?.();
  };

  const handleClickContent = (e: MouseEvent) => {
    e.stopPropagation();
  };

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
        <div className={styles.overlay} onClick={handleCloseModal}>
          <div className={styles.content} onClick={handleClickContent}>
            <div className={styles.heading}>
              <Text title={title} className={styles.title} />
              {/* eslint-disable-next-line */}
              <Button theme="clean" onClick={handleCloseModal}>X</Button>
            </div>
            <div className={styles.children}>{children}</div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
