import React, { FC, useMemo, useState } from 'react';
import { LS_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

export interface ThemeProviderProps {
  children: React.ReactNode;
}

const defaultTheme = localStorage.getItem(LS_THEME_KEY) as Theme || Theme.Light;

const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
  const [ theme, setTheme ] = useState<Theme>(defaultTheme);

  const defaultProps = useMemo(() => {
    return {
      theme,
      setTheme
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;