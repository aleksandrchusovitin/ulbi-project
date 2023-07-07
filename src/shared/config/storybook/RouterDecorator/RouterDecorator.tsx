import { Decorator } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

const RouterDecorator: Decorator = (Story) => (
  <BrowserRouter>
    <Story />
  </BrowserRouter>
);

export default RouterDecorator;
