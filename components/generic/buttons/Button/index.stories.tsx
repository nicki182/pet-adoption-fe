import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Button  from '.';

export default {
  title: 'Generic/Buttons/GenericButton',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'medium',
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
    variant: 'secondary',
    size: 'medium',
    children: 'Button',
  };

export const Large = Template.bind({});
Large.args = {
    variant: 'primary',
    size: 'big',
    children: 'Button',
    type:'button'
  };

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Button',
  variant: 'primary',
};
export const Disabled = Template.bind({});
Disabled.args = {
  size: 'small',
  children: 'Button',
  variant: 'primary',
  disabled: true,
};