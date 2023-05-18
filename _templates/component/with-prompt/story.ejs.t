---
to: src/components/<%=atomic%>s/<%=name%>/<%=name%>.stories.tsx
---
import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';

import { <%=name%> } from './<%=name%>';

export default {
  component: <%=name%>,
  title: '<%=h.changeCase.sentence(atomic)%>s/<%=name%>',
};

const Template: StoryFn<ComponentProps<typeof <%=name%>>> = (args) => (
  <<%=name%> {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.storyName = '<%=name%>';
