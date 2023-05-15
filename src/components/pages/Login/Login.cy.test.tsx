import * as stories from './Login.stories';
import { composeStories } from '@storybook/testing-react';

const { Basic } = composeStories(stories);

describe('Login component', () => {
  it('mounts correctly', () => {
    cy.mount(<Basic />);
  })
});
