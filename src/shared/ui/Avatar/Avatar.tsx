import classNames from 'classnames';
import { CSSProperties, useMemo, type FC } from 'react';
import styles from './Avatar.module.scss';

interface Props {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

const Avatar: FC<Props> = (props) => {
  const {
    className, src, size, alt,
  } = props;

  const sizes = useMemo<CSSProperties>(() => ({
    height: size,
    width: size,
  }), [size]);
  return (
    <img
      className={classNames(styles.avatar, className)}
      src={src}
      style={sizes}
      alt={alt}
    />
  );
};

export default Avatar;
