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
    name:yup.string().required('This is Required'),
    height:yup.number().required('This is Required'),
    width:yup.number().required('This is Required'),
    description:yup.string(),
    age:yup.number().typeError('Must be a number'),
    color:yup.string(),
    dieteryRestrinctions:yup.string(),
    hypollergenic:yup.boolean(),
    breed:yup.string(),
    type:yup.string(),
})
const AnimalForm:FC<Props> = ({templateFormProps,onSubmit}) =>{
    return <Form schema={schema} onSubmit={onSubmit}>
    <TemplateForm {...templateFormProps} >
        <ControllerForm name="name"
        render={
        <TemplateInput.Input 
            label='Name'
            inputElement={<Input/>}/>}/>
            <ControllerForm name="type"
        render={
        <TemplateInput.Radios 
            label='type'
            error=''
            radiosProps={{value:null,radios:[{value:'dog',label:'Dog'},{value:'cat',label:'Cat'}]}}/>
            }/>
            <ControllerForm name="description"
        render={
        <TemplateInput.Input 
            label='Description'
            inputElement={<Input/>}/>}/>
            <ControllerForm name="height"
        render={
        <TemplateInput.Input 
            label='Height'
            inputElement={<Input type='number'/>}/>}/>
            <ControllerForm name="weigth"
        render={
        <TemplateInput.Input 
            label='Weigth'
            inputElement={<Input type='number'/>}/>}/>
            <ControllerForm name="color"
        render={
        <TemplateInput.Input 
            label='Color'
            inputElement={<Input />}/>}/>
            <ControllerForm name="dieteryRestrictions"
        render={
        <TemplateInput.Input 
            label='Deitery Restrictions'
            inputElement={<Input/>}/>}/>
            <ControllerForm name="hypollergenic"
        render={
        <TemplateInput.Checkbox
            checkboxProps={{label:'Hypollergenic'}}/>}/>
            <ControllerForm name="breed"
        render={
            <TemplateInput.Input 
            label='Breed'
            inputElement={<Input/>}/>}/>
            <ControllerForm name="age"
        render={
        <TemplateInput.Input
            label='Age'
            inputElement={<Input type='number'/>}/>}/>
    </TemplateForm>
    </Form>
}
export default AnimalForm