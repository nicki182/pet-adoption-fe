import RegisterForm from "@components/generic/forms/RegisterForm";
import CancelButton from "@components/generic/wizards/CancelButton";
import SubmitButton from "@components/generic/wizards/SubmitButton";
import  useSession  from '@hooks/custom/useSession';
import { FC } from "react";
interface Props {
    onCancel: ()=>Promise<void>,
    onFinish: (values:any)=>Promise<void> | void | any
}
interface RegisterI {
    matchPassword?:string;
    email:string;
    password:string;
    name:string;
    phoneNumber:string;
}
const Register:FC<Props> = ({onCancel,onFinish})=>{
    const {signUp} = useSession()
    const onSubmit =async (values:RegisterI)=>{
    delete values.matchPassword
    await signUp(values)
    await onFinish(values)

        //console.log(response)
        
    }
    return <RegisterForm
    onSubmit={onSubmit}
    templateFormProps={{buttons:{submit:<SubmitButton size='small'/>,cancel:<CancelButton size='small' onClick={onCancel}/>}}}
    />
}
export default Register