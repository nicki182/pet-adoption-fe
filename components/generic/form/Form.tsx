import {ReactNode,FC} from "react";
import { useForm, FormProvider,UseFormProps } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AnyObjectSchema } from 'yup';
type Configuration = Omit<UseFormProps, 'defaultValues' | 'resolver'>
interface Props {
    schema: AnyObjectSchema;
    onSubmit: (values: unknown) => Promise<unknown | void>;
    resetValues?: unknown;
    children: ReactNode;
    defaultValues?:{
        [key:string]:any
    };
    configuration?:Configuration
}
const Form:FC<Props> = ({ schema, onSubmit, resetValues, children, defaultValues, configuration = {} }) => {
  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues,
    ...configuration
  });

  const handleSubmit = (values:unknown) => {
    onSubmit(values)
    if(resetValues) methods.reset(resetValues as {[key:string]:any})
  }

  return (
    <FormProvider {...methods} >
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}
export default Form;