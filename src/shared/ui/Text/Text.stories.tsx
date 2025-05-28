import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import Text, { TextSize } from './Text';

const meta = {
  title: 'Shared/Text',
  component: Text,

} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title',
    description: 'Text component description',
  },
};

export const Dark: Story = {
  args: {
    title: 'Title',
    description: 'Text component description',
  },
};
Dark.decorators = [ThemeDecorator(Theme.Dark)];

export const TitleOnly: Story = {
  args: {
    title: 'Title',
  },
};

export const TitleOnlyDark: Story = {
  args: {
    title: 'Title',
  },
};
TitleOnlyDark.decorators = [ThemeDecorator(Theme.Dark)];

export const DescriptionOnly: Story = {
  args: {
    description: 'Description',
  },
};

export const DescriptionOnlyDark: Story = {
  args: {
    description: 'Description',
  },
};
DescriptionOnlyDark.decorators = [ThemeDecorator(Theme.Dark)];

export const Error: Story = {
  args: {
    title: 'Title',
    description: 'Text component description',
    theme: 'error',
  },
};

export const ErrorDark: Story = {
  args: {
    title: 'Title',
    description: 'Text component description',
    theme: 'error',
  },
};
ErrorDark.decorators = [ThemeDecorator(Theme.Dark)];

export const SizeL: Story = {
  args: {
    title: 'Title',
    description: 'Text component description',
    size: TextSize.L,
  },
};

export const SizeLDark: Story = {
  args: {
    title: 'Title',
    description: 'Text component description',
    size: TextSize.L,
  },
};
SizeLDark.decorators = [ThemeDecorator(Theme.Dark)];

export const SizeM: Story = {
  args: {
    title: 'Title',
    description: 'Text component description',
    size: TextSize.M,
  },
};

export const SizeMDark: Story = {
  args: {
    title: 'Title',
    description: 'Text component description',
    size: TextSize.M,
  },
};
SizeMDark.decorators = [ThemeDecorator(Theme.Dark)];

export const SizeS: Story = {
  args: {
    title: 'Title',
    description: 'Text component description',
    size: TextSize.S,
  },
};

export const SizeSDark: Story = {
  args: {
    title: 'Title',
    description: 'Text component description',
    size: TextSize.S,
  },
};
SizeSDark.decorators = [ThemeDecorator(Theme.Dark)];
