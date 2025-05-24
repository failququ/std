import classNames from 'classnames';

import type { FC } from 'react';
import { memo, useEffect, useState } from 'react';
import StarIcon from '@/shared/assets/icons/star-icon.svg';
import Icon from '../Icon/Icon';
import styles from './Rating.module.scss';

interface RatingProps {
  className?: string;
  onSelect?: (starsCount: number) => void;
  size?: number;
  selectedStarsCount?: number;
}

const stars = [1, 2, 3, 4, 5];

const Rating: FC<RatingProps> = (props) => {
  const {
    className, size = 30, selectedStarsCount = 0, onSelect,
  } = props;

  const [isHovered, setIsHovered] = useState(false);
  const [currentStarsCount, setCurrentStarsCount] = useState(selectedStarsCount);
  const [isSelected, setIsSelected] = useState(Boolean(selectedStarsCount));

  useEffect(() => {
    if (!Number.isNaN(selectedStarsCount)) {
      setCurrentStarsCount(selectedStarsCount);
    }

    setIsSelected(Boolean(selectedStarsCount));
  }, [selectedStarsCount]);

  const onHover = (starsCount: number) => () => {
    if (!isSelected) {
      setCurrentStarsCount(starsCount);
      setIsHovered(true);
    }
  };

  const onLeave = () => {
    if (!isSelected) {
      setCurrentStarsCount(0);
      setIsHovered(false);
    }
  };

  const onClick = (starsCount: number) => () => {
    if (!isSelected) {
      onSelect?.(starsCount);
      setCurrentStarsCount(starsCount);
      setIsSelected(true);
    }
  };

  return (
    <div className={classNames(styles.Rating, className)}>
      {stars.map((star) => (
        <Icon
          Svg={StarIcon}
          className={classNames(styles.star, {
            [styles.filled]: currentStarsCount >= star,
            [styles.selected]: isSelected,
          })}
          key={star}
          height={size}
          width={size}
          onMouseEnter={onHover(star)}
          onMouseLeave={onLeave}
          onClick={onClick(star)}
        />
      ))}
    </div>
  );
};

export default memo(Rating);
