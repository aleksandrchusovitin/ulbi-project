import { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

const ThemeDecorator =
  (theme: Theme): Decorator =>
  (Story) =>
    (
      <div className={`app ${theme}`}>
        <Story />
      </div>
    );

export default ThemeDecorator;
