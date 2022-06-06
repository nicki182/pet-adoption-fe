import { CheckboxProps } from '@components/generic/inputs/interfaces'
import { FC } from 'react'
import Label from '@components/generic/text/Label'
import Checkbox from '@components/generic/inputs/Checkbox'
import Flex from '@components/generic/layouts/Flex'
import ErrorMessage from '@components/generic/text/ErrorMessage'
interface Props{
    checkboxProps:CheckboxProps
    error:string
}
const CheckboxForm:FC<Props> = ({error='',checkboxProps})=>{
    return <Flex direction='column' gap={'small'}>
        <Checkbox {...checkboxProps}/>
        <ErrorMessage show={error!==''}>{error}</ErrorMessage>
    </Flex>

}
export default CheckboxForm