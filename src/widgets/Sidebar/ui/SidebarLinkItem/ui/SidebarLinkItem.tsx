import classNames from 'classnames';

import { getIsAuthData } from 'entities/User';
import type { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import UILink from 'shared/ui/UILink/UILink';
import styles from './SidebarLinkItem.module.scss';

interface SidebarLinkItemProps {
  className?: string;
  to: string;
  icon: ReactNode;
  text: string;
  isCollapsed?: boolean;
  authOnly?: boolean;
}

const SidebarLinkItem: FC<SidebarLinkItemProps> = (props) => {
  const {
    className, icon, to, text, isCollapsed, authOnly,
  } = props;

  const isAuth = useSelector(getIsAuthData);

  if (authOnly && !isAuth) return null;

  return (
    <div className={classNames(styles.item, className)}>
      {isCollapsed ? <UILink to={to}>{icon}</UILink> : (
        <>
          {icon}
          <UILink to={to}>{text}</UILink>
        </>
      )}
    </div>
  );
};

export default SidebarLinkItem;
