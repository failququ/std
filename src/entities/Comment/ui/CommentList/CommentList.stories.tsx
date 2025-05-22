import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import CommentList from './CommentList';

const meta = {
  title: 'Entities/CommentList',
  component: CommentList,

} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

const comments = [
  {
    id: '1',
    text: 'text',
    user: {
      id: '1',
      email: 'email',
      username: 'admin',
      avatar,
    },
  },
  {
    id: '2',
    text: 'text 2',
    user: {
      id: '1',
      email: 'email',
      username: 'admin',
      avatar,
    },
  },
];

export const Default: Story = {
  args: {
    comments,
  },
};

export const Dark: Story = {
  args: {
    comments,
  },
};
Dark.decorators = [ThemeDecorator(Theme.Dark)];

export const WithLoading: Story = {
  args: {
    comments,
    isLoading: true,
  },
};

export const WithLoadingDark: Story = {
  args: {
    comments,
    isLoading: true,
  },
};
WithLoadingDark.decorators = [ThemeDecorator(Theme.Dark)];

export const WithoutData: Story = {
  args: {
    comments: undefined,
  },
};

export const WithoutDataDark: Story = {
  args: {
    comments: undefined,
  },
};
WithoutDataDark.decorators = [ThemeDecorator(Theme.Dark)];
