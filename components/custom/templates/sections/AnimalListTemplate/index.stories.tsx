import { ComponentMeta, ComponentStory } from '@storybook/react';
import AnimalListTemplate from '.';
export default {
  title: 'Custom/Templates/List/AnimalListTemplate',
  component: AnimalListTemplate,
} as ComponentMeta<typeof AnimalListTemplate>;
const Template: ComponentStory<typeof AnimalListTemplate> = (args) =>(
<AnimalListTemplate {...args} />
)
;

export const AnimalListTemplateExample = Template.bind({});
AnimalListTemplateExample.args = {
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