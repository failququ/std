import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import UILink from './UILink';

const meta = {
  title: 'Shared/UILink',
  component: UILink,

} satisfies Meta<typeof UILink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Link',
    to: '/',
  },
};

export const Dark: Story = {
  args: {
    children: 'Link',
    to: '/',
  },
};
Dark.decorators = [ThemeDecorator(Theme.Dark)];
