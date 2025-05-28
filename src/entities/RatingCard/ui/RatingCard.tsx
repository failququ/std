import classNames from 'classnames';

import type { FC } from 'react';
import { memo } from 'react';
import { Rating } from '@/shared/ui/Rating';
import { VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';
import styles from './RatingCard.module.scss';

interface RatingCardProps {
  className?: string;
  title?: string;
  rate?: number;
  onRateArticle?: (starsCount: number) => void;
}

const RatingCard: FC<RatingCardProps> = (props) => {
  const {
    className, title, rate = 0, onRateArticle,
  } = props;

  return (
    <VStack className={classNames(styles.card, className)} align="center" gap="8">
      <Text title={title} />
      <Rating onSelect={onRateArticle} selectedStarsCount={rate} />
    </VStack>
  );
};

export default memo(RatingCard);
