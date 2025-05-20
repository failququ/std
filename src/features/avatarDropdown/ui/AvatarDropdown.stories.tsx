import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { UserRole } from 'entities/User';
import AvatarSrc from 'shared/assets/tests/storybook.jpg';
import { StoreDecorator } from 'shared/config/storybook/decorators';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import AvatarDropdown from './AvatarDropdown';

const meta = {
  title: 'features/AvatarDropdown',
  component: AvatarDropdown,
  decorators: [StoreDecorator({
    user: {
      userData: {
        id: '1',
        avatar: AvatarSrc,
      },
    },
  })],
} satisfies Meta<typeof AvatarDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const DefaultDark: Story = {

};
DefaultDark.decorators = [ThemeDecorator(Theme.Dark)];

export const AdminUser: Story = {
  decorators: [StoreDecorator({
    user: {
      userData: {
        id: '1',
        avatar: AvatarSrc,
        roles: [UserRole.ADMIN],
      },
    },
  })],
};

export const AdminUserDark: Story = {
  decorators: [ThemeDecorator(Theme.Dark), StoreDecorator({
    user: {
      userData: {
        id: '1',
        avatar: AvatarSrc,
        roles: [UserRole.ADMIN],
      },
    },
  })],
};
