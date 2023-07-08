import { Decorator } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

const ThemeDecorator =
  (theme: Theme): Decorator =>
  (Story) =>
    (
      <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
          <Story />
        </div>
      </ThemeProvider>
    );

export default ThemeDecorator;
