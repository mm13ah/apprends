---
to: src/components/<%=atomic%>s/<%=name%>/<%=name%>.cy.test.tsx
---
import * as stories from './<%=name%>.stories';
import { composeStories } from '@storybook/testing-react';

const { Primary } = composeStories(stories);

describe('<%=name%> component', () => {
  it('mounts correctly', () => {
    cy.mount(<Primary />);
  })
});
