import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radios from '.';
export default {
    title: 'Generic/Inputs/Radio/Radios',
    component: Radios,
  } as ComponentMeta<typeof Radios>;
  
  const Template: ComponentStory<typeof Radios> = (args) => <Radios {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {
    radios:[{
        label:'Radio',
        value:'Radio'
    },
    {
      label:'Radio1',
      value:'checkbox1'
    }],
  }
  export const ThreeColumns = Template.bind({});
    ThreeColumns.args = {
        radios:[{
            label:'Radio',
            value:'Radio'
        },
        {
            label:'Radio1',
            value:'checkbox1'
        },
        {
            label:'Radio2',
            value:'checkbox2'
        },
        {
            label:'Radio3',
            value:'checkbox3'
        },
        {
            label:'Radio4',
            value:'checkbox4'
        },
        {
            label:'Radio5',
            value:'checkbox5'
        }],
        listType:'3-column'
    }