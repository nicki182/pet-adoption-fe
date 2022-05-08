import { FC } from "react"
import RegisterForm from "@components/generic/forms/RegisterForm"
import CancelButton from "@components/generic/wizards/CancelButton"
import SubmitButton from "@components/generic/wizards/SubmitButton"
import axios from 'axios'
interface Props {
    onCancel: ()=>Promise<void>
}
const Register:FC<Props> = ({onCancel})=>{
    const onSubmit =async (values:object)=>{
        delete values.matchPassword
        const response = await fetch('/api/signUp',{
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache',
    body:JSON.stringify({...values})})
        //console.log(response)
    }
    return <RegisterForm
    onSubmit={onSubmit}
    templateFormProps={{buttons:{submit:<SubmitButton size='small'/>,cancel:<CancelButton size='small' onClick={onCancel}/>}}}
    />
}
export default Register