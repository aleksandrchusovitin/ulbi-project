import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Theme } from 'app/providers/ThemeProvider';
import { NotFoundPage } from './NotFoundPage';

const meta: Meta<typeof NotFoundPage> = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;

export const Normral: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
