import * as stories from './TextInput.stories';
import { composeStories } from '@storybook/testing-react';

const { Basic } = composeStories(stories);

describe('TextInput component', () => {
  it('mounts correctly', () => {
    cy.mount(<Basic />);
  })
});
