import { NotificationsList } from 'entities/Notification';
import type { FC } from 'react';
import { memo } from 'react';
import NotificationsIcon from 'shared/assets/icons/notifications-icon.svg';
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
  return (
    <Popover
      className={className}
      direction={direction}
      trigger={(
        <div>
          <Icon Svg={NotificationsIcon} inverted />
        </div>
          )}
    >
      <NotificationsList className={styles.notifications} />
    </Popover>
  );
};

export default memo(NotificationsButton);
