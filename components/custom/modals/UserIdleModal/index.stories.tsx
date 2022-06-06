import { ComponentMeta, ComponentStory } from '@storybook/react';
import UserIdleModal from '.'
export default {
  title: 'Modals/UserIdleModal',
  component: UserIdleModal,
} as ComponentMeta<typeof UserIdleModal>;
const Template: ComponentStory<typeof UserIdleModal> = (args) =>(
<UserIdleModal {...args} />
)
;

export const GenericUserIdleModal = Template.bind({});
GenericUserIdleModal.args = {
    open:true,
    onClose:()=>{}
}