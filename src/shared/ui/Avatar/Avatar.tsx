import classNames from 'classnames';
import { CSSProperties, useMemo, type FC } from 'react';
import { AppImage } from '../AppImage';
import { Skeleton } from '../Skeleton';
import styles from './Avatar.module.scss';

interface Props {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

const Avatar: FC<Props> = (props) => {
  const {
    className, src, size = 100, alt,
  } = props;

  const sizes = useMemo<CSSProperties>(() => ({
    height: size,
    width: size,
  }), [size]);

  const fallback = <Skeleton width={size} height={size} border="50%" />;

  return (
    <AppImage
      className={classNames(styles.avatar, className)}
      src={src}
      style={sizes}
      alt={alt}
      fallback={fallback}
    />
  );
};

export default Avatar;
