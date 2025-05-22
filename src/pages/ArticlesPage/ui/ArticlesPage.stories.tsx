import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { ArticleType } from '@/entities/Article';
import { StoreDecorator } from '@/shared/config/storybook/decorators';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import ArticlesPage from './ArticlesPage';

const meta = {
  title: 'Pages/ArticlesPage',
  component: ArticlesPage,

} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

Default.decorators = [StoreDecorator({
  articlesPage: {
    ids: ['1'],
    entities: {
      1: {
        _id: '1',
        title: 'Javascript news',
        subtitle: 'Что нового в JS за 2022 год?',
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        views: 1022,
        createdAt: '26.02.2022',
        user: {
          id: '1',
          username: 'admin',
        },
        type: [ArticleType.IT],
        blocks: [],
      },
    },
  },
})];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({
  articlesPage: {
    ids: ['1'],
    entities: {
      1: {
        _id: '1',
        title: 'Javascript news',
        subtitle: 'Что нового в JS за 2022 год?',
        img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
        views: 1022,
        createdAt: '26.02.2022',
        user: {
          id: '1',
          username: 'admin',
        },
        type: [ArticleType.IT],
        blocks: [],
      },
    },
  },
})];
