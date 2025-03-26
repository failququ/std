/* eslint-disable i18next/no-literal-string */
import classNames from 'classnames';
import { LoginModal } from 'features/AuthByEmail';
import { FC, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { t } = useTranslation();

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  return (
    <div className={classNames(styles.navbar, className)}>
      <div>{t('common.navbar.logo')}</div>
      <Button onClick={handleOpenModal}>
        {t('common.navbar.login')}
      </Button>
      <LoginModal isVisible={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
};

export default Navbar;
