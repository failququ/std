import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import Skeleton from './Skeleton';

const meta = {
  title: 'Shared/Skeleton',
  component: Skeleton,

} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    height: 100,
    width: '100%',
  },
};

export const Dark: Story = {
  args: {
    height: 100,
    width: '100%',
  },
};
Dark.decorators = [ThemeDecorator(Theme.Dark)];

export const Circle: Story = {
  args: {
    height: 100,
    width: 100,
    border: '50%',
  },
};

export const CircleDark: Story = {
  args: {
    height: 100,
    width: 100,
    border: '50%',
  },
};
CircleDark.decorators = [ThemeDecorator(Theme.Dark)];
