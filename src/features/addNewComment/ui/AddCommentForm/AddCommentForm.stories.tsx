import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/decorators';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import AddCommentForm from './AddCommentForm';

const meta = {
  title: 'Features/AddCommentForm',
  component: AddCommentForm,
} satisfies Meta<typeof AddCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSendComment: () => {},
  },
};
Default.decorators = [StoreDecorator({
  addNewComment: {
    text: 'text',
  },
})];

export const DefaultDark: Story = {
  args: {
    onSendComment: () => {},
  },
};
DefaultDark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({
  addNewComment: {
    text: 'text',
  },
})];

export const WithoutCommentText: Story = {
  args: {
    onSendComment: () => {},
  },
};
WithoutCommentText.decorators = [StoreDecorator({
  addNewComment: {
    text: '',
  },
})];

export const WithoutCommentTextDark: Story = {
  args: {
    onSendComment: () => {},
  },
};
WithoutCommentTextDark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({
  addNewComment: {
    text: '',
  },
})];
