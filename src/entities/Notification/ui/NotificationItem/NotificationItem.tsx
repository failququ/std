import classNames from 'classnames';

import type { FC } from 'react';
import { memo } from 'react';
import Card, { CardTheme } from 'shared/ui/Card/Card';
import Text from 'shared/ui/Text/Text';
import UILink from 'shared/ui/UILink/UILink';
import { Notification } from '../../model/types/notificationSchema';
import styles from './NotificationItem.module.scss';

interface Props {
  className?: string;
  item: Notification
}

const NotificationItem: FC<Props> = (props) => {
  const { className, item } = props;

  const content = (
    <Card
      className={classNames(styles.item, className)}
      theme={CardTheme.OUTLINED}
    >
      <Text title={item.title} description={item.description} />
    </Card>
  );

  if (item.href) {
    return (
      <UILink
        className={styles.link}
        to={item.href}
        target="_blank"
        theme="clean"
      >
        {content}
      </UILink>
    );
  }

  return content;
};

export default memo(NotificationItem);
