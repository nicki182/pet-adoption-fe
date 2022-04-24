import { ComponentMeta, ComponentStory } from '@storybook/react';
import Modal from '.'
export default {
  title: 'Generic/Modal',
  component: Modal,
} as ComponentMeta<typeof Modal>;
const Template: ComponentStory<typeof Modal> = (args) =>(
    <div style={{width:'500px',height:'500px'}}>
<Modal {...args} >
    HELLO INSIDE MODAL
</Modal>
</div>
)
;

export const GenericModal = Template.bind({});
GenericModal.args = {
    open:true,
    onClose:async ()=>console.log('onClose')
}