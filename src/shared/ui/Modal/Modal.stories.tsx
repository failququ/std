import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/constants/theme';
import Modal from './Modal';

const meta = {
  title: 'Shared/Modal',
  component: Modal,

} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'MODAL CONTENT',
    isVisible: true,
    title: 'Modal title',
  },
};

export const Dark: Story = {
  args: {
    children: 'MODAL CONTENT',
    isVisible: true,
    title: 'Modal title',
  },
};
Dark.decorators = [ThemeDecorator(Theme.Dark)];
