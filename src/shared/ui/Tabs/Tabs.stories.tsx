import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import Tabs from './Tabs';

const meta = {
  title: 'Shared/Tabs',
  component: Tabs,

} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tabs: [
      { value: 'tab 1', content: 'Tab 1' },
      { value: 'tab 2', content: 'Tab 2' },
      { value: 'tab 3', content: 'Tab 3' },
    ],
    value: 'tab 2',
    onTabClick: () => {},
  },
};

export const Dark: Story = {
  args: {
    tabs: [
      { value: 'tab 1', content: 'Tab 1' },
      { value: 'tab 2', content: 'Tab 2' },
      { value: 'tab 3', content: 'Tab 3' },
    ],
    value: 'tab 2',
    onTabClick: () => {},
  },
};
Dark.decorators = [ThemeDecorator(Theme.Dark)];
