import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
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
