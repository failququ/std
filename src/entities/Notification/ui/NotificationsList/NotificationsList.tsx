import type { FC } from 'react';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton';
import { VStack } from '@/shared/ui/Stack';
import { useGetNotifications } from '../../api/notificationApi';
import NotificationItem from '../NotificationItem/NotificationItem';

interface NotificationsListProps {
  className?: string;
}

const NotificationsList: FC<NotificationsListProps> = (props) => {
  const { className } = props;
  const userData = useSelector(getUserData);
  const { data, isLoading } = useGetNotifications(userData?.id!, {
    pollingInterval: 10000,
  });

  if (isLoading) {
    return (
      <VStack className={className} gap="16">
        <Skeleton height={80} width="100%" border="8px" />
        <Skeleton height={80} width="100%" border="8px" />
        <Skeleton height={80} width="100%" border="8px" />
      </VStack>
    );
  }

  return (
    <VStack className={className} gap="16">
      {data?.map((notification) => (
        <NotificationItem key={notification._id} item={notification} />
      ))}
    </VStack>
  );
};

export default memo(NotificationsList);
