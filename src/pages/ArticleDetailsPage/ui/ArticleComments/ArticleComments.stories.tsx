import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/decorators';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import ArticleComments from './ArticleComments';

const meta = {
  title: 'Features/ArticleComments',
  component: ArticleComments,

} satisfies Meta<typeof ArticleComments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    id: '1',
  },
};
Default.decorators = [StoreDecorator({})];

export const Dark: Story = {
  args: {
    id: '1',
  },
};
Dark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({})];
