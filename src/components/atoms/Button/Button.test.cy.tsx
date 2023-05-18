import { composeStories } from '@storybook/testing-react';
import * as stories from './Button.stories';

const { Large } = composeStories(stories);

describe('Button component', () => {
  it('mounts correctly', () => {
    cy.mount(<Large />);
  });
});
