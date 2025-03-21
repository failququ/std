import classNames from 'classnames';

import type { FC, ReactNode } from 'react';
import UILink from 'shared/ui/UILink/UILink';
import styles from './SidebarLinkItem.module.scss';

interface SidebarLinkItemProps {
  className?: string;
  to: string;
  icon: ReactNode;
  text: string;
  isCollapsed?: boolean;
}

const SidebarLinkItem: FC<SidebarLinkItemProps> = (props) => {
  const {
    className, icon, to, text, isCollapsed,
  } = props;

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
