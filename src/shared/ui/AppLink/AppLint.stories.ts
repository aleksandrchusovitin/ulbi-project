import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink } from './AppLink';

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: {
    to: '/',
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: { children: 'Text', variant: 'primary' },
};

export const Secondary: Story = {
  args: {
    children: 'Text',
    variant: 'secondary',
  },
};

export const PrimaryDark: Story = {
  args: { children: 'Text', variant: 'primary' },
};
PrimaryDark.decorators = [ThemeDecorator('dark')];

export const SecondaryDark: Story = {
  args: {
    children: 'Text',
    variant: 'secondary',
  },
};
SecondaryDark.decorators = [ThemeDecorator('dark')];
