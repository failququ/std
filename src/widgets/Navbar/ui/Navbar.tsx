import classNames from 'classnames';
import {
  FC, memo, useCallback, useMemo, useState,
} from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  getIsAuth,
} from '@/entities/User';
import { LoginModal } from '@/features/AuthByEmail';
import { AvatarDropdown } from '@/features/avatarDropdown';
import { NotificationsButton } from '@/features/notificationsButton';
import { Button } from '@/shared/ui/Button';
import { HStack } from '@/shared/ui/Stack';
import { UILink } from '@/shared/ui/UILink';
import { getNavbarLinksConfig } from '../config/linksConfig';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { t, i18n } = useTranslation();

  const isAuth = useSelector(getIsAuth);

  const links = useMemo(() => getNavbarLinksConfig(i18n.language), [i18n.language]);

  const isLoginModalVisible = isModalVisible && !isAuth;

  const handleCloseModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  const handleOpenModal = useCallback(() => {
    setIsModalVisible(true);
  }, []);

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
        <HStack gap="16">
          <NotificationsButton direction="bottomLeft" />
          <AvatarDropdown direction="bottomLeft" />
        </HStack>
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
