import { NotificationsList } from 'entities/Notification';
import type { FC } from 'react';
import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import NotificationsIcon from 'shared/assets/icons/notifications-icon.svg';
import Drawer from 'shared/ui/Drawer/Drawer';
import Icon from 'shared/ui/Icon/Icon';
import { Popover } from 'shared/ui/Popups';
import { DropdownDirection } from 'shared/ui/types/ui';
import styles from './NotificationsButton.module.scss';

interface Props {
  className?: string;
  direction?: DropdownDirection
}

const NotificationsButton: FC<Props> = (props) => {
  const { className, direction = 'bottomRight' } = props;

  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDrawer = useCallback(() => setIsOpen(true), []);
  const handleCloseDrawer = useCallback(() => setIsOpen(false), []);

  const trigger = (
    <div onClick={handleOpenDrawer}>
      <Icon Svg={NotificationsIcon} inverted />
    </div>
  );
  return (
    <div>
      <BrowserView>
        <Popover
          className={className}
          direction={direction}
          trigger={trigger}
        >
          <NotificationsList className={styles.notifications} />
        </Popover>
      </BrowserView>
      <MobileView>
        {trigger}
        <Drawer isOpen={isOpen} onClose={handleCloseDrawer}>
          <NotificationsList className={styles.notifications} />
        </Drawer>
      </MobileView>
    </div>
  );
};

export default memo(NotificationsButton);
