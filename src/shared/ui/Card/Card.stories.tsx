import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from '@/shared/config/storybook/decorators';
import Card, { CardTheme } from './Card';

const meta = {
  title: 'Shared/Card',
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Card',
  },
};

export const DefaultDark: Story = {
  args: {
    children: 'Card',
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const Outlined: Story = {
  args: {
    children: 'Card',
    theme: CardTheme.OUTLINED,
  },
};

export const OutlinedtDark: Story = {
  args: {
    children: 'Card',
    theme: CardTheme.OUTLINED,
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};
