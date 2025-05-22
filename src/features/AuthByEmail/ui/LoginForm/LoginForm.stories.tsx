import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from '@/shared/config/storybook/decorators';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import LoginForm from './LoginForm';

const meta = {
  title: 'Features/LoginForm',
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.decorators = [StoreDecorator({})];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({})];

export const WithState: Story = {};
WithState.decorators = [StoreDecorator({ login: { email: 'admin@mail.ru', password: '123' } })];

export const WithStateDark: Story = {};
WithStateDark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({ login: { email: 'admin@mail.ru', password: '123' } })];

export const WithLoading: Story = {};
WithLoading.decorators = [StoreDecorator({ login: { isLoading: true } })];

export const WithLoadingDark: Story = {};
WithLoadingDark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({ login: { isLoading: true } })];

export const WithError: Story = {};
WithError.decorators = [StoreDecorator({ login: { error: 'error' } })];

export const WithErrorDark: Story = {};
WithErrorDark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({ login: { error: 'error' } })];
