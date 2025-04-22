import classNames from 'classnames';

import type { FC } from 'react';
import { memo } from 'react';
import Card from 'shared/ui/Card/Card';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import { ArticlesView } from '../../model/types/article';
import styles from './ArticlesListItem.module.scss';

interface ArticlesListItemSkeletonProps {
  className?: string;
  view: ArticlesView;
}

const ArticlesListItemSkeleton: FC<ArticlesListItemSkeletonProps> = (props) => {
  const { className, view } = props;

  if (view === ArticlesView.BIG) {
    return (
      <div className={classNames(styles.item, className, styles[view])}>
        <Card className={styles.card}>
          <div className={styles.header}>
            <div className={styles.userInfo}>
              <Skeleton width={30} height={30} border="50%" />
              <Skeleton width={150} height={16} className={styles.username} />
            </div>
            <Skeleton width={150} height={16} className={styles.date} />
          </div>
          <Skeleton width={250} height={24} className={styles.title} />
          <Skeleton height={200} className={styles.image} />
          <div className={styles.articleFooter}>
            <Skeleton height={36} width={200} />
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className={classNames(styles.item, className, styles[view])}>
      <Card className={styles.card}>
        <div className={styles.imageWrapper}>
          <Skeleton width={200} height={200} />
        </div>
        <div className={styles.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <div className={styles.infoWrapper}>
          <Skeleton width={150} height={16} />
        </div>
      </Card>
    </div>
  );
};

export default memo(ArticlesListItemSkeleton);
