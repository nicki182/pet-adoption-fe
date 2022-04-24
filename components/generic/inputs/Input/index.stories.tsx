import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Input  from '.';

export default {
  title: 'Generic/Inputs/GenericInput',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Large = Template.bind({});
Large.args = {
    sizes: 'big',
};

export const Small = Template.bind({});
Small.args = {
  sizes: 'small',
};
export const Error = Template.bind({});
Error.args = {
    sizes: 'small',
    isError:true
};