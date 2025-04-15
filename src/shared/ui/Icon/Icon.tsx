import classNames from 'classnames';

import type { FC } from 'react';
import React, { memo } from 'react';
import styles from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: FC<React.SVGProps<SVGSVGElement>>;
}

const Icon: FC<IconProps> = (props) => {
  const { className, Svg } = props;

  return (
    <Svg className={classNames(styles.icon, className)} />
  );
};

export default memo(Icon);
