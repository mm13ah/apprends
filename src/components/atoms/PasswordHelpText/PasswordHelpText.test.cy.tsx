import { composeStories } from '@storybook/testing-react';
import * as stories from './PasswordHelpText.stories';

const { Basic } = composeStories(stories);

describe('PasswordHelpText component', () => {
  it('mounts correctly', () => {
    cy.mount(<Basic />);
  });
});
