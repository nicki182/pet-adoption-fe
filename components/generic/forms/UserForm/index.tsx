import {FC} from 'react';
import * as yup from 'yup';
import { Form,ControllerForm } from '@components/generic/form';
import {TemplateForm,TemplateInput,TemplateFormProps} from '@components/generic/templates/form';
import Input from '@components/generic/inputs/Input';

interface Props {
    templateFormProps:Omit<TemplateFormProps,"children">,
    onSubmit:(values?:unknown)=>Promise<void>
    initialValues:any
}
const schema = yup.object().shape({
    email:yup.string().email('Must be a valid email').required('This is Requires'),
    name:yup.string().required('This is Required'),
    phoneNumber:yup.string().required('This is Required'),
})
const UserForm:FC<Props> = ({templateFormProps,onSubmit,initialValues}) =>{
    return <Form schema={schema} onSubmit={onSubmit} initialValues={initialValues}>
    <TemplateForm {...templateFormProps} >
        <ControllerForm name="name"
        render={
        <TemplateInput.Input 
            label='Name'
            inputElement={<Input/>}/>}/>
            <ControllerForm name="email"
        render={
        <TemplateInput.Input 
            label='Email'
            inputElement={<Input/>}/>}/>
            <ControllerForm 
        name="phoneNumber"
        render={
        <TemplateInput.Input 
            label='Phone Number'
            inputElement={<Input/>}/>}/>
    </TemplateForm>
    </Form>
}
export default UserForm