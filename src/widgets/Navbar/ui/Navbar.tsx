import classNames from 'classnames';
import { getUserData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByEmail';
import {
  FC, memo, useCallback, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import Button from 'shared/ui/Button/Button';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { isAuth } = useSelector(getUserData);

  const isLoginModalVisible = isModalVisible && !isAuth;

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <div className={classNames(styles.navbar, className)}>
      <div>{t('common.navbar.logo')}</div>
      {isAuth ? (
        <Button onClick={handleLogout}>{t('common.navbar.logout')}</Button>
      ) : (
        <Button onClick={handleOpenModal}>
          {t('common.navbar.login')}
        </Button>
      )}
      <LoginModal
        isVisible={isLoginModalVisible}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default memo(Navbar);
