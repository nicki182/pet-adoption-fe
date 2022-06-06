import styled from 'styled-components';
import { RadioProps } from '../../../interfaces';
import { FC } from 'react';
import Label from '@components/generic/text/Label';
import Flex from '@components/generic/layouts/Flex';
//TODO:Try to being able to change color of Radio
const RadioStyle = styled.input.attrs(props => ({
    type:'radio'
    }))<Omit<RadioProps,'label'>>`
    accent-color: ${({ theme }) => theme.colors.secondary};
    &:focus{
        outline:2px solid ${({ theme }) => theme.colors.secondary};
    }
    `;
const Radio:FC<RadioProps> = ({ label, ...props }: RadioProps) => { 
    return <Flex direction='row' gap='small' justify='flex-start'>
    <RadioStyle {...props}/>
    <Label>{label}</Label>
    </Flex>
}    
export default Radio;