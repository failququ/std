/* eslint-disable i18next/no-literal-string */
import classNames from 'classnames';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import Modal from 'shared/ui/Modal/Modal';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { t } = useTranslation();

  const handleToggleModal = useCallback(() => {
    setIsModalVisible((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles.navbar, className)}>
      <div>{t('common.navbar.logo')}</div>
      <Button onClick={handleToggleModal}>
        {t('common.navbar.login')}
      </Button>
      <Modal
        title={t('modals.auth.title')}
        isVisible={isModalVisible}
        onClose={handleToggleModal}
      >
        AUTH
      </Modal>
    </div>
  );
};

export default Navbar;
