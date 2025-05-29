import type { FC } from 'react';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  isUserAdmin, useUserActions, useUserData,
} from '@/entities/User';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/constants/router';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import { DropdownDirection } from '@/shared/ui/types';

interface AvatarDropdownProps {
  className?: string;
  direction?: DropdownDirection;
}

const AvatarDropdown: FC<AvatarDropdownProps> = (props) => {
  const { className, direction = 'bottomRight' } = props;

  const { t } = useTranslation();

  const userData = useUserData();
  const isAdmin = useSelector(isUserAdmin);

  const { logout } = useUserActions();

  const handleLogout = useCallback(() => {
    logout();
  }, [logout]);

  return (
    <div>
      <Dropdown
        className={className}
        direction={direction}
        trigger={<Avatar size={40} src={userData?.avatar} />}
        items={[
          ...(isAdmin ? [{
            content: t('common.navbar.adminPanel'),
            href: getRouteAdminPanel(),
          }] : []),
          {
            content: t('common.navbar.profile'),
            href: getRouteProfile(userData?.id || ''),
          },
          {
            content: t('common.navbar.logout'),
            onClick: handleLogout,
          },
        ]}
      />
    </div>
  );
};

export default memo(AvatarDropdown);
