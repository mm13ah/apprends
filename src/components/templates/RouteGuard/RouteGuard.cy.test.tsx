import * as stories from './RouteGuard.stories';
import { composeStories } from '@storybook/testing-react';

const { Primary } = composeStories(stories);

describe('RouteGuard component', () => {
  it('mounts correctly', () => {
    cy.mount(<Primary />);
  });
});
