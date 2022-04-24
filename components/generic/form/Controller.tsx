import {cloneElement,ReactElement,FC} from "react";
import { Controller, useFormContext } from 'react-hook-form';
interface Props{
    name: string;
    render:ReactElement;
}
const ControllerForm:FC<Props> = ({ name, render }) => {
  const { control,getValues, formState:{errors} } = useFormContext();
  console.log(errors,'controller',getValues('name'))
  return (
    <Controller
      control={control}
      render={({ field:{onChange,ref,value,onBlur} }) =>{
        console.log(ref)
        return cloneElement(render, { error: errors && errors[name]?errors[name].message:null, onChange,inputRef:ref,value,onBlur })
        }}
      name={name}
    />
  );
}
export default ControllerForm;