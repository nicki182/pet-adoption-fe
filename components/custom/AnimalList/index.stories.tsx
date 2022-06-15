import { ComponentMeta, ComponentStory } from '@storybook/react';
import AnimalList from '.';
export default {
  title: 'Custom/List/AnimalList',
  component: AnimalList,
} as ComponentMeta<typeof AnimalList>;
const Template: ComponentStory<typeof AnimalList> = (args) =>(
<AnimalList {...args} />
)
;

export const AnimalListExample = Template.bind({});
AnimalListExample.args = {
    animals:[ {
        age: 1,
        disabledSave:true,
        name: 'Luna',
        breed: 'Shiba Inu',
        type: 'dog',
        image:'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        description: 'Luna is a Shiba Inu',   
},
{
    age: 1,
    name: 'Luna',
    breed: 'Shiba Inu',
    type: 'dog',
    disabledSave:false,
    image:'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    description: 'Luna is a Shiba Inu',
},{
    age: 1,
    name: 'Luna',
    breed: 'Shiba Inu',
    type: 'dog',
    disabledSave:false,
    image:'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    description: 'Luna is a Shiba Inu',
},{
    age: 1,
    name: 'Luna',
    breed: 'Shiba Inu',
    type: 'dog',
    disabledSave:true,
    image:'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    description: 'Luna is a Shiba Inu',
},{
    age: 1,
    name: 'Luna',
    breed: 'Shiba Inu',
    type: 'dog',
    disabledSave:false,
    image:'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    description: 'Luna is a Shiba Inu',
}]
}