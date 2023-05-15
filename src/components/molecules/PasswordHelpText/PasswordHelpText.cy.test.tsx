import * as stories from './PasswordHelpText.stories';
import { composeStories } from '@storybook/testing-react';

const { Basic } = composeStories(stories);

describe('PasswordHelpText component', () => {
  it('mounts correctly', () => {
    cy.mount(<Basic />);
  })
});
