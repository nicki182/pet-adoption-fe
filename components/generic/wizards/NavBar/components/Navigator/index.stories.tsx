import { ComponentMeta, ComponentStory } from '@storybook/react';
import Navigation from '.'
export default {
  title: 'Generic/Navigator/Navigation',
  component: Navigation,
} as ComponentMeta<typeof Navigation>;
const Template: ComponentStory<typeof Navigation> = (args) =>(
<Navigation {...args}/>
)
;

export const GenericNavigation = Template.bind({});
GenericNavigation.args = {
    leftButtonsSection:[<>one</>,<>two</>,<>three</>],
    rightButtonsSection:[<>one</>,<>two</>,<>three</>],
}