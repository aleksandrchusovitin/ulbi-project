import type { Preview } from '@storybook/react';
import RouterDecorator from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import I18nextDecorator from '../../src/shared/config/storybook/I18nextDecorator/I18nextDecorator';
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';

import 'app/styles/index.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [I18nextDecorator, RouterDecorator, ThemeDecorator('light')],
};

export default preview;
