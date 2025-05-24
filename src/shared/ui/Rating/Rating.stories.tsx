import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import Rating from './Rating';

const meta = {
  title: 'Shared/Rating',
  component: Rating,

} satisfies Meta<typeof Rating>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

export const DarkDefault: Story = {

};
DarkDefault.decorators = [ThemeDecorator(Theme.Dark)];
