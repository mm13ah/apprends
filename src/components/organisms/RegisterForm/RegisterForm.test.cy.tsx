import { composeStories } from '@storybook/testing-react';
import * as stories from './RegisterForm.stories';

const { Basic } = composeStories(stories);

describe('RegisterForm component', () => {
  it('mounts correctly', () => {
    cy.mount(<Basic />);
  });
});
