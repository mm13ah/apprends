import * as stories from './Register.stories';
import { composeStories } from '@storybook/testing-react';

const { Basic } = composeStories(stories);

describe('Register component', () => {
  it('mounts correctly', () => {
    cy.mount(<Basic />);
  })
});
