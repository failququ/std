import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import Flex from './Flex';

const meta = {
  title: 'Shared/Flex',
  component: Flex,

} satisfies Meta<typeof Flex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Row: Story = {
  args: {
    children: (
      <>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </>
    ),
    direction: 'row',
  },
};

export const DarkRow: Story = {
  args: {
    children: (
      <>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </>
    ),
    direction: 'row',
  },
};
DarkRow.decorators = [ThemeDecorator(Theme.Dark)];

export const RowGap4: Story = {
  args: {
    children: (
      <>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </>
    ),
    direction: 'row',
    gap: '4',
  },
};

export const RowGap8: Story = {
  args: {
    children: (
      <>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </>
    ),
    direction: 'row',
    gap: '8',
  },
};

export const RowGap16: Story = {
  args: {
    children: (
      <>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </>
    ),
    direction: 'row',
    gap: '16',
  },
};

export const RowGap32: Story = {
  args: {
    children: (
      <>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </>
    ),
    direction: 'row',
    gap: '32',
  },
};

export const Column: Story = {
  args: {
    children: (
      <>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </>
    ),
    direction: 'column',
  },
};

export const ColumnGap8: Story = {
  args: {
    children: (
      <>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </>
    ),
    direction: 'column',
    gap: '8',
  },
};

export const ColumnGap16: Story = {
  args: {
    children: (
      <>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </>
    ),
    direction: 'column',
    gap: '16',
  },
};

export const ColumnStart: Story = {
  args: {
    children: (
      <>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </>
    ),
    direction: 'column',
    align: 'start',
  },
};

export const ColumnEnd: Story = {
  args: {
    children: (
      <>
        <div>123</div>
        <div>123</div>
        <div>123</div>
      </>
    ),
    direction: 'column',
    align: 'end',
  },
};
