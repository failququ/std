import type { Preview } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import {
  RouterDecorator,
  StyleDecorator, ThemeDecorator,
  TranslationDecorator,
} from 'shared/config/storybook/decorators';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.Light),
    RouterDecorator,
    TranslationDecorator,
  ],
};

export default preview;
