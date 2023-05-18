import { composeStories } from '@storybook/testing-react';
import * as stories from './Register.stories';

const { Basic } = composeStories(stories);

describe('Register component', () => {
  it('mounts correctly', () => {
    cy.mount(<Basic />);
  });
});
