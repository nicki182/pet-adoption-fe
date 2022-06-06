import { CheckboxesProps } from '@components/generic/inputs/interfaces';
import Flex from '@components/generic/layouts/Flex';
import { FC } from 'react';
import ErrorMessage from '@components/generic/text/ErrorMessage';
import Checkboxes from '@components/generic/inputs/Checkboxes';
import Label from '@components/generic/text/Label';
interface Props{
    label?:string
    checkboxesProps:CheckboxesProps
    error:string
}
const CheckboxesForm:FC<Props> = ({checkboxesProps,label,error='',onChange})=>{
    return <Flex direction='column' gap={'small'}>
        <Flex direction='row' justify='space-between' align='center'>
        <Checkboxes {...checkboxesProps} onChange={onChange}/>
        <Label>{label}</Label>
        </Flex>
        <ErrorMessage show={error!==''}>{error}</ErrorMessage>
        </Flex>
}
export default CheckboxesForm;