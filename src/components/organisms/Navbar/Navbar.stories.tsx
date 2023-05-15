import React, { ComponentProps } from 'react';
import { StoryFn } from '@storybook/react';

import { Navbar } from './Navbar';

export default {
  component: Navbar,
  title: 'Organisms/Navbar',
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story: StoryFn) => (
      <div style={{ margin: '20px', width: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

const Template: StoryFn<ComponentProps<typeof Navbar>> = () => <Navbar />;

export const Basic = Template.bind({});
Basic.args = {};
Basic.storyName = 'Navbar';
