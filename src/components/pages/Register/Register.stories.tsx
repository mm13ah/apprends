import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';

import { Register } from './Register';

export default {
  component: Register,
  title: 'Pages/Register',
};

const Template: StoryFn<ComponentProps<typeof Register>> = () => <Register />;

export const Basic = Template.bind({});
Basic.args = {};
Basic.storyName = 'Register';
