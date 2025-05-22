import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import {
  RouterDecorator,
  StyleDecorator, ThemeDecorator,
  TranslationDecorator,
} from '@/shared/config/storybook/decorators';

initialize();

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  loaders: [mswLoader],
  decorators: [
    StyleDecorator,
    ThemeDecorator(Theme.Light),
    RouterDecorator,
    TranslationDecorator,
  ],
};

export default preview;
