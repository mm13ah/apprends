import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';

import { RouteGuard } from './RouteGuard';

export default {
  component: RouteGuard,
  title: 'Templates/RouteGuard',
};

const Template: StoryFn<ComponentProps<typeof RouteGuard>> = (args) => (
  <RouteGuard {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.storyName = 'RouteGuard';
