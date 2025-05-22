import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import AvatarSrc from '@/shared/assets/tests/storybook.jpg';
import { StoreDecorator } from '@/shared/config/storybook/decorators';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import Navbar from './Navbar';

const meta = {
  title: 'Widgets/Navbar',
  component: Navbar,
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.decorators = [StoreDecorator({})];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({})];

export const WithAuth: Story = {};
WithAuth.decorators = [StoreDecorator({
  user: {
    isAuth: true,
    userData: {
      avatar: AvatarSrc,
    },
  },
})];

export const DarkWithAuth: Story = {};
DarkWithAuth.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({
  user: {
    isAuth: true,
    userData: {
      avatar: AvatarSrc,
    },
  },
})];
