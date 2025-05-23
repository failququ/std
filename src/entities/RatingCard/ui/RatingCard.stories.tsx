import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import RatingCard from './RatingCard';

const meta = {
  title: 'Entities/RatingCard',
  component: RatingCard,
  args: {
    title: 'Title',
  },

} satisfies Meta<typeof RatingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const Dark: Story = {
};
Dark.decorators = [ThemeDecorator(Theme.Dark)];
