import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from '@/shared/config/storybook/decorators';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import AdminPanelPage from './AdminPanelPage';

const meta = {
  title: 'Pages/AdminPanelPage',
  component: AdminPanelPage,

} satisfies Meta<typeof AdminPanelPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.decorators = [StoreDecorator({})];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({})];
