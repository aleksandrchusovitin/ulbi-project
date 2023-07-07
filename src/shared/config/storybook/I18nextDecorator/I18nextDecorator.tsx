import { Decorator } from '@storybook/react';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForStorybook from 'shared/config/i18n/i18nForStorybook';

const I18nextDecorator: Decorator = (Story) => (
  <Suspense fallback="ru">
    <I18nextProvider i18n={i18nForStorybook}>
      <Story />
    </I18nextProvider>
  </Suspense>
);

export default I18nextDecorator;
