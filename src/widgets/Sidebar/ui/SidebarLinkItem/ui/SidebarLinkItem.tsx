import classNames from 'classnames';

import type { FC, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { getIsAuth } from '@/entities/User';
import UILink from '@/shared/ui/UILink/UILink';
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

  const isAuth = useSelector(getIsAuth);

  if (authOnly && !isAuth) return null;

  return (
    <div className={classNames(styles.item, className)}>
      {isCollapsed ? <UILink to={to} theme="secondary">{icon}</UILink> : (
        <>
          {icon}
          <UILink to={to} theme="secondary">{text}</UILink>
        </>
      )}
    </div>
  );
};

export default SidebarLinkItem;
