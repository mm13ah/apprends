import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';

import { ArrowRightCircleIcon } from '@heroicons/react/20/solid';
import { Button } from './Button';

export default {
  component: Button,
  title: 'Atoms/Button',
};

const Template: StoryFn<ComponentProps<typeof Button>> = (args) => (
  <Button {...args} />
);

export const Small = Template.bind({});
Small.args = {
  text: 'Log In',
  size: 'small',
};

export const Medium = Template.bind({});
Medium.args = {
  text: 'Log In',
};

export const Large = Template.bind({});
Large.args = {
  text: 'Log In',
  size: 'large',
};

export const Icon = Template.bind({});
Icon.args = {
  text: 'Log In',
  icon: <ArrowRightCircleIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />,
};
