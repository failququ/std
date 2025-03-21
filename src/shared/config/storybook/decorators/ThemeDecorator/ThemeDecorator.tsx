import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export const ThemeDecorator = (theme: Theme) => (Story: () => any) => (
  <div className={`app ${theme}`}>
    <Story />
  </div>
);
