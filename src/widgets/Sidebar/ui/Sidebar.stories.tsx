import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/decorators';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import Sidebar from './Sidebar';

const meta = {
  title: 'Widgets/Sidebar',
  component: Sidebar,

} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.decorators = [StoreDecorator({
  user: {
    isAuth: true,
  },
})];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({
  user: {
    isAuth: true,
  },
})];

export const NoAuth: Story = {};
NoAuth.decorators = [StoreDecorator({})];

export const NoAuthDark: Story = {};
NoAuthDark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({})];
