import type { FC, ImgHTMLAttributes, ReactElement } from 'react';
import { memo, useLayoutEffect, useState } from 'react';

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  src?: string;
  alt?: string;
  fallback?: ReactElement;
}

const AppImage: FC<AppImageProps> = (props) => {
  const {
    className,
    src,
    alt = 'image',
    fallback,
    ...restProps
  } = props;

  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    const image = new Image();
    image.src = src ?? '';
    image.onload = () => setIsLoading(false);
  }, [src]);

  if (isLoading && fallback) return fallback;

  return (
    <img className={className} src={src} alt={alt} {...restProps} />
  );
};

export default memo(AppImage);
