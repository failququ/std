import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import CountrySelect from './CountrySelect';

const meta = {
  title: 'Entities/CountrySelect',
  component: CountrySelect,

} satisfies Meta<typeof CountrySelect>;

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
