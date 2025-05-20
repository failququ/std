import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { http, HttpResponse } from 'msw';
import { StoreDecorator } from 'shared/config/storybook/decorators';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import NotificationsButton from './NotificationsButton';

const testData = [
  {
    id: '1',
    title: 'notification 1',
    description: 'description 1',
  },
  {
    id: '2',
    title: 'notification 2',
    description: 'description 2',
  },
];

const mockParameters = {
  msw: {
    handlers: [
      http.get('/notification', () => HttpResponse.json(testData)),
    ],
  },
};

const meta = {
  title: 'features/NotificationsButton',
  component: NotificationsButton,
  decorators: [StoreDecorator({
    user: {
      userData: {
        id: '1',
      },
    },
  })],
  parameters: mockParameters,
} satisfies Meta<typeof NotificationsButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {

};

export const DefaultDark: Story = {

};
DefaultDark.decorators = [ThemeDecorator(Theme.Dark)];
