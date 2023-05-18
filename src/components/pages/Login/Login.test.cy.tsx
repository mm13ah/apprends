import { composeStories } from '@storybook/testing-react';
import * as stories from './Login.stories';

const { Basic } = composeStories(stories);

describe('Login component', () => {
  it('mounts correctly', () => {
    cy.mount(<Basic />);
  });
});
