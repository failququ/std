import classNames from 'classnames';
import { getIsAuth, getUserData, userActions } from 'entities/User';
import { LoginModal } from 'features/AuthByEmail';
import {
  FC, memo, useCallback, useMemo, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RouteUrls } from 'shared/config/routeConfig/routeConfig';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import Avatar from 'shared/ui/Avatar/Avatar';
import Button from 'shared/ui/Button/Button';
import Dropdown from 'shared/ui/Dropdown/Dropdown';
import UILink from 'shared/ui/UILink/UILink';
import { getNavbarLinksConfig } from '../config/linksConfig';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { t, i18n } = useTranslation();
  const dispatch = useAppDispatch();

  const isAuth = useSelector(getIsAuth);
  const userData = useSelector(getUserData);

  const links = useMemo(() => getNavbarLinksConfig(i18n.language), [i18n.language]);

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
    <header className={classNames(styles.navbar, className)}>
      <div>{t('common.navbar.logo')}</div>
      {isAuth && (
        links.map((link) => (
          <UILink
            key={link.to}
            to={link.to}
          >
            {link.text}
          </UILink>
        ))
      )}
      {isAuth ? (
        <Dropdown
          trigger={<Avatar size={40} src={userData?.avatar} />}
          items={[
            {
              content: t('common.navbar.profile'),
              href: `${RouteUrls.profile}/${userData?.id}`,
            },
            {
              content: t('common.navbar.logout'),
              onClick: handleLogout,
            },
          ]}
        />
      ) : (
        <Button onClick={handleOpenModal}>
          {t('common.navbar.login')}
        </Button>
      )}
      <LoginModal
        isVisible={isLoginModalVisible}
        onClose={handleCloseModal}
      />
    </header>
  );
};

export default memo(Navbar);
