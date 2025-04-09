import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import Avatar from './Avatar';
import AvatarImg from './storybook.jpg';

const meta = {
  title: 'Shared/Avatar',
  component: Avatar,

} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 150,
    src: AvatarImg,
  },
};

export const DarkDefault: Story = {
  args: {
    size: 150,
    src: AvatarImg,
  },
};
DarkDefault.decorators = [ThemeDecorator(Theme.Dark)];

export const Small: Story = {
  args: {
    size: 50,
    src: AvatarImg,
  },
};

export const DarkSmall: Story = {
  args: {
    size: 50,
    src: AvatarImg,
  },
};
DarkSmall.decorators = [ThemeDecorator(Theme.Dark)];
