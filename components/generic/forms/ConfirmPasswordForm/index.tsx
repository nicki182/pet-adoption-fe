import {FC} from 'react';
import * as yup from 'yup';
import { Form,ControllerForm } from '@components/generic/form';
import {TemplateForm,TemplateInput,TemplateFormProps} from '@components/generic/templates/form';
import Input from '@components/generic/inputs/Input';

interface Props {
    templateFormProps:Omit<TemplateFormProps,"children">,
    onSubmit:(values?:unknown)=>Promise<void>
}
const schema = yup.object().shape({
    password:yup.string().required('This is Required'),
    newPassword:yup.string().required('This is required'),
})
const ConfirmPasswordForm:FC<Props> = ({templateFormProps,onSubmit}) =>{
    return <Form schema={schema} onSubmit={onSubmit}>
    <TemplateForm {...templateFormProps} >
            <ControllerForm 
            name="password"
            render={
        <TemplateInput.Input 
            label='Password'
            inputElement={<Input type='password'/>}/>}/>
             <ControllerForm
             name="newPassword"
             render={
        <TemplateInput.Input 
            label='New Password'
            inputElement={<Input type='password'/>}/>}/>
    </TemplateForm>
    </Form>
}
export default ConfirmPasswordForm