import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import Button from './Button';

const meta = {
  title: 'Shared/Button',
  component: Button,

} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryLight: Story = {
  args: {
    children: 'Button',
  },
};

export const PrimaryDark: Story = {
  args: {
    children: 'Button',
  },
};
PrimaryDark.decorators = [ThemeDecorator(Theme.Dark)];

export const CleanLight: Story = {
  args: {
    children: 'Button',
    theme: 'clean',
  },
};

export const CleanDark: Story = {
  args: {
    children: 'Button',
    theme: 'clean',
  },
};
CleanDark.decorators = [ThemeDecorator(Theme.Dark)];

export const OutlineLight: Story = {
  args: {
    children: 'Button',
    theme: 'outline',
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Button',
    theme: 'outline',
  },
};
OutlineDark.decorators = [ThemeDecorator(Theme.Dark)];

export const OutlineRedLight: Story = {
  args: {
    children: 'Button',
    theme: 'outline_red',
  },
};

export const OutlineRedDark: Story = {
  args: {
    children: 'Button',
    theme: 'outline_red',
  },
};
OutlineRedDark.decorators = [ThemeDecorator(Theme.Dark)];

export const DisabledLight: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};

export const DisabledDark: Story = {
  args: {
    children: 'Button',
    disabled: true,
  },
};
DisabledDark.decorators = [ThemeDecorator(Theme.Dark)];
