import Flex from "@components/generic/layouts/Flex";
import ErrorMessage from "@components/generic/text/ErrorMessage";
import Label from "@components/generic/text/Label";
import { createElement, FC,Ref ,forwardRef,cloneElement,ReactElement } from "react";
import  Grid from '@components/generic/layouts/Grid';
interface Props {
    error?: string;
    label: string;
    inputElement: ReactElement;
    inputRef?:Ref<any>;
}

const Input:FC<Props> =({error,label,inputElement,inputRef,...props}) => {
  return (
    <Grid cols={2} rows={'auto'} gap={'big'}>
        <Label>{label}</Label>
        <Flex direction='column'>
        {cloneElement(inputElement,{...props,isError:!!error,ref:inputRef})}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        </Flex>
    </Grid>
  );
}
export default Input;