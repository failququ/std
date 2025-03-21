import classNames from 'classnames';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

const Navbar: FC<NavbarProps> = (props) => {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.navbar, className)}>
      <div>{t('common.navbar.logo')}</div>
    </div>
  );
};

export default Navbar;
