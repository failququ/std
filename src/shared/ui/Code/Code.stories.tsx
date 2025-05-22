import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from '@/shared/config/storybook/decorators';
import Code from './Code';

const meta = {
  title: 'Shared/Code',
  component: Code,
} satisfies Meta<typeof Code>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n   <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
  },
};

export const DefaultDark: Story = {
  args: {
    text: '<!DOCTYPE html>\n<html>\n  <body>\n    <p id="hello"></p>\n   <script>\n      document.getElementById("hello").innerHTML = "Hello, world!";\n    </script>\n  </body>\n</html>;',
  },
};
DefaultDark.decorators = [ThemeDecorator(Theme.Dark)];
