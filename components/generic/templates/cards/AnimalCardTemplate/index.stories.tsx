import { ComponentMeta, ComponentStory } from '@storybook/react';
import AnimalCardTemplate from '.';
export default {
  title: 'Generic/Templates/Cards/AnimalCardTemplate',
  component: AnimalCardTemplate,
} as ComponentMeta<typeof AnimalCardTemplate>;
const Template: ComponentStory<typeof AnimalCardTemplate> = (args) =>(
<AnimalCardTemplate {...args} />
)
;

export const AnimalCardTemplateExample = Template.bind({});
AnimalCardTemplateExample.args = {
    animal: {
        id: '1',
        age: 1,
        name: 'Luna',
        breed: 'Shiba Inu',
        type: 'dog',
        disabledSave:false,
        image:'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        description: 'Luna is a Shiba Inu',   
}
}