import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from '@/shared/config/storybook/decorators';
import { ArticlesView } from '../../model/const/const';
import ArticlesViewSelector from './ArticlesViewSelector';

const meta = {
  title: 'Entities/ArticlesViewSelector',
  component: ArticlesViewSelector,
} satisfies Meta<typeof ArticlesViewSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    view: ArticlesView.BIG,
    onViewChange: () => {},
  },
};

export const DefaultDark: Story = {
  args: {
    view: ArticlesView.BIG,
    onViewChange: () => {},
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const SmallViewSelected: Story = {
  args: {
    view: ArticlesView.SMALL,
    onViewChange: () => {},
  },
};

export const SmallViewSelectedDark: Story = {
  args: {
    view: ArticlesView.SMALL,
    onViewChange: () => {},
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};
