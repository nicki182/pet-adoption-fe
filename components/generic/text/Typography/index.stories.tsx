import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import  Typography  from '.';

export default {
  title: 'Generic/Text/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Default = Template.bind({});
Default.args = {
    element: 'p',
    children: 'Typography',
};
export const Title = Template.bind({});
Title.args = {
    element: 'h1',
    children: 'Typography',
    isTitle:true
};
