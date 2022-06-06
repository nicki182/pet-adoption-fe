import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Radio from '.';
//TODO:ADD RadioES STORY
export default {
  title: 'Generic/Inputs/Radio/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});
Default.args = {
  label:'Radio',
}
export const Checked = Template.bind({});
Checked.args = {
    checked:true,
    label:'Radio'
}