import  AnimalForm  from '@components/generic/forms/AnimalForm';
import CancelButton from "@components/generic/wizards/CancelButton"
import SubmitButton from "@components/generic/wizards/SubmitButton"
import {FC} from 'react'
import { Animal } from '@interfaces';
interface Props {
    onCancel: ()=>Promise<void> | void | any
    onFinish?: (values:any)=>Promise<void> | void | any
    initialValues?:Animal
}
const EditAnimal:FC<Props> = ({initialValues,onCancel,onFinish}) => {
    const onSubmit = async (values: any) => {
        console.log(values);
        onFinish && onFinish(values);
    }
    return <AnimalForm
    initialValues={initialValues}
    onSubmit={onSubmit}
    templateFormProps={{buttons:{submit:<SubmitButton size='small'/>,cancel:<CancelButton size='small' onClick={onCancel}/>}}}
    />
}
export default EditAnimal;