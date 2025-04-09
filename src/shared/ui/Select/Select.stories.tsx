import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import Select from './Select';

const meta = {
  title: 'Shared/Select',
  component: Select,

} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Select label',
    options: [
      { value: '1', content: 'option 1' },
      { value: '2', content: 'option 2' },
    ],
  },
};

export const DarkDefault: Story = {
  args: {
    label: 'Select label',
    options: [
      { value: '1', content: 'option 1' },
      { value: '2', content: 'option 2' },
    ],
  },
};
DarkDefault.decorators = [ThemeDecorator(Theme.Dark)];
