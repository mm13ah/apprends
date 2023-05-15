import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';

import { RegisterForm } from './RegisterForm';

export default {
  component: RegisterForm,
  title: 'Organisms/RegisterForm',
};

const Template: StoryFn<ComponentProps<typeof RegisterForm>> = (args) => (
  <RegisterForm {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
Basic.storyName = 'RegisterForm';

