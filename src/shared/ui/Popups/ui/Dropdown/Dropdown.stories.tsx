import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import AvatarSrc from '@/shared/assets/tests/storybook.jpg';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import Avatar from '../../../Avatar/Avatar';
import Dropdown from './Dropdown';

const items = [
  { content: 'first', onClick: () => {} },
  { content: 'second', onClick: () => {} },
  { content: 'third', onClick: () => {} },
];

const meta = {
  title: 'Shared/Dropdown',
  component: Dropdown,
  args: {
    items,
    trigger: <Avatar size={30} src={AvatarSrc} />,
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '10rem' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Dropdown>;

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

export const BottomRight: Story = {
  args: {
    direction: 'bottomRight',
  },
};

export const DarkBottomRight: Story = {
  args: {
    direction: 'bottomRight',
  },
};
DarkBottomRight.decorators = [ThemeDecorator(Theme.Dark)];

export const TopRight: Story = {
  args: {
    direction: 'topRight',
  },
};

export const DarkTopRight: Story = {
  args: {
    direction: 'topRight',
  },
};
DarkTopRight.decorators = [ThemeDecorator(Theme.Dark)];

export const TopLeft: Story = {
  args: {
    direction: 'topLeft',
  },
};

export const DarkTopLeft: Story = {
  args: {
    direction: 'topLeft',
  },
};
DarkTopLeft.decorators = [ThemeDecorator(Theme.Dark)];
