import classNames from 'classnames';

import type { FC } from 'react';
import { memo } from 'react';
import { RouteUrls } from '@/shared/config/routeConfig/routeConfig';
import Avatar from '@/shared/ui/Avatar/Avatar';
import Skeleton from '@/shared/ui/Skeleton/Skeleton';
import Text from '@/shared/ui/Text/Text';
import UILink from '@/shared/ui/UILink/UILink';
import { Comment } from '../../model/types/comment';
import styles from './CommentCard.module.scss';

interface CommentCardProps {
  className?: string;
  isLoading?: boolean;
  comment: Comment;
}

const CommentCard: FC<CommentCardProps> = (props) => {
  const { className, comment, isLoading } = props;
  const { username, avatar, id } = comment.user;

  if (isLoading) {
    return (
      <div className={classNames(styles.card, className)}>
        <div className={styles.header}>
          <Skeleton width={30} height={30} border="50%" />
          <Skeleton width={100} height={20} />
        </div>
        <Skeleton className={styles.text} width="100%" height={50} />
      </div>
    );
  }

  return (
    <div className={classNames(styles.card, className)}>
      <UILink theme="clean" to={`${RouteUrls.profile}/${id}`} className={styles.header}>
        {avatar && <Avatar size={30} src={avatar} />}
        <Text title={username} />
      </UILink>
      <Text className={styles.text} description={comment.text} />
    </div>
  );
};

export default memo(CommentCard);
