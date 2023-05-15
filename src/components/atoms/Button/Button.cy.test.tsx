import * as stories from './Button.stories';
import { composeStories } from '@storybook/testing-react';

const { Basic } = composeStories(stories);

describe('Button component', () => {
  it('mounts correctly', () => {
    cy.mount(<Basic />);
  })
});
