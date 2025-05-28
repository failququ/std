import React, { FC, useMemo, useState } from 'react';
import { LS_THEME_KEY } from '@/shared/constants/localStorage';
import { Theme } from '@/shared/constants/theme';
import { ThemeContext } from '../../../../shared/lib/context/ThemeContext';

export interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme?: Theme
}

const defaultTheme = localStorage.getItem(LS_THEME_KEY) as Theme || Theme.Light;

const ThemeProvider: FC<ThemeProviderProps> = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultProps = useMemo(() => ({
    theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
