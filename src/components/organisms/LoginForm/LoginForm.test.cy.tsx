import { composeStories } from '@storybook/testing-react';
import * as stories from './LoginForm.stories';

const { Basic } = composeStories(stories);

describe('LoginForm component', () => {
  it('mounts correctly', () => {
    cy.mount(<Basic />);
  });
});
