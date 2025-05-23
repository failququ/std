import classNames from 'classnames';

import type { FC } from 'react';
import { memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styles from './UILink.module.scss';

export type UILinkTheme = 'primary' | 'secondary' | 'clean';
interface UILinkProps extends LinkProps {
  className?: string;
  theme?: UILinkTheme;
}

const UILink: FC<UILinkProps> = (props) => {
  const {
    className, children, to, theme = 'primary', ...restProps
  } = props;
  return (
    <Link
      to={to}
      className={classNames(styles.link, className, styles[theme])}
      data-testid="link"
      {...restProps}
    >
      {children}
    </Link>
  );
};

export default memo(UILink);
