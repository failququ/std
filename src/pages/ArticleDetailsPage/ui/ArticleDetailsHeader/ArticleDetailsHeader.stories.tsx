import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { ArticleType } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/decorators';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import ArticleDetailsHeader from './ArticleDetailsHeader';

const meta = {
  title: 'Entities/ArticleDetailsHeader',
  component: ArticleDetailsHeader,

} satisfies Meta<typeof ArticleDetailsHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

const article = {
  _id: '1',
  title: 'title',
  subtitle: 'subtitle',
  img: 'img',
  views: 123,
  createdAt: 'createdAt',
  type: [ArticleType.IT],
  user: {
    id: '1',
    username: 'username',
  },
  blocks: [],
};

const user = {
  id: '1',
  username: 'username',
};

export const Default: Story = {};
Default.decorators = [StoreDecorator({})];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({})];

export const WithEditButton: Story = {};
WithEditButton.decorators = [StoreDecorator({
  articleDetails: {
    data: article,
  },
  user: {
    userData: user,
  },
})];

export const WithEditButtonDark: Story = {};
WithEditButtonDark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({
  articleDetails: {
    data: article,
  },
  user: {
    userData: user,
  },
})];
