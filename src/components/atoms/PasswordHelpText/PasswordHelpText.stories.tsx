import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';

import { PasswordHelpText } from './PasswordHelpText';

export default {
  component: PasswordHelpText,
  title: 'Atoms/PasswordHelpText',
};

const Template: StoryFn<ComponentProps<typeof PasswordHelpText>> = () => (
  <PasswordHelpText />
);

export const Basic = Template.bind({});
Basic.args = {};
Basic.storyName = 'PasswordHelpText';
