import { useContext } from 'react';
import { LS_THEME_KEY } from '../../constants/localStorage';
import { Theme } from '../../constants/theme';
import { ThemeContext } from '../context/ThemeContext';

interface UseThemeResult {
  toggleTheme: () => void;
  theme: Theme;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    let newTheme: Theme;

    switch (theme) {
      case Theme.Light:
        newTheme = Theme.Dark;
        break;
      case Theme.Dark:
        newTheme = Theme.Orange;
        break;
      case Theme.Orange:
        newTheme = Theme.Light;
        break;
      default:
        newTheme = Theme.Light;
    }

    setTheme?.(newTheme);
    localStorage.setItem(LS_THEME_KEY, newTheme);
  };

  return {
    theme: theme || Theme.Light,
    toggleTheme,
  };
}
