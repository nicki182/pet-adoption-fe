import { FC } from "react"
import RegisterForm from "@components/generic/forms/RegisterForm"
import CancelButton from "@components/generic/wizards/CancelButton"
import SubmitButton from "@components/generic/wizards/SubmitButton"
interface Props {
    onCancel: ()=>Promise<void>
}
const Register:FC<Props> = ({onCancel})=>{
    const onSubmit =async ()=>{
        //console.log("submit")
    }
    return <RegisterForm
    onSubmit={onSubmit}
    templateFormProps={{buttons:{submit:<SubmitButton size='small'/>,cancel:<CancelButton size='small' onClick={onCancel}/>}}}
    />
}
export default Register