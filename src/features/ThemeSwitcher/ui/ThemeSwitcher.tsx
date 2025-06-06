import type { FC } from 'react';
import { memo } from 'react';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg';
import LightIcon from '@/shared/assets/icons/theme-light.svg';

import { useTheme } from '@/shared/lib/hooks/useTheme';
import { Button } from '@/shared/ui/Button';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = (props) => {
  const { className } = props;
  const { toggleTheme, theme } = useTheme();

  return (
    <div className={className}>
      <Button theme="clean" onClick={toggleTheme}>
        {theme === 'app_light_theme' ? <DarkIcon /> : <LightIcon />}
      </Button>
    </div>
  );
};

export default memo(ThemeSwitcher);
