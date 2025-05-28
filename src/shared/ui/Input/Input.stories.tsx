import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
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
    label: 'Input label',
  },
};

export const DefaultDark: Story = {
  args: {
    label: 'Input label',
  },
};
DefaultDark.decorators = [ThemeDecorator(Theme.Dark)];

export const CleanReadOnly: Story = {
  args: {
    label: 'Input label',
    variant: 'clean',
    value: 'Input value',
    readonly: true,
  },
};

export const CleanReadOnlyDark: Story = {
  args: {
    label: 'Input label',
    variant: 'clean',
    value: 'Input value',
    readonly: true,
  },
};
CleanReadOnlyDark.decorators = [ThemeDecorator(Theme.Dark)];
