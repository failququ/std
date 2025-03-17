import classNames from 'classnames';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';

import { useTheme } from 'app/providers/ThemeProvider';
import type { FC } from 'react';
import Button from 'shared/ui/Button/Button';
import styles from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={classNames(styles.switcher, className)}>
      <Button theme="clean" onClick={toggleTheme}>
        {theme === 'light' ? <DarkIcon /> : <LightIcon />}
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
