import type { FC } from 'react';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getUserData, isUserAdmin, userActions } from '@/entities/User';
import { getRouteAdminPanel, getRouteProfile } from '@/shared/config/routeConfig/routeConfig';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import Avatar from '@/shared/ui/Avatar/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import { DropdownDirection } from '@/shared/ui/types/ui';

interface Props {
  className?: string;
  direction?: DropdownDirection;
}

const AvatarDropdown: FC<Props> = (props) => {
  const { className, direction = 'bottomRight' } = props;

  const { t } = useTranslation();

  const dispatch = useAppDispatch();

  const userData = useSelector(getUserData);
  const isAdmin = useSelector(isUserAdmin);

  const handleLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

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
