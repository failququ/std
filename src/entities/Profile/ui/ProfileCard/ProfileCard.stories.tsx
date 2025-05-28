import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import ProfileCard from './ProfileCard';

const meta = {
  title: 'Entities/ProfileCard',
  component: ProfileCard,

} satisfies Meta<typeof ProfileCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: {
      username: 'admin',
      age: 22,
      country: Country.Russia,
      lastName: 'Ivanov',
      firstName: 'Ivan',
      city: 'Moscow',
      currency: Currency.RUB,
      avatar,
    },
  },
};

export const Dark: Story = {
  args: {
    data: {
      username: 'admin',
      age: 22,
      country: Country.Russia,
      lastName: 'Ivanov',
      firstName: 'Ivan',
      city: 'Moscow',
      currency: Currency.RUB,
      avatar,
    },
  },
};
Dark.decorators = [ThemeDecorator(Theme.Dark)];

export const WithLoading: Story = {
  args: {
    isLoading: true,
  },
};

export const WithLoadingDark: Story = {
  args: {
    isLoading: true,
  },
};
WithLoadingDark.decorators = [ThemeDecorator(Theme.Dark)];

export const WithError: Story = {
  args: {
    error: 'error',
  },
};

export const WithErrorDark: Story = {
  args: {
    error: 'error',
  },
};
WithErrorDark.decorators = [ThemeDecorator(Theme.Dark)];
