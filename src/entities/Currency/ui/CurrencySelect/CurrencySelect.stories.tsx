import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import CurrencySelect from './CurrencySelect';

const meta = {
  title: 'Entities/CurrencySelect',
  component: CurrencySelect,

} satisfies Meta<typeof CurrencySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};

export const DarkDefault: Story = {
  args: {
  },
};
DarkDefault.decorators = [ThemeDecorator(Theme.Dark)];
