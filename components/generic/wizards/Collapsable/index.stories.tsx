import { ComponentMeta, ComponentStory } from '@storybook/react';
import Collapsable from '.'
export default {
  title: 'Generic/Wizard/Collapsable',
  component: Collapsable,
} as ComponentMeta<typeof Collapsable>;
const Template: ComponentStory<typeof Collapsable> = (args) =>(
<Collapsable {...args} >
    HELLO INSIDE Collapsable
</Collapsable>
)
;

export const GenericCollapsable = Template.bind({});
GenericCollapsable.args = {
    isOpen:true,
}