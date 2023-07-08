import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import MainPage from './MainPage';

const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Normral: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
};
Dark.decorators = [ThemeDecorator('dark')];
