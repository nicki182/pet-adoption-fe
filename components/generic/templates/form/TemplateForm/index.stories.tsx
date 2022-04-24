import ControllerForm from '@components/generic/form/Controller';
import Form from '@components/generic/form/Form';
import Input from '@components/generic/inputs/Input';
import CancelButton from '@components/generic/wizards/CancelButton';
import SubmitButton from '@components/generic/wizards/SubmitButton';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import * as yup from 'yup';
import TemplateForm from '.';
import TemplateInput from '../TemplateInput';
export default {
  title: 'Generic/Templates/Form',
  component: TemplateForm,
} as ComponentMeta<typeof TemplateForm>;
const schema = yup.object().shape({
    name: yup.string().required('Name is required'),
})
const Template: ComponentStory<typeof TemplateForm> = (args) =>(
    <Form schema={schema} onSubmit={async ()=>{console.log('submit')}}>
<TemplateForm {...args} >
    <ControllerForm name="name"
    render={
    <TemplateInput.Input 
        label='Name'
        error={'error'}
        inputElement={<Input/>}/>}/>
</TemplateForm>
</Form>
)
;

export const GenericForm = Template.bind({});
GenericForm.args = {
    buttons:{
        cancel:<CancelButton onClick={async ()=>console.log('onCancel')}/>,
        submit:<SubmitButton/>   
    }     
}