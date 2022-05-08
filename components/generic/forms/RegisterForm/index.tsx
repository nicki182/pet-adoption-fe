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
    email:yup.string().email().required('This is Requires').typeError('Must be an  email'),
    name:yup.string().required('This is Required'),
    matchPassword:yup.string().required('This is required'),
    phoneNumber:yup.string().required('This is Required'),
}).test((obj)=>{
    if(obj && 
        obj.password && 
        obj.matchPassword && 
        (obj.matchPassword !== obj.password)) 
    return new yup.ValidationError('password is not matching with check password', null,'matchPassword')
    return true
})
const RegisterForm:FC<Props> = ({templateFormProps,onSubmit}) =>{
    return <Form schema={schema} onSubmit={onSubmit}>
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
            name="password"
            render={
        <TemplateInput.Input 
            label='Password'
            inputElement={<Input type='password'/>}/>}/>
             <ControllerForm
             name="matchPassword"
             render={
        <TemplateInput.Input 
            label='Check Password'
            inputElement={<Input type='password'/>}/>}/>
            <ControllerForm 
        name="phoneNumber"
        render={
        <TemplateInput.Input 
            label='Phone Number'
            inputElement={<Input/>}/>}/>
    </TemplateForm>
    </Form>
}
export default RegisterForm