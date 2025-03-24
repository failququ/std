import classNames from 'classnames';

import type { FC, ReactNode } from 'react';
import React from 'react';
import styles from './Modal.module.scss';

import Button from '../Button/Button';
import Portal from '../Portal/Portal';

interface ModalProps {
  className?: string;
  children: ReactNode;
  title: string;
  isVisible?: boolean;
  onClose?: () => void;
}

const Modal: FC<ModalProps> = (props) => {
  const {
    className, children, title, isVisible, onClose,
  } = props;

  const handleCloseModal = () => {
    onClose?.();
  };

  const handleClickContent = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  return (
    <Portal>
      <div className={classNames(styles.modal, className, { [styles.visible]: isVisible })}>
        <div className={styles.overlay} onClick={handleCloseModal}>
          <div className={styles.content} onClick={handleClickContent}>
            <div className={styles.heading}>
              <div className={styles.title}>{title}</div>
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
