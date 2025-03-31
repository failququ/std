import { useContext } from 'react';
import { LS_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    const newTheme = theme === Theme.Light ? Theme.Dark : Theme.Light;
    setTheme?.(newTheme);
    localStorage.setItem(LS_THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.Light,
    toggleTheme,
  };
}
