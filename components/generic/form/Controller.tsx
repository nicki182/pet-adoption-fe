import {cloneElement,ReactElement,FC} from "react";
import { Controller, useFormContext } from 'react-hook-form';
interface Props{
    name: string;
    render:ReactElement;
}
const ControllerForm:FC<Props> = ({ name, render }) => {
  const { control, formState:{errors} } = useFormContext();
  return (
    <Controller
      control={control}
      render={({ field:{onChange,ref,value,onBlur} }) =>{
        return cloneElement(render, { error: errors && errors[name]?errors[name].message:null, onChange,inputRef:ref,value,onBlur })
        }}
      name={name}
    />
  );
}
export default ControllerForm;