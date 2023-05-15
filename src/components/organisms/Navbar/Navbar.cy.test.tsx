import * as stories from './Navbar.stories';
import { composeStories } from '@storybook/testing-react';

const { Basic } = composeStories(stories);

describe('Navbar component', () => {
  it('mounts correctly', () => {
    cy.mount(<Basic />);
  })
});
