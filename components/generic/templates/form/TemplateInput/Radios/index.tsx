import { RadiosProps } from '@components/generic/inputs/interfaces';
import Flex from '@components/generic/layouts/Flex';
import { FC } from 'react';
import ErrorMessage from '@components/generic/text/ErrorMessage';
import Radios from '@components/generic/inputs/Radios';
import Label from '@components/generic/text/Label';
interface Props{
    label?:string
    radiosProps:RadiosProps
    error:string
}
const RadiosForm:FC<Props> = ({radiosProps,label,error='',onChange})=>{
    return <Flex direction='column' gap={'small'}>
        <Flex direction='row' justify='space-between' align='center'>
        <Radios {...radiosProps} onChange={onChange}/>
        <Label>{label}</Label>
        </Flex>
        <ErrorMessage show={error!==''}>{error}</ErrorMessage>
        </Flex>
}
export default RadiosForm;