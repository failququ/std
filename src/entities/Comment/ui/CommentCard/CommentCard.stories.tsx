import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import avatar from 'shared/assets/tests/storybook.jpg';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import CommentCard from './CommentCard';

const meta = {
  title: 'Entities/CommentCard',
  component: CommentCard,

} satisfies Meta<typeof CommentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const comment = {
  id: '1',
  text: 'text',
  user: {
    id: '1',
    email: 'email',
    username: 'admin',
    avatar,
  },
};

export const Default: Story = {
  args: {
    comment,
  },
};

export const Dark: Story = {
  args: {
    comment,
  },
};
Dark.decorators = [ThemeDecorator(Theme.Dark)];

export const WithLoading: Story = {
  args: {
    comment,
    isLoading: true,
  },
};

export const WithLoadingDark: Story = {
  args: {
    comment,
    isLoading: true,
  },
};
WithLoadingDark.decorators = [ThemeDecorator(Theme.Dark)];
