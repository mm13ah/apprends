import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';

import { LoginForm } from './LoginForm';

export default {
  component: LoginForm,
  title: 'Organisms/LoginForm',
};

const Template: StoryFn<ComponentProps<typeof LoginForm>> = () => <LoginForm />;

export const Basic = Template.bind({});
Basic.args = {};
Basic.storyName = 'LoginForm';
