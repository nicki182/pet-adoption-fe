import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Checkboxes from '.';
export default {
    title: 'Generic/Inputs/Checkbox/Checkboxes',
    component: Checkboxes,
  } as ComponentMeta<typeof Checkboxes>;
  
  const Template: ComponentStory<typeof Checkboxes> = (args) => <Checkboxes {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {
    isMultiple:true,
    checkboxes:[{
        label:'Checkbox',
        value:'checkbox'
    },
    {
      label:'Checkbox1',
      value:'checkbox1'
    }],
  }
  export const IsNotMultiple = Template.bind({});
  IsNotMultiple.args = {
    isMultiple:false,
    checkboxes:[{
        label:'Checkbox',
        value:'checkbox'
    },
    {
      label:'Checkbox1',
      value:'checkbox1'
    }],
  }
  export const ThreeColumns = Template.bind({});
    ThreeColumns.args = {
        isMultiple:true,
        checkboxes:[{
            label:'Checkbox',
            value:'checkbox'
        },
        {
            label:'Checkbox1',
            value:'checkbox1'
        },
        {
            label:'Checkbox2',
            value:'checkbox2'
        },
        {
            label:'Checkbox3',
            value:'checkbox3'
        },
        {
            label:'Checkbox4',
            value:'checkbox4'
        },
        {
            label:'Checkbox5',
            value:'checkbox5'
        }],
        listType:'3-column'
    }