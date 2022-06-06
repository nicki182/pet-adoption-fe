import { ComponentMeta, ComponentStory } from '@storybook/react';
import LoginReginsterModal from '.'
export default {
  title: 'Modals/LoginReginsterModal',
  component: LoginReginsterModal,
} as ComponentMeta<typeof LoginReginsterModal>;
const Template: ComponentStory<typeof LoginReginsterModal> = (args) =>(
<LoginReginsterModal {...args} />
)
;

export const GenericLoginReginsterModal = Template.bind({});
GenericLoginReginsterModal.args = {
    open:true
}