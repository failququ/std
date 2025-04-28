import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { StoreDecorator } from 'shared/config/storybook/decorators';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import AboutPage from './AboutPage';

const meta = {
  title: 'Pages/AboutPage',
  component: AboutPage,

} satisfies Meta<typeof AboutPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.decorators = [StoreDecorator({})];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({})];
