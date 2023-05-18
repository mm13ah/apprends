import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';

import { Login } from './Login';

export default {
  component: Login,
  title: 'Pages/Login',
};

const Template: StoryFn<ComponentProps<typeof Login>> = () => <Login />;

export const Basic = Template.bind({});
Basic.args = {};
Basic.storyName = 'Login';
