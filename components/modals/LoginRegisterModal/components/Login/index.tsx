import { FC } from "react"
import LoginForm from "@components/generic/forms/LoginForm"
import CancelButton from "@components/generic/wizards/CancelButton"
import SubmitButton from "@components/generic/wizards/SubmitButton"
interface Props {
    onCancel: ()=>Promise<void>
}
const Login:FC<Props> = ({onCancel})=>{
    const onSubmit =async ()=>{
        //console.log("submit")
    }
    return <LoginForm
    onSubmit={onSubmit}
    templateFormProps={{buttons:{submit:<SubmitButton size="small"/>,cancel:<CancelButton size="small" onClick={onCancel}/>}}}
    />
}
export default Login