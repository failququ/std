import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import Popover from './Popover';

const meta = {
  title: 'Shared/Popover',
  component: Popover,

} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Popover',
    trigger: 'Trigger',
  },
};

export const DarkDefault: Story = {
  args: {
    children: 'Popover',
    trigger: 'Trigger',
  },
};
DarkDefault.decorators = [ThemeDecorator(Theme.Dark)];
