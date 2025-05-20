import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import ListBox from './ListBox';

const meta = {
  title: 'Shared/ListBox',
  component: ListBox,

} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  { value: '123', content: 'first' },
  { value: '1234', content: 'second' },
  { value: '12345', content: 'third' },
];

export const Default: Story = {
  args: {
    defaultValue: 'Choose option',
    items: options,
    onChange: () => {},
  },
};

export const DarkDefault: Story = {
  args: {
    defaultValue: 'Choose option',
    items: options,
    onChange: () => {},
  },
};
DarkDefault.decorators = [ThemeDecorator(Theme.Dark)];
