import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';
import { EnvelopeIcon, LockClosedIcon } from '@heroicons/react/20/solid';

import { TextInput } from './TextInput';

export default {
  component: TextInput,
  title: 'Molecules/TextInput',
  decorators: [
    (Story: StoryFn) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    disabled: false,
  },
  argTypes: {
    type: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    'data-testid': {
      table: {
        disable: true,
      },
    },
  },
};

const Template: StoryFn<ComponentProps<typeof TextInput>> = (args) => (
  <TextInput {...args} />
);

export const Empty = Template.bind({});
Empty.args = {
  label: 'Name',
};

export const Icon = Template.bind({});
Icon.args = {
  label: 'Email',
  icon: <EnvelopeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />,
};

export const HelpText = Template.bind({});
HelpText.args = {
  label: 'Password',
  helpText: (
    <div className="text-gray-800 mt-2">
      <p>Password must contain:</p>
      <ul className="list-disc ml-5">
        <li>8 characters or more</li>
        <li>1 uppercase character</li>
        <li>1 lowercase character</li>
        <li>1 numeric character</li>
        <li>1 special character</li>
      </ul>
    </div>
  ),
  icon: <LockClosedIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />,
};

export const Error = Template.bind({});
Error.args = {
  label: 'Password',
  error: 'Password must have 8 characters.',
  icon: <LockClosedIcon className="h-5 w-5 text-red-500" aria-hidden="true" />,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Email',
  disabled: true,
};
