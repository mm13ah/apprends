import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';

import { PasswordHelpText } from './PasswordHelpText';

export default {
  component: PasswordHelpText,
  title: 'Molecules/PasswordHelpText',
};

const Template: StoryFn<ComponentProps<typeof PasswordHelpText>> = (args) => (
  <PasswordHelpText {...args} />
);

export const Basic = Template.bind({});
Basic.args = {};
Basic.storyName = 'PasswordHelpText';

