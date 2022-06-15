import { FC } from "react"
import CancelButton from "@components/generic/wizards/CancelButton"
import SubmitButton from "@components/generic/wizards/SubmitButton"
import ConfirmPasswordForm from "@components/generic/forms/ConfirmPasswordForm"
interface Props {
    onCancel: ()=>Promise<void> | void | any
    onFinish: (values:any)=>Promise<void> | void | any
}
const ConfirmPassword:FC<Props> = ({onCancel,onFinish})=>{
    const onSubmit =async (values:object)=>{
    console.log('values',values);
    await onFinish(values)
}
    return <ConfirmPasswordForm
    onSubmit={onSubmit}
    templateFormProps={{buttons:{submit:<SubmitButton size="small"/>,cancel:<CancelButton size="small" onClick={onCancel}/>}}}
    />
}
export default ConfirmPassword