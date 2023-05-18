import { composeStories } from '@storybook/testing-react';
import * as stories from './TextInput.stories';

const { Empty } = composeStories(stories);

describe('TextInput component', () => {
  it('mounts correctly', () => {
    cy.mount(<Empty />);
  });
});
