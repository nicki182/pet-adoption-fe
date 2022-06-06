import { FC } from "react"
import LoginForm from "@components/generic/forms/LoginForm"
import CancelButton from "@components/generic/wizards/CancelButton"
import SubmitButton from "@components/generic/wizards/SubmitButton"
import useSession from '@hooks/custom/useSession';
interface Props {
    onCancel: ()=>Promise<void> | void | any
    onFinish: (values:any)=>Promise<void> | void | any
}
const Login:FC<Props> = ({onCancel,onFinish})=>{
    const { login } = useSession()
    const onSubmit =async (values:object)=>{
    login(values)
    await onFinish(values)
}
    return <LoginForm
    onSubmit={onSubmit}
    templateFormProps={{buttons:{submit:<SubmitButton size="small"/>,cancel:<CancelButton size="small" onClick={onCancel}/>}}}
    />
}
export default Login