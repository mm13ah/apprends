import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';
import React from 'react';
import { QueryClientWrapper } from '../src/utils';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Atoms', 'Molecules', 'Organisms', 'Templates', 'Pages'],
      },
    },
  },
};

export const decorators = [
  (Story) => (
    <QueryClientWrapper>
      <Story />
    </QueryClientWrapper>
  ),
];

export default preview;
