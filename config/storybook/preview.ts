import type { Preview } from '@storybook/react';
import { initialize, mswLoader } from 'msw-storybook-addon';
import {
  RouterDecorator,
  StyleDecorator, ThemeDecorator,
  TranslationDecorator,
} from '@/shared/config/storybook/decorators';
import { Theme } from '@/shared/constants/theme';

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
