import type { Meta, StoryObj } from '@storybook/react';
import { StoreDecorator, ThemeDecorator } from '@/shared/config/storybook/decorators';
import { Theme } from '@/shared/constants/theme';
import ArticlesPageFilters from './ArticlesPageFilters';

const meta = {
  title: 'Entities/ArticlesPageFilters',
  component: ArticlesPageFilters,
} satisfies Meta<typeof ArticlesPageFilters>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
};

Default.decorators = [StoreDecorator({})];

export const DefaultDark: Story = {
  decorators: [ThemeDecorator(Theme.Dark), StoreDecorator({})],
};
