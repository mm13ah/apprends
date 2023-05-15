import * as stories from './RegisterForm.stories';
import { composeStories } from '@storybook/testing-react';

const { Basic } = composeStories(stories);

describe('RegisterForm component', () => {
  it('mounts correctly', () => {
    cy.mount(<Basic />);
  })
});
