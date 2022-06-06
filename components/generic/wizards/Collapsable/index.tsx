import Flex from '@components/generic/layouts/Flex';
import useToggle from '@hooks/generic/useToggle';
import { ChevronCompactUp } from '@styled-icons/bootstrap/ChevronCompactUp';
import { FC, ReactNode } from 'react';
interface Props{
    isOpen:boolean
    children:ReactNode
    onToggle?:(open:boolean)=>void
}
const Collapsable:FC<Props> = ({ children, isOpen,onToggle}) => {
    const { value, toggle } = useToggle(isOpen)
    const handleToggle = ()=>{
        toggle()
        onToggle && onToggle(value)
    }
    return <Flex direction='column' align='flex-start' gap='small'>
        <ChevronCompactUp 
        height={'1.5rem'}
        width={'1.5rem'}
        style={value?
            {transform: 'rotate( 0deg )',transition: 'transform 200ms ease'}:
            {transform: 'rotate( -180deg )',transition: 'transform 200ms ease'}} 
        onClick={handleToggle}/>
        {value && children}       
        </Flex>
}
export default Collapsable;