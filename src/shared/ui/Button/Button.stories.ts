import type { Meta, StoryObj } from '@storybook/react';
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Clear',
    variant: 'clear',
  },
};
Secondary.decorators = [ThemeDecorator('dark')];

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const OutlineSizeXL: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
    size: 'xl',
  },
};

export const Background: Story = {
  args: {
    children: 'Background',
    variant: 'background',
  },
};

export const InvertedBackground: Story = {
  args: {
    children: 'Background Inverted',
    variant: 'backgroundInverted',
  },
};

export const SquareSizeM: Story = {
  args: {
    children: '>',
    variant: 'backgroundInverted',
    isSquare: true,
    size: 'm',
  },
};

export const SquareSizeL: Story = {
  args: {
    children: '>',
    variant: 'backgroundInverted',
    isSquare: true,
    size: 'l',
  },
};

export const SquareSizeXL: Story = {
  args: {
    children: '>',
    variant: 'backgroundInverted',
    isSquare: true,
    size: 'xl',
  },
};
