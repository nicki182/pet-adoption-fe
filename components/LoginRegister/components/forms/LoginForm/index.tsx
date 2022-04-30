import {FC} from 'react';
import { Form,FormProps,ControllerForm } from '@components/generic/form';
import {TemplateForm,TemplateInput,TemplateFormProps} from '@components/generic/templates/form';
import Input from '@components/generic/inputs/Input';
import * as yup from 'yup';
interface Props extends TemplateFormProps{}
const schema = yup.object().shape({})
const LoginForm = ({}) =>{
    return <Form schema={schema} onSubmit={async ()=>{}}>
    <TemplateForm {...args} >
        <ControllerForm name="name"
        render={
        <TemplateInput.Input 
            label='Name'
            inputElement={<Input/>}/>}/>
    </TemplateForm>
    </Form>
}
export default LoginForm