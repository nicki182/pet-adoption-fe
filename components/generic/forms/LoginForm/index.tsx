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
    email:yup.string().email('This is not a valid email').required('This is Required'),
})
const LoginForm:FC<Props> = ({templateFormProps,onSubmit}) =>{
    return <Form schema={schema} onSubmit={onSubmit}>
    <TemplateForm {...templateFormProps} >
        <ControllerForm name="email"
        render={
        <TemplateInput.Input 
            label='email'
            inputElement={<Input/>}/>}/>
            <ControllerForm name="password"
        render={
        <TemplateInput.Input 
            label='Password'
            inputElement={<Input type='password'/>}/>}/>
    </TemplateForm>
    </Form>
}
export default LoginForm