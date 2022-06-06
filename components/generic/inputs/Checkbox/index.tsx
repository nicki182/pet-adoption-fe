import styled from 'styled-components';
import { CheckboxProps } from '../interfaces';
import { FC } from 'react';
import Label from '@components/generic/text/Label';
import Flex from '@components/generic/layouts/Flex';
//TODO:Try to being able to change color of checkbox
const CheckboxStyle = styled.input.attrs(props => ({
    type:'checkbox'
    }))<Omit<CheckboxProps,'label'>>`
    accent-color: ${({ theme }) => theme.colors.secondary};
    &:focus{
        outline:2px solid ${({ theme }) => theme.colors.secondary};
    }
    `;
const Checkbox:FC<CheckboxProps> = ({ label, ...props }: CheckboxProps) => { 
    return <Flex direction='row' gap='small' justify='flex-start'>
    <CheckboxStyle {...props}/>
    <Label>{label}</Label>
    </Flex>
}    
export default Checkbox;