import classNames from 'classnames';

import type { FC } from 'react';
import React, { memo } from 'react';
import styles from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: FC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}

const Icon: FC<IconProps> = (props) => {
  const { className, Svg, inverted } = props;

  return (
    <Svg className={classNames(styles.icon, className, {
      [styles.inverted]: inverted,
    })}
    />
  );
};

export default memo(Icon);
