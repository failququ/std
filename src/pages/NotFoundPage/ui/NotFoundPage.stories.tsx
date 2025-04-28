import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/decorators';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import NotFoundPage from './NotFoundPage';

const meta = {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,

} satisfies Meta<typeof NotFoundPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.decorators = [StoreDecorator({})];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({})];
