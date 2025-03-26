import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import Input from './Input';

const meta = {
  title: 'Shared/Input',
  component: Input,
  args: {
    style: { width: '230px' },

  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Modal label',
  },
};

export const Dark: Story = {
  args: {
    label: 'Modal label',
  },
};
Dark.decorators = [ThemeDecorator(Theme.Dark)];
