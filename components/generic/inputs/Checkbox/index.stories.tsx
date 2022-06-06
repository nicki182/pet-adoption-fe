import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import  Checkbox from '.';
//TODO:ADD CHECKBOXES STORY
export default {
  title: 'Generic/Inputs/Checkbox/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label:'Checkbox',
}
export const Checked = Template.bind({});
Checked.args = {
    checked:true,
    label:'Checkbox'
}