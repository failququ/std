import type { Meta, StoryObj } from '@storybook/react';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import avatar from '@/shared/assets/tests/storybook.jpg';
import { StoreDecorator } from '@/shared/config/storybook/decorators';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import ProfilePage from './ProfilePage';

const meta = {
  title: 'Pages/ProfilePage',
  component: ProfilePage,

} satisfies Meta<typeof ProfilePage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
Default.decorators = [StoreDecorator({
  profile: {
    readonly: true,
    form: {
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
})];

export const Dark: Story = {};
Dark.decorators = [ThemeDecorator(Theme.Dark), StoreDecorator({
  profile: {
    readonly: true,
    form: {
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
})];
