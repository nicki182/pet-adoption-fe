import { ComponentMeta, ComponentStory } from '@storybook/react';
import NavItem from '.'
export default {
  title: 'Generic/Navigator/NavItem',
  component: NavItem,
} as ComponentMeta<typeof NavItem>;
const Template: ComponentStory<typeof NavItem> = (args) =>(
<NavItem {...args}/>
)
;

export const GenericNavItem = Template.bind({});
GenericNavItem.args = {
    children:['one'],
}