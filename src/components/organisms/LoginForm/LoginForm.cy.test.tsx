import * as stories from './LoginForm.stories';
import { composeStories } from '@storybook/testing-react';

const { Basic } = composeStories(stories);

describe('LoginForm component', () => {
  it('mounts correctly', () => {
    cy.mount(<Basic />);
  })
});
